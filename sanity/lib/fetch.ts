import { createClient } from "next-sanity";

const client = createClient({
    projectId : "9eo5purt",
    dataset : "production",
    useCdn : false ,
    apiVersion: '2021-08-31',
})

export async function sanityFetch({query, params = {}}:{query : string ,params? :any }){
    return await client.fetch(query,params)
}