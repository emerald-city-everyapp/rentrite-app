<script>
    export let data; //return value prop "data": 
    //has return value from sibling `+page.js` load function
</script>

<h2>my test route page</h2>

<h3>{data.title}</h3>
<img src={data.url} alt={data.title} />
<p>{data.explanation}</p>