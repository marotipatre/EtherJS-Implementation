const{ethers} = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/28e240377a82450c9fe9d48f78f3a1a4`);

const queryBlockkchain = async() => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number",block);

    const balance = await provider.getBalance("0xD9D75bFFbB07426B7d00B47A47e406361e123694");
    console.log("Acoount balance :",balance);
    const balancceEther = ethers.utils.formatEther(balance);
    console.log("Acoount balance :",balancceEther);
    
}

queryBlockkchain();
