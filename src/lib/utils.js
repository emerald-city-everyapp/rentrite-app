export const baseUrl =  "https://rentrite-backend-staging-53dxbcm3gq-uc.a.run.app/";
export function cleaner(data) {
    const dataObject = Object.fromEntries(data);
    const { address, picNames, tags, comments } = dataObject;
    const formattedObject = {
        "address": address,
        "picNames": [picNames],
        "tags": [tags],
        "comments": [comments]
    }
    return formattedObject;
}
// jsonData:  {"address":"qwreqwer","tags":"qwerqwerq","picNames":"qwerqwer","comments":"qwreqwer"}

// formData:  FormData {
//     [Symbol(state)]: [
//       { name: 'address', value: 'asdfasfd' },
//       { name: 'tags', value: 'asdfasdf' },
//       { name: 'picNames', value: 'asdfasdf' },
//       { name: 'comments', value: 'asdfasdf' }
//     ]
//   }