const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {

    let username, email, firstname, lastname, password = args;
    if(!username) return message.channel.send("Une erreur de syntaxe s'est produite, merci de donner dans l'ordre suivante : username, email, firstname, lastname, password !")

    Node.login("http://panel.mypanel.com", "gjcum5VWs4363PY6A4L");
    Node.createUser("Username", "Email", "FirstName", "LastName", "Password");

}
