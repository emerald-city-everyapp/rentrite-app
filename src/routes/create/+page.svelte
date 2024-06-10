<script>
    import NewRentalForm from "$lib/components/NewRentalForm.svelte";
    import { enhance } from "$app/forms";
    export let form;
    let address = "address"; //address
    let tags = "tags"; //tags
    let picIds = "picIds"; //picIds
    let comments = "leave a comment"; //comments
    let isDisabled = false;
</script>

<div class="container">
    <h2 class="heading-3 flow">Add a rental to the records</h2>
    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}
    <form class="new-rental-form" method="POST" use:enhance>
        {#if form?.missing}
            <p>The address field is required</p>
        {/if}
        <div class="input-cell">
            <label for="address">address</label>
            <input type="text1" name="address" id="textInput1" placeholder={address} value="{form?.address ?? ''}">
        </div>
        <div class="input-cell">
            <label for="tags">tags</label>
            <input type="text2" name="tags" id="textInput2" placeholder={tags}>
        </div>
        <div class="input-cell">
            <label for="picIds">picIds</label>
            <input type="text3" name="picIds" id="textInput3" placeholder={picIds}>
        </div>
        <div class="textarea-cell">
            <label for="comments">comments</label>
            <textarea name="comments" id="myTextArea1" placeholder={comments} />
        </div>
        <div class="button-cell">
            <button type="submit" disabled={isDisabled}>submit</button>
        </div>
    </form>
</div>
{#if form?.success}
<p>Successfully submitted new rental profile!</p>
{/if}