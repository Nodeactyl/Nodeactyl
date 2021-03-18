---
description: Deletes a server with an InternalID
---

# deleteServer\(\)

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

Application.deleteServer("InternalID").then(server => {
    // Returns "Server deleted successfully"
}).catch(err => {
    console.log(err);
})
```

