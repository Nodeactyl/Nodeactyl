const {Request, ACTION} = require('../utils/request.js');
const {handleResultInterval} = require('../utils/loops.js');
let session = undefined;
let executed = false;
let server;
let result = undefined;
/**
 * @param {String} server Server ID to get CPU Cores of
 * @yields Object (refer to docs for schema);
 */
function getCPUCores(serverID) {
    server = serverID; 
    executed = true;
    process.emit(ACTION.GET_SESSION);
    return new Promise((resolve, reject) => {
        let maxTries = 50;
        let tries = 0;
        setImmediate(() => {
            if (result != undefined) return resolve(result);
            let interval = setInterval(() => {
                if (tries < maxTries) {
                    handleResultInterval(interval, result, resolve);
                } else {
                    reject(new Error('Did not receive response from server'))
                    result = undefined;
                    session = undefined;
                    clearInterval(interval);
                }
            });
        })
    });
}

function execute(server) {
     if (server != undefined) {
        Req = Request(session.URL, session.Key);
        Req.sendGet('getCPUCores', server).then(response => {
            result = response;
        }).catch(error => {
            throw error;
        })
     } else {
         throw new Error('Server cannot be null! (Or the dev(s) might of screwed up)');
     }
}

process.on(ACTION.RECEIVE_SESSION, function(data) {
    if (executed == true) {
        executed = false;
        session = data;
        execute(server, data);
    } 
});

getCPUCores.prototype.getServer = function() {
    return this.server
}

module.exports = getCPUCores;