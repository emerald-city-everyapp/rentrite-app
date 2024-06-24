import { fail, error } from '@sveltejs/kit';
import { baseUrl, clean } from '$lib/utils.js';

const url = `${baseUrl}rentalprofile`;
// an action's return value is made available through the form prop.
//this means your load functions will run after the action completes

export async function load({locals}) { //do we even need to "GET" anything?
    console.log("locals: ", locals);
	return {
        serverMessage: 'hello from server load function'
	};
}
//actions always use POST requests, since GET requests should never have side-effects!
export const actions = {
    default: async ({fetch, request}) => {
        const data = await request.formData();
        const formattedData = clean(data);
        const jsonData = JSON.stringify(formattedData);
        let { address } = formattedData;
        if(!address) {
            return fail(400, {address, missing: true}); 
            //"fail" allows you to return an HTTP status code for validation errors
        }
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
            const result = await response.json();
            if(!response.ok) {
                error(400, "bad request");
            } 
            console.log("result: ", result);
            return result;
        } catch(err) {
            console.log("err: ", err);
            console.error("There is a problem with your POST request");
            throw err;
        }
    },
}