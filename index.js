const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU3NTI5OTY1NjA4NDM1NzMy.Xfyxbg.oxlTatZeVhqw9GSpN3x3njQi9zk';

bot.on('ready', () =>{
    console.log('Ready ptáčkovat!');
})

const PREFIX = '!';

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case 'verze':
            message.channel.sendMessage('ptáček.bot verze je 1.0.1')
            break;
        case 'rakovino':
            message.channel.sendMessage('ale žádná rakovina')
            break;
        case 'w2g':
            message.channel.sendMessage('Zde to je zmrde: https://www.watch2gether.com/rooms/tlefmq7ijvz8lglv0l?lang=cs')
            break;
        case 'w2t':
            message.channel.sendMessage('Zde to je zmrde: https://www.watch2gether.com/rooms/tlefmq7ijvz8lglv0l?lang=cs')
            break;
        case 'vilem':
            message.channel.sendMessage('Vilém je zmrd')
            message.channel.sendMessage('Vilém je zmrd')
            message.channel.sendMessage('Vilém je zmrd')
            break;
        }
})

bot.on('message', msg=>{
    if(msg.content === "kde jsi byl?"){
        msg.reply('na baráku, kde bych byl?');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Kde jsi byl?"){
        msg.reply('na baráku, kde bych byl?');
    }
})

bot.on('message', msg=>{
    if(msg.content === "ptacku"){
        msg.reply('no, no, ty zmrde?');
    }
})

bot.on('message', msg=>{
    if(msg.content === "ptáčku"){
        msg.reply('volal jsi mě?');
    }
})
        
bot.on('message', msg=>{
    if(msg.content === "zmrde"){
        msg.reply('Neříkej mi zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "ty zmrde"){
        msg.reply('Neříkej mi zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Ty zmrde"){
        msg.reply('Neříkej mi zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Sorry"){
        msg.reply('Zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "sorry"){
        msg.reply('Zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "no"){
        msg.reply('no, ty zmrde!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "kolik meri?"){
        msg.reply('17!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "kolik měří?"){
        msg.reply('17!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "v klidu?"){
        msg.reply('no samozřejmě!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "nepracujes u policie?"){
        msg.reply('nevim o tom');
    }
})

bot.on('message', msg=>{
    if(msg.content === "nepracuješ u policie?"){
        msg.reply('nevim o tom');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Jirka je zmrd"){
        msg.reply('to je');
    }
})

bot.login(token);