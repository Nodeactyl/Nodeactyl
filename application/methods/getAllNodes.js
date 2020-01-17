let req = require('../ApplicationRequest.js');

function getAllNodes() {
<<<<<<< HEAD
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.getRequest("GetAllNodes", null);
=======
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getReqest("GetAllNodes", null);
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a
}

module.exports = getAllNodes;