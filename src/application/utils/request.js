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
        if (request == 'getAllServers') {
            return response.data.data;
        }
    }).catch(error => {
        // This error is for invalid/malformed requests
        return new Error(checkError(error, request, data));
    });
}

function sendPost(request, postData, data) {
    let URL = getPostURL(request, this.host, data);
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
        if (request == 'createServer') {
            // If people want make it return the server object
            return true;
        }
    }).catch(error => {
        throw error;
        //return new Error(checkError(error, request, data));
    });
}


function getURL(request, host, data) {
    if (request == 'getAllServers') {
        return host + '/api/application/servers';
    } 
}

function getPostURL(request, host, data) {
    if (request == 'createServer') {
        return host + "/api/application/servers";
    }
}

function checkError(error, request, data) {
    if (error.hasOwnProperty('response')) {
        if (error.response.hasOwnProperty('status')) {
            let status = error.response.status;
            if (request == 'getAllServers') {
                return processStatus(request, status);
            } 
        }
    } else {
        throw error;
    }
}

function processStatus(request, status) {
    if (request == 'getAllServers') {
        if (status == 500) {

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

