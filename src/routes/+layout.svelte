<script>
    import "$lib/main.scss";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="body-layout">
    <Header/>
    <main class="flex-fill flex-fill-parent">
        <slot/>
    </main>
    <Footer/>
</div>