let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server Disk Usage of
 */
function getDiskUsage(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetDiskUsage", ServerID);
}

module.exports = getDiskUsage;