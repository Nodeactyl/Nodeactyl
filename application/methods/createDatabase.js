const req = require('../ApplicationRequest')
/**
 * @param {String} Name Name of the Database
 * @param {String} AllowedIP IP allowed to connect, leave "%" if you dont want to restrict
 * @param {Integer} HostDBID ID of the Database Host
 * @param {Integer} InternalID InternalID of the Server to create the Database
 */

function createDatabase(InternalID,Name,AllowedIP,HostDBID) {
const data = makeData(Name,AllowedIP,HostDBID)
const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
return Req.postRequest('CreateDatabase',data,InternalID);
}

function makeData(Name,AllowedIP,HostDBID) {
return {
    "database": Name,
    "remote": AllowedIP,
    "host": HostDBID,
}
}

module.exports = createDatabase;