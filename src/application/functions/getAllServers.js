const {Request, ACTION} = require('../utils/request.js');
const {handleResultInterval} = require('../utils/loops.js');
let session = undefined;
let executed = false;
let server;
let result = undefined;
/**
 * @yields Object (refer to docs for schema);
 */
function getAllServers() {
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

function execute() {
    Req = Request(session.URL, session.Key);
    Req.sendGet('getAllServers', 'server').then(response => {
        result = response;
    }).catch(error => {
        throw error;
    });
    
}

process.on(ACTION.RECEIVE_SESSION, function(data) {
    if (executed == true) {
        executed = false;
        session = data;
        execute();
    } 
});

module.exports = getAllServers;