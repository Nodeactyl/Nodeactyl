const Methods = require("./methods/Methods.js");

class Client {

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
     * Gets the account details associated with this.hostUrl and this.hostKey
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @returns {Promise<Object>}
     */
    getAccountDetails() {
        return new Promise((res, rej) => {
            Methods.getAccountDetails(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data.attributes);
            }).catch((err) => {
                rej(err.status);
            });
        });
    }

    getServerDetails(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerDetails(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     *
     * @returns {Promise<unknown>}
     */
    getAllServers() {
        return new Promise((res, rej) => {
            Methods.getAllServers(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch((err) => {
                return rej(err.status);
            })
        })
    }

    /**
     * Gets a server by a specified page number
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param pageNum
     * @returns {Promise<unknown>}
     */
    getServerPage(pageNum) {
        return new Promise((res, rej) => {
            Methods.getServerPage(this.hostUrl, this.apiKey, pageNum).then((response) => {
                return res(response.data.data);
            }).catch((err) => {
                return rej(err.status);
            });
        });
    }


    /**
     * Gets a list of API keys that this assigned host and key have available to them
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @returns {Promise<unknown>}
     */
    getApiKeys() {
        return new Promise((res, rej) => {
            Methods.getApiKeys(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data.data);
            }).catch((err) => {
                return rej(err.status);
            })
        })
    }

    /**
     * Creates an API key with specified host and api key. tbh this feels pretty useless as the key i received from this request gave me a 403, i will not provide support for this command.
     * REPEAT: WILL NOT PROVIDE SUPPORT FOR THIS COMMAND!!!!!!
     * Make sure to read that previous line ^
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param description
     * @param allowedIps
     * @returns {Promise<unknown>}
     */
    createApiKey(description, allowedIps) {
        if (allowedIps === undefined) allowedIps = [];
        return new Promise((res, rej) => {
            Methods.createApiKey(this.hostUrl, this.apiKey, description, allowedIps).then((response) => {
                return res(response.data);
            }).catch((err) => {
                return rej(err.status);
            });
        });
    }

    /**
     * Deletes a specified API key. Only use the API key identifier provided to you on the panel
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param keyId
     * @returns {Promise<Boolean>}
     */
    deleteApiKey(keyId) {
        return new Promise((res, rej) => {
            Methods.deleteApiKey(this.hostUrl, this.apiKey, keyId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Updates the email for the specified host and API key
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param newEmail
     * @param currentPassword
     * @returns {Promise<unknown>}
     */
    updateEmail(newEmail, currentPassword) {
        return new Promise((res, rej) => {
            Methods.updateEmail(this.hostUrl, this.apiKey, newEmail, currentPassword).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    updatePassword(newPassword, currentPassword) {
        return new Promise((res, rej) => {
            Methods.updatePassword(this.hostUrl, this.apiKey, newPassword, currentPassword).then((response => {
                return res(true);
            })).catch(err => rej(this.processError(err)));
        });
    }
}

module.exports = Client;