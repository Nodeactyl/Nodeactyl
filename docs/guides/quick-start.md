# Quick Start
<br/>

::: warning
This guide assumes that you know how to create API Keys on Pterodactyl
:::

<br/>

You can create the Nodeactyl instance by using the respective code below:

``` js
// Client

const Nodeactyl = require('nodeactyl');
const client = new Nodeactyl.NodeactylClient("https://your.panel.net", "YourClientAPIKey");


// Application

const Nodeactyl = require('nodeactyl');
const application = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");
```

<br/>

Once you have created the nodeactyl instance, you can call any client / application function respectively. These are all listed in the [API Reference](../api/index.md)