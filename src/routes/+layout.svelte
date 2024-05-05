<script>
    import "$lib/main.scss";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div>
    <Header/>
    <slot/>
    <Footer/>
</div>