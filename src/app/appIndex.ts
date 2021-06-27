export default class NodeactylApp {
    hostUrl: string;
    apiKey: string;

    constructor(host: string, key: string) {
        this.hostUrl = host;
        this.apiKey = key;
    }
}
