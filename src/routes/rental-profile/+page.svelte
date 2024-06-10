<script>
    import RentalProfile from "$lib/components/RentalProfile.svelte";
    export let data;
    let {address, picIds, tags, comments } = data;
</script>


<div class="padding-8">
    <RentalProfile {address} {picIds} {tags} {comments}/>
</div>