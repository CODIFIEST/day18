<!-- 6) Create a new component, NFTView.svelte. 
    This component should declare a type, NFT, with name and description string properties,
     and initialize an empty array of that type, nfts.

Using the onMount function from svelte,  set an interval to push a new NFT object to that array, 
and then set nfts = nfts at the end of the interval. (this is because the variable 
needs to be re-assigned for it to be reactive to the page!

Using the {#each array as element} syntax, loop through the nfts array 
and display the name and description to the page. When you load your app up, 
you should see NFTs be slowly added to your page every interval loop. 
 -->
<script lang="ts">
    import { onMount } from "svelte";
   
    type NFT ={
        name:string;
        description:string;
    }
  
    //initialize an empty array of NFTs
    var nfts:NFT[] = [];
//set up props for the function
    let name ="";
    let description = "";

    let nft : NFT ={
        name:name,
        description:description       
    }
   //usie onMount to set an interval to push an oject:NFT to the array of objects
      onMount(()=>{
        setInterval((()=>{
            //this doesn't seem right
            nfts.push(nft);
        }), 500)
        nfts = nfts;
    })

</script>
