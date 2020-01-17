let req = require('../ApplicationRequest.js');

function getAllUsers() {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getRequest("GetAllUsers", null);
}

module.exports = getAllUsers;