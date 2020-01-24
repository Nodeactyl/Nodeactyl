let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to start
 */
function startServer(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "start" };
    return Req.postRequest("StartServer", data, ServerID);
}

module.exports = startServer;