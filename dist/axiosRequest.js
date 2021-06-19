"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class nodeactyl {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    request(type, request) {
        if (type == 'GET') {
            return axios_1.default.get(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        }
        else if (type == 'PUT') {
            return axios_1.default.put(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        }
        else if (type == 'POST') {
            return axios_1.default.post(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        }
        else if (type == 'DELETE') {
            return axios_1.default.delete(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        }
    }
}
function trimedUrl() { }
function getHeaders() {
    return {
        Authorization: 'Bearer ' + this.apiKey,
        'Content-Type': 'application/json',
        Accept: 'Application/vnd.pterodactyl.v1+json',
    };
}
