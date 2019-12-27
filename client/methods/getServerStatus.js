let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server status to get
 */
function getServerStatus(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetServerStatus", ServerID);
}

module.exports = getServerStatus;