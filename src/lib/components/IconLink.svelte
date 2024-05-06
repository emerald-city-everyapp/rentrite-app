<script>
    export let link = "http://wikipedia.com"; //declare component props, with default values or "undefined"
    export let src = "/favicon.png"; //default value is svelte icon (for dev purposes)
    export let alt = "a svelte favicon";
</script>

<div>
    <a href={link}>
        <img src={src} alt={alt}>
    </a>
</div>