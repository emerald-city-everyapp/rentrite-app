import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
    const url = "https://rentrite-backend-staging-53dxbcm3gq-uc.a.run.app/rentalprofile";
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: "no-cors",
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
