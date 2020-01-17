let req = require('../ApplicationRequest.js');

/**
 * @param {String} UserID External UserID
 * @param {String} Username New (or old) username
 * @param {String} Password New (or old) password 
 * @param {String} Email New (or old) email 
 * @param {String} FirstName New (or old) first name
 * @param {String} LastName New (or old) last name 
 * @param {Boolean} IsAdmin New (or old) value for admin
 * @param {String} Language New (or old) language
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