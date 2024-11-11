import "./App.css";
import { useWallet } from "./hooks/useWallet";
import CONTRACT_ABI from "./contracts/contract.abi.json";
import { switchChain } from "./utils/switchChain";
const CONTRACT_ADDRESS = "0x6F11bd1966Bb1Ed686BE27871a2cfb76b0C9A198";

function App() {
  const [web3, account, loading] = useWallet();
  
  async function handler(){
    let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    // const methods = contract.methods;
    // console.log('All contract methods:', Object.keys(methods));
    // console.log(account);
    // const details = await contract.methods.getUserDetails(account).call({
    //   from: account,
    //   gas: 500000  // Adjust gas limit based on your contract's needs
    // });
    // console.log(details)
    // console.log("chainegs")
    // await switchChain(59141,web3);
    // const chainId = await web3.eth.getChainId();
    // console.log(chainId)

    // const gasEstimate = await contract.methods.getUserDetails(account).estimateGas({
    //   from: account
    // });

    // // const etherValue = web3.utils.fromWei(gasEstimate, 'gwei');
    // // console.log(etherValue)

    // const details = await contract.methods.getUserDetails(account).call({
    //   from: account
    // });

    // console.log(details);

    const tx = await contract.methods.registerUser("hello", "gg").send({
      from: account,
      gas: 500000 // Adjust based on contract needs
    });

    console.log(tx)
  }

  return <div>
    <button onClick={handler}>Get Details</button>
  </div>;
}

export default App;
