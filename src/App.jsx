import "./App.css";
import { useWallet } from "./hooks/useWallet";
// import Web3 from 'web3';
import contractABI from './contracts/contract.abi.json';

// const api = "https://linea-sepolia.g.alchemy.com/v2/_PsC45nK0OBcb9VMRblfswOupsxUI_TF";
const contractAddress = "0x6F11bd1966Bb1Ed686BE27871a2cfb76b0C9A198";

function App() {
  const [web3, account, loading] = useWallet();
  
  async function handler(){
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.getPatient(account).call({ from: account });
    console.log(result);
  //   const res = await contract.methods.
  // addPatient("John Doe", 30, "1993-01-01", 1234567890, "john.doe@example.com", 70, 175, "O+").send({ from: account });

    // console.log(res)
  }

  return (
    <div>
      <button onClick={handler} disabled={loading}>Register User</button>
    </div>
  );
}

export default App;
