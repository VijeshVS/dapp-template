export async function getAccountBalance(web3Provider,account){
    // returns the balance in wei
    const bal = await web3Provider.eth.getBalance(account);
    const balanceInEther = web3Provider.utils.fromWei(bal, 'ether');

    return balanceInEther;
}