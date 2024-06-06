<script>
    let siteTitle = "Rentrite";
    import inkblot from "$lib/bad_pillow_plain.svg";
    //I guess conditionally display svgs based on dark/light mode, if fill has to be defined in the svg file? :P
</script>

<header class="site-header" data-type="wide">
    <div class="container">
        <div class="site-header__inner">
            <div class="site-logo">
                <a href="/">LOGO</a>
                <a href="/"><h1 class="heading-1">{siteTitle}</h1></a>
            </div>
            <nav class="nav">
                <ul class="nav-header-grid">
                    <li class="subgrid top">
                        <img class="mySvg" src={inkblot} alt="lumpy pilly svg" />                        
                        <a href="/login">login</a>
                    </li>
                    <li class="subgrid middle">
                        <img class="mySvg" src={inkblot} alt="lumpy pilly svg" />                        
                        <a href="/contact">contact</a>
                    </li>
                    <li class="subgrid bottom">
                        <img class="mySvg" src={inkblot} alt="lumpy pilly svg" />                       
                        <a href="/share">share</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

