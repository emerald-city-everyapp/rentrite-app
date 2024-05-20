<script>
    export let data; //return value prop "data": 
    //has return value from sibling `+page.js` load function
    console.log("data: ", data);
</script>

<div class="container flow">
    <h3>My Test Route Page</h3>
    
    <h3>test number {data.id}</h3>
    <!-- <img src={data.url} alt={data.title} /> -->
    <p>{data.message}</p>
</div>