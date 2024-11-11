import './App.css'
import Web3 from 'web3'

function App() {

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const res = await web3.eth.getAccounts()
      console.log(res)
    } else {
      setError('MetaMask not installed');
    }
  };
  
  return (
    <div>
      <button onClick={connectWallet}>Connect</button>
    </div>
  )
}

export default App
