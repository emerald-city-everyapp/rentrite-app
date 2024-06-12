<script>
    let siteTitle = "Rentrite";
    import HeaderNav from "./HeaderNav.svelte";
    import inkblot from "$lib/bad_pillow_plain.svg";
    import inkblot2 from "$lib/inkblot.svg";
    //I guess conditionally display svgs based on dark/light mode, if fill has to be defined in the svg file? :P
</script>

<header class="site-header" data-type="wide">
    <div class="container">
        <div class="site-header__inner">
            <div class="site-logo">
                <a href="/">LOGO</a>
                <a href="/"><h1 class="heading-1">{siteTitle}</h1></a>
            </div>
            <HeaderNav />
        </div>
    </div>
</header>

