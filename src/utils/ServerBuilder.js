class ServerBuilder {
	
    /**
	 * Represents the possible options for Limits
	 * @typedef {Object} LimitOptions
	 * @property {number} memory The amount of RAM this server can have
	 * @property {number} swap The amount of swap this server can have
	 * @property {number} disk The disk size
	 * @property {number} io  Sets the IO for this server to use in MB
	 * @property {number} cpu Sets the max amount of CPU usage for this server, 100 = 1 core 200 = 2 cores etc etc
    */

    /**
	 * Represents the possible options for Feature Limits
	 * @typedef {Object} FeatureLimitOptions
	 * @property {number} [databases] The amount of databases this server is allowed to have
	 * @property {number} [allocations] The allocation limit of this server
	 * @property {number} [backups] The max amount of backups this server is allowed to have
    */

    /**
	 * Represents the possible options for Environment
	 * @typedef {Object} EnvironmentOptions
	 * @property {string} [DL_VERSION] Sets the environment version number
	 * @property {string} [SERVER_JARFILE] Sets the environment version number
	 * @property {string} [VANILLA_VERSION] Sets the environment version number
	 * @property {string} [BUNGEE_VERSION] Sets the environment version number
	 * @property {string} [MINECRAFT_VERSION] Sets the environment version number
	 * @property {string} [MC_VERSION] Sets the environment version number
	 * @property {string} [BUILD_NUMBER] Sets the environment version number
	 * @property {string} [INSTALL_REPO] Sets the environment version number
	 * @property {string} [STARTUP_CMD] If your using a NodeJS egg, set the startup command here
	 * @property {string} [SECOND_CMD] Sets the environment version number
    */

    /**
	 * Represents the possible options for Allocation
	 * @typedef {Object} AllocationOptions
	 * @property {number} default Sets the default servers allocation
	 * @property {array} additional Allows you to add multiple allocations to this serer
    */

    /**
	 * Represents the possible options for Feature Limits
	 * @typedef {Object} DeployOptions
	 * @property {number[]} locations Sets the locations of where to deploy this to
	 * @property {boolean} dedicated_ip Sets wether or not this server should get its own dedicated IP
	 * @property {number[]} port_range Sets a range of ports that this server can use
    */

    /**
	 * Represents the possible options for a ServerObject
	 * @typedef {Object} ServerOptions
	 * @property {string} name The name of the server
	 * @property {number} user The ownerId of the owner
	 * @property {number} egg  The servers egg to use
	 * @property {string} docker_image The docker image to use
	 * @property {string} startup The startup command to use
	 * @property {LimitOptions} limit Options for limits
	 * @property {FeatureLimitOptions} feature_limits Options for feature limits
	 * @property {EnvironmentOptions} environment Options for environment
	 * @property {AllocationOptions} allocation Options for allocation
	 * @property {DeployOptions} deploy Options for deploy
	 * @property {boolean} [start_on_completion] Sets wether or not you want this server to start when it has finished creating
	 * @property {boolean} [skip_scripts] Sets wether or not this server should skip scripts
	 * @property {boolean} [oom_disabled] Sets wether or not you want OOM disabled
    */

    /**
     * Object = server JSON data, leave blank if you dont have
     * and object and just want to use ServerBuilder
     * @param {ServerOptions} object
     */
    constructor(object = null) {
        this.default = {
            'name': "Default",
            'user': null,
            'egg': 1,
            'docker_image': "quay.io/pterodactyl/core:java",
            'startup': "java -Xms128M -Xmx128M -jar server.jar",
            'limits': {
                'memory': 1024,
                'swap': 500,
                'disk': 1024,
                'io': 500,
                'cpu': 100,
            },
            'feature_limits': {
                'databases': 1,
                'allocations': 1,
                'backups': 0
            },
            'environment': {
                'DL_VERSION': "LATEST",
                'SERVER_JARFILE': 'server.jar',
                'VANILLA_VERSION': "LATEST",
                'BUNGEE_VERSION': "LATEST",
                'MINECRAFT_VERSION': "LATEST",
                'MC_VERSION': "LATEST",
                'BUILD_NUMBER': "LATEST",
                'INSTALL_REPO': "LATEST",
                'STARTUP_CMD': 'npm install --unsafe-perm',
                'SECOND_CMD': 'node index.js',
            },
            'allocation': {
                'default': 1,
                'additional': [],
            },
            'deploy': {
                'locations': [1],
                'dedicated_ip': false,
                'port_range': [],
            },
            'start_on_completion': true,
            'skip_scripts': false,
            'oom_disabled': true,
        }
        this.object = object || this.default;
    }

    /**
     * Sets the entire Server JSON object
     * @param {JSON} json
     */
    setJson(json) {
        this.object = json;
    }

    /**
     * Creates the server directly from this class using your NodeactylApplication instance
     * Make sure to login to the Application before passing it through this function!
     *
     * @param {Object} applicationInstance Your NodeactylApplication instance
     * @returns {Promise}
     */
    createServer(applicationInstance) {
        return applicationInstance.createRawServer(this.object);
    }

    /**
     * Sets the servers name
     * @param {String} serverName
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerName(serverName) {
        this.object.name = serverName;
        return this;
    }

    /**
     * Sets the owners ID
     * @param {Integer} ownerId
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerOwner(ownerId) {
        this.object.user = ownerId;
        return this;
    }

    /**
     * Sets the servers egg to use
     *
     * By default this is 1
     *
     * @param {Integer} eggId
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerEgg(eggId) {
        this.object.egg = eggId;
        return this;
    }

    /**
     * Sets the servers docker image to use
     *
     * By default this is set to Java
     *
     * @param {String} dockerImage
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerDockerImage(dockerImage) {
        this.object.docker_image = dockerImage;
        return this;
    }

    /**
     * Sets the servers startup comand to use
     *
     * By default this is set to "java -Xms128M -Xmx128M -jar server.jar"
     *
     * @param {String} startupCmd
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerStartup(startupCmd) {
        this.object.startup = startupCmd;
        return this;
    }

    /**
     * If you want to set all server limits at one time, you can make a JSON object and insert it here
     *
     * @param {JSON} json
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerLimitsJson(json) {
        this.object.limits = json;
        return this;
    }

    /**
     * Max amount of RAM this server can have in MB
     * @param {Integer} ram
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerRAM(ram) {
        this.object.limits.memory = ram;
        return this;
    }

    /**
     * Max amount of swam this server can have in MB
     * @param {Integer} swap
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerSwap(swap) {
        this.object.limits.swap = swap;
        return this;
    }

    /**
     * Sets the IO for this server to use in MB (Prolly shouldnt change this)
     * @param {Integer} io
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerIO(io) {
        this.object.limits.io = io;
        return this;
    }

    /**
     * Sets the max amount of CPU usage for this server, 100 = 1 core 200 = 2 cores etc etc
     * @param {Integer} cpu
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerCPU(cpu) {
        this.object.limits.cpu = cpu;
        return this;
    }

    /**
     * If you want to set all feature limits at one time, insert a JSON object here
     * @param {JSON} json
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerFeatureLimitsJson(json) {
        this.object.feature_limits = json;
        return this;
    }

    /**
     * Sets the amount of databases this server is allowed to have
     * @param {Integer} databaseLimit
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerDatabaseLimit(databaseLimit) {
        this.object.feature_limits.databases = databaseLimit;
        return this;
    }

    /**
     * Sets the allocation limit of this server
     * @param {Integer} allocationLimit
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerAllocationLimit(allocationLimit) {
        this.object.feature_limits.allocations = allocationLimit;
        return this;
    }

    /**
     * Sets the max amount of backups this server is allowed to have
     * @param {Integer} backupLimit
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerBackupLimit(backupLimit) {
        this.object.feature_limits.backups = backupLimit;
        return this;
    }

    /**
     * If want all env variables set at once, insert a JSON object here
     * @param {JSON} json
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerEnvironmentJson(json) {
        this.object.environment = json;
        return this;
    }

    /**
     * Sets the environment version number, do note this doesnt work with all eggs, if you
     * want and egg added it must be public and on github (or any git provider)!
     *
     * By default these are all set to "LATEST"
     *
     * @param {String} version
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerEnvironmentVersion(version) {
        this.object.environment.DL_VERSION = version;
        this.object.environment.BUILD_NUMBER = version;
        this.object.environment.BUNGEE_VERSION = version;
        this.object.environment.INSTALL_REPO = version;
        this.object.environment.MC_VERSION = version;
        this.object.environment.MINECRAFT_VERSION = version;
        this.object.environment.VANILLA_VERSION = version;
        return this;
    }

    /**
     * If your using a NodeJS egg, set the startup command here
     * otherwise dont use this
     * @param {String} command
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerNodeJSStartupCommand(command) {
        this.object.environment.STARTUP_CMD = command;
        return this;
    }

    /**
     * If you want allocations set at once, insert your json data here
     * @param {JSON} json
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerAllocationJson(json) {
        this.object.allocation = json;
        return this;
    }

    /**
     * Sets the default servers allocation
     *
     * By default this is 1
     *
     * @param {Integer} allocationId
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerDefaultAllocation(allocationId) {
        this.object.allocation.default = allocationId;
        return this;
    }

    /**
     * Allows you to add multiple allocations to this serer
     *
     * By default this is an empty array []
     *
     * @param {Array} allocations
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerAdditionalAllocations(allocations) {
        this.object.allocation.additional = allocations;
        return this;
    }

    /**
     * If you want to set server deploy data at once, insert json object here
     * @param {JSON} json
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerDeployJson(json) {
        this.object.deploy = json;
        return this;
    }

    /**
     * Sets the locations of where to deploy this to
     *
     * MUST BE AN ARRAY
     * By default this is set to [1]
     *
     * @param {Array} locations
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerDeployLocations(locations) {
        this.object.deploy.locations = locations;
        return this;
    }

    /**
     * Sets wether or not this server should get its own dedicated IP
     *
     * By default this is false
     *
     * @param {Boolean} yesOrNo
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerUsesDedicatedIp(yesOrNo) {
        this.object.deploy.dedicated_ip = yesOrNo;
        return this;
    }

    /**
     * Sets a range of ports that this server can use
     *
     * By default this value is empty []
     *
     * @param {Array} portRange
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerPortRange(portRange) {
        this.object.deploy.port_range = portRange;
        return this;
    }

    /**
     * Sets wether or not you want this server to start when it has finished creating
     *
     * By default this is set at true
     *
     * @param {Boolean} yesOrNo
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerStartsWhenCompleted(yesOrNo) {
        this.object.start_on_completion = yesOrNo;
        return this;
    }

    /**
     * Sets wether or not this server should skip scripts
     *
     * By default this value is set as false
     *
     * @param {Boolean} yesOrNo
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerSkipScripts(yesOrNo) {
        this.object.skip_scripts = yesOrNo;
        return this;
    }

    /**
     * Sets wether or not you want OOM disabled
     *
     * By default this value is set as true
     *
     * @param {Boolean} isDisabled
     * @returns {ServerBuilder} The ServerBuilder instance
     */
    setServerOOMDisabled(isDisabled) {
        this.object.oom_disabled = isDisabled;
        return this;
    }

    /**
     * Returns the servers JSON object
     * @returns {ServerOptions}
     */
    getServerObject() {
        return this.object;
    }

}

module.exports = ServerBuilder;