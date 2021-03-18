---
description: Grabs all the nodes available to a API key
---

# getAllNodes\(\)

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

Application.getAllNodes().then(nodes => {
    // Retuns an array of nodes (see below)
}).catch(err => {
    console.log(err);
})
```

```javascript
[
  {
    object: 'node',
    attributes: {
      id: 1,
      public: true,
      name: 'NA-1',
      description: 'North America',
      location_id: 1,
      fqdn: '123.123.123.123',
      scheme: 'http',
      behind_proxy: false,
      maintenance_mode: false,
      memory: 62000,
      memory_overallocate: 0,
      disk: 500000,
      disk_overallocate: 30,
      upload_size: 100,
      daemon_listen: 8080,
      daemon_sftp: 2022,
      daemon_base: '/srv/daemon-data',
      created_at: '2019-12-13T08:53:40+00:00',
      updated_at: '2019-12-26T21:49:07+00:00'
    }
  },
  {
    object: 'node',
    attributes: {
      id: 2,
      public: true,
      name: 'Nodee',
      description: '',
      location_id: 1,
      fqdn: '0.0.0.0',
      scheme: 'http',
      behind_proxy: false,
      maintenance_mode: false,
      memory: 2000,
      memory_overallocate: 5,
      disk: 5000,
      disk_overallocate: 5,
      upload_size: 100,
      daemon_listen: 8080,
      daemon_sftp: 2022,
      daemon_base: '/srv/daemon',
      created_at: '2019-12-19T23:29:02+00:00',
      updated_at: '2019-12-19T23:29:02+00:00'
    }
  }
]
```

