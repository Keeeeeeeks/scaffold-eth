import { Zora } from '@zoralabs/zdk';
import { Wallet } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import {
  constructBidShares,
  constructMediaData,
  sha256FromBuffer,
  generateMetadata,
  isMediaDataVerified
} from '@zoralabs/zdk';

const provider = new JsonRpcProvider() // defaults to http://localhost:8545, but accepts eth node rpc url
const wallet = Wallet.createRandom().connect(provider)
const zora = new Zora(wallet, 4)

const metadataJSON = generateMetadata('zora-20210101', {
  description: '',
  mimeType: 'text/plain',
  name: '',
  version: 'zora-20210101',
})

const contentHash = sha256FromBuffer(Buffer.from('Ours Truly,'))
const metadataHash = sha256FromBuffer(Buffer.from(metadataJSON))
const mediaData = constructMediaData(
  'https://ipfs.io/ipfs/bafybeifyqibqlheu7ij7fwdex4y2pw2wo7eaw2z6lec5zhbxu3cvxul6h4',
  'https://ipfs.io/ipfs/bafybeifpxcq2hhbzuy2ich3duh7cjk4zk4czjl6ufbpmxep247ugwzsny4',
  contentHash,
  metadataHash
)

const verified = await isMediaDataVerified(mediaData)
if (!verified){
  throw new Error("MediaData not valid, do not mint")
}

const bidShares = constructBidShares(
  10, // creator share
  90, // owner share
  0 // prevOwner share
)
const tx = await zora.mint(mediaData, bidShares)
await tx.wait(8) // 8 confirmations to finalize