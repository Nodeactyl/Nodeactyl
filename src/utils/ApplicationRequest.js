module.exports = {

    GET_ALL_USERS: "APPLICATION_GET_ALL_USERS",
    CREATE_USER_META: "APPLICATION_CREATE_USER",
    CREATE_USER: "APPLICATION_CREATE_USER",
    GET_USER_INFO_META: "APPLICATION_GET_USER_INFO",

    GET_ALL_SERVERS: "APPLICATION_GET_ALL_SERVERS",
    GET_SERVER_INFO_META: "APPLICATION_GET_SERVER_INFO",

    CREATE_SERVER_META: "APPLICATION_CREATE_SERVER",
    CREATE_SERVER: "APPLICATION_CREATE_SERVER",

    GET_ALL_LOCATIONS: "APPLICATION_GET_ALL_LOCATIONS",
    GET_LOCATION_INFO_META: "APPLICATION_GET_LOCATION_INFO",
    CREATE_LOCATION_META: "APPLICATION_CREATE_LOCATION",
    CREATE_LOCATION: "APPLICATION_CREATE_LOCATION",

    GET_ALL_NODES: "APPLICATION_GET_ALL_NODES",
    GET_NODE_INFO_META: "APPLICATION_GET_NODE_INFO",
    CREATE_NODE_META: "APPLICATION_CREATE_NODE",
    CREATE_NODE: "APPLICATION_CREATE_NODE",

    /**
     * @return {string}
     */
    GET_USER_INFO(userId) {
        return `APPLICATION_GET_USER_INFO:${userId}`;
    },
    /**
     * @return {string}
     */
    GET_USER_PAGE(pageNum) {
        return `APPLICATION_GET_ALL_USERS:${pageNum}`;
    },
    /**
     * @return {string}
     */
    UPDATE_USER_DETAILS(userId) {
        return `APPLICATION_UPDATE_USER_DETAILS:${userId}`
    },
    UPDATE_USER_DETAILS_META: "APPLICATION_UPDATE_USER_DETAILS",
    /**
     * @return {string}
     */
    DELETE_USER(userId) {
        return `APPLICATION_DELETE_USER:${userId}`
    },
    DELETE_USER_META: "APPLICATION_DELETE_USER",
    /**
     * @return {string}
     */
    GET_SERVER_INFO(serverId) {
        return `APPLICATION_GET_SERVER_INFO:${serverId}`;
    },
    /**
     * @return {string}
     */
    GET_SERVER_PAGE(pageNum) {
        return `APPLICATION_GET_ALL_SERVERS:${pageNum}`;
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
    REINSTALL_SERVER_META: "APPLICATION_REINSTALL_SERVER",
    /**
     * @return {string}
     */
    UPDATE_SERVER_DETAILS(serverId) {
        return `APPLICATION_UPDATE_SERVER_DETAILS:${serverId}`
    },
    UPDATE_SERVER_DETAILS_META: "APPLICATION_UPDATE_SERVER_DETAILS",
    /**
     * @return {string}
     */
    UPDATE_SERVER_BUILD(serverId) {
        return `APPLICATION_UPDATE_SERVER_BUILD:${serverId}`
    },
    UPDATE_SERVER_BUILD_META: "APPLICATION_UPDATE_SERVER_BUILD",
    /**
     * @return {string}
     */
    UPDATE_SERVER_STARTUP(serverId) {
        return `APPLICATION_UPDATE_SERVER_STARTUP:${serverId}`;
    },
    UPDATE_SERVER_STARTUP_META: "APPLICATION_UPDATE_SERVER_STARTUP",
    /**
     * @return {string}
     */
    DELETE_SERVER(serverId) {
        return `APPLICATION_DELETE_SERVER:${serverId}`
    },
    DELETE_SERVER_META: "APPLICATION_DELETE_SERVER",
    /**
     * @return {string}
     */
    GET_NEST_INFO(nestId) {
        return `APPLICATION_GET_NEST_INFO:${nestId}`
    },
    GET_NEST_INFO_META: "APPLICATION_GET_NEST_INFO",
    /**
     * @return {string}
     */
    GET_LOCATION_PAGE(pageNum) {
        return `APPLICATION_GET_ALL_LOCATIONS:${pageNum}`
    },
    /**
     * @return {string}
     */
    GET_LOCATION_INFO(locationId) {
        return `APPLICATION_GET_LOCATION_INFO:${locationId}`;
    },
    /**
     * @return {string}
     */
    UPDATE_LOCATION_DETAILS(locationId) {
        return `APPLICATION_UPDATE_LOCATION_DETAILS:${locationId}`
    },
    UPDATE_LOCATION_DETAILS_META: "APPLICATION_UPDATE_LOCATION_DETAILS",
    /**
     * @return {string}
     */
    DELETE_LOCATION(locationId) {
        return `APPLICATION_DELETE_LOCATION:${locationId}`
    },
    DELETE_LOCATION_META: "APPLICATION_DELETE_LOCATION",
    /**
     * @return {string}
     */
    GET_NODE_PAGE(pageNum) {
        return `APPLICATION_GET_ALL_NODES:${pageNum}`
    },
    /**
     * @return {string}
     */
    GET_NODE_INFO(nodeId) {
        return `APPLICATION_GET_NODE_INFO:${nodeId}`;
    },
    /**
     * @return {string}
     */
    GET_NODE_CONFIG(nodeId) {
        return `APPLICATION_GET_NODE_CONFIG:${nodeId}`;
    },
    GET_NODE_CONFIG_META: "APPLICATION_GET_NODE_CONFIG",
    /**
     * @return {string}
     */
    UPDATE_NODE_DETAILS(nodeId) {
        return `APPLICATION_UPDATE_NODE_DETAILS:${nodeId}`
    },
    UPDATE_NODE_DETAILS_META: "APPLICATION_UPDATE_NODE_DETAILS",
    /**
     * @return {string}
     */
    DELETE_NODE(nodeId) {
        return `APPLICATION_DELETE_NODE:${nodeId}`
    },
    DELETE_NODE_META: "APPLICATION_DELETE_NODE",
    /**
     * @return {string}
     */
    GET_NODE_ALLOCACTIONS(nodeId) {
        return `APPLICATION_GET_NODE_ALLOCATIONS:${nodeId}`;
    },
    GET_NODE_ALLOCACTIONS_META: "APPLICATION_GET_NODE_ALLOCATIONS",
    /**
     * @return {string}
     */
    CREATE_NODE_ALLOCACTIONS(nodeId) {
        return `APPLICATION_CREATE_NODE_ALLOCATIONS:${nodeId}`;
    },
    CREATE_NODE_ALLOCACTIONS_META: "APPLICATION_CREATE_NODE_ALLOCATIONS",
    /**
     * @return {string}
     */
    DELETE_NODE_ALLOCATION(nodeId, allocationId) {
        return `APPLICATION_DELETE_NODE_ALLOCATION:${nodeId}:${allocationId}`
    },
    DELETE_NODE_ALLOCATION_META: "APPLICATION_DELETE_NODE_ALLOCATION",
};
