let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to kill
 */
function killServer(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "kill" };
    return req.postRequest("KillServer", data, ServerID);
}

module.exports = killServer;