process.setMaxListeners(20);
let login = require('./functions/login.js');
let isonline = require('./functions/isOnline.js');
let getserverinfo = require('./functions/getServerInfo.js');
let getcpuusage = require('./functions/getCPUUsage.js');
let getcpucores = require('./functions/getCPUCores.js');
let getramusage = require('./functions/getRAMUsage.js');
let getserverstate = require('./functions/getServerState.js');
let getdiskusage = require('./functions/getDiskUsage.js');
let startserver = require('./functions/startServer.js');
let stopserver = require('./functions/stopServer.js');
let killserver = require('./functions/killServer.js');
let restartserver = require('./functions/restartServer.js');

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
            //console.log(tries);
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
    isOnline: isonline,
    getServerInfo: getserverinfo,
    getCPUUsage: getcpuusage,
    getCPUCores: getcpucores,
    getRAMUsage:getramusage,
    getServerState: getserverstate,
    getDiskUsage: getdiskusage,
    startServer: startserver,
    stopServer: stopserver,
    killServer: killserver,
    restartServer: restartserver
}

// Session manager for the client
process.on(ACTION.SET_SESSION, function(data) {
    session = data;
});

process.on(ACTION.GET_SESSION, function() {
    process.emit(ACTION.SEND_SESSION, session);
});


module.exports = index;