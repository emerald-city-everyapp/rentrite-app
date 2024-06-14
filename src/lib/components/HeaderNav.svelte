<script>
    import inkblot from "$lib/bad_pillow_plain.svg";
    import inkblot2 from "$lib/inkblot.svg";
</script>

<nav class="nav-header">
    <ul class="nav-header-grid">
        <li class="subgrid top">
            <img class="mySvg" src={inkblot} alt="lumpy pilly svg" />                        
            <a class="subgrid__site-link" href="/login">login</a>
        </li>
        <li class="subgrid middle">
            <img class="mySvg" src={inkblot2} alt="lumpy pilly svg" />                        
            <a class="subgrid__site-link" href="/contact">contact</a>
        </li>
        <li class="subgrid bottom">
            <img class="mySvg" src={inkblot} alt="lumpy pilly svg" />                       
            <a class="subgrid__site-link" href="/share">share</a>
        </li>
    </ul>
</nav>