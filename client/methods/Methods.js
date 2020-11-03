const NodeactylRequest = require('../../utils/NodeactylRequest.js');
const ClientRequest = require('../../utils/ClientRequest.js');

exports.getAccountDetails = (host, key) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_ACCOUNT_DETAILS);
};

exports.getAccountPermissions = (host, key) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_ACCOUNT_PERMISSIONS);
};

exports.getServerDetails = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_INFO(serverId));
};

exports.getAllServers = (host, key) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_ALL_SERVERS);
};

exports.getServerPage = (host, key, pageNum) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_PAGE(pageNum));
};

exports.startServer = (host, key, serverId) => {
    let data = { signal: 'start' };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.START_SERVER(serverId), data);
};

exports.stopServer = (host, key, serverId) => {
    let data = { signal: 'stop' };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.STOP_SERVER(serverId), data);
};

exports.restartServer = (host, key, serverId) => {
    let data = { signal: 'restart' };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.RESTART_SERVER(serverId), data);
};

exports.killServer = (host, key, serverId) => {
    let data = { signal: 'kill' };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.KILL_SERVER(serverId), data);
};

exports.sendServerCommand = (host, key, serverId, command) => {
    let data = { command: command };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.SEND_SERVER_COMMAND(serverId), data);
};

exports.getApiKeys = (host, key) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_API_KEYS);
};

exports.createApiKey = (host, key, desc, ipArray) => {
    let data = { description: desc, allowed_ips: ipArray };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.CREATE_API_KEY, data);
};

exports.deleteApiKey = (host, key, identifier) => {
    let req = new NodeactylRequest(host, key);
    return req.executeDelete(ClientRequest.DELETE_API_KEY(identifier), undefined);
};

exports.updateEmail = (host, key, email, password) => {
    let data = { email: email, password: password };
    let req = new NodeactylRequest(host, key);
    return req.executePut(ClientRequest.UPDATE_EMAIL, data);
};

exports.updatePassword = (host, key, newPassword, password) => {
    let data = { current_password: password, password: newPassword, password_confirmation: newPassword };
    let req = new NodeactylRequest(host, key);
    return req.executePut(ClientRequest.UPDATE_PASSWORD, data);
};