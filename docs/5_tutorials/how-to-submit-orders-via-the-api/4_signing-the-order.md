# 3. Signing the order

We will resume the example from above, setting the validity (Unix timestamp) to [August 4th 2021](https://www.epochconverter.com/?q=1628035200). We use `keccak(GPv2 Place Order Tutorial)` as appData (you can use your individual 32 bytes to identify the “source” of your orders).

Our TypeScript library provides a convenient way to create valid signatures for your order.

```typescript
import {
  domain,
  Order,
  SigningScheme,
  signOrder,
} from "@gnosis.pm/gp-v2-contracts"

const [trader] = await ethers.getSigners();
const order = {
    sellToken: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
    buyToken: 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,
    sellAmount: 10000000000,
    buyAmount: 4959721654652700610,
    validTo: 1628035200,
    appData: 0xf785fae7a7c5abc49f3cd6a61f6df1ff26433392b066ee9ff2240ff1eb7ab6e4,
    feeAmount: 14075734,
    kind: OrderKind.SELL,
    partiallyFillable: false,
    receiver: ethers.constants.AddressZero,
  }
const raw_signature = await signOrder(
      domain(1, ”0x9008D19f58AAbD9eD0D60971565AA8510560ab41”),
      order,
      trader,
      SigningScheme.ETHSIGN
    );
// Needed to turn the three part object into a single bytestring
const signature = ethers.utils.joinSignature(rawSignature.data);
```

If you are using a different programming language you may have to write your own signing logic. Here are some pointers:

* [A reference implementation in rust](https://github.com/gnosis/gp-v2-services/blob/d76f23b867e8dbb201f51736c9666e9b18d1086e/model/src/order.rs#L166) (the domain separator can be queried from the [Settlement Contract](https://etherscan.io/address/0x9008D19f58AAbD9eD0D60971565AA8510560ab41#readContract))
* [A sample trading bot in python](https://pastebin.com/cKXUz0SW)
* [A sample trading bot in go](https://pastebin.com/r787C2wT)

The ultimate source of truth for signature verification is the smart contract’s implementation of the [order digest](https://github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/libraries/GPv2Order.sol#L134) and how it gets verified given [different signing schemes](https://github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/mixins/GPv2Signing.sol#L141).

## **Security notice:**

Do not sign orders with simultaneously `sellAmount == 0`, `buyAmount == 0`, and `partiallyFillable == false`.

Because of a known issue in the contracts, such orders can be settled unlimited times, which means that any solver could take the [protocol fee](../../overview/definitions) amount multiple times. There is normally no reason to generate such "empty" order. However, you should consider this case if you are signing orders that come from potentially untrusted sources.
