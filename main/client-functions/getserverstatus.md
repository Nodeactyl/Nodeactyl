---
description: Gets the status of a running server
---

# getServerStatus\(\)



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

Client.getServerStatus("ServerID").then((status) => {
    // You will have to play with these values
    // Im not sure what all it returns
}).catch((error) => {
    console.log(error);
});
```

