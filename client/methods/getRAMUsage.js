<<<<<<< HEAD
let req = require('../ClientRequest.js');
=======
let Req = require('../ClientRequest.js');
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a

/**
 * @param {String} ServerID ID of the server RAM Usage of
 */
function getRAMUsage(ServerID) {
    const req = new Req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
    return req.getRequest("GetRAMUsage", ServerID);
}

module.exports = getRAMUsage;