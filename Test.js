const Nodeactyl = require('./Nodeactyl.js');
let client = new Nodeactyl.NodeactylClient("http://panel.cloudlite.net", "D6B5r1ApX4X3pBnizslXGfnZVEieNzNpJJ9QI3CPy1jPfy0U");

client.updatePassword("password", "password").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("ERROR: " + err);
});