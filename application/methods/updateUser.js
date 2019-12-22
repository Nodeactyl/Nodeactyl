let req = require("../ApplicationRequest.js");

/**
 * 
 * @param {String} UserID External UserID
 * @param {String} Username New username (or old)
 * @param {String} Password New password (or old)
 * @param {String} Email New email (or old)
 * @param {String} FirstName New first name (or old)
 * @param {String} LastName New last name (or old)
 * @param {Boolean} IsAdmin Change admin rank (or keep)
 * @param {String} Language New language (or old)
 */
function updateUser(UserID, Username, Password, Email, FirstName, LastName, IsAdmin, Language) {
    const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
    let data = createData(Username, Password, Email, FirstName, LastName, IsAdmin, Language)
    return Req.patchRequest("EditUser", data, UserID);
}

function createData(Username, Password, Email, FirstName, LastName, IsAdmin, Language) {
    return {
        "username": Username,
        "email": Email,
        "first_name": FirstName,
        "last_name": LastName,
        "password": Password,
        "root_admin": IsAdmin,
        "language": Language
    }
}

module.exports = updateUser;