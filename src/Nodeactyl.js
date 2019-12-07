const axios = require('axios');

// Leave me alone these are colors.

let reset = "\x1b[0m";
//let underscore = "\x1b[4m";

let blue = "\x1b[34m";
let yellow = "\x1b[33m";
let red = "\x1b[31m";

// For custom error handling

function throwErrors(error) {
    if (error.code === "ENOTFOUND") {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: URL Not Found!\nURL ENTERED WAS: " + yellow + URL + red + "\nSystem will now exit." + reset);
        console.error(err.message);
        console.log(error.stack);
        //process.exit(1);
    } else if (error.response.status === 403 || error.response.status === 401) {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: API Key is not valid! (Or you did not specify client/application) \nCheck to see if your API Key is correct! (And wether your protocol is client or application)" + reset);
        console.error(err.message);
        console.log(error.stack);
        //process.exit(1);
    } else if (error.response.status === 404) {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: ! \nCheck to see if your API Key is correct!" + reset);
        console.error(err.message);
        console.log(error.stack);
        // process.exit(1);
    } else if (error.response.status === 410) {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: ! \nUhm... Everythings gone! (error code 410)" + reset);
        console.error(err.message);
        console.log(error.stack);
        //process.exit(1);
    } else if (error.response.status === 500) {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: ! \nInternal server error! (This is to do with your pterodactyl server" + reset);
        console.error(err.message);
        console.log(error.stack);
        //process.exit(1);
    } else if (error.response.status === 503) {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: ! \nServer unavailable! (Server is either down, or in maintence mode)" + reset);
        console.error(err.message);
        console.log(error.stack);
        //process.exit(1);
    } else {
        let err = new Error(blue + "\n[Nodeactyl] : " + red + "FATAL ERROR: ! \nOh heh... This error is undocumented..." + reset);
        console.error(err.message);
        console.error(error);
        // process.exit(1);
    }
}

////////////////////
//   CLIENT AREA  //
////////////////////

let URL;
let Key;
let Type;
function login(PanelURL, APIKey, type) {
    URL = PanelURL;
    Key = APIKey;
    Type = type;;
    if (Type.toLowerCase() === "client") {
        return axios.get(URL + '/api/client', {
            responseEncoding: 'utf8',
            maxRedirects: 5,
            headers: {
                'Authorization': 'Bearer ' + Key,
                'Content-Type': 'application/json',
                'Accept': 'Application/vnd.pterodactyl.v1+json',
            }
        }).then(function (response) {
            return response;
        }).catch(error => {
            throwErrors(error);
        });
    } else if (Type.toLowerCase() === "application") {
        return axios.get(URL + '/api/application/users', {
            responseEncoding: 'utf8',
            maxRedirects: 5,
            headers: {
                'Authorization': 'Bearer ' + Key,
                'Content-Type': 'application/json',
                'Accept': 'Application/vnd.pterodactyl.v1+json',
            }
        }).then(function (response) {
            return response;
        }).catch(error => {
            throwErrors(error);
        });
    } else {
        let error = {
            "response": {
                "status": 403,
            }
        }
        throwErrors(error);
    }
}

// This is for checking if a server is online or not
function isOnline(ServerID) {
    return axios.get(URL + '/api/client/servers/' + ServerID + '/utilization', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        if (response.data.attributes.state === "on") {
            return true;
        } else {
            return false;
        }
    }).catch(error => {
        throwErrors(error);
    });
}

