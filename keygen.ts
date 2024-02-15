import { Keypair } from "@solana/web3.js";
import * as fs from 'fs'; // Node.js file system module for saving the key

async function generateAndStoreKeypair() {
  const kp = Keypair.generate();


  const keypairData = {
    publicKey: kp.publicKey.toBase58(),
    privateKey:kp.secretKey.toString()
  };

  fs.writeFileSync('keypair.json', JSON.stringify(keypairData));

  console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
  console.log('Your keypair has been saved securely in "keypair.json".');
}

generateAndStoreKeypair();




