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

// Keys for the wallet
const publicKey = new PublicKey(wallet._keypair.publicKey) // Wraps the raw bytes to ensure correct PublicKey type for Solana SDK
const secretKey = wallet._keypair.secretKey
