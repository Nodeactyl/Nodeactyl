const Nodeactyl = require('./Nodeactyl.js');
/** PLEASE DO NOT REPORT THIS AS A BUG, THESE KEYS GET DELETED UPON USE */
let admin = new Nodeactyl.NodeactylApplication("https://panel.cloudlite.net", "GzpYTrwaq4kJupDr7ddnCNX23xB2jPI0ZXMVGtZueXS0nEGS");

admin.updateServerStartup(21, response.container.environment.STARTUP_CMD,
    response.container.environment, response.container.egg, response.container.image, false).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})