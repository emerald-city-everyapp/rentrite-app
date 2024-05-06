<script>
    import IconLink from "./IconLink.svelte";
    let link1 = "https://github.com/elbi3";
    let link2 = "https://github.com/maemayv";
    let src1 = "favicon.png";
    let alt1 = "svelte favicon";
</script>

<footer class="site-footer">
    <div class="container flow">
        <IconLink link={link1} src={src1} alt={alt1}/>
        <IconLink link={link2} src={src1} alt={alt1}/>
    </div>
</footer>