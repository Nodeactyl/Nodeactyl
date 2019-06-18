const axios = require('axios');

////////////////////
//   CLIENT AREA  //
////////////////////

let URL;
let Key;
let Port
function login(PanelURL, APIKey) {
	URL = PanelURL;
	//Port = PanelPort;
	Key = APIKey;
}

//login("", "");
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
	}).then(function(response, body) {
		if (response.data.attributes.state === "on") {
			return true;
		} else {
			return false;
		}
	}).catch(console.error);
}

// gets all servers a user has access to 
function getServerInfo(ServerID) {
	// This here is the Pterodactyl API Curl command
    return axios.get(URL + 'api/client/servers/' + ServerID, {
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
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
	}).then(function(response) {
		let data = { totalCPU: response.data.attributes.cpu.current + "%" }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getCPU("8fa8d709");

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
	}).then(function(response) {
		let data = { usedDisk: response.data.attributes.disk.current, totalDisk: response.data.attributes.disk.limit  }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getDisk("8fa8d709");

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
	}).then(function(response) {
		let data = { amount: response.data.attributes.feature_limits.databases  }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getDatabaseAmt("8fa8d709");

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
	}).then(function(response) {
		let data = { amount: response.data.attributes.feature_limits.allocations  }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getAllocationAmt("8fa8d709");

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
	}).then(function(response) {
		let data = { id: response.data.attributes.identifier, uuid: response.data.attributes.uuid  }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getServerIDs("8fa8d709");

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
	}).then(function(response) {
		let data = { totalRAM: response.data.attributes.memory.limit, usedRAM: response.data.attributes.memory.current }
		console.log(data);
		return data;
	}).catch(console.error);
}
//getRAM("ef6737bb");

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
	}).then(function(response) {
		let data = { name: response.data.attributes.name, description: response.data.attributes.description };
		return data;
	}).catch(console.error);
}

// gets all servers a user has access to 
function getAllServers() {
	// This here is the Pterodactyl API Curl command
    return axios.get(URL + 'api/client', {
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}

//This is for stopping a server
function stopServer(ServerID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/client/servers/' + ServerID + '/power', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'signal': 'stop',
		}
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}
//stopServer("8fa8d709");

//This is for startinging a server
function startServer(ServerID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/client/servers/' + ServerID + '/power', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'signal': 'start',
		}
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}
//startServer("8fa8d709");

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
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}
//sendCommand("8fa8d709", "help");

////////////////////
//   ADMIN AREA   //
////////////////////

function getInternalID(ServerID) {
	// This here is the Pterodactyl API Curl command
    return axios.get(URL + '/api/application/servers'/* + ServerID*/, {
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		let data = { ID: response.data.attributes.ServerID.id };
		return data;
	}).catch(console.error);
}

function changeName(InternalID, Name) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/details', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'name': Name,
		}
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}
//changeName("", "");

function changeDescription(InternalID, Description) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/details', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'description': Description,
		}
	}).then(function(response) {
		return response.data;
	}).catch(console.error);
}
//changeDescription('', '');

function reinstall(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/reinstall', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//reinstall('');

function rebuild(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/rebuild', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//rebuild('');

function deleteServer(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID, {
		method: 'delete',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//delete('');

function getSuspended(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/details', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response.data.attributes.suspended;
	}).catch(console.error);
}
//getSuspended('');

function suspend(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/suspend', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//suspend('');

function unSuspend(InternalID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/unsuspend', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    }
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//unSuspend('');

function setRAM(ServerID, RAM) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'memory': RAM,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setRAM('');

function setCPU(ServerID, CPU) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'cpu': CPU,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setCPU('');

function setDisk(ServerID, Disk) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'disk': Disk,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setDisk('');

function setIO(ServerID, IO) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'io': IO,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setIO('');

function setSwap(ServerID, Swap) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'swap': Swap,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setSwap('');

function setDatabaseAmt(ServerID, Amt) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
		    "feature_limits": {
                "databases": Amt
            }
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setDatabaseAmt('');

function setAllocationAmt(ServerID, Amt) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/build', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
		    "feature_limits": {
                "allocations": Amt
            }
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setAllocationAmt('');

function setOwner(ServerID, UserID) {
	// This here is the Pterodactyl API Curl command
    return axios(URL + '/api/application/servers/' + ServerID + '/details', {
		method: 'post',
		responseEncoding: 'utf8',
		maxRedirects: 5,
		headers: {
            'Authorization': 'Bearer ' + Key,
            'Content-Type': 'application/json',
	        'Accept': 'Application/vnd.pterodactyl.v1+json',
	    },
		data: {
			'user': UserID,
		}
	}).then(function(response) {
		return response;
	}).catch(console.error);
}
//setOwner('', '');

////////////////////
// EXPORTING AREA //
////////////////////
module.exports = {
	// Client imports
    login: login,
	isOnline: isOnline,
	getCPU: getCPU,
	getRAM: getRAM,
	getDisk: getDisk,
	startServer: startServer,
	stopServer: stopServer,
	sendCommand: sendCommand,
	getNames: getNames,
	getServerIDs: getServerIDs,
	getAllocationAmt: getAllocationAmt,
	getDatabaseAmt: getDatabaseAmt,
	getAllServers: getAllServers,
	getServerInfo: getServerInfo,
	
	// Admin imports
	changeName: changeName,
	changeDescription: changeDescription,
	reinstall: reinstall,
	rebuild: rebuild,
	deleteServer: deleteServer,
	getSuspended: getSuspended,
	suspend: suspend,
	unSuspend: unSuspend,
	setRAM: setRAM,
	setDatabaseAmt: setDatabaseAmt,
	setAllocationAmt: setAllocationAmt
};


/////////////////
// FOOTER NOTES//
/////////////////

// For the URL, it needs to be structured like this:
// panel.com
// if it is set to anything other than that there could be an error
