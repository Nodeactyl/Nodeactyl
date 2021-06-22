import Axios from "../utils/axiosRequest";

export const listServers = (host: string, key: string) => {
    const axios = new Axios(host, key);
    return axios.request('GET', 'api/client', null)
}

export const showPermissions = (host: string , key: string) => {
    const axios = new Axios(host, key)
    return axios.request('GET', 'api/client/permissions', null)
}

export const accountDetails = (host: string , key: string) => {
    const axios = new Axios(host, key)
    return axios.request('GET', 'api/client/account', null)
}

export const genaratetwoFactorQR = (host: string , key: string) => {
    const axios = new Axios(host, key)
    return axios.request('GET', 'api/client/account/two-factor', null)
}

export const enableTwoFactor = (host: string , key: string) => {
    const axios = new Axios(host, key)
    return axios.request('POST', 'api/client/account/two-factor', 'JSON From "Gen2FQR"')
}

export const disableTwoFactor = (host: string , key: string) => {
    const axios = new Axios(host, key)
    return axios.request('DELETE', 'api/client/account/two-factor', '"PasswordFromAccount"')
}


