
import './App.css';
import {useEffect} from "react";
const{ethers} = require("ethers");


function App() {
  const walletadd = "0xd804f304d08f3d8997e49765a6e652d6d4558f7f";


  useEffect(()=>{
    const walletABI = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const writeContract = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts",[]);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletadd,walletABI,signer);
      // write purpose 
      //await contract.setValue(2);
      //await contract.sendEthContract({value:ethers.utils.parseEther("0.3")});

      await contract.sendEthUser("0x4d6a924c6bB0aEAcB83030DEaf3dDBb503D24b2b",{value:ethers.utils.parseEther("0.1")});
    }
    writeContract();
  },[]);

 return <div className='App'></div>;
}

export default App;
