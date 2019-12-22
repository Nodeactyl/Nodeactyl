const app = require('./application/index.js');
const client = require("./client/index.js");

module.exports = {
    Application: app,
    Client: client
}

client.login("http://serverhouse.now.im:100", "2LqIr34APEU8vhYO1vaB58TtIT6EG2oEZaGrV1w5SO1vJoY5", (bool)=> {
    console.log(bool);
});

client.sendCommand("7eca7eda", "help").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})