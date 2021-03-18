---
description: Stops a server
---

# stopServer\(\)

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

Client.stopServer("ServerID").then((response) => {
   // response will be "Server stopped successfully"
}).catch((error) => {
    console.log(error);
});
```

