---
description: Deletes a node
---

# deleteNode\(\)

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

Application.deleteNode("NodeID").then(node => {
    // Returns "Node deleted successfully"
}).catch(err => {
    console.log(err);
})
```

