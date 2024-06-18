<script>
    import NewRentalForm from "$lib/components/NewRentalForm.svelte";
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";
    export let form; //an action's return value is made available through the form prop
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
            <label class="labels" for="address">address</label>
            <input class="inputs" type="text1" name="address" id="textInput1" placeholder={address} value="{form?.address ?? ''}" required>
        </div>
        <div class="input-cell">
            <label class="labels" for="tags">tags</label>
            <input class="inputs" type="text2" name="tags" id="textInput2" placeholder={tags}>
        </div>
        <div class="input-cell">
            <label class="labels" for="picIds">picIds</label>
            <input class="inputs" type="text3" name="picIds" id="textInput3" placeholder={picIds}>
        </div>
        <div class="textarea-cell">
            <label class="labels" for="comments">comments</label>
            <textarea class="inputs" name="comments" id="myTextArea1" placeholder={comments} />
        </div>
        <div class="button-cell">
            <button class="buttons" type="submit" data-type="primary" disabled={isDisabled}>submit</button>
        </div>
    </form>
</div>
{#if form?.success}
<p>Successfully submitted new rental profile!</p>
{/if}