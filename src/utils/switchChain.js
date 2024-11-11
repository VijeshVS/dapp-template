async function switchChain(targetChainId,web3Provider){
    try {
        // switch already existing chain in metamask
        await web3Provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(targetChainId) }]
        });
    }
    catch(error){
    //    add the chain to the network

        // if(error.code == 4902){
        //     try {
        //         await window.ethereum.request({
        //             method: 'wallet_addEthereumChain',
        //             params: [
        //                 {
        //                     chainId: Web3.utils.toHex(targetChainId),
        //                     rpcUrls: ['https://your-rpc-url'], // RPC URL for the network
        //                     chainName: 'Network Name',         // Name of the network
        //                     nativeCurrency: {
        //                         name: 'Currency Name',
        //                         symbol: 'SYM',                 // Symbol of the currency
        //                         decimals: 18
        //                     },
        //                     blockExplorerUrls: ['https://your-block-explorer-url']
        //                 }
        //             ]
        //         });
        //     }
        //     catch(e){
        //         console.log("Not able to add chain to metamask")
        //     }
        // }
    }
    
}