let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server cores of
 */
function getCPUCores(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetCPUCores", ServerID);
}

module.exports = getCPUCores;