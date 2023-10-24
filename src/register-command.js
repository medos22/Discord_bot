require('dotenv').config();
const { REST, Routes} = require('discord.js');

const commands = [
  {
name: 'hey',
description: 'replies with hey',

  },
];

const rest = new REST ({ version:'10' }).setToken();

(async () => {
  try{  
    console.log('slash command registering')
await rest.put(
  Routes.applicationGuildCommands(GUILD_ID, CLIENT_ID),
  {body: commands}
)
console.log('slash command registered succesfully')
  }catch(error) {

console.log(`there was an error: ${error}`)
  }
})