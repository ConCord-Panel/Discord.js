const Discord = require('discord.js');

const client = new Discord.Client();



client.once('ready', () => {
    console.log('Pig Is online!');
});

client.on('message', message => {

    if(message.content.toLowerCase() === '/report')
        message.channel.send('Please send me a private message!' + message.author ) 
});

client.login('Token')	
