// Imports from Web3.js
const {
    Connection,
    PublicKey,
    clusterApiUrl, // Provides URL for devnet
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js');

// Create a new Keypair for the wallet object
const wallet = new Keypair()

// Keys for the wallet
const publicKey = new PublicKey(wallet._keypair.publicKey) // Wraps the raw bytes to ensure correct PublicKey type for Solana SDK
const secretKey = wallet._keypair.secretKey

// Retrieve the balance of the wallet (using devnet) using the Connection class
const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey) // Pass the public key to get the wallet balance
        console.log(`Wallet balance is: ${walletBalance}`)
    } catch(err) {
        console.error(err)
    }
}

// Function to send Sol
const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed') // Create a connection object to receive Sol
        
    } catch(err) {
        console.error(err)
    }
}

const main = async() => {
    await getWalletBalance()
}

main()
