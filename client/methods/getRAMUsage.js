let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server RAM Usage of
 */
function getRAMUsage(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return Req.getRequest("GetRAMUsage", ServerID);
}

module.exports = getRAMUsage;