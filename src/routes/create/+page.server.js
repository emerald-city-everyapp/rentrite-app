import { fail, error } from '@sveltejs/kit';
import { baseUrl, cleaner } from '$lib/utils.js';

const url = `${baseUrl}create`;

export async function load() { //do we even need to "GET" anything?
    console.log("url: ", url);
}

export const actions = {
    default: async ({fetch, request}) => {
        const data = await request.formData();
        console.log("formData: ", data);
        const formattedData = cleaner(data);
        console.log("formattedData: ", formattedData)
        const jsonData = JSON.stringify(formattedData);
        // if(!data.address) {
        //     return fail(400, {address, missing: true}); //"fail" allows you to return an HTTP status code for validation errors
        // }
        console.log("jsonData: ", jsonData)
        try {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: jsonData
            });
            console.log("response: ", response);
            if(!response.ok) {
                error(400, "bad request");
            } 
            return response;
        } catch(err) {
            console.log("err: ", err);
            console.error("There is a problem with your POST request");
            throw err;
        }
        //create new entry - new rental profile
    },

}