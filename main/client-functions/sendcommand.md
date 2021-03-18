---
description: Sends a command to a currently online server.
---

# sendCommand\(\)

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

Client.sendCommand("ServerID", "CommandToSend").then((response) => {
    // Response will be "Command send successfully
}).catch((error) => {
    // Read the notice down below
    console.log(error);
});
```

{% hint style="danger" %}
This request will throw error `412` if the server is offline. You will be told to read the documentation upon receiving this error.
{% endhint %}

