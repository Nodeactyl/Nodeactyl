*If you have issues with downloading this package, and you come accross "package.json" not found, open a cmd.exe in the startup bar of your PC and then type* `npm init -y`*

**IF YOU HAVE ANY ISSUES WITH THIS API, PLEASE JOIN THIS DISCORD AND ASK FOR SUPPORT.** https://discord.gg/beTDVtD

`Stars are very much appreciated <3, i would really appreciate if you find this project useful to please share with your frends :)`
## Extras

While this was originally meant to work with Discord.js, it will work with any of NodeJS librarys, such as socket.io and more!.

## Installation
```javascript
npm install nodeactyl
```

## Getting started
First, follow the installation instructions, then you will need to have the following in your code.<br />
![alt Your device does not support this](https://i.ibb.co/nmcTPKs/require.png)

**AS OF 1.3.0 AND AFTER THIS WAS CHANGED TO THIS!!**
After importing the API, you need to "login" to your panel/server like so:<br />
![alt Your device does not support this](https://i.ibb.co/DY7tD6c/login.png)
<br />You need to specify wether you login() needs to be a client login or administrator login/


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

How to send a commands to a server.<br />
![alt Your device does not support this](https://i.ibb.co/TBpLcq4/send-Command.png)

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

**NOTE YOU WILL NEED A APPLICATION API KEY NOT YOUR ACCOUNT API**

How to list all users.<br />
**NOTE:** Take a look at the getALlServers() in the /examples/ area, this works the same way
![alt Your device does not support this](https://i.ibb.co/3S4n4YG/get-All-Users.png)
```javascript
/* RETURNS JSON OBJECT(S) LIKE THIS:
    {
      "object": "user",
      "attributes": {
        "id": 1,
        "external_id": null,
        "uuid": "c4022c6c-9bf1-4a23-bff9-519cceb38335",
        "username": "codeco",
        "email": "codeco@file.properties",
        "first_name": "Rihan",
        "last_name": "Arfan",
        "language": "en",
        "root_admin": true,
        "2fa": false,
        "created_at": "2018-03-18T15:15:17+00:00",
        "updated_at": "2018-10-16T21:51:21+00:00"
      }
    }
```

How to get user my UserID<br />
![alt Your device does not support this](https://i.ibb.co/hVmC0CT/get-User-Info.png)
```javascript
/* RETURNS A JSON LIKE THIS
{
  "object": "user",
  "attributes": {
    "id": 1,
    "external_id": null,
    "uuid": "c4022c6c-9bf1-4a23-bff9-519cceb38335",
    "username": "codeco",
    "email": "codeco@file.properties",
    "first_name": "Rihan",
    "last_name": "Arfan",
    "language": "en",
    "root_admin": true,
    "2fa": false,
    "created_at": "2018-03-18T15:15:17+00:00",
    "updated_at": "2018-10-16T21:51:21+00:00"
  }*/
```
  
How to get user by external ID. <br />
![alt Your device does not support this](https://i.ibb.co/RCt34ry/get-User-By-External-ID.png)
```javascript
/* RETURNS A JSON LIKE THIS
{
  "object": "user",
  "attributes": {
    "id": 1,
    "external_id": null,
    "uuid": "c4022c6c-9bf1-4a23-bff9-519cceb38335",
    "username": "codeco",
    "email": "codeco@file.properties",
    "first_name": "Rihan",
    "last_name": "Arfan",
    "language": "en",
    "root_admin": true,
    "2fa": false,
    "created_at": "2018-03-18T15:15:17+00:00",
    "updated_at": "2018-10-16T21:51:21+00:00"
  }
}*/
```
How to create a user. <br />
![alt Your device does not support this](https://i.ibb.co/Snx4b0y/create-User.png)

How to change user account details. <br />
![alt Your device does not support this](https://i.ibb.co/VH0RJs5/change-Account.png)

How to delete an account. <br />
![alt Your device does not support this](https://i.ibb.co/TLjx5yj/delete-Account.png)

How to list all nodes. <br />
**NOTE:** Follow example for getAlllServers() to fully use this API!<br />
![alt Your device does not support this](https://i.ibb.co/8479xg5/get-All-Nodes.png)
```javascript
/* RETURNS A JSON OBJECT LIKE SO:
    {
      "object": "node",
      "attributes": {
        "id": 2,
        "public": true,
        "name": "Test",
        "description": "Test",
        "location_id": 1,
        "fqdn": "fsn1.matthewp.io",
        "scheme": "https",
        "behind_proxy": false,
        "maintenance_mode": false,
        "memory": 4096,
        "memory_overallocate": 0,
        "disk": 10000,
        "disk_overallocate": 0,
        "upload_size": 100,
        "daemon_listen": 2096,
        "daemon_sftp": 2022,
        "daemon_base": "\/tmp\/daemon-data",
        "created_at": "2018-04-06T02:19:33+00:00",
        "updated_at": "2018-10-28T01:13:03+00:00"
      }
    }*/
```

How to get Node by ID:<br />
![alt Your device does not support this](https://i.ibb.co/rwJmMw4/getNode.png)
```javascript
/* RETURNS A JSON OBJECT LIKE SO:
{
  "object": "node",
  "attributes": {
    "id": 2,
    "public": true,
    "name": "Test",
    "description": "Test",
    "location_id": 1,
    "fqdn": "fsn1.matthewp.io",
    "scheme": "https",
    "behind_proxy": false,
    "maintenance_mode": false,
    "memory": 4096,
    "memory_overallocate": 0,
    "disk": 10000,
    "disk_overallocate": 0,
    "upload_size": 100,
    "daemon_listen": 2096,
    "daemon_sftp": 2022,
    "daemon_base": "\/tmp\/daemon-data",
    "created_at": "2018-04-06T02:19:33+00:00",
    "updated_at": "2018-10-28T01:13:03+00:00"
  }
}
*/
```

How to create/edit a node:,br />
**Seriously... you dont want a API for this. just do it manually** (Will add if requested)

How to delete a node: <br />
![alt Your device does not support this](https://i.ibb.co/nM7b6BB/delete-Node.png)

How to list node allocations (Which servers have which ports, or see if ports are open):<br />
**NOTE:** Take a look at the /examples/ for getAllServers() in order to use this API fully<br />
![alt Your device doest not support this](https://i.ibb.co/ZhjgGy4/get-Node-Allocations.png)
```javascript
/* RETURNS A JSON OBJECT LIKE SO:
{
      "object": "allocation",
      "attributes": {
        "id": 3,
        "ip": "195.201.194.74",
        "alias": null,
        "port": 25499,
        "assigned": true
      }
    }
*/
```

How to create/delete allocations:,br />
**Will be added if requested**

How to get every single server on the panel:<br />
**NOTE:** Take a look at the /examples/ for getAllServers() in order to use this API fully
![alt Your device does not support this](https://i.ibb.co/cCnpSWR/get-Every-Last-Server.png)
```javascript
/* RETURNS A JSON OBJECT AS SO:
{
      "object": "server",
      "attributes": {
        "id": 2,
        "external_id": null,
        "uuid": "47a7052b-f07e-4845-989d-e876e30960f4",
        "identifier": "47a7052b",
        "name": "Eat Cows",
        "description": "",
        "suspended": false,
        "limits": {
          "memory": 2048,
          "swap": -1,
          "disk": 10000,
          "io": 500,
          "cpu": 300
        },
        "feature_limits": {
          "databases": 10,
          "allocations": 0
        },
        "user": 1,
        "node": 2,
        "allocation": 3,
        "nest": 1,
        "egg": 4,
        "pack": null,
        "container": {
          "startup_command": "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
          "image": "quay.io\/pterodactyl\/core:java",
          "installed": true,
          "environment": {
            "SERVER_JARFILE": "server.jar",
            "VANILLA_VERSION": "latest",
            "STARTUP": "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
            "P_SERVER_LOCATION": "test",
            "P_SERVER_UUID": "47a7052b-f07e-4845-989d-e876e30960f4"
          }
        },
        "updated_at": "2018-11-20T14:35:00+00:00",
        "created_at": "2018-09-29T22:50:16+00:00"
      }
    }
*/
```

how to get detailed server details:<br />
![alt Your device does not support this](https://i.ibb.co/kqRqW0R/get-All-Server-Details.png)
```javascript
/* RETURNS A JSON OBJECT AS SO:
{
  "object": "server",
  "attributes": {
    "id": 2,
    "external_id": null,
    "uuid": "47a7052b-f07e-4845-989d-e876e30960f4",
    "identifier": "47a7052b",
    "name": "Survival",
    "description": "gsk;ljgkj;hgdakl;gha",
    "suspended": false,
    "limits": {
      "memory": 2048,
      "swap": -1,
      "disk": 10000,
      "io": 500,
      "cpu": 300
    },
    "feature_limits": {
      "databases": 10,
      "allocations": 0
    },
    "user": 1,
    "node": 2,
    "allocation": 3,
    "nest": 1,
    "egg": 4,
    "pack": null,
    "container": {
      "startup_command": "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
      "image": "quay.io\/pterodactyl\/core:java",
      "installed": true,
      "environment": {
        "SERVER_JARFILE": "server.jar",
        "VANILLA_VERSION": "latest",
        "STARTUP": "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
        "P_SERVER_LOCATION": "test",
        "P_SERVER_UUID": "47a7052b-f07e-4845-989d-e876e30960f4"
      }
    },
    "updated_at": "2018-11-20T02:52:37+00:00",
    "created_at": "2018-09-29T22:50:16+00:00"
  }
}
*/
```

How to Update Server Build configuration/update Startup parameters/update server details:
**Please, save yourself the hassle and do it in the panel** (Will add upon request)

How to suspend a server:<br />
![alt Your device does not support this](https://i.ibb.co/4Sp6RZn/suspend.png)

How to unsuspend a server:<br />
![alt Your device does not support this](https://i.ibb.co/NN96wd2/unsuspend.png)

How to rebuild a server:<br />
![alt Your device does not support this](https://i.ibb.co/7JZ3jsG/rebuilds.png)

How to delete a server:<br />
![alt Your device does not support this](https://i.ibb.co/nfCHgLw/delete.png)
