export declare const listServers: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const showPermissions: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const accountDetails: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const genaratetwoFactorQR: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const enableTwoFactor: (host: string, key: string, data: string) => import("axios").AxiosPromise<any>;
export declare const disableTwoFactor: (host: string, key: string, data: string) => import("axios").AxiosPromise<any>;
export declare const updateEmail: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const updatePassword: (host: string, key: string, password: string, newPassword: string, confirmNewPassword?: string | undefined, confimation?: boolean | undefined) => import("axios").AxiosPromise<any> | {
    current_password: string;
    password: string;
    password_confirmation: string;
};
export declare const listApiKeys: (host: string, key: string) => import("axios").AxiosPromise<any>;
export declare const createApikey: (host: string, key: string, description: string, ips?: string[] | undefined) => import("axios").AxiosPromise<any>;
export declare const deleteApiKey: (host: string, key: string, identifier: string) => import("axios").AxiosPromise<any>;
export declare const serverDetails: (host: string, key: string, serverId: string) => import("axios").AxiosPromise<any>;
