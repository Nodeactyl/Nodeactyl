let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to restart
 */
function restartServer(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "restart" };
    return Req.postRequest("RestartServer", data, ServerID);
}

module.exports = restartServer;