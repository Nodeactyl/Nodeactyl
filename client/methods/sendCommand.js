let req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to send a command to
 * @param {String} Command Command to send
 */
function sendCommand(ServerID, Command) {
    const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "command": Command };
    return Req.postRequest("SendCommand", data, ServerID);
}

module.exports = sendCommand;