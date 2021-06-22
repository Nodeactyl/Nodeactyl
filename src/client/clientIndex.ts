import * as methods from "../methods/client";

 
class NodeactylClient {
    hostUrl: string;
    apiKey: string;

   
    constructor(host: string, key: string) {
        this.hostUrl = host;
        this.apiKey = key;
    }
}
export default NodeactylClient;

