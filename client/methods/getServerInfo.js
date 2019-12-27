let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to get
 */
function getServerInfo(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetServerInfo", ServerID);
}

module.exports = getServerInfo;