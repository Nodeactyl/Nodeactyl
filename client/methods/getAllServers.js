<<<<<<< HEAD
let req = require('../ClientRequest.js');
=======
let Req = require('../ClientRequest.js');
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a

/**
 * @yields A Array of servers a application key has access to
 */
function getAllServers() {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetAllServers", null);
}

module.exports = getAllServers;