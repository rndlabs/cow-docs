# 1. Setting Allowance for the sell token

For your order to be tradable, the owner account must allow the[ GPv2 Vault Relayer](https://etherscan.io/address/0xC92E8bdf79f0507f65a392b0ab4667716BFE0110) to spend the sell tokens on their behalf (if you are using an existing Balancer v2 approved token or the Balancer Vault's internal balance you may skip this step). You may either set a limited allowance (at least the amount of tokens you intend to sell) or an unlimited allowance (2\*\*256 - 1).

This can either be done using Etherscan, e.g. to set an unlimited allowance for USDC by visiting[ https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#writeProxyContract](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#writeProxyContract) and setting.

![](https://lh4.googleusercontent.com/NGTgGkxl564ffoySZvaY8fzZIn_luQ3-ZO2s1SkyOMtecwIweGjFCBukopBdgmY8JaTe6kf3Syx3Fiv_Z8VPmBRtFuuAdQVdPdnYYMmDmA4jCG22VCaT21AxlVkYtwL9cgBsV3OM07q_tGai6lHZB3sQanbF_i1SgVJgT9xz98yZq7izYD3UOgHKPBxRjQ)

It can also be done programmatically e.g. using the following ethers TypeScript snippet:

```typescript
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";
import { Contract, ethers } from "ethers";
const address = “0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48” // USDC
const erc20 = new Contract(address, ERC20.abi, ethers.provider);
const tx = await erc20
.connect(“your address”)
.approve(“0xC92E8bdf79f0507f65a392b0ab4667716BFE0110”, ethers.constants.MaxUint256);
await tx.wait
```
