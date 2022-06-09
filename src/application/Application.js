const Methods = require("./methods/Methods.js");

class NodeactylApplication {

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
     * Gets a list of users from your panel
     *
     * @returns {Promise}
     * @param {Integer} Page number
     */
    getAllUsers() {
        return new Promise((res, rej) => {
            Methods.getUsers(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets details of a user
     *
     * @returns {Promise}
     * @param {Integer} userId
     */
    getUserDetails(userId) {
        return new Promise((res, rej) => {
            Methods.getUser(this.hostUrl, this.apiKey, userId).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets details of a user by username
     *
     * @returns {Promise}
     * @param {String} username
     */
    getUserByUsername(username) {
        return new Promise(async (res, rej) => {
            await Methods.getUsers(this.hostUrl, this.apiKey).then(async (response) => {
                let user = false;
                let pages = response.data.meta.pagination.total_pages
                for (let i = 1; i <= pages; i++) {
                    await Methods.getUserPage(this.hostUrl, this.apiKey, i).then(page => {
                        user = page.data.data.find(d => d.attributes.username === username)
                    }).catch(err => rej(this.processError(err)));
                }
                return res(user);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets details of a user
     *
     * @returns {Promise}
     * @param {String} email
     */
    getUserByEmail(email) {
        return new Promise(async (res, rej) => {
            await Methods.getUsers(this.hostUrl, this.apiKey).then(async (response) => {
                let user = false;
                let pages = response.data.meta.pagination.total_pages
                for (let i = 1; i <= pages; i++) {
                    await Methods.getUserPage(this.hostUrl, this.apiKey, i).then(page => {
                        user = page.data.data.find(d => d.attributes.email === email)
                    }).catch(err => rej(this.processError(err)));
                }
                return res(user);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets users by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param pageNum
     * @returns {Promise}
     */
    getUserPage(pageNum) {
        return new Promise((res, rej) => {
            Methods.getUserPage(this.hostUrl, this.apiKey, pageNum).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Creates a user
     *
     * @param {String} Email Users email
     * @param {String} Username Users username
     * @param {String} FirstName Users first name
     * @param {String} LastName Users last name
     * @param {String} Password Users password (optional)
     * @returns {Promise}
     */
    createUser(Email, Username, FirstName, LastName, Password = null) {
        return new Promise((res, rej) => {
            Methods.createUser(this.hostUrl, this.apiKey, Email, Username, FirstName, LastName, Password).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Updates a users details
     *
     * @param {Integer} userId
     * @param {String} Email
     * @param {String} Username
     * @param {String} FirstName
     * @param {String} LastName
     * @param {String} Language
     * @param {String} Password
     * @returns {Promise}
     */
    updateUserDetails(userId, Email, Username, FirstName, LastName, Language, Password) {
        return new Promise((res, rej) => {
            Methods.updateUserDetails(this.hostUrl, this.apiKey, userId, Email, Username, FirstName, LastName, Language, Password).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Creates a server !! DEPRECATED !!
     * @deprecated
     *
     * @param {String} Version Version of the server to use
     * @param {String} NameOfServer Name of server to create
     * @param {Integer} OwnerID User ID of who should own this server
     * @param {Integer} EggID Egg ID to use when installing the server
     * @param {String} DockerImage The image to use from Docker
     * @param {String} StartupCmd The command to use when starting this server (AKA JVM Arguments)
     * @param {Integer} RAM The amount of RAM the server has
     * @param {Integer} Swap The amount of Swap the server has
     * @param {Integer} Disk The amount of Storage the server has
     * @param {Integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
     * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
     * @param {Integer} AmountOfDatabases The max amount of databases a server can use
     * @param {Integer} AmountOfBackups The max backups you can hold
     * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
     * @returns {Promise}
     */
    createServer(Version, NameOfServer, OwnerID, EggID, DockerImage,
               StartupCmd, RAM, Swap, Disk, IO, CPU,
               AmountOfDatabases, AmountOfBackups, AmountOfAllocations) {
        console.log("\x1b[31m" + "createServer() is deprecated, please use createRawServer() or use the ServerBuilder!")
        return new Promise((res, rej) => {
            Methods.createServer(this.hostUrl, this.apiKey, Version, NameOfServer, OwnerID, EggID, DockerImage,
                StartupCmd, RAM, Swap, Disk, IO, CPU,
                AmountOfDatabases, AmountOfBackups, AmountOfAllocations).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Creates a server using a raw JSON object
     * @param object
     * @returns {Promise}
     */
    createRawServer(object) {
        return new Promise((res, rej) => {
            Methods.createRawServer(this.hostUrl, this.apiKey, object).then((response) => {
                return res(response.data);
            }).catch((err => rej(this.processError(err))));
        });
    }

    /**
     * Creates a server
     * @deprecated
     *
     * @param {Integer} OwnerID User ID of who should own this server
     * @param {Integer} EggID Egg ID to use when installing the server
     * @param {Integer} RAM The amount of RAM the server has
     * @param {Integer} Disk The amount of Storage the server has
     * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
     * @param {Integer} AmountOfDatabases The max amount of databases a server can use
     * @param {Integer} AmountOfBackups The max backups you can hold
     * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
     * @returns {Promise}
     */
    createSimpleServer(OwnerID, EggID, RAM, Disk, CPU, AmountOfDatabases, AmountOfBackups, AmountOfAllocations) {
        console.log("\x1b[31m" + "createSimpleServer() is deprecated, please use createRawServer() or use the ServerBuilder!")
        return new Promise(async (res, rej) => {
            let nest;
            await Methods.getNest(this.hostUrl, this.apiKey, EggID).then(res => nest = res);
            Methods.createServer(this.hostUrl, this.apiKey, "latest", "Server", OwnerID, EggID, nest.data.attributes.docker_image,
                nest.data.attributes.startup, RAM, 0, Disk, 500, CPU,
                AmountOfDatabases, AmountOfBackups, AmountOfAllocations).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets a list of servers from your panel, currently this only get the first page but i will add support for grabbing ALL pages with this methods
     *
     * @returns {Promise}
     */
    getAllServers() {
        return new Promise((res, rej) => {
            Methods.getServers(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets servers by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param {Integer} pageNum
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
     * Gets a info of a server from your panel
     *
     * @param {Integer} serverId
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
     * Deletes a specified user
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param userId
     * @returns {Promise}
     */
    deleteUser(userId) {
        return new Promise((res, rej) => {
            Methods.deleteUser(this.hostUrl, this.apiKey, userId).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Suspend a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {Integer} serverId
     * @returns {Promise}
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
     * @param {Integer} serverId
     * @returns {Promise}
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
     * @param {Integer} serverId
     * @returns {Promise}
     */
    reinstallServer(serverId) {
        return new Promise((res, rej) => {
            Methods.reinstallServer(this.hostUrl, this.apiKey, serverId).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * UpdateServerDetails
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {Integer} serverId
     * @param {String} Name
     * @param {Integer} userId
     * @param {Integer} externalId
     * @param {String} Description
     * @returns {Promise}
     */
    updateServerDetails(serverId, Name, userId, externalId, Description) {
        return new Promise((res, rej) => {
            Methods.updateServerDetails(this.hostUrl, this.apiKey, serverId, Name, userId, externalId, Description).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * UpdateServerBuild
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {Integer} serverId
     * @param {Integer} AllocationID
     * @param {Integer} RAM
     * @param {Integer} Swap
     * @param {Integer} IO
     * @param {Integer} CPU
     * @param {Integer} Disk
     * @param {Integer} Threads
     * @param {Integer} AmountOfDatabases
     * @param {Integer} AmountOfBackups
     * @param {Integer} AmountOfAllocations
     * @returns {Promise}
     */
    updateServerBuild(serverId, AllocationID, RAM, Swap, IO, CPU, Disk, Threads, AmountOfDatabases, AmountOfBackups, AmountOfAllocations) {
        return new Promise((res, rej) => {
            Methods.updateServerBuild(this.hostUrl, this.apiKey, serverId, AllocationID, RAM, Swap, IO, CPU, Disk, Threads, AmountOfDatabases, AmountOfBackups, AmountOfAllocations).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * UpdateServerStartup
     *
     * This update the startup details for a specified server
     *
     * @param serverId ID of serer
     * @param StartupCmd new startup command to use for this server
     * @param Environment The environment object for this server to use
     * @param Egg Egg ID for this serer to use
     * @param DockerImage Docker Image for this serer
     * @param SkipScripts Do you want to skip scripts? (have no idea what this is)
     * @returns {Promise}
     */
    updateServerStartup(serverId, StartupCmd, Environment, Egg, DockerImage, SkipScripts) {
        return new Promise((res, rej) => {
            Methods.updateServerStartup(this.hostUrl, this.apiKey, serverId, StartupCmd, Environment, Egg, DockerImage, SkipScripts).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Deletes a specified server
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param serverId
     * @returns {Promise}
     */
    deleteServer(serverId) {
        return new Promise((res, rej) => {
            Methods.deleteServer(this.hostUrl, this.apiKey, serverId).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets details of a nest
     *
     * @returns {Promise}
     * @param {Integer} nestId
     */
    getNestDetails(nestId) {
        return new Promise((res, rej) => {
            Methods.getNest(this.hostUrl, this.apiKey, nestId).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Get all locations from your panel
     *
     * @returns {Promise}
     */
    getAllLocations() {
        return new Promise((res, rej) => {
            Methods.getLocations(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets locations by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param {Integer} pageNum
     * @returns {Promise}
     */
    getLocationPage(pageNum) {
        return new Promise((res, rej) => {
            Methods.getLocationPage(this.hostUrl, this.apiKey, pageNum).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets a info of a location from your panel
     *
     * @param {Integer} locationId
     * @returns {Promise}
     */
    getLocationDetails(locationId) {
        return new Promise((res, rej) => {
            Methods.getLocationDetails(this.hostUrl, this.apiKey, locationId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Creates a new location
     *
     * @param {String} short Identifier for the location Ex: GB
     * @param {String} long Descrption for the location Ex: London Datacenter
     * @returns {Promise}
     */
    createLocation(short, long) {
        return new Promise((res, rej) => {
            Methods.createLocation(this.hostUrl, this.apiKey, short, long).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Updates the short or long location details
     *
     * @param {Integer} locationId
     * @param {String} short Identifier for the location Ex: GB
     * @param {String} long Descrption for the location Ex: London Datacenter
     * @returns {Promise}
     */
    updateLocationDetails(locationId, short, long) {
        return new Promise((res, rej) => {
            Methods.updateLocationDetails(this.hostUrl, this.apiKey, locationId, short, long).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Deletes a specified location
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * @param locationId
     * @returns {Promise}
     */
    deleteLocation(locationId) {
        return new Promise((res, rej) => {
            Methods.deleteLocation(this.hostUrl, this.apiKey, locationId).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Get all nodes from your panel
     *
     * @returns {Promise}
     */
    getAllNodes() {
        return new Promise((res, rej) => {
            Methods.getNodes(this.hostUrl, this.apiKey).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets nodes by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param {Integer} pageNum
     * @returns {Promise}
     */
    getNodePage(pageNum) {
        return new Promise((res, rej) => {
            Methods.getNodePage(this.hostUrl, this.apiKey, pageNum).then((response) => {
                return res(response.data.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets info of a node from your panel
     *
     * @param {Integer} nodeId the id oftthe node to get the details of
     * @returns {Promise}
     */
    getNodeDetails(nodeId) {
        return new Promise((res, rej) => {
            Methods.getNodeDetails(this.hostUrl, this.apiKey, nodeId).then((response) => {
                return res(response.data.attributes);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Gets the configuration of given node
     *
     * @param {Integer} nodeId the id of the node to get the config for
     * @returns {Promise}
     */
    getNodeConfig(nodeId) {
        return new Promise((res, rej) => {
            Methods.getNodeConfig(this.hostUrl, this.apiKey, nodeId).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Creates a new node
     *
     * @param {String} name name of the new node
     * @param {Integer} locationId the id of the location to assign to this node
     * @param {String} fqdn the Fully Qualified Domain Name (or IP) for this node
     * @param {Integer} memory the amount of memory/ram this node has
     * @param {Integer} disk The amount of storage this node has
     * @returns {Promise}
     */
    createNode(name, locationId, fqdn, memory, disk) {
        return new Promise((res, rej) => {
            Methods.createNode(this.hostUrl, this.apiKey, name, locationId, fqdn, memory, disk).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Updates the details of the given node
     *
     * @param {Integer} nodeId id of the node to update
     * @param {String} name name of the node
     * @param {String} description description of the node
     * @param {String} locationId id of the location this node belongs to
     * @param {String} fqdn Fully Qualified Domain Name for node
     * @param {String} scheme scheme for node
     * @param {Boolean} behindProxy whether or not node is behind proxy like cloudflare
     * @param {Boolean} maintenanceMode whether or not the node is under maintenance
     * @param {Integer} memory memory of node
     * @param {Integer} memoryOver % of memory allowed to go over limit
     * @param {Integer} disk disk space of the node
     * @param {Integer} diskOver % of disk allowed to go over limit
     * @param {Integer} uploadSize max uploadSize, usually 100
     * @param {Integer} daemonSftp port for sftp
     * @param {Integer} daemonListen port for daemon to listen on
     * @returns {Promise}
     */
    updateNodeDetails(nodeId, name, description, locationId, fqdn, scheme,
                      behindProxy, maintenanceMode, memory, memoryOver, disk,
                      diskOver, uploadSize, daemonSftp, daemonListen) {
        return new Promise((res, rej) => {
            Methods.updateNodeDetails(this.hostUrl, this.apiKey, nodeId, name, description, locationId, fqdn, scheme,
                                         behindProxy, maintenanceMode, memory, memoryOver, disk,
                                         diskOver, uploadSize, daemonSftp, daemonListen).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Deletes a specified node
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * @param {Integer} nodeId the id of the node to delete
     * @returns {Promise}
     */
    deleteNode(nodeId) {
        return new Promise((res, rej) => {
            Methods.deleteNode(this.hostUrl, this.apiKey, nodeId).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

    /**
     * Gets the allocations of given node
     *
     * @param {Integer} nodeId the id of the node to get the allocations of
     * @returns {Promise}
     */
    getNodeAllocations(nodeId) {
        return new Promise((res, rej) => {
            Methods.getNodeAllocations(this.hostUrl, this.apiKey, nodeId).then((response) => {
                return res(response.data);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Create allocations on given node
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * @param {Integer} nodeId the id of the node to add allocations to
     * @param {String} ip the ip of the allocation as a string Ex: "127.0.0.1"
     * @param {Array} ports an array of ports as strings Ex: ["25565", "25575"]
     * @returns {Promise}
     */
    createNodeAllocations(nodeId, ip, ports) {
        return new Promise((res, rej) => {
            Methods.createNodeAllocations(this.hostUrl, this.apiKey, nodeId, ip, ports).then((response) => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        })
    }

    /**
     * Deletes a specified node allocation
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * @param {Integer} nodeId the id of the node to delete the allocation on
     * @param {Integer} allocationId the id of the allocation to delete
     * @returns {Promise}
     */
    deleteNodeAllocation(nodeId, allocationId) {
        return new Promise((res, rej) => {
            Methods.deleteNodeAllocation(this.hostUrl, this.apiKey, nodeId, allocationId).then(() => {
                return res(true);
            }).catch(err => rej(this.processError(err)));
        });
    }

}

module.exports = NodeactylApplication;
