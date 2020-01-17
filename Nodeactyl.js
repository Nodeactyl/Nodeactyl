<<<<<<< HEAD
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










=======
const app = require('./application/index.js');
const client = require('./client/index.js');

module.exports = {
    Application: app,
    Client: client
}
>>>>>>> 10b7f34f4b1edb747730b6ae1e8117fae754beb6
