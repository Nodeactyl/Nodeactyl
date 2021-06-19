"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
require("./methods");
if (method == 'GET') {
    axios_1.default.get(splitted, {
        maxRedirects: `${maxRedirects}`,
        headers: {
            Authorization: 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            Accept: 'Application/vnd.pterodactyl.v1+json',
        },
    });
}
else if (method == 'PUT') {
    axios_1.default.put(splitted, {
        maxRedirects: `${maxRedirects}`,
        headers: {
            Authorization: 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            Accept: 'Application/vnd.pterodactyl.v1+json',
        },
    });
}
else if (method == 'POST') {
    axios_1.default.post(splitted, {
        maxRedirects: `${maxRedirects}`,
        headers: {
            Authorization: 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            Accept: 'Application/vnd.pterodactyl.v1+json',
        },
    });
}
else if (method == 'DELETE') {
    axios_1.default.delete(splitted, {
        maxRedirects: 5,
        headers: {
            Authorization: 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            Accept: 'Application/vnd.pterodactyl.v1+json',
        },
    });
}
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
