<<<<<<< HEAD
let req = require('../ClientRequest.js');
=======
let Req = require('../ClientRequest.js');
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a

/**
 * @param {String} ServerID ID of the server to stop
 */
function stopServer(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    let data = { "signal": "stop" };
    return req.postRequest("StopServer", data, ServerID);
}

module.exports = stopServer;