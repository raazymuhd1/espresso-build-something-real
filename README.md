
  <h1 style="text-align: center"> Espresso Hackathon </h1>

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


**Note**: This project is part of the Espresso Hackathon. For more information, visit the [Espresso Systems website](https://docs.espressosys.com/network/guides/using-the-espresso-network/using-the-espresso-network-as-an-arbitrum-orbit-chain/running-the-espresso-network-with-arbitrum-cloud#deploying-the-cloud-arbitrum-orbit-chain)**

