let login = require('./functions/login.js');
let getallservers = require('./functions/getAllServers.js');
let createserver = require('./functions/createServer.js');
let createuser = require('./functions/createUser.js');


let session;
let ACTION = {
    SET_SESSION: 'client nodeactyl login',
    GET_SESSION: 'get client nodeactyl session',
    SEND_SESSION: 'here is nodeactyl client login',
    RECEIVE_SESSION: 'here is nodeactyl client login'
}
let isAuthenticated = new Promise((resolve, reject) => {
    if (session != undefined) {
        resolve(true);
    } else {
        // tries to receive the connection for 10 seconds
        let maxRetries = 3000;
        let tries = 0;
        // Wait for session to not be undefined 
        let interval = setInterval(() => {
            if (session == undefined) {
                tries++;
                if (tries >= maxRetries) {
                    reject(new Error('not logged in'));
                    clearInterval(interval);
                    tries = 0;
                } 
            } else {
                resolve(true);
                clearInterval(interval);
                tries = 0;
            }
        }, 1);
    }
});

let index = {
    isAuthenticated: isAuthenticated,
    login: login,
    getAllServers: getallservers,
    createServer: createserver,
    createUser: createuser
}

// Session manager for the client
process.on(ACTION.SET_SESSION, function(data) {
    session = data;
});

process.on(ACTION.GET_SESSION, function() {
    process.emit(ACTION.SEND_SESSION, session);
});


module.exports = index;