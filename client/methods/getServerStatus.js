let req = require(`${process.cwd()}\\utils\\ClientRequest.js`);

/**
 * @param {String} ServerID of the server status to get
 */
function getServerStatus(ServerID) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return Req.getRequest("GetServerStatus", ServerID);
}

module.exports = getServerStatus;