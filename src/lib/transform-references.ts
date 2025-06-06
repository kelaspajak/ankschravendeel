import {
  getEntry,
  type CollectionEntry,
  type CollectionKey,
  type ReferenceDataEntry,
} from "astro:content"

import { getHref } from "@/lib/get-href"

// type guard for reference object
function isReference<C extends CollectionKey>(
  value: unknown
): value is ReferenceDataEntry<C> {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.hasOwnProperty.call(value, "collection") &&
    Object.prototype.hasOwnProperty.call(value, "id") &&
    Object.keys(value).length === 2
  )
}

// type guard for array
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

// type guard for object
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

// Main utility type that handles all cases
export type PopulatedValue<T> =
  T extends ReferenceDataEntry<infer C>
    ? CollectionEntry<C>["data"]
    : T extends Array<infer U>
      ? Array<PopulatedValue<U>>
      : T extends Record<string, unknown>
        ? { [K in keyof T]: PopulatedValue<T[K]> }
        : T

// Exported as a named function so it can be imported elsewhere
async function transformObject<T>(value: T): Promise<PopulatedValue<T>> {
  // base case: primitive value
  if (!isObject(value)) {
    return value as PopulatedValue<T>
  }

  // reference object: replace with entry data
  if (isReference(value)) {
    const entry = await getEntry(value)
    if (!entry) return value as PopulatedValue<T>
    const data = entry.data as PopulatedValue<T>
    // transform data WATCH OUT, FULLDEV SPECIFIC
    const transformedData = {
      collection: entry.collection,
      id: entry.id,
      href: getHref(entry),
      ...data,
    }
    return transformedData
  }

  // array: recursively process each item
  if (isArray(value)) {
    const populatedArray = await Promise.all(
      value.map((item) => transformObject(item))
    )
    return populatedArray as PopulatedValue<T>
  }

  // object: recursively process each property
  const result = {} as Record<string, unknown>
  const entries = Object.entries(value as Record<string, unknown>)
  for (const [key, val] of entries) {
    result[key] = await transformObject(val)
  }

  return result as PopulatedValue<T>
}

export type TransformedReferences<T> = Awaited<
  ReturnType<typeof transformReferences<T>>
>

// Recursively resolves references up to a specified depth (default is 3). Does not use type-level depth tracking.
export async function transformReferences<T>(value: T) {
  const depth1 = await transformObject(value)
  const depth2 = await transformObject(depth1)
  const depth3 = await transformObject(depth2)
  return depth3
}
