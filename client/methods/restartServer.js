let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to restart
 */
function restartServer(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "restart" };
    return req.postRequest("RestartServer", data, ServerID);
}

module.exports = restartServer;