import axios from 'axios';

class Nodeactyl {
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

    public request(method: 'GET' | 'PUT' | 'POST' | 'DELETE', data: any) {
        this.host = this.host.trim();

        return axios(this.host, {
            headers: this.getHeaders(),
            maxRedirects: 5,
            method,
            data,
        });
    }
}

export default Nodeactyl;
