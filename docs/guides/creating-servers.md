# Creating servers

<br/>

In the most recent update of nodeactyl, `createServer()` and `createSimpleServer()` were deprecated to be replaced by `ServerBuilder()` and `createRawServer()`.

## ServerBuilder()

The following code will create the server object with specified parameters, all available things you can set can be found [here](../api/server-builder.md).
``` js
const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

const ServerBuilder = Nodeactyl.ServerBuilder;

let server = new ServerBuilder()
    .setServerOwner(1)
    .setServerRAM(8192)
    .setServerCPU(500)
```

Once you have the object, there is 2 methods that can actually create the server.

#### Method 1 -
``` js{10,11,12}
const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

const ServerBuilder = Nodeactyl.ServerBuilder;

let server = new ServerBuilder()
    .setServerOwner(1)
    .setServerRAM(8192)
    .setServerCPU(500)
    .createServer(application).then(response => {
        // Do Stuff Here
    });
```

#### Method 2 -
``` js{11,12,13,14}
const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

const ServerBuilder = Nodeactyl.ServerBuilder;

let server = new ServerBuilder()
    .setServerOwner(1)
    .setServerRAM(8192)
    .setServerCPU(500)

let object = server.getServerObject() 
application.createRawServer(object).then(response => {
    // Do Stuff Here
});
```

:::details
Server Builder can also be initialized with a json object, or with setJson() after its been created. Useful for setting defaults and setting other options based on other requirements.

Example:
``` js
const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

const ServerBuilder = Nodeactyl.ServerBuilder;
let json = {
            'name': "Default",
            'user': null,
            'egg': 1,
            'docker_image': "quay.io/pterodactyl/core:java",
            'startup': "java -Xms128M -Xmx128M -jar server.jar",
            'limits': {
                'memory': 1024,
                'swap': 500,
                'disk': 1024,
                'io': 500,
                'cpu': 100,
            },
            'feature_limits': {
                'databases': 1,
                'allocations': 1,
                'backups': 0
            },
            'environment': {
                'DL_VERSION': "LATEST",
                'SERVER_JARFILE': 'server.jar',
                'VANILLA_VERSION': "LATEST",
                'BUNGEE_VERSION': "LATEST",
                'MINECRAFT_VERSION': "LATEST",
                'MC_VERSION': "LATEST",
                'BUILD_NUMBER': "LATEST",
                'INSTALL_REPO': "LATEST",
                'STARTUP_CMD': 'npm install --unsafe-perm',
                'SECOND_CMD': 'node index.js',
            },
            'allocation': {
                'default': 1,
                'additional': [],
            },
            'deploy': {
                'locations': [1],
                'dedicated_ip': false,
                'port_range': [],
            },
            'start_on_completion': true,
            'skip_scripts': false,
            'oom_disabled': true,
        }

let server = new ServerBuilder(json)
// or
let server = new ServerBuilder()
    .setJson(json)
    
// Create the server here with either Method 1 or 2
```
:::

## createRawServer()

This was included in method 2 above, but should you wish, you can manually build your server object as opposed to using the builder.

:::danger
This is not the recommended method
:::

Example:
``` js
const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

let json = {
            'name': "Default",
            'user': null,
            'egg': 1,
            'docker_image': "quay.io/pterodactyl/core:java",
            'startup': "java -Xms128M -Xmx128M -jar server.jar",
            'limits': {
                'memory': 1024,
                'swap': 500,
                'disk': 1024,
                'io': 500,
                'cpu': 100,
            },
            'feature_limits': {
                'databases': 1,
                'allocations': 1,
                'backups': 0
            },
            'environment': {
                'DL_VERSION': "LATEST",
                'SERVER_JARFILE': 'server.jar',
                'VANILLA_VERSION': "LATEST",
                'BUNGEE_VERSION': "LATEST",
                'MINECRAFT_VERSION': "LATEST",
                'MC_VERSION': "LATEST",
                'BUILD_NUMBER': "LATEST",
                'INSTALL_REPO': "LATEST",
                'STARTUP_CMD': 'npm install --unsafe-perm',
                'SECOND_CMD': 'node index.js',
            },
            'allocation': {
                'default': 1,
                'additional': [],
            },
            'deploy': {
                'locations': [1],
                'dedicated_ip': false,
                'port_range': [],
            },
            'start_on_completion': true,
            'skip_scripts': false,
            'oom_disabled': true,
        }
application.createRawServer(json).then(response => {
    // Do Stuff Here
});
```

