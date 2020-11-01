const axios = require('axios');
const ClientRequest = require('./ClientRequest.js');

class NodeactylRequest {

    constructor(host, api) {
        this.hostUrl = host;
        this.apiKey = api;
    }

    /**
     * Executes this request object as GET
     * @param request
     * @returns {PromiseLike<any> | Promise<any>}
     */
    executeGet(request) {
        this.endpoint = request;
        return axios.default({
            url: this.trimUrl(),
            method: "GET",
            followRedirects: true,
            maxRedirects: 5,
            headers: this.getHeaders()
        });
    }

    executePost(request, providedData) {
        this.endpoint = request;
        return axios.default({
            url: this.trimUrl(),
            method: "POST",
            followRedirects: true,
            maxRedirects: 5,
            headers: this.getHeaders(),
            data: providedData
        });
    }

    executeDelete(request, providedData) {
        this.endpoint = request;
        return axios.default({
            url: this.trimUrl(),
            method: "DELETE",
            followRedirects: true,
            maxRedirects: 5,
            headers: this.getHeaders(),
            data: providedData
        })
    }

    executePut(request, providedData) {
        this.endpoint = request;
        return axios.default({
            url: this.trimUrl(),
            method: "PUT",
            followRedirects: true,
            maxRedirects: 5,
            headers: this.getHeaders(),
            data: providedData
        })
    }

    /**
     * Dont use this if your just a basic Nodeactyl User. i wont help you
     */
    trimUrl() {
        let lastChar = this.hostUrl.charAt(this.hostUrl.length - 1);
        if (lastChar !== "/") {
            this.hostUrl = this.hostUrl + "/"
        }

        return this.hostUrl + this.getRequestEndpoint();
    }

    /**
     * Dont use this if your just a basic Nodeactyl User. i wont help you
     */
    getRequestEndpoint() {
        switch (this.endpoint.toUpperCase()) {

            case ClientRequest.GET_ACCOUNT_DETAILS: {
                return "api/client/account";
            }

            case ClientRequest.GET_ALL_SERVERS: {
                return "api/client?page=1";
            }

            case ClientRequest.GET_SERVER: {
                return "";
            }

            case ClientRequest.GET_API_KEYS: {
                return "api/client/account/api-keys";
            }

            case ClientRequest.CREATE_API_KEY: {
                return "api/client/account/api-keys"
            }

            case ClientRequest.UPDATE_EMAIL: {
                return "api/client/account/email";
            }

            case ClientRequest.UPDATE_PASSWORD: {
                return `api/client/account/password`
            }
        }

        if (this.endpoint.startsWith(ClientRequest.GET_ALL_SERVERS)) {
            let str = this.endpoint.split(":");
            if (str.length !== 2) throw new Error("Error with NodeactylAPI when using GET_SERVER_PAGE, splitting enum did not add up to a length of 2. (You need to contact a developer)");
            return `api/client/?page=${str[1]}`;
        } else if (this.endpoint.startsWith(ClientRequest.DELETE_API_KEY_META)) {
            let str = this.endpoint.split(":");
            if (str.length !== 2) throw new Error("Error with NodeactylAPI when using GET_SERVER_PAGE, splitting enum did not add up to a length of 2. (You need to contact a developer)");
            return `api/client/account/api-keys/${str[1]}`;
        } else if (this.endpoint.startsWith(ClientRequest.GET_SERVER_INFO_META)) {
            let str = this.endpoint.split(":");
            if (str.length !== 2) throw new Error("Error with NodeactylAPI when using GET_SERVER_PAGE, splitting enum did not add up to a length of 2. (You need to contact a developer)");
            return `api/client/servers/${str[1]}`
        }
    }

    /**
     * Returns the header needed for a request
     * @returns {{Authorization: string, Accept: string, "Content-Type": string}}
     */
    getHeaders() {
        return {
            'Authorization': 'Bearer ' + this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }

}

module.exports = NodeactylRequest;