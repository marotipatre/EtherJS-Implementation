// 0xd804f304d08f3d8997e49765a6e652d6d4558f7f
const{ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/28e240377a82450c9fe9d48f78f3a1a4`);

const walletadd = "0xd804f304d08f3d8997e49765a6e652d6d4558f7f";

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
]

const contractInteraction = async() =>{
    const walletcontract = new ethers.Contract(walletadd,walletABI,provider);

    // performing read only activity
    const contractName = await walletcontract.name();
    console.log("contract name: ",contractName);

    // performing read only activity
    const num = await walletcontract.getValue();
    console.log("Number value :",String(num));

    // performing read only activity
    const contractB = ethers.utils.formatEther(await walletcontract.contractBalance());
    console.log("Balnce : ",contractB);

    // performing read only activity
    const userB = ethers.utils.formatEther(await walletcontract.accountBalance("0xD9D75bFFbB07426B7d00B47A47e406361e123694"));
    console.log("user balance : ",userB);
    

};

contractInteraction();