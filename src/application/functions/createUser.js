const {Request, ACTION} = require('../utils/request.js');
const {handleResultInterval} = require('../utils/loops.js');
let session = undefined;
let executed = false;
let result = undefined;
let options;
/**
 * @param {String} ExternalID The external ID to use for this user
 * @param {String} Username The username for this user
 * @param {String} Email The email to use for this user
 * @param {String} FirstName The first name of this user
 * @param {String} LastName The last name of this user
 * @param {String} Password The password for this user
 * @param {Boolean} IsAdmin If the user is a administrator or not
 * @param {String} Language The language to use for this user (en, fr, etc...)
 * 
 * @yields Object (refer to docs for schema);
 */
function createUser(ExternalID, Username, Email, FirstName, LastName, Password, IsAdmin, Language) {
    
    options = [ExternalID, Username, Email, FirstName, LastName, Password, IsAdmin, Language];
    options = makeData(options);
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
    Req.sendPost('createUser', options, 'data').then(response => {
        result = response;
    }).catch(error => {
        throw error;
    })
}

process.on(ACTION.RECEIVE_SESSION, function(data) {
    if (executed == true) {
        executed = false;
        session = data;
        execute();
    } 
});

function makeData(data) {
    return {
        "external_id": data[0],
        "username": data[1],
        "email": data[2],
        "first_name": data[3],
        "last_name": data[4],
        "password": data[5],
        "root_admin": data[6],
        "language": data[7]
    }
}

createUser.prototype.getServer = function() {
    return this.server
}

module.exports = createUser;
