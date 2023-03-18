/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import {} from "zksync-web3";
import {} from "ethers";
import { MoralisProvider } from "react-moralis"
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Marketplace zkSync</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-blue-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-blue-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-blue-500">
              Dashboard
            </a>
          </Link>
        </div>        
      </nav>
      <MoralisProvider initializeOnMount={false}>
            <Header/>
            <Component {...pageProps} />
      </MoralisProvider>
    </div>
  )
}

export default MyApp