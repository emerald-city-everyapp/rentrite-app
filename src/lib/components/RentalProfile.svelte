<script>
    export let address = "123 55th Ave NE, Seattle, Idaho, 55555";
    export let pictureSrc = "src/lib/memeLocalhost.png";
    export let pictureAlt = "Captain America says localhost is free like America";
    export let descriptor = "how do we dynamically write this? madlibs? farm specific content from comments?";
    export let tags = [ "🔥", "🧻", "💩" ];
    export let picIds = ["picIds"];
    export let comments = ["comments"];

    //these probably need to be dynamic links or on hover give an explanation or some third kind of interactability
    //icon tags need to be their own component with careful styling
    //is this stand-alone content that could use the article tags?
    //I don't think "address" should be the heading? But what's a unique title?
</script>

<div class="temp-rent-prof padding-8">
    <h2 class="heading-4">Test Rental Profile</h2>
    <div class="even-columns">
        <div>
            <img class="temp-img" src={pictureSrc} alt={pictureAlt} />
        </div>
        <div class="temp-right">
            <h3 class="heading-5">{address}</h3>
            <p>{descriptor}</p>
            <div class="flex-group">
                {#each picIds as picId}
                <p>{picId}</p>
                {/each}
            </div>
            <div class="flex-group">
                {#each tags as tag}
                    <p>{tag}</p>
                {/each}
            </div>
            <div class="comments-box">
                {#each comments as comment}
                <p>{comment}</p>
                {/each}
            </div>
        </div>
    </div>
</div>