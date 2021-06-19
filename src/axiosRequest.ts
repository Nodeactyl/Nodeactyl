import axios from 'axios';

class nodeactyl {
    host: string;
    key: string;

    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }

    request(type: 'GET' | 'PUT' | 'POST' | 'DELETE', request: any) {
        if (type == 'GET') {
            return axios.get(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        } else if (type == 'PUT') {
            return axios.put(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        } else if (type == 'POST') {
            return axios.post(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        } else if (type == 'DELETE') {
            return axios.delete(trimedUrl(), {
                maxRedirects: 5,
                headers: getHeaders(),
            });
        }
    }
}

function trimedUrl() {}

function getHeaders() {
    return {
        Authorization: 'Bearer ' + this.apiKey,
        'Content-Type': 'application/json',
        Accept: 'Application/vnd.pterodactyl.v1+json',
    };
}
