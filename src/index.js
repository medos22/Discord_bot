require('dotenv').config();
require ("random.js");

const { Client, IntentsBitField, Message } = require('discord.js');
const { randomInt } = require('random.js');


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
const crypto = require('crypto');

function getRandomNumberBetween0And5() {
  const timestamp = Date.now();
  const seed = timestamp % 1000;
  
  const randomBytes = crypto.randomBytes(4); // Generate 4 random bytes
  const randomSeed = parseInt(randomBytes.toString('hex'), 16);
  
  const combinedSeed = seed + randomSeed;
  const randomNumber = (combinedSeed % 6);
  return randomNumber;
}

const numIterations = 10; // Change this to the number of iterations you need
for (let i = 0; i < numIterations; i++) {
  const randomNumber = getRandomNumberBetween0And5();
  console.log(`Random Number ${i + 1}: ${randomNumber}`);
}


    const cyber = ['fuck you cyber', 'suck my dick', 'cyber\'s ass', 'cum is cyber'];
  

  


  

  
client.on('messageCreate', (msg)=>{
    if(msg.author.bot){
        return;
    }
    if(msg.content==='hello'){
        msg.reply('suck my shaft');
    }
    if(msg.author.username==='joyishboola'){
         
        msg.reply(cyber[`Random Number ${i + 1}: ${randomNumber}`]);
    }
})
client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping'){
        interaction.reply('https://discord.com/developers/active-developer');
    }
})

client.login(process.env.token); 