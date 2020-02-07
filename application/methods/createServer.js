let req = require('../ApplicationRequest.js');
/**
 * @param {String} Version Version of the server to use
 * @param {String} NameOfServer Name of server to create
 * @param {Integer} OwnerID User ID of who should own this server
 * @param {Integer} NestID ID of the nest to use when making a server
 * @param {Integer} EggID Egg ID to use when installing the server
 * @param {String} DockerImage The image to use from Docker
 * @param {String} StartupCmd The command to use when starting this server (AKA JVM Arguments)
 * @param {Integer} RAM The amount of RAM the server has
 * @param {Integer} Swap The amount of Swap the server has
 * @param {Integer} Disk The amount of Storage the server has
 * @param {Integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
 * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
 * @param {Integer} AmountOfDatabases The max amount of databases a server can use
 * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
 * 
 * @yields Object (refer to docs for schema);
 */
function createServer(Version, NameOfServer, OwnerID, NestID, EggID, DockerImage,
    StartupCmd, RAM, Swap, Disk, IO, CPU,
    AmountOfDatabases, AmountOfAllocations) {
        let data = makeData(Version, NameOfServer, OwnerID, NestID, EggID, DockerImage, StartupCmd, RAM, Swap, Disk, IO, CPU, AmountOfDatabases, AmountOfAllocations);
        const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
        return Req.postRequest("CreateServer", data, null);
}

function makeData(Version, NameOfServer, OwnerID, NestID, EggID, DockerImage,
    StartupCmd, RAM, Swap, Disk, IO, CPU,
    AmountOfDatabases, AmountOfAllocations) {
    return {
        "name": NameOfServer,
        "user": OwnerID,
        "description": "A Nodeactyl server",
        "egg": EggID,
        "pack": NestID,
        "docker_image": DockerImage,
        "startup": StartupCmd,
        "limits": {
            "memory": RAM,
            "swap": Swap,
            "disk": Disk,
            "io": IO,
            "cpu": CPU
        },
        "feature_limits": {
            "databases": AmountOfDatabases,
            "allocations": AmountOfAllocations
        },
        "environment": {
            "DL_VERSION": Version,
            "SERVER_JARFILE": "server.jar",
            "VANILLA_VERSION": Version,
            "BUNGEE_VERSION": Version,
            "PAPER_VERSION": Version,
            "MC_VERSION": Version,
            "BUILD_NUMBER": Version
        },
        "allocation": {
            "default": 1,
            "additional": [],
        },
        "deploy": {
            "locations": [1],
            "dedicated_ip": false,
            "port_range": []
        },
        "start_on_completion": true,
        "skip_scripts": false,
        "oom_disabled": true
    }
}
module.exports = createServer;
