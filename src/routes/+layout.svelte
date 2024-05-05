<script>
    import "$lib/main.scss";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
  import IconLink from "$lib/components/IconLink.svelte";
</script>

<div>
    <Header/>
    <slot/>
    <Footer>
        <IconLink/>
    </Footer>
</div>