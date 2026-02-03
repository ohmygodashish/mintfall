// Imports from Web3.js
const {
    Connection,
    PublicKey,
    clusterApiUrl, // Provides URL for devnet
    Keypair,
    LAMPORTS_PER_SOL // Constant that defines the number of lamports in one SOL; 1 SOL = 1,000,000,000 lamports = LAMPORTS_PER_SOL
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
        
        // Display the wallet balance in SOL instead of lamports
        const walletBalanceinSOL = walletBalance/LAMPORTS_PER_SOL

        console.log(`Wallet balance is: ${walletBalanceinSOL}`)
    } catch(err) {
        console.error(err)
    }
}

// Function to receive Sol
const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed') // Create a connection object to receive Sol
        
        // 1. Request the airdrop (returns the transaction signature)
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL) // Here we are requesting 2 SOL
        
        // 2. Fetch the latest blockhash and last valid block height
        const latestBlockhash = await connection.getLatestBlockhash()
        const blockhash = latestBlockhash.blockhash
        const lastValidBlockHeight = latestBlockhash.lastValidBlockHeight

        // 3. Confirm the transaction
        await connection.confirmTransaction({
            blockhash, lastValidBlockHeight, fromAirDropSignature
        })

    } catch(err) {
        console.error(err)
    }
}

// Main function to fetch balances before and after the airdrop
const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}

main()