// gets all servers a user has access to 
function getServerInfo(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for checking if a server belongs to someone or not
function isOwner(ServerID) {
    return axios.get(URL + '/api/client/servers/' + ServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        if (response.data.attributes.server_owner === true) {
            return true;
        } else {
            return false;
        }
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for getting a servers CPU Usage
function getCPU(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID + '/utilization', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { totalCPU: response.data.attributes.cpu.current + "%" }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is use to get server RAM/Used RAM
function getRAM(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID + '/utilization', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { totalRAM: response.data.attributes.memory.limit, usedRAM: response.data.attributes.memory.current }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for getting a servers CPU Usage
function getDisk(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID + '/utilization', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { usedDisk: response.data.attributes.disk.current, totalDisk: response.data.attributes.disk.limit }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
};

// This is used for getting a server name
function getNames(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID + '', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { name: response.data.attributes.name, description: response.data.attributes.description };
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for getting a servers CPU Usage
function getServerIDs(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { id: response.data.attributes.identifier, uuid: response.data.attributes.uuid }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for getting a servers CPU Usage
function getAllocationAmt(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { amount: response.data.attributes.feature_limits.allocations }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This is for getting a servers Database amount
function getDatabaseAmt(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client/servers/' + ServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        let data = { amount: response.data.attributes.feature_limits.databases }
        return data;
    }).catch(error => {
        throwErrors(error);
    });
}

//This is for starting a server
function startServer(ServerID) {

    return axios({
        url: URL + '/api/client/servers/' + ServerID + '/power',
        method: 'POST',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "signal": "start"
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

//This is for starting a server
function stopServer(ServerID) {

    return axios({
        url: URL + '/api/client/servers/' + ServerID + '/power',
        method: 'POST',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "signal": "stop"
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

//This is for starting a server
function restartServer(ServerID) {

    return axios({
        url: URL + '/api/client/servers/' + ServerID + '/power',
        method: 'POST',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "signal": "restart"
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

//This is for starting a server
function killServer(ServerID) {

    return axios({
        url: URL + '/api/client/servers/' + ServerID + '/power',
        method: 'POST',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "signal": "kill"
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

//This is for sending a command to a server
function sendCommand(ServerID, Command) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/client/servers/' + ServerID + '/command', {
        method: 'post',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            'command': Command,
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// gets all servers a user has access to 
function getAllServers() {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/client', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}
////////////////////
//   ADMIN  AREA  //
////////////////////

function getAllIDs(ServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/servers'/* + ServerID*/, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        response.data.attributes.forEach(function (stuff) {
            return stuff.id;
        })
    }).catch(error => {
        throwErrors(error);
    });
}

// This lists all users on the pterodactyl panel
function getAllUsers() {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/users', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// Gets user specific information by UserID
function getUserInfo(UserID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/users/' + UserID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// Gets user specific information by External ID
function getUserByExternalID(ExternalID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/users/' + ExternalID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// Creates a user
function createUser(Username, Email, FirstName, LastName, Password) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + "/api/application/users",
        method: 'POST',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "username": Username,
            "email": Email,
            "first_name": FirstName,
            "last_name": LastName,
            "password": Password
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// Creates a server
function createServer(NameServer, IDOwner, NestID, EggID, DockerImage, Startup, Memory, Swap, Disk, io, Cpu, NumberDataBases, NumberAllocations) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + "/api/application/servers",
        method: 'POST',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "name": NameServer,
            "user": IDOwner,
            "nest": NestID,
            "egg": EggID,
            "docker_image": DockerImage,
            "startup": Startup,
            "limits": {
                "memory": Memory,
                "swap": Swap,
                "disk": Disk,
                "io": io,
                "cpu": Cpu
            },
            "feature_limits": {
                "databases": NumberDataBases,
                "allocations": NumberAllocations
            },
            "environment": {
                "DL_VERSION": "1.12.2"
            },
            "deploy": {
                "locations": [1],
                "dedicated_ip": false,
                "port_range": []
            },
            "start_on_completion": true
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// Changes account details
function changeAccount(UserID, NewUsername, NewEmail, NewFirstName, NewLastName, NewPassword) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + "/api/application/users/" + UserID,
        method: 'PATCH',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        },
        data: {
            "username": NewUsername,
            "email": NewEmail,
            "first_name": NewFirstName,
            "last_name": NewLastName,
            "password": NewPassword
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

function deleteAccount(UserID) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + "/api/application/users/" + UserID,
        method: 'DELETE',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// This lists all nodes
function getAllNodes() {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/nodes', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// Gets a specific node
function getNode(NodeID) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + '/api/application/nodes/' + NodeID,
        method: 'GET',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// This deleted a node
function deleteNode(NodeID) {
    // This here is the Pterodactyl API Curl command
    return axios({
        url: URL + "/api/application/nodes/" + NodeID,
        method: 'DELETE',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// This lists node specific details
function getNodeAllocations(NodeID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/nodes/' + NodeID + '/allocations', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// GET EVERY FUCKING SERVER
function getEveryLastServer() {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/servers', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// display exact details of server
function getAllServerDetails(InternalServerID) {
    // This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/servers/' + InternalServerID, {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response.data;
    }).catch(error => {
        throwErrors(error);
    });
}

// Suspends a server
function suspend(InternalID) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + InternalID + '/suspend', {
        method: 'post',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

//unsuspend a server
function unSuspend(InternalID) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + InternalID + '/unsuspend', {
        method: 'post',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// rebuilds a server
function rebuild(InternalID) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + InternalID + '/rebuild', {
        method: 'post',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// to resinstall a server
function reinstall(InternalID) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + InternalID + '/reinstall', {
        method: 'post',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(error => {
        throwErrors(error);
    });
}

// This deletes a server
function deleteServer(InternalID) {
    // This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + InternalID, {
        method: 'delete',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        return response;
    }).catch(console.error);
}


////////////////////
//  EXPORTS AREA  //
////////////////////

module.exports = {
    // Client imports
    login: login,
    isOnline: isOnline,
    getServerInfo: getServerInfo,
    isOwner: isOwner,
    getCPU: getCPU,
    getRAM: getRAM,
    getDisk: getDisk,
    getNames: getNames,
    getServerIDs: getServerIDs,
    getAllocationAmt: getAllocationAmt,
    getDatabaseAmt: getDatabaseAmt,
    startServer: startServer,
    stopServer: stopServer,
    restartServer: restartServer,
    killServer: killServer,
    sendCommand: sendCommand,
    getAllServers: getAllServers,

    //Admin area
    getAllIDs: getAllIDs,
    getAllUsers: getAllUsers,
    getUserInfo: getUserInfo,
    getUserByExternalID: getUserByExternalID,
    createUser: createUser,
    createServer: createServer,
    changeAccount: changeAccount,
    deleteAccount: deleteAccount,
    getAllNodes: getAllNodes,
    getNode: getNode,
    deleteNode: deleteNode,
    getNodeAllocations: getNodeAllocations,
    getEveryLastServer: getEveryLastServer,
    getAllServerDetails: getAllServerDetails,
    suspend: suspend,
    unSuspend: unSuspend,
    rebuild: rebuild,
    reinstall: reinstall,
    deleteServer: deleteServer

}
