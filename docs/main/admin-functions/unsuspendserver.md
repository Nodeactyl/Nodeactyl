---
description: Unsuspends servers with the application api.
---

# unSuspendServer\(\)

```javascript
const node = require('nodeactyl');
const Application = node.Application;

Application.login('HOST', 'APIKEY', (logged_in, err) => {
    console.log(logged_in);
    /** If you want call the function in here, 
     * But we prefer you do have Application.login() at the top of your
     * project and use the following syntax:
     */
});

Application.unSuspendServer("InternalID").then(server => {
    // Retuns response from server
}).catch(err => {
    console.log(err);
})
```

{% hint style="warning" %}
Internal ID is not the id you see on the panel \(77f0394f\)   
You can use getAllServers\(\) to get the servers' Internal ID.
{% endhint %}

{% hint style="info" %}
If server is suspended successfully the response is "Server unsuspended successfully" else it will return undefined.
{% endhint %}

