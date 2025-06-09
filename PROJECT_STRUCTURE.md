# Project Structure Overview

This document provides an overview of the main folders and files in the project, describing their purposes and typical contents.

## Root Files
- `astro.config.ts`: Astro configuration file for project settings.
- `cloudcannon.config.yml`: Configuration for CloudCannon integration.
- `package.json`, `pnpm-lock.yaml`: Node.js package management files.
- `prettier.config.cjs`: Prettier code formatting configuration.
- `tsconfig.json`: TypeScript configuration.
- `netlify.toml`: Netlify deployment configuration.

## Main Folders

### `public/`
Contains static assets such as images and media files. These are publicly accessible and used throughout the site.

### `src/`
The main source code for the project, organized as follows:

- `blocks/`: React or Astro components for different content blocks (e.g., articles, banners, hero sections).
- `components/`: Shared UI components and layout elements used across the site.
- `content/`: Content files, including articles, reviews, events, and page markdown files. Also includes configuration and layout files.
- `data/`: JSON configuration and settings files for site-wide data.
- `hooks/`: Custom React hooks for reusable logic.
- `lib/`: Utility functions and helpers for various features (e.g., slug generation, markdown transformation).
- `pages/`: Astro page components, including dynamic routes for articles, events, posts, and services.
- `schemas/`: TypeScript schemas for data validation and typing (e.g., blocks, images, SEO, pages).
- `shopify/`: Shopify integration logic, including API calls and data transformation.
- `stores/`: State management files, such as for Shopify store data.
- `styles/`: Global and component-specific CSS files.

## Content Management
- Content is managed in markdown and YAML files under `src/content/`.
- Blocks and components are used to render different sections of the site dynamically.

## Deployment
- The project is configured for deployment on Netlify (`netlify.toml`).

---
This structure supports a modular, content-driven site using Astro, React, and TypeScript, with easy integration for static assets, dynamic content, and third-party services like Shopify.
