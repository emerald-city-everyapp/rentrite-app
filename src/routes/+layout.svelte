<script>
    import "$lib/main.scss";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Rentrite: a place for renters to leave reviews</title>
    <meta name="description" content="a site where a users leave reviews on rental spaces in Seattle"/>
</svelte:head>

<div class="body-layout">
    <Header/>
    <main class="flex-fill flex-fill-parent">
        <slot/>
    </main>
    <Footer/>
</div>