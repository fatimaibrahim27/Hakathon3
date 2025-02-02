import { createClient } from "next-sanity";

// Use environment variables instead of hardcoding values
export const client = createClient({
  projectId: "9eo5purt",  // Use environment variable for projectId
  dataset: "production" ,      // Use environment variable for dataset
  apiVersion: '2025-01-19',                             // API version you are using
  useCdn: process.env.NODE_ENV === 'production',        // Only use CDN in production
});

export async function sanityFetch({ query, params = {} }: { query: string; params?: any }) {
  return await client.fetch(query, params);
}
