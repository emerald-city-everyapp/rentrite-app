<script>
    import "$lib/main.scss";
    import Nav from "$lib/components/Nav.svelte";
    import Search from "$lib/components/Search.svelte";

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

<div class="section flex-fill flex-fill-parent">
    <div class="container flex-fill even-columns">
        <div class="center paper">
            <h2 class="flow">Welcome to Rentrite!</h2>
            <h3 class="flow">a review site</h3>
            <div class="flow">
                <Search />
                <Nav {navLinkList} />
            </div>
        </div>
    </div>
</div>
