<script>
    import { enhance } from "$app/forms";
    let value1 = "input 1";
    let value2 = "input 2";
    let value3 = "input 3";
    let value4 = "input 4";
    let value5 = "input 5";
    let value6 = "input 6";
    let isDisabled = true;
</script>

<div>
    <form class="new-rental-form" method="post" action="" use:enhance>
        <div class="input-cell">
            <label for="textbox">text1</label>
            <input type="text1" name="textbox1" id="textInput1" placeholder={value1}>
        </div>
        <div class="input-cell">
            <label for="textbox">text2</label>
            <input type="text2" name="textbox2" id="textInput2" placeholder={value1}>
        </div>
        <div class="input-cell">
            <label for="textbox">text3</label>
            <input type="text3" name="textbox3" id="textInput3" placeholder={value3}>
        </div>
        <div class="input-cell">
            <label for="textbox">text4</label>
            <input type="text4" name="textbox4" id="textInput4" placeholder={value4}>
        </div>
        <div class="input-cell">
            <label for="textbox">text5</label>
            <input type="text5" name="textbox5" id="textInput5" placeholder={value5}>
        </div>
        <div class="input-cell">
            <label for="textbox6">text6</label>
            <input type="text" name="textbox6" id="textInput6" placeholder={value6}>
        </div>
        <div class="button-cell">
            <button type="submit" disabled={isDisabled}>submit</button>
        </div>
    </form>
</div>