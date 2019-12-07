let clientAPI = require('./client/index.js');
let appAPI = require('./application/index.js');
// Lol this will come soon 
let connectionPool = require('./connectionPool/')

let index = {
    Client: clientAPI,
    Application: appAPI
}

module.exports = index;