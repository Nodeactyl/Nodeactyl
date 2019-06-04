This API is written in NodeJS, i originally made this because i have a small hosting bussiness (https://serverhouse.pro) and i needed a bot that can interact with my panel. The only library that exists for it is for JDA (One might exist for python or other languages but idk). 

While this was originally meant to work with Discord.js, it will work with any of NodeJS librarys, such as socket.io and more!.

## Installation
```javascript
// This npm works, feel free to use it
npm install client-nodeactyl
OR
// Working on it!
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

`Dont even try using this API without reading Getting Started guide.`

## Client API

How to get online status of a server (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.isOnline("SERVER ID HERE").then(response => {
    console.log(response);
});
// Above function can return True, False, or a full stack error (caused by wrong URL, API Key or bad connection)
```

How to check is the API Key holder is the owner of a server(Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.isOwner("SERVER ID HERE").then(response => {
    console.log(response);
});
// Above function can return True, False, or a full stack error (caused by wrong URL, API Key or bad connection)
```

How to get CPU Usage (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getCPU("SERVER ID HERE").then(response => {
    console.log(response.TotalCPU); // Logs the CPU Usage
});
// Returns CPU Usage in a JSON Object:
/*
{
    "TotalCPU": "23%"
}*/
```

How to get RAM Usage (Used API: Client)
``` javascript
const client = require('client-nodeactyl');
client.login("SERVER ID HERE", "API KEY HERE");

.client.getRAM("SERVER ID HERE").then(response => {
    console.log(response); // Logs whole JSON Object
    console.log(response.TotalRAM); // Logs the total ram of the server
});
// Returns RAM Usage in a JSON Object:
/*
{
    "TotalRAM": 1024,
     "UsedRAM": 234
}*/
```

How to get Disk usage (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getDisk("SERVER ID HERE").then(response => {
    console.log(response); // Logs the whole JSON Object
    console.log(response.TotalDisk); // Logs the total disk of the server
});
// Returns storage in a JSON Object
/*
{
    "UsedDisk": 657
    "TotalDisk": 10000
}*/
```

How to stop a server (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.stopServer("SERVER ID HERE"); // You can show a full print log by calling a promise and calling response.data
```

How to start a server (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.startServer("SERVER ID HERE"); // You can show a full print log by calling a promise and calling response.data
```

How to get name/description of a server (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getNames("SERVER ID HERE").then(response => {
    console.log(response); // Logs the whole JSON Object
});
// Returns storage in a JSON Object
/*
{
    "Name": "Super neat server (Not really)",
    "Description": "A cool Server"
}*/
```
How to get the IDs of a server
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getDisk("SERVER ID HERE").then(response => {
    console.log(response); // Logs the whole JSON Object
    console.log(response.TotalDisk); // Logs the total disk of the server
});
// Returns storage in a JSON Object
/*
{
    "ID": "86s3n93",
    "UUID": "soidhyffiuy87trg8rhg8egvregfyiegyurgfduiegfiwhgdfiudwhgfiuw2huifregyufgwipgfugwiufgyrfguiewgfruehufhgwdg"
}*/
```

How to get a server's allocation amount (Used API: Client)
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getAllocationAmt("SERVER ID HERE").then(response => {
    console.log(response); // Logs the whole JSON Object
});
// Returns storage in a JSON Object
/*
{
    "Amount": 2
}*/
```

How to get a server's MySQL Database amount (Used API: Client) 
```javascript
const client = require('client-nodeactyl');
client.login("PANEL URL HERE", "API KEY HERE");

client.getDatabaseAmt("SERVER ID HERE").then(response => {
    console.log(response); // Logs the whole JSON Object
});
// Returns storage in a JSON Object
/*
{
    "Amount": 1
}*/
```

## Admin API

How to change a servers name (Used API: Admin) 
```javascript
const admin = require('admin-nodeactyl');
admin.login("PANEL URL HERE", "API KEY HERE");

admin.changeName("INTERNAL SERVER ID HERE", "NEW NAME");
```

How to change a server description (Used API: Admin)
```javascript
const admin = require('admin-nodeactyl');
admin.login("PANEL URL HERE", "API KEY HERE");

admin.changeDescription("INTERNAL SERVER ID HERE", "NEW DESCRIPTION");
```
