---
description: Gets all servers a API key has access to
---

# getAllServers\(\)

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

Client.getAllServers().then((response) => {
   // response will be a JSON Array like below
}).catch((error) => {
    console.log(error);
});
```

```javascript
[
      {
         "object":"server",
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
         }
      },
      {
         "object":"server",
         "attributes":{
            "server_owner":true,
            "identifier":"d3aasd879",
            "uuid":"d3aac109-e5a0-4331-b03e-shdk87h7d783d",
            "name":"Creative",
            "description":"",
            "limits":{
               "memory":2048,
               "swap":512,
               "disk":10000,
               "io":500,
               "cpu":400
            },
            "feature_limits":{
               "databases":1,
               "allocations":2
            }
         }
      }
   ]
```

