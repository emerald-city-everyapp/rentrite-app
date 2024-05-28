<script>
    import RentalProfile from "$lib/components/RentalProfile.svelte";
    export let data;
    let {address, picNames, tags, comments } = data;
</script>


<div class="padding-8">
    <RentalProfile {address} {picNames} {tags} {comments}/>
</div>