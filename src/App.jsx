import { useEffect, useState } from 'react';
import './App.css'
import { useWallet } from './hooks/useWallet';
import Web3 from 'web3';

function App() {
  const [x,account,loading] = useWallet();
  const [balance,setBalance] = useState(0);
  const [web3,setWeb3] = useState(null);
  
  useEffect(()=>{
      if(!web3){
        const web = new Web3(window.ethereum);

        setWeb3(web);
      }
  },[])

  async function getBalanceHandler () {
    const bal = await web3.eth.getBalance(account);
    const balanceInEther = web3.utils.fromWei(bal, 'ether');
    setBalance(balanceInEther);

    // console.log(Number(await web3.eth.getChainId()))
  }

  return (
    <div>
      <button onClick={getBalanceHandler}>Get Balance</button>
      <h1>{balance}</h1>
    </div>
  )
}

export default App
