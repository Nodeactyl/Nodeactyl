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

export const enableTwoFactor = (
    host: string,
    key: string,
    twoFACode: string,
) => {
    const data = { code: twoFACode };
    const axios = new Axios(host, key);
    return axios.request('POST', 'api/client/account/two-factor', `${data}`);
};

export const disableTwoFactor = (
    host: string,
    key: string,
    password: string,
) => {
    const data = { password: password };
    const axios = new Axios(host, key);
    return axios.request('DELETE', 'api/client/account/two-factor', `${data}`);
};

export const updateEmail = (
    host: string,
    key: string,
    newEmail: string,
    password: string,
) => {
    const data = { email: newEmail, password: password };
    const axios = new Axios(host, key);
    return axios.request('PUT', 'api/client/account/email', `${data}`);
};

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

//todo websocket will be implimented last.

export const resourceUsage = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/resources`,
        null,
    );
};

export const sendCommand = (
    host: string,
    key: string,
    serverId: string,
    command: string,
) => {
    const data = { command: command };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/command`,
        `${data}`,
    );
};

export const changePowerState = (
    host: string,
    key: string,
    serverId: string,
    state: 'start' | 'stop' | 'restart' | 'kill',
) => {
    const data = { signal: state };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/power`,
        `${data}`,
    );
};

export const listDatabases = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/databases`,
        null,
    );
};

export const createDatabase = (
    host: string,
    key: string,
    serverId: string,
    newDatabaseName: string,
    remote: string,
) => {
    const data = { database: newDatabaseName, remote: remote };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/databases`,
        `${data}`,
    );
};

export const rotateDatabasePassword = (
    host: string,
    key: string,
    serverId: string,
    databaseId: string,
) => {
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/databases/${databaseId}/rotate-password`,
        null,
    );
};

export const deleteDatabase = (
    host: string,
    key: string,
    serverId: string,
    databaseId: string,
) => {
    const axios = new Axios(host, key);
    return axios.request(
        'DELETE',
        `api/client/servers/${serverId}/databases/${databaseId}`,
        null,
    );
};

//! This needs to be looked at. (api/client/servers/${serverId}/files/list?directory=) unsure how it is layed put but (directory=${ "URL" }) = URL encoded path to list files from. - cainthebest
/* 
export const listFiles = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/list?directory=`,
        null,
    );
};
*/

//! This needs to be looked at. (api/client/servers/${serverId}/files/contents?file=) unsure how it is layed put but (file=${ "URL" }) = URL encoded path to the desired file. - cainthebest
/* 
export const getFileContent = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/contents?file=`,
        null,
    );
};
*/

//! This needs to be looked at. (api/client/servers/${serverId}/files/contents?file=) unsure how it is layed put but (file=${ "URL" }) = URL encoded path to the desired file to download. - cainthebest
/*
export const downloadFile = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/download?file=`,
        null,
    );
};
*/

export const renameFile = (
    host: string,
    key: string,
    serverId: string,
    root: string,
    fileName: string,
    newFileName: string,
) => {
    const data = { root: root, files: [{ from: fileName, to: newFileName }] };
    const axios = new Axios(host, key);
    return axios.request(
        'PUT',
        `api/client/servers/${serverId}/files/rename`,
        `${data}`,
    );
};

export const copyFile = (
    host: string,
    key: string,
    serverId: string,
    location: string,
) => {
    const data = { location: location };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/files/copy`,
        `${data}`,
    );
};

//! This needs to be looked at. (api/client/servers/${serverId}/files/write?file=) unsure how it is layed put but (file=${ "URL" }) = URL encoded path to the desired file to write. - cainthebest
/*
export const writeFile = (host: string, key: string, serverId: string, rawData: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/write?file=`,
        `${rawData}`,
    );
};
*/

export const compressFile = (
    host: string,
    key: string,
    serverId: string,
    root: string,
    fileName: Array<string>,
) => {
    const data = { root: root, files: fileName };
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/compress`,
        `${data}`,
    );
};

export const decompressFile = (
    host: string,
    key: string,
    serverId: string,
    root: string,
    fileName: string,
) => {
    const data = { root: root, files: fileName };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/files/decompress`,
        `${data}`,
    );
};

export const deleteFile = (
    host: string,
    key: string,
    serverId: string,
    root: string,
    fileName: Array<string>,
) => {
    const data = { root: root, files: fileName };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/files/delete`,
        `${data}`,
    );
};

export const createFolder = (
    host: string,
    key: string,
    serverId: string,
    root: string,
    folderName: string,
) => {
    const data = { root: root, name: folderName };
    const axios = new Axios(host, key);
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/files/create-folder`,
        `${data}`,
    );
};

export const uploadFile = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/files/upload`,
        null,
    );
};

export const listSchedules = (host: string, key: string, serverId: string) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/schedules`,
        null,
    );
};

export const createSchedule = (
    host: string,
    key: string,
    serverId: string,
    name: string,
    minute: string,
    hour: string,
    dayOfWeek: string,
    dayOfMonth: string,
    active?: boolean,
) => {
    const axios = new Axios(host, key);
    const data = {
        name: name,
        minute: minute,
        hour: hour,
        day_of_month: dayOfMonth,
        day_of_week: dayOfWeek,
        is_active: active,
    };
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/schedules`,
        `${data}`,
    );
};

export const scheduleDetails = (
    host: string,
    key: string,
    serverId: string,
    scheduleId: string,
) => {
    const axios = new Axios(host, key);
    return axios.request(
        'GET',
        `api/client/servers/${serverId}/schedules/${scheduleId}`,
        null,
    );
};

export const updateSchedule = (
    host: string,
    key: string,
    serverId: string,
    scheduleId: string,
    name: string,
    minute: string,
    hour: string,
    dayOfWeek: string,
    dayOfMonth: string,
    active?: boolean,
) => {
    const axios = new Axios(host, key);
    const data = {
        name: name,
        minute: minute,
        hour: hour,
        day_of_month: dayOfMonth,
        day_of_week: dayOfWeek,
        is_active: active,
    };
    return axios.request(
        'POST',
        `api/client/servers/${serverId}/schedules/${scheduleId}`,
        `${data}`,
    );
};

export const deleteSchedule = (
    host: string,
    key: string,
    serverId: string,
    scheduleId: string,
) => {
    const axios = new Axios(host, key);
    return axios.request(
        'DELETE',
        `api/client/servers/${serverId}/schedules/${scheduleId}`,
        null,
    );
};
