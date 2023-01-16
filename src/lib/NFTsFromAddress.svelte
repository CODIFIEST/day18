<script lang="ts">
    import type { each } from "svelte/internal";
    import { addressFromUserInput, allNFTs, nftsFromAddress } from "../getAddresses";
    let nfts:object[];
    let nft;
let aFI = addressFromUserInput;

const getAddress = (event) => {
    aFI = event.target.value;
    };
    $: console.log(aFI);
const startFetch = (event) =>{
     //this takes whatever the value input into the field when submit is clicked.
   
    nftsFromAddress(aFI)
    .then(():object[]=>{
        console.log(allNFTs)
     
        return allNFTs
    });
    nfts = allNFTs;
    console.log("outside the promise, inside startfetch", nfts)
    // console.log(`this is from NFT svelte`)
}
$:console.log(`every time it updates ntfs`, nfts)

</script>

<input type="text" on:input={getAddress} />
<button on:click={startFetch}>Click Me for NFTs</button>
<div>
   </div>