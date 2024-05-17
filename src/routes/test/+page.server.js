import { error } from "@sveltejs/kit";
const apiKey = process.env.API_KEY;
// be sure to rename file to `+page.server.js` if load function is meant to only run on the server, or to access private env variables like API keys,
console.log(apiKey);
//then change PageLoad to ServerPageLoad (types)

export async function load({ fetch }) {
    try {
        const body = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=kaOMdrwfRS5VCQ0W8Aarj4PQZ8s7JTFd16P5Fk12`)
        // const json = await fetch('https://rentrite-backend-53dxbcm3gq-uc.a.run.app/greeting')
        console.log(body.json());
        return body.json() || {};
    } catch(err) {
        console.log(err);
    }
}

//reference: https://kit.svelte.dev/docs/types#public-types-loadevent