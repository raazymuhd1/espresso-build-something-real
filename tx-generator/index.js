import { ethers } from "ethers";
import dotenv from "dotenv"

dotenv.config()

(async () => {
    const provider = new ethers.JsonRpcProvider('http:// 94.131.99.79:8547'); // Rollup RPC URL
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const tx = await signer.sendTransaction({
        to: '0x57Ef5309de3c5433cEbFA644b3302c2b6e2d5C10',
        value: ethers.parseUnits('1000', 'wei'),
        gasPrice: ethers.parseUnits('1', 'gwei'),
        gasLimit: 26000,
    });
    console.log(tx);
})();
