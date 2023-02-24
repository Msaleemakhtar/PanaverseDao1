"use client";
import React from "react";
import Link from "next/link";

import { Box, Text, Flex, Container } from "@chakra-ui/react";

export default function Web3Q4() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl">
        <Flex maxW="1400" flexDir={{ base: "column", md: "row" }} py="50px">
          <Box textAlign={"center"} >
            <Text fontSize="36px" fontWeight="bold" color="back">
              Quarter IV (Specialized Track)
            </Text>
            <Text fontSize="32px" fontWeight="bold" color="blue">
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
            </Text>
            <Text>Duration: 13 Weeks</Text>
            <Text fontWeight="bold" fontSize=" 24px" color="red">
              Course Description:
            </Text>

            <Box
              textAlign={"center"}
              color="white"
              fontWeight={"bold"}
              py="32px"
            >
              <Text fontSize="26px">
                In this course you will learn how to develop Web 3.0 DApps,
                create a project, deploy it in production, write smart
                contracts, unit test them, and create user interfaces for them.
                We will also learn to develop ERC-20 and NFT tokens, DAOs,
                Oracles, etc. Please note that in order to develop Web 3
                applications you also need to build on top of Web 2.0
                technologies which we have already covered in the previous
                quarters.
              </Text>
            </Box>

            <Text fontSize="24px" fontWeight="bold" color="red">
              Course Outline:
            </Text>
            <Text fontSize="32px" fontWeight="bold" color="black">
              1. Blockchain and Metaverse Theory
            </Text>

            <Text fontSize="24px" fontWeight="bold" as="u" color="red">
              <Link href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                The Metaverse: And How It Will Revolutionize Everything by
                Matthew Ball
              </Link>
            </Text>

            <Text fontSize="24px" fontWeight="bold" as="u" color="red">
              <Link href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight="bold" color="black" py="30px">
              2. Smart Contract Development in Solidity
            </Text>

            <Text fontSize="24px" fontWeight="bold" as="u" color="red">
              <Link href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
              </Link>
            </Text>

            <Text fontSize="24px" fontWeight="bold" as="u" color="red">
              <Link href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">
                https://github.com/panaverse/defi-dapps-solidity-smart-contracts
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight="bold" color="black" py="30px">
              3. Dapp Development using Ethers.js and Next.js 13
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://github.com/panaverse/dapps-nextjs">
                Dapp Learning Repo
              </Link>
            </Text>
            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              4. Tokennomics
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="kwhite" py="30px">
              As you probably know, the ICO ("Initial Coin Offering") industry
              has been booming, and it's completely reinventing the way new
              startups kickstart themselves. In fact, have a look at
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects">
                Wikipedia's list of highest crowdfunding projects
              </Link>
            </Text>

            <Box fontSize="24px" fontWeight="bold " as="u" color="red">
              <Text>
                <Link href="https://phemex.com/blogs/what-is-a-dex-ido">
                  Understand the difference between IDO vs. IEO vs. ICO
                </Link>
              </Text>
              <Text>
                <Link href="https://icodrops.com/">ICO list at ICO Drops</Link>
              </Text>
              <Text>
                <Link href="https://topicolist.com/">
                  ICO List of Best New Initial Coin Offerings
                </Link>
              </Text>
              <Text>
                <Link href="https://cryptototem.com/ico-list/">
                  Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
                  IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs
                  and IDOs
                </Link>
              </Text>
              <Text>
                <Link href="https://www.icolistingonline.com/">
                  ICO List Online
                </Link>
              </Text>
              <Text>
                <Link href="https://coincodex.com/ieo-list/binance/">
                  Binance IEO List
                </Link>
              </Text>
              <Text>
                <Link href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/">
                  Binance LaunchpadIEO List
                </Link>
              </Text>
              <Text>
                <Link href="https://polkastarter.com/">Polkastarter</Link>
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 1: How to Launch a IEO on Binance Launchpad
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://appinventiv.com/blog/how-to-launch-an-ieo/">
                Read How to Launch an IEO
              </Link>
            </Text>
            <br />

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://www.binance.com/en/support/faq/how-to-get-started-with-binance-launchpool-94ed108ce89d44ab8602aa3c476dfb04">
                Your first task of the project is to make a google slides
                presentation on how to start a IEO on the Binance Launch Pad
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 2: How to Launch a IDO on Polkastarter
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://cryptorank.io/fundraising-platforms">
                Review the list of top fundraising platforms
              </Link>
            </Text>
            <br />

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://polkastarter.com/">
                Your second task of the project is to make a google slides
                presentation on how to start a IDO on the Polkastarter
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 3: Create a Pako Token
            </Text>

            <Text fontSize="28px" fontWeight="bold " color="white" py="30px">
              By creating a token and related contracts, you'll also learn how
              to handle money sent to your contracts, which should come in handy
              if you want to create some kind of paid decentralized service in
              the future.
            </Text>

            <Text fontSize="28px" fontWeight="bold " color="white" py="30px">
              Therefore, for the sake of this chapter, let's imagine that our
              Pako DApp uses its own coin – the Pako Token. We will create two
              contracts – one for the token itself and one for the token crowd
              sale (the ICO)
            </Text>

            <Text fontSize="28px" fontWeight="bold " color="white" py="30px">
              Now Create your own Pako ERC20 Token and deploy it on a testnet.
              The Token should be to use OpenZeppelin contracts. You will use
              the Hardhat development environment. Also, write at least twenty
              automated tests. We will be using Solidity and Typescript for
              development.
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 4: Develop Crowd Sale Contract
            </Text>

            <Box fontSize="28px" fontWeight="bold " color="white" py="30px">
              <Text py="25px">
                This contract will be responsible for allowing users to exchange
                ETH for our Pako Token. In order to do that we need to set a
                price for our token (1 ETH = 100 Pako Token)
              </Text>
              <Text py="25px">Implement a payable buyToken() function.</Text>
              <Text py="25px">
                Emit a BuyTokens event that will log who’s the buyer, the amount
                of ETH sent and the amount of Token bought
              </Text>
              <Text py="25px">
                Transfer 75% of the Tokens to the Crowd Sale contract at
                deployment time. i.e. Right after the contract is deployed, we
                want the token contract to send 75% of our token supply to it.
                While 25% remain in our personal "owner" account.
              </Text>
              <Text py="25px">
                Transfer the ownership of the Crowd Sale contract (at deploy
                time) to our frontend address so that we are able to withdraw
                the ETH.
              </Text>
              <Text py="25px" color="red">
                <Link href="https://docs.openzeppelin.com/contracts/4.x/crowdsales">
                  You can use the openzeppelin crowd sale contracts
                </Link>
              </Text>

              <Text py="25px">
                however you will have to update the code to the latest solidity
                version.
              </Text>
              <Text py="25px">
                Also write extensive tests, for example we will simply send a
                transaction of 1 ETH from a random account to the contract.
                After the transaction, we should expect the account to have
                received Pako, while the contract's balance should have been
                reduced.
              </Text>
              <Text py="25px">
                Note: Before you get started writing the token contract we
                suggest you review the access control
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 5: Trying it with MetaMask
            </Text>

            <Box fontSize="28px" fontWeight="bold " color="white" py="30px">
              <Text py="25px">
                While it's always good to test your code, it's often more
                satisfying to see the results of your work wrapped in a nice UI.
                Let's see how we can deploy our contracts and get some Pako
                tokens into our MetaMask wallet!
              </Text>
              <Text py="25px">
                We start by running our deployment scripts for the test network
                so that the new token contracts are uploaded and deployed.
              </Text>
              <Text py="25px">
                When it's done, take note of what addresses the contracts were
                uploaded to and copy it!
              </Text>
              <Text py="25px">
                Now head to MetaMask, and send a transaction of 1 ETH to the
                crowd sale contract address. If your MetaMask wallet doesn't
                have any ethers, remember that you can use any faucet.
              </Text>
              <Text py="25px">
                After the transaction has been confirmed, you might be confused
                about why you can't see any tokens in your wallet. It turns out
                that you need to manually add the token address in MetaMask in
                order to "register" it – after all, there are so many tokens out
                there, there's no way MetaMask could list them all by default!
              </Text>

              <Text py="25px">
                To do this, open the side menu and click on the "Add token"
                button to get started: .
              </Text>
              <Text py="25px">
                Once you're on the token page, click on "Add custom token" and
                paste in the token contract's address in the address field.
              </Text>

              <Text py="25px">
                After confirming that you want to add the token, you should be
                able to see your Pako balance right next to your ETH balance in
                the wallet. How cool!
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 6: Trying it with Multisignature Wallets
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/">
                Read this
              </Link>
            </Text>

            <Text fontSize="24px" fontWeight="bold " color="black" py="30px">
              Now use Gnosis Safe with multi-sigs to do what you did in the last
              part.
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 7: Sending Tokens using Ethers.js
            </Text>

            <Text fontSize="24px" fontWeight="bold " color="black" py="30px">
              Write a Typescript program to send Pako Token to some friend's
              address using Ethers.js
            </Text>

            <Text fontSize="24px" fontWeight="bold " as="u" color="red">
              <Link href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/">
                You may follow this tutorial
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight="bold " color="black" py="30px">
              Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
            </Text>

            <Box fontSize="24px" fontWeight="bold " as="u" color="red">
              <Text>
                <Link href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/">
                  Read this NFT tutorial series{" "}
                </Link>
              </Text>

              <Text>
                <Link href="https://docs.openzeppelin.com/contracts/4.x/erc721">
                  Create a NFT contract using the [OpenZepplen ERC721 NFT
                  Standard
                </Link>
              </Text>

              <Text>
                <Link href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets">
                  You may use the Preset ERC721 contract
                </Link>
              </Text>

              <Text>
                <Link href="https://opensea.io/">
                  Deploy your NFT contract on a testnet, mint it, and view it on
                  the MetaMask wallet and list it on OpenSea Marketplace for
                  sale.
                </Link>
              </Text>

              <Text>
                <Link href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/">
                  Implement a ERC721 Market
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
