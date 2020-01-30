const axios = require('axios');

// POST
const createuser = require('./methods/createUser.js');
const createserver = require('./methods/createServer.js');
const createnode = require('./methods/createNode.js');
const suspendserver = require('./methods/suspendServer.js');
const unsuspendserver = require('./methods/unSuspendServer.js');

//GET
const getallservers = require('./methods/getAllServers.js');
const getallusers = require('./methods/getAllUsers.js');
const getuserinfo = require('./methods/getUserInfo.js');
const getnode = require('./methods/getNodeInfo.js');
const getallnodes = require('./methods/getAllNodes.js');

// PATCH
const updateuser = require('./methods/updateUser.js');

// DELETE 
const deleteuser = require('./methods/deleteUser.js');
const deletenode = require('./methods/deleteNode.js');
const deleteserver = require('./methods/deleteServer.js');

/**
 * 
 * @param {String} HOST Host to connect to
 * @param {String} KEY Key to use
 * @param {Boolean, String} callback Returns true when login is successful
 */
function login(HOST, KEY, callback) {
HOST = HOST.trim();
if(HOST.endsWith("/")) HOST = HOST.slice(0, -1);

    console.log("NODEACTYL WARNING: There has been a COMPLETE rewrite of Nodeactyl, Please review our new documentation at: https://nodeactyl.elliotfrost.xyz/v/v2.0.0-english/ Alternativly if you need further assistance ask for help in our discord server: https://discordapp.com/invite/3e5uJPt");
    process.env.APPLICATION_NODEACTYL_HOST = HOST;
    process.env.APPLICATION_NODEACTYL_KEY = KEY;
    axios.get(HOST + '/api/application/users', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + KEY,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        if (response.status == 404) {
            callback(false, 'API Key is not valid! (Application)');
        } else {
            callback(true);
        }
    }).catch(error => {
        if (error.status == 403) {
            callback(false, 'API Key is not valid! (Application)');
        } else {
            throw error;
        }
    });
}

/**
 * 
 * @param {String} HOST The host to use
 * @param {String} KEY The application key to use
 * @Warning USE THIS ONLY IF YOU KNOW YOUR CREDENTIALS ARE 100% CORRECT, OR THEY NEVER CHANGE
 */
function fastLogin(HOST, KEY) {
HOST = HOST.trim();
if(HOST.endsWith("/")) HOST = HOST.slice(0, -1);

    console.log("NODEACTYL WARNING: There has been a COMPLETE rewrite of Nodeactyl, Please review our new documentation at: https://nodeactyl.elliotfrost.xyz/v/v2.0.0-english/ Alternativly if you need further assistance ask for help in our discord server: https://discordapp.com/invite/3e5uJPt");
    process.env.APPLICATION_NODEACTYL_HOST = HOST;
    process.env.APPLICATION_NODEACTYL_KEY = KEY;
}

module.exports = {
    login: login,
    fastLogin: fastLogin,

    // POST
    createUser: createuser,
    createServer: createserver,
    createNode: createnode,
    suspendServer: suspendserver,
    unSuspendServer: unsuspendserver,

    // GET
    getAllServers: getallservers,
    getAllUsers: getallusers,
    getUserInfo: getuserinfo,
    getNodeInfo: getnode,
    getAllNodes: getallnodes,

    // PATCH
    updateUser: updateuser,

    // DELETE
    deleteUser: deleteuser,
    deleteNode: deletenode,
    deleteServer: deleteserver
}
