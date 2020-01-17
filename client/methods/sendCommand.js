<<<<<<< HEAD
let req = require('../ClientRequest.js');
=======
let Req = require('../ClientRequest.js');
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a

/**
 * @param {String} ServerID ID of the server to send a command to
 * @param {String} Command Command to send
 */
function sendCommand(ServerID, Command) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "command": Command };
    return req.postRequest("SendCommand", data, ServerID);
}

module.exports = sendCommand;