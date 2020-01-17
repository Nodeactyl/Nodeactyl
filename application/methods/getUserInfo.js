let req = require('../ApplicationRequest.js');

function getUserInfo(UserID) {
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.getRequest("GetUserInfo", UserID);
}

module.exports = getUserInfo;