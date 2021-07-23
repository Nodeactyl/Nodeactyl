class ServerBuilder {

    /**
     * Object = server JSON data, leave blank if you dont have
     * and object and just want to use ServerBuilder
     * @param object
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
     * @param json
     */
    setJson(json) {
        this.object = json;
    }

    /**
     * Creates the server directly from this class using your NodeactylApplication instance
     * Make sure to login to the Application before passing it through this function!
     *
     * @param applicationInstance Your NodeactylApplication instance
     * @returns {Promise}
     */
    createServer(applicationInstance) {
        return applicationInstance.createRawServer(this.object);
    }

    /**
     * Sets the servers name
     * @param serverName
     */
    setServerName(serverName) {
        this.object.name = serverName;
    }

    /**
     * Sets the owners ID
     * @param ownerId
     */
    setServerOwner(ownerId) {
        this.object.user = ownerId;
    }

    /**
     * Sets the servers egg to use
     *
     * By default this is 1
     *
     * @param eggId
     */
    setServerEgg(eggId) {
        this.object.egg = eggId;
    }

    /**
     * Sets the servers docker image to use
     *
     * By default this is set to Java
     *
     * @param dockerImage
     */
    setServerDockerImage(dockerImage) {
        this.object.docker_image = dockerImage;
    }

    /**
     * Sets the servers startup comand to use
     *
     * By default this is set to "java -Xms128M -Xmx128M -jar server.jar"
     *
     * @param startupCmd
     */
    setServerStartup(startupCmd) {
        this.object.startup = startupCmd;
    }

    /**
     * If you want to set all server limits at one time, you can make a JSON object and insert it here
     *
     * @param json
     */
    setServerLimitsJson(json) {
        this.object.limits = json;
    }

    /**
     * Max amount of RAM this server can have in MB
     * @param ram
     */
    setServerRAM(ram) {
        this.object.limits.memory = ram;
    }

    /**
     * Max amount of swam this server can have in MB
     * @param swap
     */
    setServerSwap(swap) {
        this.object.limits.swap = swap;
    }

    /**
     * Sets the IO for this server to use in MB (Prolly shouldnt change this)
     * @param io
     */
    setServerIO(io) {
        this.object.limits.io = io;
    }

    /**
     * Sets the max amount of CPU usage for this server, 100 = 1 core 200 = 2 cores etc etc
     * @param cpu
     */
    setServerCPU(cpu) {
        this.object.limits.cpu = cpu;
    }

    /**
     * If you want to set all feature limits at one time, insert a JSON object here
     * @param json
     */
    setServerFeatureLimitsJson(json) {
        this.object.feature_limits = json;
    }

    /**
     * Sets the amount of databases this server is allowed to have
     * @param databaseLimit
     */
    setServerDatabaseLimit(databaseLimit) {
        this.object.feature_limits.databases = databaseLimit;
    }

    /**
     * Sets the allocation limit of this server
     * @param allocationLimit
     */
    setServerAllocationLimit(allocationLimit) {
        this.object.feature_limits.allocations = allocationLimit;
    }

    /**
     * Sets the max amount of backups this server is allowed to have
     * @param backupLimit
     */
    setServerBackupLimit(backupLimit) {
        this.object.feature_limits.backups = backupLimit;
    }

    /**
     * If want all env variables set at once, insert a JSON object here
     * @param json
     */
    setServerEnvironmentJson(json) {
        this.object.environment = json;
    }

    /**
     * Sets the environment version number, do note this doesnt work with all eggs, if you
     * want and egg added it must be public and on github (or any git provider)!
     *
     * By default these are all set to "LATEST"
     *
     * @param version
     */
    setServerEnvironmentVersion(version) {
        this.object.environment.DL_VERSION = version;
        this.object.environment.BUILD_NUMBER = version;
        this.object.environment.BUNGEE_VERSION = version;
        this.object.environment.INSTALL_REPO = version;
        this.object.environment.MC_VERSION = version;
        this.object.environment.MINECRAFT_VERSION = version;
        this.object.environment.VANILLA_VERSION = version;
    }

    /**
     * If your using a NodeJS egg, set the startup command here
     * otherwise dont use this
     * @param command
     */
    setServerNodeJSStartupCommand(command) {
        this.object.environment.STARTUP_CMD = command;
    }

    /**
     * If you want allocations set at once, insert your json data here
     * @param json
     */
    setServerAllocationJson(json) {
        this.object.allocation = json;
    }

    /**
     * Sets the default servers allocation
     *
     * By default this is 1
     *
     * @param allocationId
     */
    setServerDefaultAllocation(allocationId) {
        this.object.allocation.default = allocationId;
    }

    /**
     * Allows you to add multiple allocations to this serer
     *
     * By default this is an empty array []
     *
     * @param allocations
     */
    setServerAdditionalAllocations(allocations) {
        this.object.allocation.additional = allocations;
    }

    /**
     * If you want to set server deploy data at once, insert json object here
     * @param json
     */
    setServerDeployJson(json) {
        this.object.deploy = json;
    }

    /**
     * Sets the locations of where to deploy this to
     *
     * MUST BE AN ARRAY
     * By default this is set to [1]
     *
     * @param locations
     */
    setServerDeployLocations(locations) {
        this.object.deploy.locations = locations;
    }

    /**
     * Sets wether or not this server should get its own dedicated IP
     *
     * By default this is false
     *
     * @param yesOrNo
     */
    setServerUsesDedicatedIp(yesOrNo) {
        this.object.deploy.dedicated_ip = yesOrNo;
    }

    /**
     * Sets a range of ports that this server can use
     *
     * By default this value is empty []
     *
     * @param portRange
     */
    setServerPortRange(portRange) {
        this.object.deploy.port_range = portRange;
    }

    /**
     * Sets wether or not you want this server to start when it has finished creating
     *
     * By default this is set at true
     *
     * @param yesOrNo
     */
    setServerStartsWhenCompleted(yesOrNo) {
        this.object.start_on_completion = yesOrNo;
    }

    /**
     * Sets wether or not this server should skip scripts
     *
     * By default this value is set as false
     *
     * @param yesOrNo
     */
    setServerSkipScripts(yesOrNo) {
        this.object.skip_scripts = yesOrNo;
    }

    /**
     * Sets wether or not you want OOM disabled
     *
     * By default this value is set as true
     *
     * @param isDisabled
     */
    setServerOOMDisabled(isDisabled) {
        this.object.oom_disabled = isDisabled;
    }

    /**
     * Returns the servers JSON object
     * @returns {*|{allocation: {default: number, additional: []}, egg: number, start_on_completion: boolean, oom_disabled: boolean, deploy: {dedicated_ip: boolean, port_range: [], locations: [number]}, environment: {DL_VERSION: string, STARTUP_CMD: string, BUILD_NUMBER: string, INSTALL_REPO: string, MINECRAFT_VERSION: string, VANILLA_VERSION: string, SERVER_JARFILE: string, SECOND_CMD: string, BUNGEE_VERSION: string, MC_VERSION: string}, startup: string, feature_limits: {databases: number, allocations: number, backups: number}, name: string, user: null, limits: {disk: number, memory: number, swap: number, io: number, cpu: number}, docker_image: string, skip_scripts: boolean}}
     */
    getServerObject() {
        return this.object;
    }

}

module.exports = ServerBuilder;