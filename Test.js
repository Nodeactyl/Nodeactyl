const Nodeactyl = require('./Nodeactyl.js');
let client = new Nodeactyl.NodeactylClient("http://panel.cloudlite.net", "KWAgTbPabT8peuv4VpWyyEzbLulgh2R96tNuCHQhQEcdEpCn");

client.getServerDetails("5ec52085-957d-44d1-96bc-a3e62c70329c").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("ERROR: " + err);
});