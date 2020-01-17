let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to kill
 */
function killServer(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "kill" };
    return Req.postRequest("KillServer", data, ServerID);
}

module.exports = killServer;