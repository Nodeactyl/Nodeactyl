const Methods = require("./methods/Methods.js");

class Application {

    /**
     * Main class constructor
     * @param host Where your panel is hosted (EG: http(s)://panel.host.net/)
     * @param key
     */
    constructor(host, key) {
        this.hostUrl = host;
        this.apiKey = key;
    }

    processError(err) {
        if (err.status !== undefined) return err.status;
        if (err.statusCode !== undefined) return err.statusCode;
        if (this.getErrorCode(err) !== undefined) return this.getErrorCode(err);
        return err;
    }

    /**
     * When errors get thrown from pterodactyl, sometimes they have the error code at the very end of the error message. This method basically tries to retrive thos
     * @param err
     * @returns {number}
     */
    getErrorCode(err) {
        err = err.message;
        let str1 = err.charAt(err.length - 1);
        let str2 = err.charAt(err.length - 2);
        let str3 = err.charAt(err.length - 3);

        let num = str1 + str2 + str3;
        try {
            return parseInt(num);
        } catch {
            return undefined;
        }
    }

    /**
     * Creates a user
     *
     * @param {String} Username Users username
     * @param {String} Email Users email
     * @param {String} FirstName Users first name
     * @param {String} LastName Users last name
     * @returns {Promise<unknown>}
     */
    createUser(Email,Username,FirstName,LastName) {
        return new Promise((res, rej) => {
            Methods.createUser(this.hostUrl, this.apiKey, Email,Username,FirstName,LastName).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets a list of servers from your panel, currently this only get the first page but i will add support for grabbing ALL pages with this methods
     *
     * @returns {Promise<unknown>}
     */
    getAllServers() {
        return new Promise((res, rej) => {
            Methods.getServers(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets a info of a server from your panel
     *
     * @returns {Promise<unknown>}
     */
    getServerDetails(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerDetails(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Suspend a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    suspendServer(serverId) {
        return new Promise((res, rej) => {
            Methods.suspendServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Unsuspend a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    unsuspendServer(serverId) {
        return new Promise((res, rej) => {
            Methods.unsuspendServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Reinstall a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    reinstallServer(serverId) {
        return new Promise((res, rej) => {
            Methods.reinstallServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }


}

module.exports = Application;