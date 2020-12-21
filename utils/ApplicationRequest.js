module.exports = {

    CREATE_USER_META: "APPLICATION_CREATE_USER",
    CREATE_USER: "APPLICATION_CREATE_USER",

    GET_ALL_SERVERS: "APPLICATION_GET_ALL_SERVERS",
    GET_SERVER_INFO_META: "APPLICATION_GET_SERVER_INFO",

    CREATE_SERVER_META: "APPLICATION_CREATE_SERVER",
    CREATE_SERVER: "APPLICATION_CREATE_SERVER",


    /**
     * @return {string}
     */
    GET_SERVER_INFO(serverId) {
        return `APPLICATION_GET_SERVER_INFO:${serverId}`;
    },
    /**
     * @return {string}
     */
    SUSPEND_SERVER(serverId) {
        return `APPLICATION_SUSPEND_SERVER:${serverId}`;
    },
    SUSPEND_SERVER_META: "APPLICATION_SUSPEND_SERVER",
    /**
     * @return {string}
     */
    UNSUSPEND_SERVER(serverId) {
        return `APPLICATION_UNSUSPEND_SERVER:${serverId}`
    },
    UNSUSPEND_SERVER_META: "APPLICATION_UNSUSPEND_SERVER",
    /**
     * @return {string}
     */
    REINSTALL_SERVER(serverId) {
        return `APPLICATION_REINSTALL_SERVER:${serverId}`
    },
    REINSTALL_SERVER_META: "APPLICATION_REINSTALL_SERVER"

};