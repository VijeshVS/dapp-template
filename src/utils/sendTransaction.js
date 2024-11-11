export async function sendTransaction(web3,acc1,acc2,amt,gasLimit){
    const transactionObject = {
        from: acc1,              // Sender's address
        to: acc2,   // Replace with the recipient's address
        value: web3.utils.toWei(amt, 'ether'), // Amount of Ether to send (0.1 Ether here)
        gas: gasLimit                     // The gas limit for a basic transaction
    };
    
    web3.eth.sendTransaction(transactionObject)
        .on('transactionHash', (hash) => {
            console.log('Transaction sent! Hash:', hash);
        })
        .on('receipt', (receipt) => {
            console.log('Transaction confirmed! Receipt:', receipt);
        })
        .on('error', (error) => {
            console.error('Transaction failed:', error);
    });
}