---
description: Get the CPU Information.
---

# getCPUCores\(\)

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

Client.getCPUCores('ServerID').then(response => {
    /** See the JSON object below
     * to see what response returns.
     */ 
}).catch((error) => {
    throw error;
});

```

The JSON object that `response` will be:

```c
[
    0.033,
    0.048,
    0.04,    
    0,
    0.031,
    0,
    0.021,
    0.024,
    0.249,
    0.042,
    0.007,
    0,
    0.293,
    0.003,
    0.6,
    0.131
]
```

