import { error } from "@sveltejs/kit";
const apiKey = process.env.API_KEY;
// be sure to rename file to `+page.server.js` if load function is meant to only run on the server, or to access private env variables like API keys,
//then change PageLoad to ServerPageLoad (types)

export async function load({ fetch }) {
    const content = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    // const json = await fetch('https://rentrite-backend-53dxbcm3gq-uc.a.run.app/greeting')
    console.log(content.json());
    return content.json();
}

//reference: https://kit.svelte.dev/docs/types#public-types-loadevent