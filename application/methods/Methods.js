const NodeactylRequest = require('../../utils/NodeactylRequest.js');
const ApplicationRequest = require('../../utils/ApplicationRequest');

exports.createUser = (host, key, Email, Username, FirstName, LastName) => {
    let data = {
        email: Email,
        username: Username,
        first_name: FirstName,
        last_name: LastName
    };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.CREATE_USER, data);
};

exports.getServers = (host, key,) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_ALL_SERVERS);
};

exports.getServerDetails = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_SERVER_INFO(serverId));
};

exports.suspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.SUSPEND_SERVER(serverId));
};

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