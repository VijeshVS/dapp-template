import CONTRACT_ABI from "./contracts/contract.abi.json";
import Web3 from 'web3'
const CONTRACT_ADDRESS = "0x314D60fC8Fd56ccDf7B0a5e1a531a00889A94181";

export async function contractHandler() {
    const web = new Web3(process.env.VITE_RPC_URL);
    let contract = new web.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contract.methods.getResult().call().then(console.log)
}