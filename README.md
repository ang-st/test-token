# ethereum_token_tutorial
Create an Ethereum(ERC-20) token using open source contracts(open-zeppelin)

Reference to medium article here: https://medium.com/@danieljoonlee/create-an-ethereum-token-using-open-source-contracts-open-zeppelin-1e132e6233ed

```
#install truffle
npm install -g truffle

```

```
 truffle migrate                                                                                                                                                                                                                   130 ↵
Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x818c3392c4ba7d2092ed9989624229fdfe7599e1dff2120889f0ce37e884e854
  Migrations: 0x3c3543957f56c6e2974e7fd1ddb62abcdac35aed
Saving successful migration to network...
  ... 0xdd9ddc60719c0c21feddb4593d039e282241a054b707f05068e604a78ee961b5
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying TestToken...
  ... 0x93e846fe7170016a04052c8f6240578b892b54918362fb678b87bc6b97b059be
  TestToken: 0x544842acfce6d91ff6d0c2961c75418fb6b929ae <==== THIS is the contract address
Saving successful migration to network...
  ... 0x389da0231fa534e129fcb6ae252f96d69ea2d6dc2b3069ecd77d236a213a7435
Saving artifacts...

```
