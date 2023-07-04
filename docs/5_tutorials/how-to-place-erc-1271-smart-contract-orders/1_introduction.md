# How to place ERC-1271 (Smart Contract) Orders

The following section is intended as a guide on how to place Smart Contract orders with ERC-1271.

All the code needed to implement such feature can be found in the following GitHub: [https://github.com/nlordell/dappcon-2022-smart-orders](https://github.com/nlordell/dappcon-2022-smart-orders)

## Introduction

A sample CoW Protocol smart order contract.

CoW Protocol supports ERC-1271 signatures. While this is typically thought of as a way for Smart Contract wallets to sign things, we can leverage this standard for creating special order types on CoW with custom validation logic.
