let client = require('./src/index.js').Client;
let application = require('./src/index.js').Application;

let index = {
    Client: client,
    Application: application,
    Api: api
}

function api() {
    this.getVersion = function() {
        '1.3.14';
    }
}
module.exports = index;










