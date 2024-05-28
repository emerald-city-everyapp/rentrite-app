import { fail } from '@sveltejs/kit';
import { baseUrl } from '$lib';
export async function load() {
    const url = `${baseUrl}create`;
    console.log("url: ", url);
}
export const actions = {
    default: async ({request}) => {
        // if(!address) {
        //     return fail(400, {address, missing: true}); //but another field, not "email"
        // }
        const data = await request.formData();
        console.log("data: ", data)
        //create new entry - new rental profile
    },

}