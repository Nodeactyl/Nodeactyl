const {Request, ACTION} = require('../utils/request.js');
const {handleResultInterval} = require('../utils/loops.js');
let session = undefined;
let executed = false;
let result = undefined;
let options;
/**
 * @param {String} Version Version of the server to use
 * @param {String} NameOfServer Name of server to create
 * @param {Integer} OwnerID User ID of who should own this server
 * @param {Integer} NestID ID of the nest to use when making a server
 * @param {Integer} EggID Egg ID to use when installing the server
 * @param {String} DockerImage The image to use from docker
 * @param {String} StartupCmd The command to use when starting this server (AKA JVM Arguments)
 * @param {Integer} RAM The amount of RAM the server has
 * @param {Integer} Swap The amount of Swap the server has
 * @param {Integer} Disk The amount of Storage the server has
 * @param {Integer} IO Set this to 500 please. Dont touch it. (Even if you know what it is leave it alone)
 * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
 * @param {Integer} AmountOfDatabases The max amount of databases a server can use
 * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
 * 
 * @yields Object (refer to docs for schema);
 */
function createServer(Version, NameOfServer, OwnerID, NestID, EggID, DockerImage, StartupCmd, RAM, Swap, Disk, IO, CPU, AmountOfDatabases, AmountOfAllocations) {
    
    options = [NameOfServer, OwnerID, NestID, EggID, DockerImage, StartupCmd, RAM, Swap, Disk, IO, CPU, AmountOfDatabases, AmountOfAllocations];
    options = makeData(options, Version);
    executed = true;
    process.emit(ACTION.GET_SESSION);
    return new Promise((resolve, reject) => {
        let maxTries = 50;
        let tries = 0;
        setImmediate(() => {
            if (result != undefined) return resolve(result);
            let interval = setInterval(() => {
                if (tries < maxTries) {
                    handleResultInterval(interval, result, resolve);
                } else {
                    reject(new Error('Did not receive response from server'))
                    result = undefined;
                    session = undefined;
                    clearInterval(interval);
                }
            });
        })
    });
}

function execute() {
    Req = Request(session.URL, session.Key);
    Req.sendPost('createServer', options, 'data').then(response => {
        result = response;
    }).catch(error => {
        throw error;
    })
}

process.on(ACTION.RECEIVE_SESSION, function(data) {
    if (executed == true) {
        executed = false;
        session = data;
        execute();
    } 
});

function makeData(data, version) {
    return {
        "external_id":"test_server",
        "name": data[0],
        "user": data[1],
        "description": "test",
        "nest": data[2],
        "egg": data[3],
        "docker_image": data[4],
        "startup": data[5],
        "limits": {
            "memory": data[6],
            "swap": data[7],
            "disk": data[8],
            "io": data[9],
            "cpu": data[10]
        },
        "feature_limits": {
            "databases": data[11],
            "allocations": data[12]
        },
        "environment": {
            "DL_VERSION": version,
            "SERVER_JARFILE":"server.jar",
            "VANILLA_VERSION": version,
            "BUNGEE_VERSION": version,
            "PAPER_VERSION": version
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

createServer.prototype.getServer = function() {
    return this.server
}

module.exports = createServer;