module.exports = {

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