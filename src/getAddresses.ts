export let addressFromUserInput = "";
export let ownerAddr =";"
export let allNFTs;
import axios from "axios"

//cant import axios :/
export function nftsFromAddress(ownerAddr:string) {
    // These variables are required for the axios call
    const apiKey = "iV9Rjt5iMP4Ci8TDngI2rWaohTB2WvZW";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    
        //set the config with the actual owner address and other required fields
    const config = {
        method: "get",
        url: `${baseURL}?owner=${ownerAddr}`,
    };
    //this gets the data and console log to verify
    return new Promise((resolve, reject) => {
        axios(config).then((response) => {
            resolve(response);
            // console.log(" response.data ", response.data.ownedNfts);
            //we should be seting a const instead of using response.data.ownedNfts
            allNFTs = response.data.ownedNfts;
            // console.log(`THIS SHOULD NOT BE EMPTYall NFTs-----------------------<br/> ${allNFTs}`)
            // console.log(response.data.ownedNfts)
        });
        
    });
}

