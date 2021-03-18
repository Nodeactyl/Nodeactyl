---
description: Check if the API key holder is the owner of a server.
---

# isOwner\(\)

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


node.isOwner('af8c9137').then(response => {
    //do something with the infomation
    
    if (response === true) {
        //server is owned by API Key Holder
        console.log('API Key Holder is the owner of this server.')
    } 
    
    else {
        //server is not owned by API Key Holder
        console.log('API Key Holder is NOT the owner of this server.')
    }
});
```

