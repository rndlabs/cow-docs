# Road to Decentralisation

CoW Protocol aims to be a fully decentralised protocol, but the reality is that in order to fully be decentralised, there's still a long road to walk ahead. Currently, the protocol has certain parts that are more decentralised than others, and if we were to compartmentalise the protocol into pieces, we would have the following:

* User Interface - CoW Swap (front-end)
* Smart Contracts - Allowance & Settlement Contract
* Batch consensus - Order database
* Solvers - Algorithms

Both the user interface and the smart contracts are pieces that are already at 100% level of decentralisation. The UI can be used by anyone without any possible blocking as it resides in [IPFS](https://ipfs.io). The smart contracts have no admin key, and do not hold users' balances in them, making them fully trustless and decentralised. On the other hand, the order database & the solvers are the parts of the protocol that need the most work to achieve decentralisation. This is why in order to do it correctly, we have decided to do it in *phases* rather than all at once.

### ✅ Phase 1

> Initially, the smart contract curates a list of trusted solvers (e.g. an account running the solver implementation in gp-v2-services). This list would be given to the CowDAO and will essentially control who gets to submit settlement solutions. People that want to implement solver strategies in this phase are invited to submit PRs to our repository to include their logic.
>
> It will allow competition between different independent solver accounts that communicate via some sort of central managed channel. Each solver would announce the “objective value” (what that value should be optimised for, is a separate topic) they have computed for the current batch auction and all together they agree on who obtains the right to settle this auction. In order to compute the objective value there needs to be consensus on what the state of the auction is (all valid orders for which surplus should be achieved). This is done via a central off-chain orderbook API (more on how to decentralise this part in [phase 3](#phase-3)). We should maybe mention here that for an order to be considered valid by the Orderbook API it needs to pay a "sufficient [protocol fee](definitions)" (to be discussed in a separate topic) to the protocol.
>
> In this phase the DAO would still pay close attention to who becomes an authenticated solver as all of them should be held accountable for any possible damage done to traders caused by a malicious solver. Furthermore we expect the DAO to payout rewards (transaction costs + a % taken from accrued protocol fees) to solvers based on their contribution.

#### Outcomes

1. The [allow-list authenticator](../smart-contracts/allow-list-authenticator/introduction) contract (which is an `EIP-1967` proxy) has had it's [`owner` migrated to CoW DAO](https://etherscan.io/address/0x2c4c28DDBdAc9C5E7055b4C863b72eA0149D8aFE#readContract#F1)
2. [CIP-11: Update Rules of the Solver Competition](https://snapshot.org/#/cow.eth/proposal/0x16d8c681d52b24f1ccd854084e07a99fce6a7af1e25fd21ddae6534b411df870)
3. [CIP-20: Auction model for solver rewards](https://snapshot.org/#/cow.eth/proposal/0x2d3f9bd1ea72dca84b03e97dda3efc1f4a42a772c54bd2037e8b62e7d09a491f)

### 👉 Phase 2

While the core [settlement contract](../smart-contracts/settlement/introduction) is *not* upgradable, the logic of how solvers are *authenticated* is upgradeable. In phase 2, we envision CoW DAO to put in place a permissionless model, where anyone can become an authenticated solver as long as they stake the asset and amount defined by the Cow DAO. For this phase, the DAO would agree on a set of rules (e.g. under what circumstances batches are allowed to be split into multiple ones, which set of on-chain liquidity has to be at least considered for a solution, etc).

Upon violation of these rules, the DAO can vote to slash a solver’s stake. The set of rules could be coded into a "verifier client" that members of the DAO run in order to indicate when a slashing vote should be cast.

The second, and arguably less crucial, piece of infrastructure that is centralised is the off-chain orderbook API (part of [services](https://github.com/cowprotocol/services)). In order to adjudicate over suspected malicious behaviour by a solver, participants need to agree on the state of the auction at the time of solution finding (e.g. the set of valid orders at this point in time).

### 🔭 Phase 3

In phase 3 we hope that the centralised orderbook changes to a distributed P2P client network. Consensus could be reached:

* by a native client implementation,
* by making Cow Protocol a first party citizen in Ethereum nodes (e.g. `geth`, `erigon`), or
* by piggy-backing on a cheap side chain or test network (e.g. [Gnosis Chain](https://gnosischain.com)) for data availability.
