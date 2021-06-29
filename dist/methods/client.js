"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchedule = exports.updateSchedule = exports.scheduleDetails = exports.createSchedule = exports.listSchedules = exports.uploadFile = exports.createFolder = exports.deleteFile = exports.decompressFile = exports.compressFile = exports.copyFile = exports.renameFile = exports.deleteDatabase = exports.rotateDatabasePassword = exports.createDatabase = exports.listDatabases = exports.changePowerState = exports.sendCommand = exports.resourceUsage = exports.serverDetails = exports.deleteApiKey = exports.createApikey = exports.listApiKeys = exports.updatePassword = exports.updateEmail = exports.disableTwoFactor = exports.enableTwoFactor = exports.genaratetwoFactorQR = exports.accountDetails = exports.showPermissions = exports.listServers = void 0;
const axiosRequest_1 = __importDefault(require("../utils/axiosRequest"));
const listServers = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', 'api/client', null);
};
exports.listServers = listServers;
const showPermissions = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', 'api/client/permissions', null);
};
exports.showPermissions = showPermissions;
const accountDetails = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', 'api/client/account', null);
};
exports.accountDetails = accountDetails;
const genaratetwoFactorQR = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', 'api/client/account/two-factor', null);
};
exports.genaratetwoFactorQR = genaratetwoFactorQR;
const enableTwoFactor = (host, key, twoFACode) => {
    const data = { code: twoFACode };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', 'api/client/account/two-factor', `${data}`);
};
exports.enableTwoFactor = enableTwoFactor;
const disableTwoFactor = (host, key, password) => {
    const data = { password: password };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', 'api/client/account/two-factor', `${data}`);
};
exports.disableTwoFactor = disableTwoFactor;
const updateEmail = (host, key, newEmail, password) => {
    const data = { email: newEmail, password: password };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('PUT', 'api/client/account/email', `${data}`);
};
exports.updateEmail = updateEmail;
const updatePassword = (host, key, password, newPassword, confirmNewPassword, confimation) => {
    const data = {
        current_password: password,
        password: newPassword,
        password_confirmation: confirmNewPassword,
    };
    if (confimation == false) {
        const data = {
            current_password: password,
            password: newPassword,
            password_confirmation: newPassword,
        };
        return data;
    }
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('PUT', 'api/client/account/password', `${data}`);
};
exports.updatePassword = updatePassword;
const listApiKeys = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', 'api/client/account/api-keys', null);
};
exports.listApiKeys = listApiKeys;
const createApikey = (host, key, description, ips) => {
    const data = { description: description, allowed_ips: ips };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', 'api/client/account/api-keys', `${data}`);
};
exports.createApikey = createApikey;
const deleteApiKey = (host, key, identifier) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', `api/client/account/api-keys/${identifier}`, null);
};
exports.deleteApiKey = deleteApiKey;
const serverDetails = (host, key, serverId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}`, null);
};
exports.serverDetails = serverDetails;
const resourceUsage = (host, key, serverId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/resources`, null);
};
exports.resourceUsage = resourceUsage;
const sendCommand = (host, key, serverId, command) => {
    const data = { command: command };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/command`, `${data}`);
};
exports.sendCommand = sendCommand;
const changePowerState = (host, key, serverId, state) => {
    const data = { signal: state };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/power`, `${data}`);
};
exports.changePowerState = changePowerState;
const listDatabases = (host, key, serverId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/databases`, null);
};
exports.listDatabases = listDatabases;
const createDatabase = (host, key, serverId, newDatabaseName, remote) => {
    const data = { database: newDatabaseName, remote: remote };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/databases`, `${data}`);
};
exports.createDatabase = createDatabase;
const rotateDatabasePassword = (host, key, serverId, databaseId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/databases/${databaseId}/rotate-password`, null);
};
exports.rotateDatabasePassword = rotateDatabasePassword;
const deleteDatabase = (host, key, serverId, databaseId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', `api/client/servers/${serverId}/databases/${databaseId}`, null);
};
exports.deleteDatabase = deleteDatabase;
const renameFile = (host, key, serverId, root, fileName, newFileName) => {
    const data = { root: root, files: [{ from: fileName, to: newFileName }] };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('PUT', `api/client/servers/${serverId}/files/rename`, `${data}`);
};
exports.renameFile = renameFile;
const copyFile = (host, key, serverId, location) => {
    const data = { location: location };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/files/copy`, `${data}`);
};
exports.copyFile = copyFile;
const compressFile = (host, key, serverId, root, fileName) => {
    const data = { root: root, files: fileName };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/files/compress`, `${data}`);
};
exports.compressFile = compressFile;
const decompressFile = (host, key, serverId, root, fileName) => {
    const data = { root: root, files: fileName };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/files/decompress`, `${data}`);
};
exports.decompressFile = decompressFile;
const deleteFile = (host, key, serverId, root, fileName) => {
    const data = { root: root, files: fileName };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/files/delete`, `${data}`);
};
exports.deleteFile = deleteFile;
const createFolder = (host, key, serverId, root, folderName) => {
    const data = { root: root, name: folderName };
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', `api/client/servers/${serverId}/files/create-folder`, `${data}`);
};
exports.createFolder = createFolder;
const uploadFile = (host, key, serverId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/files/upload`, null);
};
exports.uploadFile = uploadFile;
const listSchedules = (host, key, serverId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/schedules`, null);
};
exports.listSchedules = listSchedules;
const createSchedule = (host, key, serverId, name, minute, hour, dayOfWeek, dayOfMonth, active) => {
    const axios = new axiosRequest_1.default(host, key);
    const data = {
        name: name,
        minute: minute,
        hour: hour,
        day_of_month: dayOfMonth,
        day_of_week: dayOfWeek,
        is_active: active,
    };
    return axios.request('POST', `api/client/servers/${serverId}/schedules`, `${data}`);
};
exports.createSchedule = createSchedule;
const scheduleDetails = (host, key, serverId, scheduleId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('GET', `api/client/servers/${serverId}/schedules/${scheduleId}`, null);
};
exports.scheduleDetails = scheduleDetails;
const updateSchedule = (host, key, serverId, scheduleId, name, minute, hour, dayOfWeek, dayOfMonth, active) => {
    const axios = new axiosRequest_1.default(host, key);
    const data = {
        name: name,
        minute: minute,
        hour: hour,
        day_of_month: dayOfMonth,
        day_of_week: dayOfWeek,
        is_active: active,
    };
    return axios.request('POST', `api/client/servers/${serverId}/schedules/${scheduleId}`, `${data}`);
};
exports.updateSchedule = updateSchedule;
const deleteSchedule = (host, key, serverId, scheduleId) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', `api/client/servers/${serverId}/schedules/${scheduleId}`, null);
};
exports.deleteSchedule = deleteSchedule;
