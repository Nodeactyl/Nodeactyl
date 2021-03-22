const Nodeactyl = require('./Nodeactyl.js');
/** PLEASE DO NOT REPORT THIS AS A BUG, THESE KEYS GET DELETED UPON USE */
let admin = new Nodeactyl.NodeactylApplication("https://panel.cloudlite.net", "GzpYTrwaq4kJupDr7ddnCNX23xB2jPI0ZXMVGtZueXS0nEGS");

admin.updateServerStartup(21, "java -Xms236M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
    {
    'DL_VERSION': "latest",
    'SERVER_JARFILE': 'server.jar',
    'VANILLA_VERSION': "latest",
    'BUNGEE_VERSION': "latest",
    'MINECRAFT_VERSION': "latest",
    'MC_VERSION': "latest",
    'BUILD_NUMBER': "latest",
    'INSTALL_REPO': "latest",
    'STARTUP_CMD': 'npm install --unsafe-perm',
    'SECOND_CMD': 'node index.js',
}, 1, "quay.io/pterodactyl/core:java", false).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})