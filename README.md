*There has been issues with downloading this package, if you come accross "package.json" not found, open a cmd.exe in the startup bar of your PC and then type* `npm init` *Proceed to fill out random stuff (not joking just do it), and you shouldnt have any issues after that*

**IF YOU HAVE ANY ISSUES WITH THIS API, MY NAME IS DALTON BURCHARD, MY DISCORD IS** `Dalton Burchard#7705` **PLEASE JOIN THIS DISCORD AND TAG ME (OR PRIVATE MESSAGE TO IS OKAY).** https://discord.gg/beTDVtD

# Update!!
*I will be rewriting this API, for better error handling*

`This API will now merge the client + admin together, the admin commands are here but just not docuemnted, an IDE may reveal these functions, theyre pretty self explanitory but they will be documented soon`

This API is written in NodeJS, i originally made this because  i needed a bot that can interact with my panel. The only library that exists for it is for JDA (One might exist for python or other languages but idk). 

## Extras

While this was originally meant to work with Discord.js, it will work with any of NodeJS librarys, such as socket.io and more!.

`Stars are very much appreciated <3, i would really appreciate if you find this project useful to please share with your frends :)`

## Installation
```javascript
npm install nodeactyl
```

## Getting started
First, follow the installation instructions, then you will need to have the following in your code.
![alt Your device does not support this](https://i.ibb.co/nmcTPKs/require.png)

After importing the API, you need to "login" to your panel/server like so:
![alt Your device does not support this](https://i.ibb.co/MnYV7Mq/install.png)


## What am i?
Nodeactyl is an API For NodeJS to communicated with the panel, you can control ANY server on your nodes with it (If you purchase a server from another host, no worry! The API works with your own server too!) . Thie library original intent was to be for discord bots, but since this is in NodeJS, it is usable in ANY type of NodeJS program You can remake your own UI for the panel, and just stick with the pterodactyl daemon, doesnt suit you? use it in socket.io and have your node/server information displayed on a webpage! The possibilitys are endless! 

## How do i work?
This API works by using the pterodactyl API (Curl requests) to the server/node, by gathering the Panel website, Account API and a server/node ID. This library depends on axios, a promise basid http/https request system, this is how nodectyl is able to send curl commands to pterodactyl. The API itself is VERY simple and i am extremely suprised that no one has even tried making one (There are probably private ones, but none are avaliable to the public).


## Documentation
Heres is the official documentation website: `https://nodeactyl.jellydev.xyz/`

Below is some basic documentation, but please note, this page will not contain 
the full documentation

`Dont even try using this API without reading Getting Started guide.`

## Below is mainly client-sided API Usages


How to get online status of a server.<br />
![alt This isnt avaliable for your device](https://i.ibb.co/Q9WqpSV/isOnline.png)

How to get the entire server object (returns literally everything).
![alt This isnt avaliable for your device](https://i.ibb.co/LkbKHqR/get-Server-Info.png)
```javascript
/* Returns a JSON Object like so:
   "attributes":{
      "server_owner":true,
      "identifier":"d3aac109",
      "uuid":"d3aac109-e5a0-4331-b03e-3454f7e136dc",
      "name":"Survival",
      "description":"",
      "limits":{
         "memory":1024,
         "swap":0,
         "disk":5000,
         "io":500,
         "cpu":200
      },
      "feature_limits":{
         "databases":5,
         "allocations":5
      }
   }*/
```

How to check if the API Key holder is the owner of a server.<br />
![alt Your device does not support this](https://i.ibb.co/Gx67pWk/isOwner.png)

How to get CPU Usage.<br />
![alt your device does not support this](https://i.ibb.co/LvhcMGL/getCPU.png)
```javascript
/* Returns CPU Usage in a JSON Object:
{
    "totalCPU": "23%"
}*/
```

How to get RAM Usage.<br />
![alt Your device does not support this](https://i.ibb.co/ry8fVbF/getRAM.png)
``` javascript
/* Returns RAM Usage in a JSON Object:
{
    "totalRAM": 1024,
     "usedRAM": 234
}*/
```

How to get Disk usage.<br />
![alt Your device does not support this](https://i.ibb.co/3yRJ79X/getDisk.png)
```javascript
/* Returns storage in a JSON Object
{
    "usedDisk": 657
    "totalDisk": 10000
}*/
```

How to get name/description of a server.<br />
![alt Your device does not support this](https://i.ibb.co/hMwF5sf/getNames.png)
```javascript
/* Returns storage in a JSON Object
{
    "name": "Super neat server (Not really)",
    "description": "A cool Server"
}*/
```

How to get the IDs of a server.<br />
![alt Your device does not support this](https://i.ibb.co/XXP8Frd/get-Server-IDs.png)
```javascript
/* Returns storage in a JSON Object
{
    "id": "86s3n93",
    "uuid": "soidhyffiuy87trg8rhg8egvregfyiegyurgfduiegfiwhgdfiudwhgfiuw2huifregyufgwipgfugwiufgyrfguiewgfruehufhgwdg"
}*/
```

How to get a server's allocation amount.<br />
![alt Your device does not support this](https://i.ibb.co/BBpXyNJ/get-Allocation-Amt.png)
```javascript
/* Returns storage in a JSON Object
{
    "amount": 2
}*/
```

How to get a server's MySQL Database amount. <br />
![alt Your device does not support this](https://i.ibb.co/Z2kHBBH/get-Database-Amt.png)
```javascript
/* Returns storage in a JSON Object
{
    "amount": 1
}*/
```

How to stop a server.<br />
![alt Your device does not support this](https://i.ibb.co/VTDvT5q/stop-Server.png)

How to start a server.<br />
![alt Your device does not support this](https://i.ibb.co/ZGX1fBH/start-Server.png)

How to get a list of all servers a user has access to. <br />
**NOTE**: **PLEASE VIEW ** `Examples` **TO SEE THIS IN ACTION, THIS ALONE IS NOT ENOUGH TO DO WHAT YOU NEED**<br />
![alt Your device does not support this](https://i.ibb.co/LPLQHXj/get-All-Servers.png)
```javascript
/* RETURNS JSON LIKE THIS:
"attributes":{
    "server_owner":true,
    "identifier":"d3aac109",
    "uuid":"d3aac109-e5a0-4331-b03e-3454f7e136dc",
     name":"Survival",
     "description":"",
     "limits":{
           "memory":1024,
           "swap":0,
           "disk":5000,
           "io":500,
           "cpu":200
        },
    "feature_limits":{
       "databases":5,
       "allocations":5
        }
     }
 }*/
// (This will keep repeating)
```

## These below are mainly admin related commands

How to change a servers name.
```javascript
const Node = require('nodeactyl');
Node.login("PANEL URL HERE", "API KEY HERE");

Node.changeName("INTERNAL SERVER ID HERE", "NEW NAME");
```

How to change a server description.
```javascript
const Node = require('nodeactyl');
Node.login("PANEL URL HERE", "API KEY HERE");

Node.changeDescription("INTERNAL SERVER ID HERE", "NEW DESCRIPTION");
```
