---
description: Creates a server using Nodeactyl
---

# createServer\(\)

{% hint style="warning" %}
While it is not reccomended to create servers with the API you can \(Stability issues, you need to handle A LOT of errors such as running out of ports, memory and ETC.\) However the developers of Nodeactyl offer 100% support for this command and all errors towards it.
{% endhint %}

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

Application.createServer("latest", "NameOfServer", "OwnerID", "PackID", "EggID", "DockerImage", "StartupCMD", "RAM", "Swap", "DiskSpace", "IO", "CpuCores", "MaxDatabases", "AmtOfAllocations").then(res => {
    // returns a server object (see below)
}).catch(error =>{
    console.log(error);
})
```

{% hint style="info" %}
`Version` Should be latest

`NameOfServer` Is the name

`OwnerID` Owners ID of the server

`PackID` Pack ID to use NOTE: Normally, you can leave this as null \(Leave it null\)

`EggID` Egg to use \(Look in the panel for this\)

`DockerImage` Docker image to use \(Look in the panel for this\)

`StartupCMD` Startup command to use \(Look in the panel for this\)

`RAM` Amount of RAM Allocated for the server

`Swap` Amount of swap to use \(Normally 0\)

`DiskSpace` Amount of disc space allocated to this server

`IO` Leave this at 500 unless you **really** know what your doing

`CpuCores` 100= 1 core, 200= 2 cores etc. 0 = unlimited CPU usage

`MaxDatabases` Amount of databases this server can use

`AmtOfAllocation` Leave this at 1 for now.
{% endhint %}



```javascript
{
  id: 22,
  external_id: null,
  uuid: 'f049bcbd-58b1-4e11-aeca-863aae9c03bb',
  identifier: 'f049bcbd',
  name: 'NamOfServer',
  description: 'A Nodeactyl server',
  suspended: false,
  limits: { memory: 1024, swap: 0, disk: 10000, io: 500, cpu: 200 },
  feature_limits: { databases: 1, allocations: 1 },
  user: 1,
  node: 1,
  allocation: 27,
  nest: 1,
  egg: 1,
  pack: null,
  container: {
    startup_command: 'java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}',
    image: 'quay.io/pterodactyl/core:java',
    installed: false,
    environment: {
      BUNGEE_VERSION: 'latest',
      SERVER_JARFILE: 'server.jar',
      STARTUP: 'java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}',
      P_SERVER_LOCATION: 'US',
      P_SERVER_UUID: 'f049bcbd-58b1-4e11-aeca-863aae9c03bb'
    }
  },
  updated_at: '2019-12-22T07:35:17+00:00',
  created_at: '2019-12-22T07:35:17+00:00'
}
```



