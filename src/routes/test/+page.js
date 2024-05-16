import { error } from "@sveltejs/kit";
// be sure to rename file to `+page.server.js` if load function is meant to only run on the server, or to access private env variables like API keys,
//then change PageLoad to ServerPageLoad (types)

export async function load({ fetch }) {
    const json = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    // const json = await fetch('https://rentrite-backend-53dxbcm3gq-uc.a.run.app/greeting')
    // console.log(json.json());
    return json.json();
}

//reference: https://kit.svelte.dev/docs/types#public-types-loadevent