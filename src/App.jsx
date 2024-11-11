import { useEffect, useState } from 'react';
import './App.css'
import { useWallet } from './hooks/useWallet';
import Web3 from 'web3';
import { sendTransaction } from './utils/sendTransaction';

function App() {
  const [web3,account,loading] = useWallet();

  return (
    <div>
      
    </div>
  )
}

export default App
