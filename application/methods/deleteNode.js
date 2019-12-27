let req = require('../ApplicationRequest.js');

/**
 * 
 * @param {String} NodeID The node ID to delete
 */
function deleteNode(NodeID) {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.deleteRequest("DeleteNode", UserID);
}

module.exports = deleteNode;