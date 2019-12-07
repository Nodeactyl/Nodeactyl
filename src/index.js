<<<<<<< HEAD
let clientAPI = require('./client/index.js');
let appAPI = require('./application/index.js');
// Lol this will come soon 
let connectionPool = require('./connectionPool/')

let index = {
    Client: clientAPI,
    Application: appAPI
}

=======
let clientAPI = require('./client/index.js');
let appAPI = require('./application/index.js');
let connectionPool = require('./connectionPool/')

let index = {
    Client: clientAPI,
    Application: appAPI
}

>>>>>>> d5a6e5e5f2c0aaf147894f097ab1d85be9076cfd
module.exports = index;