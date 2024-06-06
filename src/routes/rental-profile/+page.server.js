import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { baseUrl } from "$lib/utils.js";

export async function load({ fetch }) {
    // const url = `${baseUrl}rentalprofile`;
    const url = "https://rentrite-backend-staging-53dxbcm3gq-uc.a.run.app/rentalprofile?address=123%20King%20Street,%20London";
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if(!response.ok) {
            error(400, "bad request");
            // throw new Error("Network response was not OK");
        }
        const result = await response.json();
        return result;
    } catch(err) {
        console.error("There is a problem with your fetch request");
    }
}
