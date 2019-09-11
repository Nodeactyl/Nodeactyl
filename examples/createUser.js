const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {

    let username, email, firstname, lastname, password = args;
    if(!username) return message.channel.send("A syntax error has occurred, please give in the following order: username, email, firstname, lastname, password !")

    Node.login("http://panel.mypanel.com", "gjcum5VWs4363PY6A4L");
    Node.createUser("Username", "Email", "FirstName", "LastName", "Password");

}
