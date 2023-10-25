require('dotenv').config();
const { Client, IntentsBitField, Message } = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
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
})
client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping'){
        interaction.reply('https://discord.com/developers/active-developer');
    }
})

client.login(process.env.token); 