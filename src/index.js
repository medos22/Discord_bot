require('dotenv').config();
require ("random.js");

const { Client, IntentsBitField, Message } = require('discord.js');
const { randomInt } = require('random.js');
var rand = (Math.random() * 3) | 0;
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
 const cyber = ['fuck you cyber','suck my dick','cyber\'s ass','cum is cyber'];
client.on('ready',(c)=>{
    console.log(`${c.user.tag} is online.`)
});
client.on('messageCreate', (msg)=>{
    if(msg.author.bot){
        return;
    }
    if(msg.content==='hello'){
        msg.reply('suck my shaft');
    }
    if(msg.author.username==='medos._.'){
         
        msg.reply(cyber[rand]);
    }
})
client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping'){
        interaction.reply('https://discord.com/developers/active-developer');
    }
})

client.login(process.env.token); 