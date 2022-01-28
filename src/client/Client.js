const Methods = require("./methods/Methods.js");

class NodeactylClient {

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

    getErrorCode(err) {
        err = err.message;
        let num = err.substr(err.length - 3);

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
     * @returns {Promise}
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
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    getServerDetails(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerDetails(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets a server's status, so whether it is running, starting or powered off
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
     getServerStatus(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerStatus(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.attributes.current_state);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets a list of servers from your panel, currently this only get the first page
     *
     * @returns {Promise}
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
     * @param {Integer} pageNum Page number
     * @returns {Promise}
     */
    getServerPage(pageNum) {
        return new Promise((res, rej) => {
            Methods.getServerPage(this.hostUrl, this.apiKey, pageNum).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Starts a server
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    startServer(serverId) {
        return new Promise((res, rej) => {
            Methods.startServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Stops a server
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    stopServer(serverId) {
        return new Promise((res, rej) => {
            Methods.stopServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Restarts a server
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    restartServer(serverId) {
        return new Promise((res, rej) => {
            Methods.restartServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Kills a server
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    killServer(serverId) {
        return new Promise((res, rej) => {
            Methods.killServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Sends a command to a server
     *
     * @param {String} serverId Server Id
     * @param {String} command Server Command
     * @returns {Promise}
     */
    sendServerCommand(serverId, command) {
        return new Promise((res, rej) => {
            Methods.sendServerCommand(this.hostUrl, this.apiKey, serverId, command).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets a servers current memory/cpu/disk usages as bytes
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
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
     * you will need to establish your own socket connection for now
     * (try socket.io)
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @param {String} newName New Name of Server
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @returns {Promise}
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
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @param {Integer} backupId Backup Id
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @param {Integer} backupId Backup Id
     * @returns {Promise}
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
     * @param {String} serverId Server Id
     * @param {Integer} backupId Backup Id
     * @returns {Promise}
     */
    deleteBackup(serverId, backupId) {
        return new Promise((res, rej) => {
            Methods.deleteBackupDownload(this.hostUrl, this.apiKey, serverId, backupId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Get subusers of a server
     *
     * @param {String} serverId Server Id
     * @returns {Promise}
     */
    getSubUsers(serverId) {
        return new Promise((res, rej) => {
            Methods.getSubUsers(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Create subuser on a server
     *
     * @param {String} serverId Server Id
     * @param {String} email Email
     * @param {Array} permissions Array of Permissions
     * @returns {Promise}
     */
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
     * @returns {Promise}
     */
    getApiKeys() {
        return new Promise((res, rej) => {
            Methods.getApiKeys(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Creates an API key with specified host and api key.
     * WILL NOT PROVIDE SUPPORT FOR THIS COMMAND!!!!!!
     * Make sure to read that previous line ^
     *
     * @param {String} description
     * @param {Array} allowedIps
     * @returns {Promise}
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
     * @param {Integer} keyId Key Id
     * @returns {Promise}
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
     * @param {String} newEmail New Email
     * @param {String} currentPassword Current Password
     * @returns {Promise}
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
     * @returns {Promise}
     * @param {String} newPassword New Password
     * @param {String} currentPassword Current Password
     */
    updatePassword(newPassword, currentPassword) {
        return new Promise((res, rej) => {
            Methods.updatePassword(this.hostUrl, this.apiKey, newPassword, currentPassword).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets the startup variables for a server
     *
     * @param {String} serverId id of the server to get startup
     * @returns {Promise}
     */
    getServerStartup(serverId) {
        return new Promise((res, rej) => {
            Methods.getServerStartup(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Sets the startup variables for a server
     *
     * @returns {Promise}
     * @param {String} serverId id of the server to set startup
     * @param {String} key the name of the startup variable
     * @param {String} value what to set the startup variable to
     */
    setServerStartup(serverId, key, value) {
        return new Promise((res, rej) => {
            Methods.setServerStartup(this.hostUrl, this.apiKey, serverId, key, value).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

}

module.exports = NodeactylClient;
