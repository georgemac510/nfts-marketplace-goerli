# Nature NFTs Marketplace - Polygon

## Prerequisites:
    
        Node version 14.x or higher
        yarn

### Installation
1) In your terminal:
        
        git clone https://github.com/georgemac510/nature-nfts-marketplace-polygon.git

2) Install app

        yarn
### Deployment

3) Start your Hardhat node
   
        yarn hardhat node

4) Deploy your smart contracts to `localhost`

        yarn hardhat run scripts/deploy.js --network localhost

5) In another terminal in the same directory, start the app with
   
        yarn dev

        yarn run dev

        yarn dev

6) In your browser, navigate to `http://localhost:3000/`


### Deploying to an Ethereum testnet such as Goerli

7) Create and configure your `.secret` and `.infuraid` files
   a) In the `root` of your project, create a `.secret` file by typing `touch .secret`. While still in the root directory, type `touch .infuraid`. You now have two files which will hold some of our "environment variables". We will later on create a `.env` file to hold our IPFS environment variables.
   b) Go into your Metamask Chrome extension and click on the "hamburger",
   then `Create account`. We want to create a new account that is unassociated 
   with other accounts with real Ethereum because we are going to use the new account's `private key`. 
   c) In the next, KEEP THIS PRIVATE KEY A SECRET AND DO NOT EXPOSE IT. Now click on the "3 dots" and choose `Account details`, then `Export private key`. Copy and paste it into the `.secret` file that you created in Step 7a.
   d) Go to https://infura.io/ to open a free account. Once you have created your account, you will need to `CREATE NEW KEY`. Copy and paste the `PROJECT ID` only into the the `.infuraid` file. By the way, both the .secret and .infuraid files have no other data on line one but the keys, not even a space.

8) Compile and deploy smart contract

        yarn hardhat compile
        yarn hardhat run scripts/deploy.js --network goerli

9) Check deployment on https://goerli.etherscan.io/
    a) After successful deployment, there will be an address output. Copy and paste the address into the link above and you will find your successful contract deploymment on the Goerli Ethereum testnet.

Congratulations! 🎉💥🥇 Next up NFT deployment.
You should be up and running!

