const NodeactylRequest = require('../../utils/NodeactylRequest.js');
const ApplicationRequest = require('../../utils/ApplicationRequest');

exports.suspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.SUSPEND_SERVER(serverId));
};

exports.unsuspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.UNSUSPEND_SERVER(serverId));
};

exports.reinstallServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.REINSTALL_SERVER(serverId));
};