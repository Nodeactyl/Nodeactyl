import axios from 'axios';

class Axios {
    host: string;
    key: string;

    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }

    private getHeaders() {
        return {
            Authorization: 'Bearer ' + this.key,
            'Content-Type': 'application/json',
            Accept: 'Application/vnd.pterodactyl.v1+json',
        };
    }

    public request(method: 'GET' | 'PUT' | 'POST' | 'DELETE', cmdUrl: string, data: string | null) {
        const URL = this.host.trim() + cmdUrl;

        return axios(URL, {
            headers: this.getHeaders(),
            maxRedirects: 5,
            method,
            data,
        });
    }
}

export default Axios;
