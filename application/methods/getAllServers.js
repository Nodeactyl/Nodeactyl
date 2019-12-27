let req = require('../ApplicationRequest.js');

function getAllServers() {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getRequest("GetAllServers", null);
}

module.exports = getAllServers;