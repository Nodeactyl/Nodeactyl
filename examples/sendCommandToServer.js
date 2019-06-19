const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {
    let serverid = args[0];
    let command = args.slice(1).toString().replace(',', ' ');
    try {
        Node.sendCommand(serverid, command);
        const successEmbed = new Discord.RichEmbed()
            .setColor('#2dce89')
            .setAuthor('Success')
            .setDescription('The command has been successfully sent to the server.')
            .setTimestamp()
            .setFooter('Pterodactyl');
        message.channel.send(successEmbed);
    } catch(error){
        const errorEmbed = new Discord.RichEmbed()
            .setColor('#f5365c')
            .setAuthor('Error')
            .setDescription('The command can\'t be send to the server.')
            .setTimestamp()
            .setFooter('Pterodactyl');
        message.channel.send(errorEmbed);
    }
};
