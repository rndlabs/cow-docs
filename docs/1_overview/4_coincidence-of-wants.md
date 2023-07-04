# Coincidence of Wants

CoW Protocol, because of its use of [Batch Auctions](batch-auctions), is optimised for finding Coincidence of Wants (CoWs) amongst the trades within a batch, as well as ring trades. But what exactly are *Coincidence of Wants* and ring trades?

Coincidence of Wants can be explained as "economic phenomenon where two parties each hold an item the other wants, and therefore exchange these items directly". This means that on CoW Protocol, when two trades or more each hold an asset that the other wants, their orders can be settled directly between all of them without the need for an external market maker or liquidity provider. CoW Protocol can create CoWs in a two dimensional orderbook, but can also create them on a *multi-dimensional* orderbook.

One of the advantages of using batch auctions is that not only can you find perfect CoW matching, but you can also create ring trades. Essentially, a ring trade shares liquidity across all orders, rather than a single token pair. This functionality allows the protocol to offer traders better prices as they do not need to wait to have the perfect match between trades since they can dissect the trades into pieces to improve their outcome. Ring trades therefore are a unique value proposition of CoW Protocol, providing a valuable solution to work around fragmented liquidity.

Once we know the theory behind CoWs, and Ring trades, let's deep dive into an example for both of them in hope of gaining a deeper understanding:

Example batch auction transaction: https://etherscan.io/tx/0x71d6f5bb2f29d16a0649d2b6a2eb3fabde8040598c21e675511d54e27399f6d2

In this batch auction, CoW Protocol found a Coincidence of Wants, from multiple users' orders. In this CoW, what we can see is that 12 swaps were mixed together to share liquidity amongst all of them. This allowed the protocol to settle a portion of the trade size internally, via CoWs, while only needing to tap into two different on-chain AMMs to cover the rest of the liquidity required for the batch.

Ring trades are a form of CoW that not only maximises the liquidity on a two dimensional orderbook, but instead maximises on a multi-dimensional level, meaning that the CoWs can be found in a minimum of three different tokens. Therefore the protocol is able to match different trading token pairs in the same batch auction and avoid having to interact with multiple AMM pools. One important aspect to understand is the slight difference between CoWs and ring trades; every ring trade is a CoW, but not every CoW is a ring trade. An example of a ring trade would be the following:

![](/img/cow_ring_trade.png)

*In our example, we have 3 different people, Alice is trying to sell `DAI-OWL`, Daniel is trying to sell `OWL-USDC`, and Bob & Carry are trying to sell `USDC-DAI`. Instead of having all of them trading against multiple liquidity pools to get the liquidity for their trade, the protocol forms a ring matching the three traders directly amongst each other.*

Overall, by leveraging Batch Auctions with CoWs as a first-class citizen, CoW Protocol is able to give better prices for trades because batching transactions results in a lower spread, as well as much more optimised transaction execution for the user.
