/**
 * Sub-path the site is served from, e.g. "/assifit" on a GitHub Pages project site.
 * Set at build time by the deploy workflow; empty for a custom domain or local dev.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefixes a file in /public with the base path (next/image does not do this for string src). */
export const asset = (path: string) => `${basePath}${path}`;
