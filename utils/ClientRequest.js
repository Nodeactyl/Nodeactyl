module.exports = {

    GET_ACCOUNT_DETAILS: "CLIENT_GET_ACCOUNT_DETAILS",
    GET_ACCOUNT_PERMISSIONS: "CLIENT_GET_ACCOUNT_PERMISSIONS",
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
    START_SERVER_META: "CLIENT_START_SERVER",
    /**
     * @return {string}
     */
    START_SERVER(serverId) {
        return `CLIENT_START_SERVER:${serverId}`
    },
    STOP_SERVER_META: "CLIENT_STOP_SERVER",
    /**
     * @return {string}
     */
    STOP_SERVER(serverId) {
        return `CLIENT_STOP_SERVER:${serverId}`;
    },
    RESTART_SERVER_META: "CLIENT_RESTART_SERVER",
    /**
     * @return {string}
     */
    RESTART_SERVER(serverId) {
        return `CLIENT_RESTART_SERVER:${serverId}`;
    },
    KILL_SERVER_META: "CLIENT_KILL_SERVER",
    /**
     * @return {string}
     */
    KILL_SERVER(serverId) {
        return `CLIENT_KILL_SERVER:${serverId}`;
    },
    SEND_SERVER_COMMAND_META: "CLIENT_SEND_SERVER_COMMAND",
    /**
     * @return {string}
     */
    SEND_SERVER_COMMAND(serverId) {
        return `api/client/servers/1a7${serverId}/command`;
    },
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