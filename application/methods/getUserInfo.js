let req = require('../ApplicationRequest.js');

function getUserInfo(UserID) {
    const req = new Req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return req.getRequest("GetUserInfo", UserID);
}

module.exports = getUserInfo;