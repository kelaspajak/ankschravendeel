function transformReference(reference: string) {
  return reference.replace(/^\//, "")
}

export default transformReference
