import { json } from "@sveltejs/kit";

export async function load({ fetch, setHeaders }) {
    const url = "https://rentrite-backend-53dxbcm3gq-uc.a.run.app/greeting";
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : `${url}`
            }
        });
        console.log("response:\n", response);
        return response;
    } catch(err) {
        console.log(err);
    }
}

// need to add HTTP Header:  "Access-Control-Allow-Origin: https://rentrite-backend-53dxbcm3gq-uc.a.run.app/greeting"
//setHeaders has no effect when load function runs in the browser

//const myHeaders = new Headers(); //currently empty Headers object
//myHeaders.append("Access-Control-Allow-Origin", url);

// const myHeaders = new Headers();
// response.headers.append("Access-Control-Allow-Origin", `${url}`);
// console.log("response headers: ", response.headers);