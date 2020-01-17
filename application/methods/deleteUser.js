let req = require('../ApplicationRequest.js');

/**
 * @param {String} UserID The user ID to delete
 */
function deleteUser(UserID) {
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    return Req.deleteRequest("DeleteUser", UserID);
}

module.exports = deleteUser;