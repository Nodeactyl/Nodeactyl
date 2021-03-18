---
description: Gets all the server available to the API key.
---

# getAllServers\(\)

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

Application.getAllServers().then(servers => {
    // Retuns an array of servers (see below)
}).catch(err => {
    console.log(err);
})
```

```javascript
[
  {
    object: 'server',
    attributes: {
      id: 24,
      external_id: null,
      uuid: 'd6df07f3-9448-4f5f-9310-b434fc3df90f',
      identifier: 'd6df07f3',
      name: "Our Private Server",
      description: 'Remember to not delete this dalton',
      suspended: false,
      limits: [Object],
      feature_limits: [Object],
      user: 1,
      node: 1,
      allocation: 22,
      nest: 1,
      egg: 3,
      pack: null,
      container: [Object],
      updated_at: '2019-12-27T23:20:59+00:00',
      created_at: '2019-12-23T03:06:19+00:00'
    }
  },
  {
    object: 'server',
    attributes: {
      id: 25,
      external_id: null,
      uuid: '96352174-1385-4bfd-bba3-e63ec9fc3c8d',
      identifier: '96352174',
      name: 'Spigot Testing',
      description: 'Server specifically designed for testing plugins',
      suspended: false,
      limits: [Object],
      feature_limits: [Object],
      user: 1,
      node: 1,
      allocation: 23,
      nest: 1,
      egg: 3,
      pack: null,
      container: [Object],
      updated_at: '2019-12-27T23:22:25+00:00',
      created_at: '2019-12-27T23:22:09+00:00'
    }
  }
]
```

