// This gets the library we need to send curl requests to the pterodactyl panel
const axios = require('axios');
//var exports = module.exports = {};

// This is a required function for the API to work,
// Must be called before using any fuction in this API
let URL;
let Key;
let Port
function login(PanelURL, APIKey) {
	URL = PanelURL;
	//Port = PanelPort;
	Key = APIKey;
}

// This is used for getting a internal server id
function getInternalID(ServerID) {
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
		let data = { ID: response.data.attributes. };
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

function delete(InternalID) {
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

module.exports = {
	changeName: changeName,
	changeDescription: changeDescription,
	reinstall: reinstall,
	rebuild: rebuild,
	delete: delete,
	getSuspended: getSuspended,
	suspend: suspend,
	unSuspend: unSuspend,
	setRAM: setRAM,
	setDatabaseAmt: setDatabaseAmt,
	setAllocationAmt: setAllocationAmt
};
