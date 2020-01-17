let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to get
 */
function getServerInfo(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return Req.getRequest("GetServerInfo", ServerID);
}

module.exports = getServerInfo;