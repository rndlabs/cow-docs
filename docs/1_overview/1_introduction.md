# Introduction

## What is CoW Protocol?

CoW Protocol is a fully permissionless trading protocol that leverages [batch auctions](batch-auctions) as its price finding mechanism. CoW Protocol uses batch auctions to maximise liquidity via Coincidence of Wants (CoWs) in addition to tapping all available on-chain liquidity whenever needed. Batch auctions are continuously run by the protocol because the solvers, the parties in charge of finding the most optimal settlement for the batch, are in competition to settle it. The winning solver will be the one that can maximise traders' surplus by either:

1. Having the most optimal CoW 🐮
2. Finding the best liquidity sources
3. A combination of the above in a single settlement

![Overview of the System](/img/CoW\_Protocol\_BatchAuctions.png)

[Coincidence of Wants (CoWs)](coincidence-of-wants) are one of the most, if not the most, innovative aspects of the protocol, but what exactly are they? CoWs are settlements which share liquidity across all orders who have matching limit prices. Rather than an AMM or a CLOB, CoW Protocol uses [batch auctions](batch-auctions) as a core mechanism to facilitate CoWs. Using batch auctions leads to better prices for the individual traders as well as offering big savings, in terms of [gas fee](definitions) optimisation and [liquidity provider fees](definitions). Additionally, because of batch auction *uniform clearing prices* and CoWs not needing access to on-chain liquidity, CoW Protocol is able to offer the user a level of MEV protection that can not be achieved by *any* other protocol.

[CoW Swap](../front-end/introduction) is the first front-end interface built on top of CoW Protocol. It acts as *Meta DEX aggregator*, giving the users the best price across the aggregators or AMMs depending on which one is the most liquid venue for the trades within a batch.

Instead of using a central operator or a constant function market maker to determine trade settlements, CoW Protocol uses a party called *solver*, who is the party in charge of providing the settlement solution to the batch auctions. For each batch auction:

1. Solvers compete against each other to submit the most optimal batch settlement.
2. The winning solver submits the successful batch settlement solution to the chain.
3. The protocol rewards the winning solver with tokens, incentivising the solver to solve the [batch auction optimisation problem](../off-chain-services/in-depth-solver-specification/the-batch-auction-optimisation-problem).

It is very important that there is healthy competition amongst solvers to ensure competitive batch optimisation, and therefore competitive clearing prices for the protocol's users. As such, *anyone* can become a solver, provided the following requirements are met:

1. From an ethereum address, deposit a bond in the form of tokens. The amount of the bond is determined by [CoW DAO](https://snapshot.org/cow.eth) with current amounts specified in [CIP-7: Allowing External Solvers](https://snapshot.org/#/cow.eth/proposal/0x267edf7a0bd3c771cfca763322f011ee106d8d5158612c11da29183260d1dba7).
2. Upon staking, propose a vote to CoW DAO to have your solver approved. If the vote is successful, the solver's ethereum address will be included in the [allowlist](../smart-contracts/allow-list-authenticator/introduction) (authentication) solvers contract.
3. Have the technical knowledge to create the appropriate batch settlement solutions, or take the risk of being slashed by CoW DAO for wrongdoing.

### Benefits

CoW Protocol has a wide range of benefits, both technical and functional, but to sum it up, the main benefits it brings to the ecosystem:

* Fully permissionless Meta DEX Aggregator on which anyone can trade any tokens and build [integrations](../tutorials/build-on-top-of-cow-protocol);
* First implementation (2nd iteration) of [batch auctions](batch-auctions) promoting fair *uniform clearing prices*;
* Trades are **protected from different sorts of MEV such as front/back running or sandwich attacks**;
* Maximised liquidity and access to all on chain liquidity;
  * Best prices when CoWs are found, or at *least* as good as the best DEX aggregator price if they aren't;
  * All token pairs available for trading, off-chain order submission enables gasless [^1] trading;
* Fair, decentralised settlement in which an open competition for order matching replaces a central operator or a constant function market maker;
* Tokenomics ensure that solvers are competing against each other to deliver the best order settlement solution for traders in exchange for the reward of each batch auction.

To date, USD$25.5B [^2] worth of trading has trusted CoW Protocol to deliver on these benefits!

[^1]: The user still has to pay a [*protocol fee*](definitions).
[^2]: [CoW Protocol Dune Analytics dashboard](https://dune.com/cowprotocol/cowswap)

### Trading Cycle

While we call CoW Swap a META DEX Aggregator, as it may have similarities with current DEX aggregators or DEX trading protocol, CoW Protocol introduces a completely new way of trading. In comparison with other DEXs or DEX aggregator, CoW Protocol, and therefore the interfaces built on top of it ([swap.cow.fi](https://swap.cow.fi) for example), don't require the user to send a transaction to submit a trade, but rather require the user to send a *signed message*. This is because the protocol works with *off-chain messages*, where the trader signs an order intent with the valid parameters they are willing to accept. This signed order is picked up by the solvers and executed in the batch auction that satisfies the users **signed requirements**.

Let's get an owl's eye 🦉 view on how the protocol's trading cycles works:

* Users need to approve the [contract allowance manager](../smart-contracts/vault-relayer/introduction) to enable trading for a desired token. This incurs a [transaction fee](definitions), but only needs to be done once per token, meaning that once you have approved a token, there aren't any more transaction fees for that token.
* Users can place *limit* sell/buy orders off-chain at any time by simply *signing a message* that contains their trade details. Users don't pay any gas for posting and cancelling orders. On the other hand, the **user does pay a [protocol fee](definitions)**.
* Off-chain orders are picked up by the solvers who will settle them in a batch auction.
  * At the start of a batch, all currently open orders on the protocol are considered;
  * For each batch an open competition to submit order settlement solutions by solvers takes place;
* The protocol selects the solver's order settlement solution that maximises trader welfare and provides the best clearing prices for the orders in that batch;
  * All matched orders within a batch can either be settled off-chain via the liquidity found in the CoWs across orders, or on-chain against AMM/aggregator liquidity.

From a users' perspective, a full trading cycle on CoW Protocol consists of three user actions:

1. Approve the allowance manager contract
2. Sign the order you want to place.
3. Enjoy the tokens you just traded.

### Conclusion

We believe CoW Protocol is critical infrastructure for open finance, which will see the creation of more and more tokenized assets, and will ultimately need a reliable trading mechanism that has the users best interest in mind.

Ultimately, CoW Protocol is built in the spirit of permissionless innovation. Its fully [decentralised](road-to-decentralisation) architecture means you don't need CoW Swap to build on our protocol.
