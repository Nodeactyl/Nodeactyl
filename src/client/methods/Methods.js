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

exports.getServerStatus = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_STATUS(serverId));
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

exports.getConsoleWebSocket = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_CONSOLE_WEBSOCKET(serverId));
};

exports.renameServer = (host, key, serverId, name) => {
    let data = { name: name };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.RENAME_SERVER(serverId), data);
};

exports.reInstallServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.REINSTALL_SERVER(serverId), undefined);
};

exports.listServerBackups = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.LIST_BACKUPS(serverId));
};

exports.createServerBackup = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.CREATE_BACKUP(serverId), undefined);
};

exports.getBackupDetails = (host, key, serverId, backupId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_BACKUP(serverId, backupId));
};

exports.getBackupDownload = (host, key, serverId, backupId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_BACKUP_DOWNLOAD(serverId, backupId));
};

exports.deleteBackupDownload = (host, key, serverId, backupId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeDelete(ClientRequest.DELETE_SERVER_BACKUP(serverId, backupId));
};

exports.getSubUsers = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SUBUSERS(serverId));
};

exports.createSubUser = (host, key, serverId, subUserEmail, subUserPermissions) => {
    if (subUserPermissions === undefined) subUserPermissions = [];
    let data = { email: subUserEmail, permissions: subUserPermissions };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ClientRequest.CREATE_SUBUSER(serverId), data);
};

exports.getServerUsages = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_USAGES(serverId));
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

exports.getServerStartup = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ClientRequest.GET_SERVER_STARTUP(serverId));
};

exports.setServerStartup = (host, key, serverId, field, value) => {
    let data = { key: field, value };
    let req = new NodeactylRequest(host, key);
    return req.executePut(ClientRequest.SET_SERVER_STARTUP(serverId), data);
};
