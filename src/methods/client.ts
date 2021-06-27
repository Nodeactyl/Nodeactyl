import Axios from '../utils/axiosRequest';

export const listServers = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client', null);
};

export const showPermissions = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client/permissions', null);
};

export const accountDetails = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client/account', null);
};

export const genaratetwoFactorQR = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client/account/two-factor', null);
};

//todo jsonify code that user inputs from above
export const enableTwoFactor = (host: string, key: string, data: string) => {
    const axios = new Axios(host, key);
    return axios.request('POST', 'api/client/account/two-factor', `${data}`);
};

//todo password from account string etc
export const disableTwoFactor = (host: string, key: string, data: string) => {
    const axios = new Axios(host, key);
    return axios.request('DELETE', 'api/client/account/two-factor', data);
};

//todo jsonify email and password string for responce
export const updateEmail = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'PUT',
        'api/client/account/email',
        '"new email & password"',
    );
};

//todo jsonify current password, new password & new pass confimation
export const updatePassword = (
    host: string,
    key: string,
    password: string,
    newPassword: string,
    confirmNewPassword?: string,
    confimation?: boolean,
) => {
    const data = {
        current_password: password,
        password: newPassword,
        password_confirmation: confirmNewPassword,
    };
    if (confimation == false) {
        const data = {
            current_password: password,
            password: newPassword,
            password_confirmation: newPassword,
        };
        return data;
    }
    const axios = new Axios(host, key);
    return axios.request('PUT', 'api/client/account/password', `${data}`);
};

export const listApiKeys = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client/account/api-keys', null);
};

export const createApikey = (
    host: string,
    key: string,
    description: string,
    ips?: Array<string>,
) => {
    const data = { description: description, allowed_ips: ips };
    const axios = new Axios(host, key);
    return axios.request('POST', 'api/client/account/api-keys', `${data}`);
};

export const deleteApiKey = (host: string, key: string, identifier: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'DELETE',
        `api/client/account/api-keys/${identifier}`,
        null,
    );
};

export const serverDetails = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', `api/client/servers/${serverId}`, null);
};
