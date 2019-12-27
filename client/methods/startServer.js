let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to start
 */
function startServer(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "start" };
    return req.postRequest("StartServer", data, ServerID);
}

module.exports = startServer;