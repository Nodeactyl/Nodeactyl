const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {
    const serversEmbed = new Discord.RichEmbed()
    	.setColor('#7289da')
    	.setAuthor('Servers list')
    	.setTimestamp()
    	.setFooter('Pterodactyl');
    	
    Node.getAllServers().then(response => {
        response['data'].forEach(function (element) {
            serversEmbed.addField(
                "__" + element.attributes.name + "__",
                "***ID*** : " + element.attributes.identifier + 
                "\n***RAM*** : " + element.attributes.limits.memory);
        });
        message.channel.send(serversEmbed);
    });
};
