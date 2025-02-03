import { createClient } from 'next-sanity'
 import { apiVersion, dataset } from '../env';
  export const client = createClient({ 
    projectId : "9eo5purt",
     dataset : "production",
       apiVersion : '2025-01-19',
     })
      export async function sanityFetch({ 
query, params = {} }: { query: string; params?: any }) { return await client.fetch(query, params); }