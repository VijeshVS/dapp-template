import "./App.css";
import { useWallet } from "./hooks/useWallet";


function App() {
  const [web3, account, loading] = useWallet();
  
  return <div>
    <button onClick={handler}>Get Details</button>
  </div>
}

export default App;
