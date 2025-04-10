
  <h1 style="text-align: center"> Espresso Hackathon </h1>

  ![build-brew](https://github.com/user-attachments/assets/e01299b1-47bf-45db-aed1-aede853281ae)


### Arbitrum Sepolia Nitro Rollup Node Deployments
#**A Brief Overview**

Deploying a fully functional `Arbitrum Nitro Rollup Node` to `arbitrum sepolia` as part of an `espresso hackathon`. all the configuration and setup are provided in this repository.

  The main purpose of this project is to configure and  deploy an `Arbitrum Nitro Rollup Node` on the arbitrum sepolia using testnet parameters `(Decaf Testnet + Arbitrum Sepolia)`.

  this project demostrating the `Arbitrum Nitro Rollup Node` capabilities in processing transactions, like `sending funds`, `bridging`, etc. 


#**Project Requirements**

- `Docker`: Ensure Docker is installed on your system or cloud server.
- `Docker Compose`: Ensure Docker Compose is installed.
- `Git`: Ensure Git is installed for cloning the repository.
- `Node`: version 16 is recommended
- `Foundry` - Unsure foundry is installed for compiling & building the contracts
- `Yarn` 

#**Quick Setup**
1. Clone this repository:
```bash
    git clone https://github.com/raazymuhd1/espresso-build-something-real.git
```
2. Navigate to the project directory
```bash
   cd espresso-build-something-real
```
3. Create a `.env` file and set the required environment variables:
```shell
        touch .env # to create a on your local
        
        nano .env # to open the file in the vps/cloud

        # fill up all the required environment variables
        WEBSOCKET_ARBITRUM_SEPOLIA_RPC_URL=L=wss://arbitrum-sepolia-rpc.publicnode.com
        STAKER_PRIVATE_KEY=your_staker_private_key
        BATCH_POSTER_PRIVATE_KEY=your_batch_poster_private_key
```


4. Start the Nitro Rollup node:
```shell
    docker compose up -d
```
**note**: if you encountered any errors when running the `docker compose`, ensure all inside the configuration files are correct, for more details visit this site [espresso-docs](https://docs.espressosys.com/network/guides/using-the-espresso-network/using-the-espresso-network-as-an-arbitrum-orbit-chain/running-the-espresso-network-with-arbitrum-cloud#cloud-configuration)



#**Configuration**

  All the configuration files are location in `config` directory, `config/full_node.json` and `l2_chain_info.json`

#**Usage Guide**

 Test to send transactions, once your node is running properly:

```shell
    # bridge Transaction 
     cast send --rpc-url https://arbitrum-sepolia-rpc.publicnode.com YOUR_INBOX_ADDRESS 'depositEth() external payable returns (uint256)' --private-key YOUR_PRIVATE_KEY --value 10000000000 -vvvv

    # sending eth
    cast send RECIPIENT_ADDRESS --value 10000000000 --private-key YOUR_PRIVATE_KEY --rpc-url http://127.0.0.1:8547

    # checking balance
    cast balance ANY_ADDRESS --rpc-url http://127.0.0.1:8547/ 
```

**Confirming Rollup Chain Id: Get Chain ID**

```shell
    curl -X POST
    -H "Content-Type: application/json"
    --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
    http://127.0.0.1:8547
```

**Tasks for Espresso Hackathon**

  As part of the Espresso Hackathon, the following tasks have been completed:

 - Configured the node to use a custom `chain ID`, `owner`, `validator`, and `batch poster`.
 - Deployed an `Arbitrum Nitro Rollup node` on Arbitrum Sepolia.
 - Tested the node's functionality using `JSON-RPC endpoints` or using `foundry cast`, by sending `bridging`, `transferring`, and `checking` asset balances.

 

### The submission details
 - **Demo Video**: https://www.youtube.com/watch?v=ZYxcd2VFQQE&t=408s

 - **github**: 
   - espresso-contracts: https://github.com/raazymuhd1/espresso-build-something-real 
   - nitro-rollup: 
  
- **Rollup liveness verification**: 
    - tx-hash: https://sepolia.arbiscan.io/tx/0x2c702db9715f12a07b16b2b85c66524da11e5632659e5e6ec8f240582e18d95f 
    - Ip-address: http://94.131.99.79:8547/
    - ChainID: 71717100


### Deployed Arbitrum Nitro Rollup Details
**Addresses**
   - owner: `0xdaFE88244735b360F26Ab97cA560853866E302E4`
   - initial-owner: `0xdaFE88244735b360F26Ab97cA560853866E302E4`
   - validators: `0x57Ef5309de3c5433cEbFA644b3302c2b6e2d5C10`
   - batch-poster: `0x651f519C4B2d02084E8Ee0848cd91e4E794C95e7`
   - batch-poster-manager: `0x651f519C4B2d02084E8Ee0848cd91e4E794C95e7`
   - bridge: `0x9Dbf1402E02666E855a6DDc95e1c592084d373d6`
   - inbox": `0x65cA021308e3Caa26f36B88bd84AECc996713522`
   - sequencer-inbox: `0x8e7bEaa74577cff545b7bcaA09A50695c359c0Ad`,
   - deployed-at: `135777055`,
   - rollup: `0x90dE781bAD23F4a36DB7a1344626B126984893cE`,
    native-token: `0x0000000000000000000000000000000000000000`,
    upgrade-executor: `0x1245C8C21dFE97BF9384893523a4c705262302cd`,
    validator-utils: `0xBE11eF22d8E274cB9Ea138D0eD8E946aE043C58a`,
    validator-wallet-creator: `0x16bcc0Da877C0D847Bb5F3691d2Bd62Ae7E58798`

**Chain ID:**
  - `71717100`
  
**RPC-urls:**
  - hotshot-url: https://query.decaf.testnet.espresso.network/v0
  - parent-chain-url: wss://arbitrum-sepolia.testnet.espresso.network:4443/


**Note**: This project is part of the Espresso Hackathon. For more information, visit the [Espresso Systems website](https://docs.espressosys.com/network/guides/using-the-espresso-network/using-the-espresso-network-as-an-arbitrum-orbit-chain/running-the-espresso-network-with-arbitrum-cloud#deploying-the-cloud-arbitrum-orbit-chain)**

