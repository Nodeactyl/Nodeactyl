---
description: Get the disk information.
---

# getDiskUsage\(\)



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

Client.getDiskUsage('ServerID').then(response => {
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
    "current": 657
    "limit": 10000
}
```

