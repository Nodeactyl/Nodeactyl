This API is written in NodeJS, i originally made this because i have a small hosting bussiness (https://serverhouse.pro) and i needed a bot that can interact with my panel. The only library that exists for it is for JDA (One might exist for python or other languages but idk). 

While this was originally meant to work with Discord.js, it will work with any of NodeJS librarys, such as socket.io and more!.

## Installation
```javascript
// This will be deprecated ASAP
npm install nodeactyl
// Soon you will have to do this
npm install client-nodeactyl
OR
npm install admin-nodeactyl
```

## Getting started
First, follow the installation instructions, then you will need to have the following in your code based on what you need

`Client-Side API`

```javascript
const client = require('client-nodeactyl.js');
```

`System Admin API`
```javascript
const admin = require('admin-nodeactyl.js');
```

After deciding your API, you need to "login" to your panel/server like so:

```javascript
const client = require('nodeactyl-client.js');

client.login("PANEL URL HERE", "ACCOUNT API KEY HERE");
```


## What am i?
Nodeactyl is an API For NodeJS to communicated with the panel, you can control ANY server on your nodes with it (If you purchase a server from another host, no worry! The API works with your own server too!) . Thie library original intent was to be for discord bots, but since this is in NodeJS, it is usable in ANY type of NodeJS program You can remake your own UI for the panel, and just stick with the pterodactyl daemon, doesnt suit you? use it in socket.io and have your node/server information displayed on a webpage! The possibilitys are endless! 

## How do i work?
This API works by using the pterodactyl API (Curl requests) to the server/node, by gathering the Panel website, Account API and a server/node ID. This library depends on axios, a promise basid http/https request system, this is how nodectyl is able to send curl commands to pterodactyl. The API itself is VERY simple and i am extremely suprised that no one has even tried making one (There are probably private ones, but none are avaliable to the public).


## Documentation
Heres is the official documentation website: `https://nodeactyl.jellydev.xyz/`

Below is some basic documentation, but please note, this page will not contain 
the full documentation



.
