module.exports = {

    GET_ACCOUNT_DETAILS: "CLIENT_GET_ACCOUNT_DETAILS",
    GET_SERVER_INFO_META: "CLIENT_GET_SERVER_INFO",
    /**
     * @return {string}
     */
    GET_SERVER_INFO(serverId) {
        return `CLIENT_GET_SERVER_INFO:${serverId}`;
    },
    GET_ALL_SERVERS: "CLIENT_GET_ALL_SERVERS",
    /**
     * @return {string}
     */
    GET_SERVER_PAGE(pageNum) {
        return `CLIENT_GET_ALL_SERVERS:${pageNum}`;
    },
    GET_SERVER: "CLIENT_GET_SERVER",
    GET_API_KEYS: "CLIENT_GET_API_KEYS",
    CREATE_API_KEY: "CLIENT_CREATE_API_KEY",
    DELETE_API_KEY_META: "CLIENT_DELETE_API_KEY",
    /**
     * @return {string}
     */
    DELETE_API_KEY(id) {
        return `CLIENT_DELETE_API_KEY:${id}`;
    },
    UPDATE_EMAIL: "CLIENT_UPDATE_EMAIL",
    UPDATE_PASSWORD: "CLIENT_UPDATE_PASSWORD"
};