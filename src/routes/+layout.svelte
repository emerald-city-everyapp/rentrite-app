<script>
    import "$lib/main.scss";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Rentrite</title>
</svelte:head>

<div class="body-layout">
    <Header/>
    <main class="flex-fill flex-fill-parent">
        <slot/>
    </main>
    <Footer/>
</div>