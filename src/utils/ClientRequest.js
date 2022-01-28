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
    GET_SERVER_STATUS_META: "CLIENT_GET_SERVER_STATUS",
    /**
     * @return {string}
     */
    GET_SERVER_STATUS(serverId) {
        return `CLIENT_GET_SERVER_STATUS:${serverId}`;
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
        return `CLIENT_SEND_SERVER_COMMAND:${serverId}`;
    },
    GET_SERVER_USAGES_META: "CLIENT_GET_USAGES",
    /**
     * @return {string}
     */
    GET_SERVER_USAGES(serverId) {
        return `CLIENT_GET_USAGES:${serverId}`
    },
    GET_SERVER_STARTUP_META: "CLIENT_GET_STARTUP",
    /**
     * @return {string}
     */
    GET_SERVER_STARTUP(serverId) {
        return `CLIENT_GET_STARTUP:${serverId}`
    },
    SET_SERVER_STARTUP_META: "CLIENT_SET_STARTUP",
    /**
     * @return {string}
     */
    SET_SERVER_STARTUP(serverId) {
        return `CLIENT_SET_STARTUP:${serverId}`
    },
    GET_CONSOLE_WEBSOCKET_META: "CLIENT_GET_CONSOLE_WEBSOCKET",
    /**
     * @return {string}
     */
    GET_CONSOLE_WEBSOCKET(serverId) {
        return `CLIENT_GET_CONSOLE_WEBSOCKET:${serverId}`;
    },
    RENAME_SERVER_META: "CLIENT_RENAME_SERVER",
    /**
     * @return {string}
     */
    RENAME_SERVER(serverId) {
        return `CLIENT_RENAME_SERVER:${serverId}`;
    },
    REINSTALL_SERVER_META: "CLIENT_REINSTALL_SERVER",
    /**
     * @return {string}
     */
    REINSTALL_SERVER(serverId) {
        return `CLIENT_REINSTALL_SERVER:${serverId}`;
    },
    LIST_BACKUPS_META: "CLIENT_LIST_BACKUPS",
    /**
     * @return {string}
     */
    LIST_BACKUPS(serverId) {
        return `CLIENT_LIST_BACKUPS:${serverId}`;
    },
    CREATE_BACKUP_META: "CLIENT_CREATE_BACKUP",
    /**
     * @return {string}
     */
    CREATE_BACKUP(serverId) {
        return `CLIENT_CREATE_BACKUP:${serverId}`
    },
    GET_SERVER_BACKUP_META: "CLIENT_GET_SERVER_BACKUP",
    /**
     * @return {string}
     */
    GET_SERVER_BACKUP(serverId, backupId) {
        return `CLIENT_GET_SERVER_BACKUP:${serverId}:${backupId}`;
    },
    GET_SERVER_BACKUP_DOWNLOAD_META: "CLIENT_GET_SERVER_BACKUP_DOWNLOAD",
    /**
     * @return {string}
     */
    GET_SERVER_BACKUP_DOWNLOAD(serverId, backupId) {
        return `CLIENT_GET_SERVER_BACKUP_DOWNLOAD:${serverId}:${backupId}`;
    },
    DELETE_SERVER_BACKUP_META: "CLIENT_DELETE_SERVER_BACKUP",
    /**
     * @return {string}
     */
    DELETE_SERVER_BACKUP(serverId, backupId) {
        return `CLIENT_DELETE_SERVER_BACKUP:${serverId}:${backupId}`;
    },
    GET_SUBUSERS_META: "CLIENT_GET_SUBUSERS",
    /**
     * @return {string}
     */
    GET_SUBUSERS(serverId) {
        return `CLIENT_GET_SUBUSERS:${serverId}`;
    },
    CREATE_SUBUSER_META: "CLIENT_CREATE_SUBUSER",
    /**
     * @return {string}
     */
    CREATE_SUBUSER(serverId) {
        return `CLIENT_CREATE_SUBUSER:${serverId}`
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
