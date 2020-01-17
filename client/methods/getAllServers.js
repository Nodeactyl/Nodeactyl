let req = require('../ClientRequest.js');

/**
 * @yields A Array of servers a application key has access to
 */
function getAllServers() {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return Req.getRequest("GetAllServers", null);
}

module.exports = getAllServers;