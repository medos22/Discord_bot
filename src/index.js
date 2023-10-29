require('dotenv').config();
require ("random.js");
require('discord.js');

const { Client, IntentsBitField, Message } = require('discord.js');
const { randomInt } = require('random.js');
const cyber = ['fuck you cyber', 'suck my dick', 'cyber\'s ass', 'cum is cyber'];
let rando = (Math.random()*3)|0;
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
//function shuffleArray(array) {                                   this is chat gpt method where he swipes the elements each time
    //for (let i = array.length - 1; i > 0; i--) {
        //const j = Math.floor(Math.random() * (i + 1));
        //[array[i], array[j]] = [array[j], array[i]];
   // }
//}
function randomarray(){
    let rand = (Math.random()*3)|0;
    return cyber[rand]

}
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
    if(msg.author.username==='joyishboola'){

        // shuffleArray(cyber); chat gbt
        
        msg.reply(randomarray())
        
        
    }
})

client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping'){
        interaction.reply('https://discord.com/developers/active-developer');
    }
    
})

client.login(process.env.token); 