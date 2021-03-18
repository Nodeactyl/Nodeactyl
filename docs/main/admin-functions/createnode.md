---
description: Creates a node
---

# createNode\(\)

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

Application.createNode("NodeName", "New Node Desc", "1", true, "FQND.com", "http", false, "5000", "10", "5000", "10", "/srv/daemon", "8080", "2022", false, "200").then(node => {
    // Returns a node object (see below)
}).catch(err => {
    console.log(err);
})
```

{% hint style="info" %}
`NodeName` Name of the node

`Description` Description of the node

`Location ID` Location ID \(Check your panel\)

`Public` Boolean, is this node public?

`FQND` Full qualified domain name for the node

`Schema` HTTP/HTTPS

`BehindProxy` Boolean, is this node behind a proxy?

`RAM` How much RAM for this node?

`RAMOverallocation` How much should the ram overallocate for this node? \(In percent, but DO NOT INCLUDE **%**\)

`Disk` How much storage for this node?  
`DiskOverallocation` How much should the disk overallocate for this node? \(In percent, but DO NOT INCLUDE **%**\)



`DaemonDirectory` Wheres is your daemon? \(/srv/daemon normally\)

`DaemonPort` What is your daemon port? \(Normally 8080\)

`DaemonSFTPPort` Where is your daemons SFTP port? \(Normally 2022\)

`MaintenceMode` Boolean, is the node in maintence?

`MaxUploadSize` What is the maximum upload size for this node?
{% endhint %}



```javascript
{
  id: 3,
  public: true,
  name: 'NodeName',
  description: '',
  location_id: 1,
  fqdn: 'FQND.com',
  scheme: 'http',
  behind_proxy: false,
  maintenance_mode: false,
  memory: 5000,
  memory_overallocate: 10,
  disk: 5000,
  disk_overallocate: 10,
  upload_size: 200,
  daemon_listen: 8080,
  daemon_sftp: 2022,
  daemon_base: '/srv/daemon',
  created_at: '2020-01-03T05:32:19+00:00',
  updated_at: '2020-01-03T05:32:19+00:00'
}
```

