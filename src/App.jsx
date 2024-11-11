import "./App.css";
import { useWallet } from "./hooks/useWallet";
import CONTRACT_ABI from "./contracts/contract.abi.json";
import Web3 from 'web3'

const CONTRACT_ADDRESS = "0x314D60fC8Fd56ccDf7B0a5e1a531a00889A94181";

function App() {
  const [web3, account, loading] = useWallet();
  
  async function handler() {
    const web = new Web3(process.env.VITE_RPC_URL);
    let contract = new web.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contract.methods.getResult().call().then(console.log)
  }
  

  return <div>
    <button onClick={handler}>Get Details</button>
  </div>
}

export default App;
