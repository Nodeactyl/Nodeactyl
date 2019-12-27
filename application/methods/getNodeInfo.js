let req = require('../ApplicationRequest.js');

/**
 * @param {String} NodeID The node ID to get the details of.
 */
function getNode(NodeID) {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getRequest("GetNodeInfo", NodeID);
}

module.exports= getNode;