---
description: >-
  This document provides some quick start information for integrating to CoW
  Protocol. You will find an introduction to the protocol, its tools, resources,
  and documentation, along with some convenient
---

# Build on top of CoW Protocol

## 🏁 Get started

### What is CoW Swap & CoW Protocol

CoW Swap is a Decentralized Application (DApp) and Protocol allowing users to exchange digital assets directly (peer-to-peer) and via existing trading decentralised exchanges.

Its novel design maximizes trade efficiency and provides a competitive way to ensure best prices.

One of the core ideas is executing trades in batches, where users will trade directly using what is known as “Coincidence of Wants” (hence the name CoW). In the context of blockchains, batch auctions are a superior mechanism compared to continuous time trading, as they already execute transactions in discrete “blocks” every few seconds.

In consequence CoW Swap protects users from front-running and other value extraction (known as MEV). The mechanism also leverages the concept of “ring trades” to boost liquidity in highly fragmented and long-tail token markets.

Additionally, CoW Swap allows for an improved user experience by facilitating gasless trades, not paying for failed transactions and adaptive routing in case of volatility.

### Get familiar with CoW Swap

CoW Swap uses CoW protocol. One easy way to get familiar with the protocol is by doing one trade in CowSwap:

* [https://swap.cow.fi](https://swap.cow.fi)

You can use it in the Görli test net if you want. Otherwise, it is available in Mainnet and Gnosis Chain.

💡 If you need Görli Ether, you can use this [PoW-based Faucet](https://goerli-faucet.pk910.de/). You can also ask us!

#### Some basics: Place an order

Trading in CoW Swap is done by signing off-chain transactions using your web3 wallet and posting them to an API.

You will need to:

4. Enable token for trading: (only one time) Similarly to other protocols like Uniswap, you need to set an allowance. After this, you can trade. Learn more [here](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/1.-set-allowance-for-the-sell-token)
5. Get a price/fee quote from the API: [Protocol fees](../overview/definitions) are only paid if the trade is executed (you don’t pay for failed transactions). So this protocol fee covers the settlement of the transaction on-chain. Learn more [here](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/2.-query-the-fee-endpoint)
6. Sign the order using your wallet: Orders are just your signed intent to trade at a desired price or better before some expiration time. You sign orders with your web3 wallet. Learn more [here](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/4.-signing-the-order)
7. Post the signed order to the API: Signed orders are posted to the API, so the order can be executed. Read more [here](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/5.-placing-the-order)

💡 TIP: One easy way to understand the steps above is to see the [DEMO: SDK Examples](https://vigilant-heisenberg-dba3c1.netlify.app/) or check the [SDK documents](https://docs.cow.fi/cow-sdk)

#### Check order status

Orders are identified by an unique identifier (UID).

This UID is a deterministic hash derived from the order information. It is returned by the API when you post a new order (it can also be calculated locally deriving it from the order data).

This UID would allow you to get information about the status of the order. You can do this in two different ways:

* API: Get the order details and its status from the UID (GET /orders/{UID}, see the [Swagger docs](https://api.cow.fi/docs/#/default/get\_api\_v1\_orders\_\_UID\_))
* Smart Contract: You can watch the [Trade](https://github.com/cowprotocol/contracts/blob/main/src/contracts/GPv2Settlement.sol#L50) event.

It’s worth mentioning that, if you build a tool or UI that creates trades, it’s very convenient to provide the user a way to see the details of the trade that was just created. One simple way to do this, is by creating a link to the explorer:

* https://explorer.cow.fi/orders/{UID}

### CoW Explorer

The explorer is a website that allows you to explore the protocol data.

It’s the “Etherscan” for CoW protocol, so you will be able to find, among other things:

* Order details, with trading status: You can get detailed information about executed, expired, or pending orders. This page is very convenient for directing users once they post an order ([example order](https://explorer.cow.fi/orders/0xa64f3559e33edebd2a1701050db6dff8089c7c42c4d2d842669466c4693d698100000000005ef87f8ca7014309ece7260bbcdaeb61f0377d))
* Order for a given account: You can get detailed information about executed, expired, or pending orders for a given trader ([example orders for trader](https://explorer.cow.fi/address/0x00000000005ef87f8ca7014309ece7260bbcdaeb))
* Orders for a batch: Given the transaction hash of a settlement, you can see all the trades in it ([example orders in batch](https://explorer.cow.fi/tx/0xd25f7457f4a2ce993a3314858f50f0144606e0c3afe7b3da6416814598afb87b))

### Signing orders

The protocol requires valid signed orders. There’s different ways in which someone could sign an order:

* Off-chain signing (EIP-712): Allow gass-less trading for EOA like Metamask. Learn [how to sign orders](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/4.-signing-the-order)
* Presign: Sign an order using an ethereum transaction. Convenient for Smart Contract integrations. See the [setPresign](https://github.com/cowprotocol/contracts/blob/7842d494c63224387e7e67f75bcd31775543098c/src/contracts/mixins/GPv2Signing.sol#L86) solidity function for more details
* Smart Contract Signing (EIP-1271): Gass-less signing for smart contracts. [Here](https://docs.cow.fi/tutorials/how-to-place-erc-1271-smart-contract-orders) is a tutorial on how to use this type of signatures.

For more information on Signed orders, read [here](https://docs.cow.fi/overview/signed-orders).

## 💡Resources

### Dev Documentation

Start here your journey to learn about CoW Protocol

[https://docs.cow.fi/](https://docs.cow.fi/)

### API

The API allows you to get direct access to the CoW protocol.

The documentation is exposed using Swagger docs:

* [https://api.cow.fi/docs](https://api.cow.fi/docs)

The API is available in 3 different Networks: Mainnet, Gnosis Chain and Görli testnet.

For more information about the API, learn more [here](https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/5.-placing-the-order)

### SDK

The software development kit (SDK) is a Javascript library that provides tooling for accessing the API as well as some utilities like functions for order signing.

It is written in Typescript, making it simpler to use in both a Typescript or a plain Javascript project.

More info in [SDK documents](https://docs.cow.fi/cow-sdk) or see an example on how to use it [here](https://github.com/anxolin/cow-examples/blob/main/src/pages/api/Orders.js#L6)

### The graph

CoW Protocol graph provides an alternative way to consume protocol information.

More info in [https://github.com/cowprotocol/subgraph](https://github.com/cowprotocol/subgraph)

## Examples of simple integrations

* CoW Protocol integration examples: Web app that shows how to integrate with CoW Protocol using the SDK [https://github.com/anxolin/cow-examples](https://github.com/anxolin/cow-examples)
* NodeJS Trading Bot: Basic bot that creates a random trade: [https://github.com/cowprotocol/trading-bot](https://github.com/cowprotocol/trading-bot)
* Python Trading script: [https://pastebin.com/cKXUz0SW](https://pastebin.com/cKXUz0SW)
* Go Trading script: [https://pastebin.com/r787C2wT](https://pastebin.com/r787C2wT)

## 👩‍🌾 Bonus: Join the team!

There’s currently open positions for CoW Protocol.

If you are looking for new challenges and opportunities, consider our [Open Positions](https://cow.fi/jobs).

\
