<script>
    export let link = "http://wikipedia.com"; //declare component props, with default values or "undefined"
    export let text = "my link description";
    export let src = "/favicon.png"; //default value is svelte icon (for dev purposes)
    export let alt = "a svelte favicon";
</script>

<div class="icon-link-container">
    <a href={link} class="icon-link">
        {text}
        <img src={src} alt={alt} class="icon-link_svg">
    </a>
</div>

<style>
    img {
        width: 1.2rem;
        height: 1.2rem;
    }
</style>