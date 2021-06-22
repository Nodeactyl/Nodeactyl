"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableTwoFactor = exports.enableTwoFactor = exports.genaratetwoFactorQR = exports.accountDetails = exports.showPermissions = exports.listServers = void 0;
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
const enableTwoFactor = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('POST', 'api/client/account/two-factor', 'JSON From "Gen2FQR"');
};
exports.enableTwoFactor = enableTwoFactor;
const disableTwoFactor = (host, key) => {
    const axios = new axiosRequest_1.default(host, key);
    return axios.request('DELETE', 'api/client/account/two-factor', '"PasswordFromAccount"');
};
exports.disableTwoFactor = disableTwoFactor;
