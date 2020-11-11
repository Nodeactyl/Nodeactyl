const Nodeactyl = require('./Nodeactyl.js');
let client = new Nodeactyl.NodeactylClient("http://panel.cloudlite.net", "eGIaarY3SXouy8UB5xWoViO5CHttVeqhztc9UgamOBbnHiX1");

client.createSubUser("5ec52085-957d-44d1-96bc-a3e62c70329c", "test@email.com", ["control.console"]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("ERROR: " + err);
});