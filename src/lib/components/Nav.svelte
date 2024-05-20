<script>
    export let navLinkList = [];
    //include a way to not display link in list if you're on that page
</script>

<nav class="nav-column">
    <ul>
        {#each navLinkList as link}
        <li><a href={link.href}>{link.text}</a></li>
        {/each}
    </ul>
</nav>