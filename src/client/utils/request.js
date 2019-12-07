<<<<<<< HEAD
const axios = require('axios');
/**
 * 
 * @param {String} host Host to send requst to
 * @param {String} key Application key
 */
function Request(host, key) {
    this.host = host;
    this.key = key;
    this.getMe = function() {
        throw 'hi';
    }
    this.sendGet = sendGet;
    this.sendPost = sendPost;
    return this;
}

function sendGet(request, data) {
    let URL = getURL(request, this.host, data);
    return axios.default.get(URL, {
        maxRedirects:5,
        headers: {
            'Authorization': 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(response => {
        if (request == 'isOnline') {
            return response.data.attributes.state == 'on';
        } else if (request == 'getServerInfo') {
            return response.data;
        } else if (request == 'getCPUUsage') {
            return {'current': response.data.attributes.cpu.current, 'limit':response.data.attributes.cpu.limit};
        } else if (request == 'getCPUCores') {
            return {'cores': response.data.attributes.cpu.cores};
        } else if (request == 'getRAMUsage') {
            return {'current': response.data.attributes.memory.current, 'limit': response.data.attributes.memory.limit};
        } else if (request == 'getServerState') {
            return response.data.attributes.state;
        } else if (request == 'getDiskUsage') {
            return {'current': response.data.attributes.disk.current, 'limit': response.data.attributes.disk.limit}
        }
    }).catch(error => {
        // This error is for invalid/malformed requests
        return new Error(checkError(error, request, data));
    });
}

function sendPost(request, data, postData) {
    let URL = postURL(request, this.host, data);
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
        data: postData
    }).then(function (response) {
        if (request == 'startServer') {
            return response.data;
        }
    }).catch(error => {
        let err = new Error(checkError(error, request, data));
        if (err != undefined) {
            return err;
        } else {
            throw error;
        }
    });
}

let utilization = ['isOnline', 'getCPUUsage', 'getRAM', 'getCPUCores',
     'getRAMUsage', 'getServerState', 'getDiskUsage', 'isOwner'];
let powerActions = ['startServer', 'stopServer', 'killServer', 'restartServer'];

function getURL(request, host, data) {
    if (utilization.indexOf(request) > -1) {
        return host + '/api/client/servers/' + data + '/utilization';
    } else if (request == 'getServerInfo') {
        return host + '/api/client/servers/' + data;
    } 
}

function postURL(request, host, data) {
    if (powerActions.indexOf(request) > -1) {
        return host + '/api/client/servers/' + data + '/power'
    }
}

function checkError(error, request, data) {
    if (error.hasOwnProperty('response')) {
        if (error.response.hasOwnProperty('status')) {
            let status = error.response.status;
            return processStatus(request, status);
        }
    } else {
        throw error;
    }
}

function processStatus(request, status) {
    if (request == 'isOnline') {
        if (status == 500) {
            return 'Server does not exist!';
        }
    } else if (request == 'getServerInfo') {
        if (status == 500) {
            return 'Server does not exist!';
        }
    } else if (utilization.indexOf(request) > -1) {
        if (status == 500) {
            return 'Server does not exist!';
        }
    }
}

let ACTION = {
    SET_SESSION: 'client nodeactyl login',
    GET_SESSION: 'get client nodeactyl session',
    SEND_SESSION: 'here is nodeactyl client login',
    RECEIVE_SESSION: 'here is nodeactyl client login'
}

module.exports = {
    Request: Request,
    ACTION: ACTION
};

=======
const axios = require('axios');
/**
 * 
 * @param {String} host Host to send requst to
 * @param {String} key Application key
 */
function Request(host, key) {
    this.host = host;
    this.key = key;
    this.getMe = function() {
        throw 'hi';
    }
    this.sendGet = sendGet;
    this.sendPost = sendPost;
    return this;
}

function sendGet(request, data) {
    let URL = getURL(request, this.host, data);
    return axios.default.get(URL, {
        maxRedirects:5,
        headers: {
            'Authorization': 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(response => {
        if (request == 'isOnline') {
            return response.data.attributes.state == 'on';
        } else if (request == 'getServerInfo') {
            return response.data.attributes;
        } else if (request == 'getCPUUsage') {
            return {'current': response.data.attributes.cpu.current, 'limit':response.data.attributes.cpu.limit};
        } else if (request == 'getCPUCores') {
            return {'cores': response.data.attributes.cpu.cores};
        } else if (request == 'getRAMUsage') {
            return {'current': response.data.attributes.memory.current, 'limit': response.data.attributes.memory.limit};
        } else if (request == 'getServerState') {
            return response.data.attributes.state;
        } else if (request == 'getDiskUsage') {
            return {'current': response.data.attributes.disk.current, 'limit': response.data.attributes.disk.limit}
        }
    }).catch(error => {
        let err = new Error(checkError(error, request, data));
        if (err != undefined) {
            return err;
        } else {
            throw error;
        }
    });
}

function sendPost(data, request, postData) {
    let URL = getURL(request, this.host, data);
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
        data: postData
    }).then(function (response) {
        if (request == 'startServer') {

        }
    }).catch(error => {
        return new Error(checkError(error, request, data));
    });
}

let utilization = ['isOnline', 'getCPUUsage', 'getRAM', 'getCPUCores',
     'getRAMUsage', 'getServerState', 'getDiskUsage'];

function getURL(request, host, data) {
    if (utilization.indexOf(request) > -1) {
        return host + '/api/client/servers/' + data + '/utilization';
    } else if (request == 'getServerInfo') {
        return host + '/api/client/servers/' + data;
    } else if (request == 'startServer') {
        return host + '/api/client/servers/' + data + '/power'
    }
}

function checkError(error, request, data) {
    if (error.hasOwnProperty('response')) {
        if (error.response.hasOwnProperty('status')) {
            let status = error.response.status;
            return processStatus(request, status);
        }
    } else {
        throw error;
    }
}

function processStatus(request, status) {
    if (request == 'isOnline') {
        if (status == 500) {
            return 'Server does not exist!';
        }
    } else if (request == 'getServerInfo') {
        if (status == 500) {
            return 'Server does not exist!';
        }
    } else if (utilization.indexOf(request) > -1) {
        if (status == 500) {
            return 'Server does not exist!';
        }
    }
}

let ACTION = {
    SET_SESSION: 'client nodeactyl login',
    GET_SESSION: 'get client nodeactyl session',
    SEND_SESSION: 'here is nodeactyl client login',
    RECEIVE_SESSION: 'here is nodeactyl client login'
}

module.exports = {
    Request: Request,
    ACTION: ACTION
};

>>>>>>> d5a6e5e5f2c0aaf147894f097ab1d85be9076cfd
