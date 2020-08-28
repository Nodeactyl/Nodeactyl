const axios = require('axios');

class Request {
	constructor(host, key) {
		this.host = host;
		this.key = key;
	}

	getRequest(request, data) {
		const URL = getUrl(request, this.host, data);
		return axios.default.get(URL, {
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
		}).then(response => {
			switch (request) {
				case 'GetAllServers':
					return response.data.data;
					break;
	  
				case 'GetAllUsers':
					return response.data.data;
					break;
	  
				case 'GetUserInfo':
					return response.data.attributes;
					break;
	  
				case 'GetNodeInfo':
					return response.data;
					break;
	  
				case 'GetAllNodes':
					return response.data.data;
					break;
	  
				case 'GetAllUsersPagination':
					let PaginationAndUsers = Object.assign({ users: response.data.data }, response.data.meta.pagination);
				  	return PaginationAndUsers;
				  	break;
	  
				default:
				  	break;
			  }
		}).catch(error => {
			const err = createError(request, error, data);
			if (err) throw err;
		});
	}

	postRequest(request, data, data_) { // data_ is the d normall
		const URL = getUrl(request, this.host, data_);
		return axios({
			url: URL,
			method: 'POST',
			followRedirect: true,
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
			data: data,
		}).then(function(response) {
			switch (request) {
				case 'CreateServer':
					return response.data.attributes;
					break;
				case 'CreateUser':
					return response.data.attributes;
					break;
	  
				case 'CreateNode':
					return response.data.attributes;
					break;
	  
				case 'SuspendServer':
					return createObjectSuccess('Server suspended successfully');
					break;
	  
				case 'UnSuspendServer':
					return createObjectSuccess('Server unsuspended successfully');
					break;
	  
				case 'CreateDatabase':
					return response.data.attributes;
					break;
	  
				default:
					break;
			  }
		}).catch(error => {
			const err = createError(request, error, data);
			if (err) throw err;
		});
	}
	// Third arg is nullable
	patchRequest(request, data, _data) {
		const URL = getUrl(request, this.host, _data); // _data = nullable
		return axios({
			url: URL,
			method: 'PATCH',
			followRedirect: true,
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
			data: data,
		}).then(function(response) {
			if (request == 'EditUser') {
				// If people want make it return the server object
				return response.data.attributes;
			}
			else if (request == 'CreateUser') {
				return response.data.attributes;
			}
		}).catch(error => {
			const err = createError(request, error, data);
			if (err) throw err;
		});
	}

	deleteRequest(request, data) {
		const URL = getUrl(request, this.host, data);
		return axios({
			url: URL,
			method: 'DELETE',
			followRedirect: true,
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
			data: data,
		}).then(function(response) {
			if (request == 'DeleteUser') {
				// If people want make it return the server object
				return createObjectSuccess('User deleted successfully.');
			}
			else if (request == 'DeleteNode') {
				return createObjectSuccess('Node deleted successfully');
			}
			else if (request == 'DeleteServer') {
				return createObjectSuccess('Server deleted successfully');
			}
		}).catch(error => {
			const err = createError(request, error, data);
			if (err) throw err;
		});
	}
}

const server = ['CreateServer', 'GetAllServers'];
const users = ['CreateUser', 'GetAllUsers'];
const user = ['EditUser', 'DeleteUser', 'GetUserInfo'];
const nodes = ['GetAllNodes', 'CreateNode'];
const node = ['GetNodeInfo', 'DeleteNode'];
function getUrl(request, host, data) { // _data = nullable
	switch (true) {
		case user.indexOf(request) > -1:
		  return host + '/api/application/users/' + data;
		  break;
	
		case server.indexOf(request) > -1:
		  return host + '/api/application/servers';
		  break;
	
		case users.indexOf(request) > -1:
		  return host + '/api/application/users';
		  break;
		case node.indexOf(request) > -1:
		  return host + '/api/application/nodes/' + data;
		  break;
	
		case nodes.indexOf(request) > -1:
		  return host + '/api/application/nodes';
		  break;
		default:
		  break;
	  }

	switch (request) {
		case 'SuspendServer':
		  return host + '/api/application/servers/' + data + '/suspend';
		  break;
	
		case 'UnSuspendServer':
		  return host + '/api/application/servers/' + data + '/unsuspend';
		  break;
	
		case 'DeleteServer':
		  return host + '/api/application/servers/' + data;
		  break;
	
		case 'CreateDatabase':
		  return host + '/api/application/servers/' + data + '/databases';
		  break;
	
		case 'GetAllUsersPagination':
		  return host + '/api/application/users?page=' + data;
		  break;

		default:
		  break;
	  }
}

function createObjectSuccess(message) {
	return {
		success: true,
		message: message,
	}
}

function createError(request, err, data) {
	let error;

	
	if (request == 'CreateUser' || request == 'EditUser' || request == 'GetUserInfo') {
		if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) == false) {
			error = new Error('The provided email is not a valid.');
			error.status = 422;
			return error;
		}
		else if (err.response.status == 422) {
			error = new Error('User already exists! (Or Email/Username is in use already)');
			error.status = 422;
			return error;
		}
		else if (err.response.status == 404) {
			error = new Error('User does not exist!');
			error.status = 404;
			return error;
		}
		else {
			return err;
		}
	}
	else if(typeof err.response != 'undefined' && err.response.hasOwnProperty('data')) {
		return err.response.data.errors;
	}
}

module.exports = Request;