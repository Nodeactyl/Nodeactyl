---
description: Grabs all a node's information available to a API key
---

# getNodeInfo\(\)

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

Application.getNodeInfo("NodeID").then(node => {
    // Retuns object of the node (see below)
}).catch(err => {
    console.log(err);
})
```

```bash
{
  object: 'node',
  attributes: {
    id: 1,
    public: true,
    name: 'NODE 1',
    description: 'NODE 1',
    location_id: 1,
    fqdn: '123.123.123.123',
    scheme: 'http',
    behind_proxy: false,
    maintenance_mode: false,
    memory: 3000,
    memory_overallocate: 0,
    disk: 10000,
    disk_overallocate: 0,
    upload_size: 100,
    daemon_listen: 8080,
    daemon_sftp: 2022,
    daemon_base: '/srv/daemon-data',
    created_at: '2020-01-24T21:33:38+00:00',
    updated_at: '2020-01-24T21:33:38+00:00'
  }
}
```

