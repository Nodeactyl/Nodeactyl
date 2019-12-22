let req = require(`${process.cwd()}\\utils\\ClientRequest.js`);

/**
 * @param {String} ServerID ID of the server to stop
 */
function startServer(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "start" };
    return Req.postRequest("StartServer", data, ServerID);
}

module.exports = startServer;