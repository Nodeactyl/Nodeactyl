# Getting Started

The login process for Pterodactyl v1 has been simplified a little bit, here is the new syntax.

```javascript
const Nodeactyl = require('./Nodeactyl.js');

/* If you want the Application sided API, use this */
let admin = new Nodeactyl.NodeactylApplication("https://your.panel.net", "YourApplicationAPIKey");

/* If you want the Client sided API, use this */
let admin = new Nodeactyl.NodeactylClient("https://your.panel.net", "YourClientAPIKey");

```



