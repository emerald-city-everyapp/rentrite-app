<script>
    import "$lib/main.scss";
    import Nav from "$lib/components/Nav.svelte";
    import Search from "$lib/components/Search.svelte";
    import Browse from "$lib/components/Browse.svelte";
    const navLinkList = [
        {
            href: "/rental-profile",
            text: "rental profile"
        },
        {
            href: "/create",
            text: "create"
        },
        {
            href: "/login",
            text: "login"
        },
        {
            href: "/test",
            text: "test"
        }
    ];
</script>

<div class="section container flex-fill">
    <hgroup class="hgroup-home">
        <h2 class="heading-3 flow text-center padding-block-2">Welcome to Rentrite!</h2>
        <h3 class="heading-6 flow text-center">a review site</h3>
    </hgroup>
    <Search />
    <Browse />
    <Nav {navLinkList} />
</div>
