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

<div class="container">
    <div class="section center paper">
    
        <h2>Welcome to Rentrite</h2>
        <div class="section flow">
            <Nav {navLinkList} />
            <Search />
        </div>
    </div>
</div>
