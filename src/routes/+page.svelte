<script>
    import "$lib/main.scss";
    import FlowNav from "$lib/components/FlowNav.svelte";
    import Nav from "$lib/components/Nav.svelte";

    const navLinkList = [
        {
            href: "/about",
            text: "about"
        },
        {
            href: "/contact",
            text: "contact"
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
    <div class="section center">
    
        <h2>Welcome to Rentrite</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
        <div class="section container">
            <Nav {navLinkList} />
        </div>
    </div>
</div>
