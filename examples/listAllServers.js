const Node = require('nodeactyl');

exports.run = async (client, message, args, level, Node) => {
    const serversEmbed = new Discord.RichEmbed()
        .setColor('#7289da')
        .setTitle('Servers list')
        .setURL('https://panel.pterodactyl.io')
        .setDescription('Here is your servers list')
        .setTimestamp()
        .setFooter('Pterodactyl');
        
    Node.getAllServers().then(response => {
        response['data'].forEach(function (element) {
            serversEmbed.addField(
                element.attributes.name,
                element.attributes.limits.memory += "Mb of memory\n");
        });
    });
    
    setTimeout(function(){
        message.channel.send(serversEmbed);
    }, 500); // If your server table doesnt populate fast enough, extend this timer
};
