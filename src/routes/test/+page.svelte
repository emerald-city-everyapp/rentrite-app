<script>
    export let data; //return value prop "data": 
    //has return value from sibling `+page.js` load function
    console.log("data: ", data);
</script>

<div class="container flow">
    <h2>my test route page</h2>
    
    <h3>{data.id}</h3>
    <!-- <img src={data.url} alt={data.title} /> -->
    <p>{data.message}</p>
</div>