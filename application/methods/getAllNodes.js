let req = require('../ApplicationRequest.js');

function getAllNodes() {
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.getRequest("GetAllNodes", null);
}

module.exports = getAllNodes;