require('dotenv').config();
const { REST, Routes} = require('discord.js');


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => { 
  try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1165605932076646441'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}})();