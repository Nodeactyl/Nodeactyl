let Req = require('../ClientRequest.js');

/**
 * @yields A Array of servers a application key has access to
 */
function getAllServers() {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetAllServers", null);
}

module.exports = getAllServers;