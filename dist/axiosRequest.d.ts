declare class Axios {
    host: string;
    key: string;
    constructor(host: string, key: string);
    private getHeaders;
    request(method: 'GET' | 'PUT' | 'POST' | 'DELETE', cmdUrl: string, data: string | null): import("axios").AxiosPromise<any>;
}
export default Axios;
