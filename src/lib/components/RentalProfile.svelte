<script>
    export let address = "123 55th Ave NE, Seattle, Idaho, 55555";
    export let pictureSrc = "src/lib/memeLocalhost.png";
    export let pictureAlt = "Captain America says localhost is free like America";
    export let descriptor = "how do we dynamically write this? madlibs? farm specitic content from comments?";
    export let icons = [ "🔥", "🧻", "💩" ]; 
    //these probably need to be dynamic links or on hover give an explanation or some third kind of interactability
    //icon tags need to be their own component with careful styling
    //is this stand-alone content that could use the article tags?
    //I don't think "address" should be the heading? But what's a unique title?
</script>

<div>
    <h3>{address}</h3>
    <p>{descriptor}</p>
    <div class="flex-group">
        {#each icons as icon}
            <p>{icon}</p>
        {/each}
    </div>
    <img src={pictureSrc} alt={pictureAlt} />
</div>