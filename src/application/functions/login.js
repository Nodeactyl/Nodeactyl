const axios = require('axios');
const {ACTION} = require('../utils/request.js');
 /**
  * 
  * @param {String} URL Your host URL
  * @param {String} APIKey Your client API Key
  * @param {Boolean} callback Returns true if you were logged in succesfully
  * @throws Throws a Nodeactyl API Error upon incorrect URL/Api Key
  */
const login = function(URL, Api_Key, callback) {
    /**
     * @throws Throws the URL and Api Key
     */
    this.get = function() {
        throw { URL: this.URL, Key: this.Api_Key };
    }
    this.throw_error = function() {
        throw this.err;
    }
    this.err = '';
    this.URL = URL;
    this.Key = Api_Key;
    if (this.URL == '' || this.URL == undefined) {
        throw 'You did not provide a URL for Application login()';
    } else if (this.Key == '' || this.Key == undefined) {
        throw 'You did not provide a API Key for Application login()';
    } else {
        request({URL: this.URL, Key: this.Key}, (valid, msg) => {
            if (valid == true) {
                process.emit(ACTION.SET_SESSION, {URL: this.URL, Key: this.Key})
                callback(true);
            } else if (valid == false){
                this.err = msg;
                callback(false);
            }
        })
    }
}

/**
 * 
 * @param {Object} x 
 * @param {Boolean} callback 
 */
const request = function(x, callback) {
    axios.get(x.URL + '/api/application/users', {
        responseEncoding: 'utf8',
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bearer ' + x.Key,
            'Content-Type': 'application/json',
            'Accept': 'Application/vnd.pterodactyl.v1+json',
        }
    }).then(function (response) {
        if (response.status == 404) {
            callback(false, 'API Key is not valid! (Application)');
        } else {
            callback(true);
        }
    }).catch(error => {
        if (error.response.status == 403) {
            callback(false, 'API Key is not valid! (Application)');
        }
    });
}

module.exports = login;