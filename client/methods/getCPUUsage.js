let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server CPU Usage of
 */
function getCPUUsage(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetCPUUsage", ServerID);
}

module.exports = getCPUUsage;