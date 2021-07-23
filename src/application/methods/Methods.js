const NodeactylRequest = require('../../utils/NodeactylRequest.js');
const ApplicationRequest = require('../../utils/ApplicationRequest');

exports.getUsers = (host, key) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_ALL_USERS);
}

exports.getUser = (host, key, userId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_USER_INFO(userId));
}

exports.getUserPage = (host, key, page) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_USER_PAGE(page));
}

exports.deleteUser = (host, key, userId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeDelete(ApplicationRequest.DELETE_USER(userId));
}

exports.createUser = (host, key, Email, Username, FirstName, LastName) => {
    let data = {
        email: Email,
        username: Username,
        first_name: FirstName,
        last_name: LastName
    };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.CREATE_USER, data);
};

exports.updateUserDetails = (host, key, userId, Email, Username, FirstName, LastName, Language, Password) => {
    let data = {
        'email': Email,
        'username': Username,
        'first_name': FirstName,
        'last_name': LastName,
        'language': Language,
        'password': Password
    }
    let req = new NodeactylRequest(host, key);
    return req.executePatch(ApplicationRequest.UPDATE_USER_DETAILS(userId), data);
};

exports.createServer = (host, key, Version, NameOfServer, OwnerID, EggID, DockerImage,
                        StartupCmd, RAM, Swap, Disk, IO, CPU,
                        AmountOfDatabases, AmountOfBackups, AmountOfAllocations) => {

    let data = {
        'name': NameOfServer,
        'user': OwnerID,
        'egg': EggID,
        'docker_image': DockerImage,
        'startup': StartupCmd,
        'limits': {
            'memory': RAM,
            'swap': Swap,
            'disk': Disk,
            'io': IO,
            'cpu': CPU,
        },
        'feature_limits': {
            'databases': AmountOfDatabases,
            'allocations': AmountOfAllocations,
            'backups': AmountOfBackups
        },
        'environment': {
            'DL_VERSION': Version,
            'SERVER_JARFILE': 'server.jar',
            'VANILLA_VERSION': Version,
            'BUNGEE_VERSION': Version,
            'MINECRAFT_VERSION': Version,
            'MC_VERSION': Version,
            'BUILD_NUMBER': Version,
            'INSTALL_REPO': Version,
            'STARTUP_CMD': 'npm install --unsafe-perm',
            'SECOND_CMD': 'node index.js',
        },
        'allocation': {
            'default': 1,
            'additional': [],
        },
        'deploy': {
            'locations': [1],
            'dedicated_ip': false,
            'port_range': [],
        },
        'start_on_completion': true,
        'skip_scripts': false,
        'oom_disabled': true,
    };
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.CREATE_SERVER, data);
};

exports.createRawServer = (host, key, data) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.CREATE_SERVER, data);
}

exports.getServers = (host, key,) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_ALL_SERVERS);
};

exports.getServerPage = (host, key, page) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_SERVER_PAGE(page));
}

exports.getServerDetails = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_SERVER_INFO(serverId));
};

exports.suspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.SUSPEND_SERVER(serverId));
};

exports.suspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.SUSPEND_SERVER(serverId));
};

exports.unsuspendServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.UNSUSPEND_SERVER(serverId));
};

exports.reinstallServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executePost(ApplicationRequest.REINSTALL_SERVER(serverId));
};

exports.updateServerDetails = (host, key, serverId, Name, userId, externalId, Description) => {
    let data = {
        'name': Name,
        'user': userId,
        'external_id': externalId,
        'description': Description
    }
    let req = new NodeactylRequest(host, key);
    return req.executePatch(ApplicationRequest.UPDATE_SERVER_DETAILS(serverId), data);
};

exports.updateServerBuild = (host, key, serverId, AllocationID, RAM, Swap, IO, CPU, Disk, Threads, AmountOfDatabases, AmountOfBackups, AmountOfAllocations) => {
    let data = {
        'allocation': AllocationID,
        'memory': RAM,
        'swap': Swap,
        'io': IO,
        'cpu': CPU,
        'disk': Disk,
        'threads': Threads,
        'feature_limits': {
            'databases': AmountOfDatabases,
            'allocations': AmountOfAllocations,
            'backups': AmountOfBackups
        }
    };
    let req = new NodeactylRequest(host, key);
    return req.executePatch(ApplicationRequest.UPDATE_SERVER_BUILD(serverId), data);
};

exports.updateServerStartup = (host, key, serverId, startupCmd, environment, egg, dockerImage, skipScripts) => {
    let data = {
        "startup": startupCmd,
        "environment": environment,
        "egg": egg,
        "image": dockerImage,
        "skip_scripts": skipScripts
    }
    let req = new NodeactylRequest(host, key);
    return req.executePatch(ApplicationRequest.UPDATE_SERVER_STARTUP(serverId), data);
}

exports.deleteServer = (host, key, serverId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeDelete(ApplicationRequest.DELETE_SERVER(serverId));
}

exports.getNest = (host, key, nestId) => {
    let req = new NodeactylRequest(host, key);
    return req.executeGet(ApplicationRequest.GET_NEST_INFO(nestId));
};