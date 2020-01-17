let req = require('../ApplicationRequest.js');

function getAllServers() {
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.getRequest("GetAllServers", null);
}

module.exports = getAllServers;