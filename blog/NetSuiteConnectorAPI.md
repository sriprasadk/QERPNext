---
slug: NetSuite Connector API
title: NetSuite Connector API
authors: Sri
tags: [NetSuite ERPConnector]
---
 
## Oracle NetSuite Connector API

This is a simple example of a Node.js connector API to interact with Oracle NetSuite using the `netsuite-rest-client` library.

## Setup

1. **Initialize Node.js Project:**

   ```bash
   mkdir netsuite-connector
   cd netsuite-connector
   npm init -y
   npm install netsuite-rest-client

const NetsuiteRestClient = require('netsuite-rest-client');
## Create Connector File:

```js
const NetsuiteRestClient = require('netsuite-rest-client');

const netsuiteConfig = {
  accountId: 'YOUR_ACCOUNT_ID',
  suiteAppTokenId: 'YOUR_SUITEAPP_TOKEN_ID',
  suiteAppTokenSecret: 'YOUR_SUITEAPP_TOKEN_SECRET',
  tokenId: 'YOUR_TOKEN_ID',
  tokenSecret: 'YOUR_TOKEN_SECRET',
  baseUrl: 'https://1234567.suitetalk.api.netsuite.com', // Replace with your NetSuite account ID
};

const netsuiteClient = new NetsuiteRestClient(netsuiteConfig);

// Example function to get a list of customers
async function getCustomers() {
  try {
    const customers = await netsuiteClient.list('customers');
    return customers;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
}

module.exports = { getCustomers };

```
##Further Enhancements:

Handle authentication securely (consider using environment variables).
Implement error handling and additional functions as needed.
Structure code for better organization and scalability.

