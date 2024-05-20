<script>
    export let navLinkList = [];
    export let navClass = "nav-column";
    //include a way to not display link in list if you're on that page
</script>

<nav class={navClass}>
    <ul>
        {#each navLinkList as link}
        <li><a href={link.href}>{link.text}</a></li>
        {/each}
    </ul>
</nav>