---
description: Will get all the information about a server.
---

# getServerInfo\(\)

```javascript
const node = require('nodeactyl');
const Client = node.Client;

Client.login('HOST', 'APIKEY', (logged_in, err) => {
    console.log(logged_in);
    /** If you want call the function in here, 
     * But we prefer you do have Client.login() at the top of your
     * project and use the following syntax:
     */
});

Client.getServerInfo('ServerID').then(response => {
    /** See the JSON object below
     * to see what response returns.
     */ 
}).catch((error) => {
    throw error;
});
```

The JSON object that `response` will be:

```c
{
   "server_owner": true,
   "identifier": "af8c9137",
   "uuid": "af8c9137-e5a0-4331-b03e-3454f7e136dc",
   "name": "Survival",
   "description": "a description",
   "limits":{
      "memory": 1024,
      "swap": 0,
      "disk": 5000,
      "io": 500,
      "cpu": 200
   },
   "feature_limits":{
      "databases": 5,
      "allocations": 5
   }
}
```

