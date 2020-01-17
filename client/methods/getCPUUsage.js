let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server CPU Usage of
 */
function getCPUUsage(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return Req.getRequest("GetCPUUsage", ServerID);
}

module.exports = getCPUUsage;