// This gets the library we need to send curl requests to the pterodactyl panel
//var http = require('follow-redirects').http;
const axios = require('axios');

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
login("https://panel.skynode.pro", "lZtZxXgsQAk5I5TDgvuOU7M2l9o0PAkLHPAbr62KyEbqhLkO");
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
		let data = { TotalRAM: response.data.attributes.cpu.current + "%" }
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
		let data = { UsedDisk: response.data.attributes.disk.current, TotalDisk: response.data.attributes.disk.limit  }
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
		let data = { Amount: response.data.attributes.feature_limits.databases  }
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
		let data = { Amount: response.data.attributes.feature_limits.allocations  }
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
		let data = { ID: response.data.attributes.identifier, UUID: response.data.attributes.uuid  }
		console.log(data);
		return data;
	}).catch(console.error);
}
getServerIDs("8fa8d709");

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
		let data = { TotalRAM: response.data.attributes.memory.limit, UsedRAM: response.data.attributes.memory.current }
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
		let data = { Name: response.data.attributes.name, Description: response.data.attributes.description };
		return data;
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


/////////////////
// FOOTER NOTES//
/////////////////

// For the URL, it needs to be structured like this:
// panel.com
// if it is set to anything other than that there could be an error


//////////////////
// TESTING AREA //
//////////////////
