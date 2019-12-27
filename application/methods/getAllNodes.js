let req = require('../ApplicationRequest.js');

function getAllNodes() {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getReqest("GetAllNodes", null);
}

module.exports = getAllNodes;