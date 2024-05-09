import { error } from "@sveltejs/kit";
// be sure to rename file to `+page.server.js` if load function is meant to only run on the server, or to access private env variables like API keys,
//then change PageLoad to ServerPageLoad (types)

export async function load({ fetch }) {
    const json = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

    return json.json();
}
// .then(response => response.json())
// .then(json => console.log("json: ", json.explanation))
// console.log("result: ", json.explanation);
// const url = 'https://jsonplaceholder.typicode.com/todos/1'; 
// const response = await fetch(url);
// console.log(response.json());
// return response.json();



//reference: https://kit.svelte.dev/docs/types#public-types-loadevent