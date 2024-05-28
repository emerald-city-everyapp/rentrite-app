<script>
    import { enhance } from "$app/forms";
    let address = "address"; //address
    let tags = "tags"; //tags
    let picNames = "picNames"; //picNames
    let comments = "leave a comment"; //comments
    let isDisabled = true;
</script>


    <form class="new-rental-form" method="POST" action="/new" use:enhance>
        <div class="input-cell">
            <label for="textbox1">address</label>
            <input type="text1" name="textbox1" id="textInput1" placeholder={address}>
        </div>
        <div class="input-cell">
            <label for="textbox2">tags</label>
            <input type="text2" name="textbox2" id="textInput2" placeholder={tags}>
        </div>
        <div class="input-cell">
            <label for="textbox">picNames</label>
            <input type="text3" name="textbox3" id="textInput3" placeholder={picNames}>
        </div>
        <div class="textarea-cell">
            <label for="textarea1">textarea1</label>
            <textarea name="textarea1" id="myTextArea1" placeholder={comments}></textarea>
        </div>
        <div class="button-cell">
            <button type="submit" disabled={isDisabled}>submit</button>
        </div>
    </form>
