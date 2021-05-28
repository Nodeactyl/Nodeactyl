const axios = require('axios');
const ClientRequest = require('./ClientRequest.js');
const ApplicationRequest = require('./ApplicationRequest');

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
        }).catch(err => console.log(err))
    }

    executePatch(request, providedData) {
        this.endpoint = request;
        return axios.default({
            url: this.trimUrl(),
            method: "PATCH",
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

            case ClientRequest.GET_ACCOUNT_PERMISSIONS: {
                return "api/client/permissions";
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

            case ApplicationRequest.GET_ALL_SERVERS: {
                return `api/application/servers?page=1`
            }

            case ApplicationRequest.GET_ALL_USERS: {
                return `api/application/users?page=1`
            }

        }

        let str = this.endpoint.split(":");
        let request = str[0];
        if (request === undefined || request === "") throw new Error("Could not find request when splitting enum. (Contact a developer)");

        let isPowerAction = (request === ClientRequest.START_SERVER_META) || request === ClientRequest.STOP_SERVER_META
            || request === ClientRequest.RESTART_SERVER_META || request === ClientRequest.KILL_SERVER_META;

        if (request === ClientRequest.GET_ALL_SERVERS) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_ALL_SERVERS (contact a developer)");
            return `api/client/?page=${str[1]}`;

        } else if (request === ClientRequest.DELETE_API_KEY_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using DELETE_API_KEY (contact a developer)");
            return `api/client/account/api-keys/${str[1]}`;

        } else if (request === ClientRequest.GET_SERVER_INFO_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SERVER_INFO (contact a developer)");
            return `api/client/servers/${str[1]}`

        } else if (request === ClientRequest.GET_SERVER_STATUS_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SERVER_INFO (contact a developer)");
            return `api/client/servers/${str[1]}/resources`

        } else if (isPowerAction) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using typeof POWER_ACTION (contact a developer)");
            return `api/client/servers/${str[1]}/power`;

        } else if (request === ClientRequest.SEND_SERVER_COMMAND_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using SEND_SERVER_COMMAND (contact a developer)");
            return `api/client/servers/${str[1]}/command`;

        } else if (request === ClientRequest.GET_SERVER_USAGES_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SERVER_USAGES (contact a developer)");
            return `api/client/servers/${str[1]}/resources`;

        } else if (request === ClientRequest.GET_CONSOLE_WEBSOCKET_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when usingGET_CONSOLE_WEBSOCKET (contact a developer)");
            return `api/client/servers/${str[1]}/websocket`;

        } else if (request === ClientRequest.RENAME_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using RENAME_SERVER (contact a developer)");
            return `api/client/servers/${str[1]}/settings/rename`;

        } else if (request === ClientRequest.REINSTALL_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using REINSTALL_SERVER (contact a developer)");
            return `api/client/servers/${str[1]}/settings/reinstall`;

        } else if (request === ClientRequest.LIST_BACKUPS_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using LIST_BACKUPS (contact a developer)");
            return `api/client/servers/${str[1]}/backups`;

        } else if (request === ClientRequest.CREATE_BACKUP_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using CREATE_BACKUP (contact a developer)");
            return `api/client/servers/${str[1]}/backups`;

        } else if (request === ClientRequest.GET_SERVER_BACKUP_META) {
            if (str[1] === "" || str[1] === undefined || str[2] === "" || str[2] === undefined)
                throw new Error("Could not split enum to a length of 2 when using GET_SERVER_BACKUP (contact a developer)");
            return `api/client/servers/${str[1]}/backups/${str[2]}`;

        } else if (request === ClientRequest.GET_SERVER_BACKUP_DOWNLOAD_META) {
            if (str[1] === "" || str[1] === undefined || str[2] === "" || str[2] === undefined)
                throw new Error("Could not split enum to a length of 2 when using GET_SERVER_BACKUP_DOWNLOAD (contact a developer)");
            return `api/client/servers/${str[1]}/backups/${str[2]}/download`;

        } else if (request === ClientRequest.DELETE_SERVER_BACKUP_META) {
            if (str[1] === "" || str[1] === undefined || str[2] === "" || str[2] === undefined)
                throw new Error("Could not split enum to a length of 2 when using DELETE_SERVER_BACKUP (contact a developer)");
            return `api/client/servers/${str[1]}/backups/${str[2]}`;

        } else if (request === ClientRequest.GET_SUBUSERS_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SUBUSERS (contact a developer)");
            return `api/client/servers/${str[1]}/users`;

        } else if (request === ClientRequest.CREATE_SUBUSER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SUBUSERS (contact a developer)");
            return `api/client/servers/${str[1]}/users`;

        //Application part
        } else if (request === ApplicationRequest.SUSPEND_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using SUSPEND_SERVER (contact a developer)");
            return `api/application/servers/${str[1]}/suspend`;

        } else if (request === ApplicationRequest.UNSUSPEND_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using UNSUSPEND_SERVER (contact a developer)");
            return `api/application/servers/${str[1]}/unsuspend`;

        } else if (request === ApplicationRequest.REINSTALL_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using REINSTALL_SERVER (contact a developer)");
            return `api/application/servers/${str[1]}/reinstall`;

        } else if (request === ApplicationRequest.GET_ALL_SERVERS) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_ALL_SERVERS (contact a developer)");
            return `api/application/servers?page=${str[1]}`;

        } else if (request === ApplicationRequest.UPDATE_SERVER_DETAILS_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using UPDATE_SERVER_DETAILS (contact a developer)");
            return `api/application/servers/${str[1]}/details`;

        } else if (request === ApplicationRequest.UPDATE_SERVER_BUILD_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using UPDATE_SERVER_DETAILS (contact a developer)");
            return `api/application/servers/${str[1]}/build`;

        } else if (request === ApplicationRequest.GET_SERVER_INFO_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_SERVER_INFO_META (contact a developer)");
            return `api/application/servers/${str[1]}`;

        } else if (request === ApplicationRequest.GET_ALL_USERS) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_ALL_USERS (contact a developer)");
            return `api/application/users?page=${str[1]}`;

        } else if (request === ApplicationRequest.CREATE_USER_META) {
            return `api/application/users`;

        } else if (request === ApplicationRequest.CREATE_SERVER_META) {
            return `api/application/servers`;

        } else if (request === ApplicationRequest.GET_USER_INFO_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using GET_USER_INFO (contact a developer)");
            return `api/application/users/${str[1]}`;

        } else if (request === ApplicationRequest.UPDATE_USER_DETAILS_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using UPDATE_USER_DETAILS (contact a developer)");
            return `api/application/users/${str[1]}`;

        } else if (request === ApplicationRequest.DELETE_USER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using DELETE_USER (contact a developer)");
            return `api/application/users/${str[1]}`;

        } else if (request === ApplicationRequest.DELETE_SERVER_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using DELETE_SERVER (contact a developer)");
            return `api/application/servers/${str[1]}`;

        } else if (request === ApplicationRequest.GET_NEST_INFO_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using DELETE_SERVER (contact a developer)");
            return `api/application/nests/1/eggs/${str[1]}`;
        } else if (request === ApplicationRequest.UPDATE_SERVER_STARTUP_META) {
            if (str[1] === "" || str[1] === undefined) throw new Error("Could not split enum to a length of 2 when using UPDATE_SERVER_STARUP (contact a developer)");
            return `api/application/servers/${str[1]}/startup`;
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