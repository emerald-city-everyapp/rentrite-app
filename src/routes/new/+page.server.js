import { fail } from '@sveltejs/kit';

export const actions = {
    create: async (event) => {
        if(!email) {
            return fail(400, {email, missing: true}); //but another field, not "email"
        }
        //create new entry - new rental profile
        //change named action to "default" if there's only one
    },
    display: async (event) => {
        //not sure if we need this, is it better to display what's returned after the POST or to display what the user input?
    }
}