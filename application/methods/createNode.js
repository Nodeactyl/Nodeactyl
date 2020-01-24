let req = require('../ApplicationRequest.js');

/**
 * 
 * @param {String} Name The name of the node
 * @param {String} Description A description for the node 
 * @param {String} LocationID Location ID to use
 * @param {Boolean} Public Is this node public? (true/false)
 * @param {String} FQDN Fully Qualified Domain Name (If you're using an IP: Scheme needs to be HTTP)
 * @param {String} Scheme HTTP/HTTPS
 * @param {Boolean} BehindProxy Is this node behind a proxy? (true/false)
 * @param {String} RAM How much RAM should be allocated for the node? 
 * @param {String} RAMOverAllocate How much overallocation for RAM? (Percent)
 * @param {String} Disk How much disk space be allocated for the node? 
 * @param {String} DiskOverallocate How much overallocation for the Disk? (percent)
 * @param {String} DaemonDir Directory of the daemon, normally /srv/daemon
 * @param {String} DaemonPort What port should the daemon use? Normally 8080
 * @param {String} DaemonSFTPPort What port should the daemon use? Normally 2022
 * @param {Boolean} MaintenceMode Is the node in maintence mode? (true/false)
 * @param {BigInteger} MaxUploadSize Must be between 1 and 1024 or you'll get a 422
 */
function createNode(Name, Description, LocationID, Public, FQDN, Scheme, BehindProxy, RAM, RAMOverAllocate,
    Disk, DiskOverallocate, DaemonDir, DaemonPort, DaemonSFTPPort, MaintenceMode, MaxUploadSize) {
    let data = makeData(Name, Description, LocationID, Public, FQDN, Scheme, BehindProxy, RAM, RAMOverAllocate,
        Disk, DiskOverallocate, DaemonDir, DaemonPort, DaemonSFTPPort, MaintenceMode, MaxUploadSize);
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.postRequest("CreateNode", data, null);
}

function makeData(Name, Description, LocationID, Public, FQDN, Scheme, BehindProxy, RAM, RAMOverAllocate,
    Disk, DiskOverallocate, DaemonDir, DaemonPort, DaemonSFTPPort, MaintenceMode, MaxUploadSize) {
    return {
        "name": Name,
        "description": Description,
        "location_id": LocationID,
        "public": Public,
        "fqdn": FQDN,
        "scheme": Scheme,
        "behind_proxy": BehindProxy,
        "memory": RAM,
        "memory_overallocate": RAMOverAllocate,
        "disk": Disk,
        "disk_overallocate": DiskOverallocate,
        "daemon_base": DaemonDir,
        "daemon_listen": DaemonPort,
        "daemon_sftp": DaemonSFTPPort,
        "maintenance_mode": MaintenceMode,
        "upload_size": MaxUploadSize,
    }
}

module.exports = createNode;