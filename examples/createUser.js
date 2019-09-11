const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {

    let username = args[0];
    let email = args[1];
    let firstname = args[2];
    let lastname = args[3];
    let password = args[4];
    if(!args[0]) return message.channel.send("Une erreur de syntaxe s'est produite, merci de donner dans l'ordre suivante : username, email, firstname, lastname, password !")

    Node.login("http://panel.mypanel.com", "gjcum5VWs4363PY6A4L");
    Node.createUser("Username", "Email", "FirstName", "LastName", "Password");

}
