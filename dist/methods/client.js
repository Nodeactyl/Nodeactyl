"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverDetails = exports.deleteApiKey = exports.createApikey = exports.listApiKeys = exports.updatePassword = exports.updateEmail = exports.disableTwoFactor = exports.enableTwoFactor = exports.genaratetwoFactorQR = exports.accountDetails = exports.showPermissions = exports.listServers = void 0;
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
const enableTwoFactor = (host, key, data) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', 'api/client/account/two-factor', `${data}`);
};
exports.enableTwoFactor = enableTwoFactor;
const disableTwoFactor = (host, key, data) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', 'api/client/account/two-factor', data);
};
exports.disableTwoFactor = disableTwoFactor;
const updateEmail = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('PUT', 'api/client/account/email', '"new email & password"');
};
exports.updateEmail = updateEmail;
const updatePassword = (host, key, password, newPassword, confirmNewPassword, confimation) => {
    let data = {
        current_password: password,
        password: newPassword,
        password_confirmation: confirmNewPassword,
    };
    if (confimation == false) {
        let data = {
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
    let data = { description: description, allowed_ips: ips };
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
