# Balancer External Balances

The first mechanism that the Vault relayer contract can use to withdraw user ERC-20 tokens is through Vault external balances. This works by having an ERC-20 allowance for the Balancer Vault, and a relayer approval for the Vault relayer contract.

This allowance and approval combination allows the Vault relayer contract to transfer ERC-20 tokens through the Vault. Roughly speaking, the process works in the following way:

1. Vault relayer request to the Balancer Vault an ERC-20 transfer from the user account to the Settlement contract
2.  The Balancer Vault verifies that the vault relayer contract is:

    a. authorised by Balancer governance to act as a relayer

    b. The user has set an approval for that specific relayer
3. The Balancer Vault issues an ERC-20 transfer from the user account to the Settlement contract using the Vault's existing ERC-20 allowance

This system for withdrawing user funds has several advantages such as :

* It can reuse existing Vault ERC-20 allowances and doesn't require new ones specific to the CoW Protocol.
* Upgrades to the CoW Protocol contract would only require a single relayer approval for all tokens instead of individual ERC-20 approvals for each token being traded.
* The Vault relayer approval can be revoked by a single transaction to the Vault instead of multiple transactions to each ERC-20 token for which the user wants to remove the approval.

Orders with the sell token balance flag set to "external" will withdraw using this process.
