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
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets the permissions that this associated host and key have
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @returns {Promise<unknown>}
     */
    getAccountPermissions() {
        return new Promise((res, rej) => {
            Methods.getAccountPermissions(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets a Server's information NOTE: This does not return any live resource usages such as CPU, memory or RAM, but it will show the max limits of these values
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param serverId
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
     * Gets a list of servers from your panel, currently this only get the first page but i will add support for grabbing ALL pages with this methods
     *
     * @returns {Promise<unknown>}
     */
    getAllServers() {
        return new Promise((res, rej) => {
            Methods.getAllServers(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
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
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Starts a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    startServer(serverId) {
        return new Promise((res, rej) => {
            Methods.startServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Stops a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    stopServer(serverId) {
        return new Promise((res, rej) => {
            Methods.stopServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Restarts a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    restartServer(serverId) {
        return new Promise((res, rej) => {
            Methods.restartServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Kills a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    killServer(serverId) {
        return new Promise((res, rej) => {
            Methods.killServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * sends a command to a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     *
     * @param serverId
     * @param command
     * @returns {Promise<Boolean>}
     */
    sendServerCommand(serverId, command) {
        return new Promise((res, rej) => {
            Methods.sendServerCommand(this.hostUrl, this.apiKey, serverId, command).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * gets a servers current memory/cpu/disk usages as bytes
     *
     *
     * @param serverId
     * @returns {Promise<unknown>}
     */
    getServerUsages(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerUsages(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets the Console WebSocket instance for a server
     * you will ne to establish your own socket connection for now
     * (try socket.io)
     *
     * @param serverId
     * @returns {Promise<unknown>}
     */
    getConsoleWebSocket(serverId) {
        return new Promise((res, rej) => {
            Methods.getConsoleWebSocket(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Renames the target server
     *
     * @param serverId
     * @param newName
     * @returns {Promise<Boolean>}
     */
    renameServer(serverId, newName) {
        return new Promise((res, rej) => {
            Methods.renameServer(this.hostUrl, this.apiKey, serverId, newName).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * ReInstalls a target server
     *
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    reInstallServer(serverId) {
        return new Promise((res, rej) => {
            Methods.reInstallServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Lists what backups a server has
     *
     * @param serverId
     * @returns {Promise<Array>}
     */
    listServerBackups(serverId) {
        return new Promise((res, rej) => {
            Methods.listServerBackups(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Creates a backup for a specified server
     *
     * This will send a error code 924 when trying to create 2 backups within a 10 minute time frame
     * Stay tuned for what error this returns when the max amount of backups have been created
     *
     * @param serverId
     * @returns {Promise<Object>}
     */
    createServerBackup(serverId) {
        return new Promise((res, rej) => {
            Methods.createServerBackup(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets details about a specified server backups
     *
     * @param serverId
     * @param backupId
     * @returns {Promise<Object>}
     */
    getBackupDetails(serverId, backupId) {
        return new Promise((res, rej) => {
            Methods.getBackupDetails(this.hostUrl, this.apiKey, serverId, backupId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets a clickable URL to download your server backup
     *
     * @param serverId
     * @param backupId
     * @returns {Promise<Object>}
     */
    getBackupDownload(serverId, backupId) {
        return new Promise((res, rej) => {
            Methods.getBackupDownload(this.hostUrl, this.apiKey, serverId, backupId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Deletes a specified backup
     *
     * @param serverId
     * @param backupId
     * @returns {Promise<Boolean>}
     */
    deleteBackup(serverId, backupId) {
        return new Promise((res, rej) => {
            Methods.deleteBackupDownload(this.hostUrl, this.apiKey, serverId, backupId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    getSubUsers(serverId) {
        return new Promise((res, rej) => {
            Methods.getSubUsers(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    createSubUser(serverId, email, permissions) {
        return new Promise((res, rej) => {
            Methods.createSubUser(this.hostUrl, this.apiKey, serverId, email, permissions).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
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
            }).catch(err => rej(this.processError(err)));
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
            }).catch(err => rej(this.processError(err)));
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
            Methods.deleteApiKey(this.hostUrl, this.apiKey, keyId).then(() => {
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
     * @returns {Promise<Boolean>}
     */
    updateEmail(newEmail, currentPassword) {
        return new Promise((res, rej) => {
            Methods.updateEmail(this.hostUrl, this.apiKey, newEmail, currentPassword).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Updates the password for the specified host and api key
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     *
     * @param newPassword
     * @param currentPassword
     * @returns {Promise<Boolean>}
     */
    updatePassword(newPassword, currentPassword) {
        return new Promise((res, rej) => {
            Methods.updatePassword(this.hostUrl, this.apiKey, newPassword, currentPassword).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }


}

module.exports = Client;