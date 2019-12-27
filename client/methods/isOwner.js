let Req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to check owner value of
 */
function isOwner(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("IsOwner", ServerID);
}

module.exports = isOwner;