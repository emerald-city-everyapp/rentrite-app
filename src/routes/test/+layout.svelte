<script>
    import Nav from "$lib/components/Nav.svelte";
    const navClass = "nav-row";
    const navLinkList = [
        {
            href: "/faq",
            text: "faq"
        },
        {
            href: "/contact",
            text: "contact"
        },
        {
            href: "/donate",
            text: "donate"
        }
    ];
</script>

<div class="container flow inner-layout flex-fill">
    <div class="bg-primary-500 padding-4">
        <Nav {navClass} {navLinkList}/>
    </div>
    <div class="padding-4">
        <h2 class="clr-accent-700">testing nested layouts!</h2>
    </div>
    <slot/>
</div>