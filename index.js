// Imports from Web3.js
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');

// Create a new Keypair for the wallet object
const wallet = new Keypair()