let req = require('../ApplicationRequest.js');

/**
 * 
 * @param {String} NodeID The node ID to delete
 */
function deleteNode(NodeID) {
<<<<<<< HEAD
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.deleteRequest("DeleteNode", NodeID);
=======
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.deleteRequest("DeleteNode", UserID);
>>>>>>> 59cb81739318b39f2fa69d3bba304dc29a6d952a
}

module.exports = deleteNode;