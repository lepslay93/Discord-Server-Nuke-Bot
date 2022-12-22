const { SlashCommandBuilder } = require('discord.js');
const { spam_message } = require('../config.json');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('spam')
    .setDescription('Spams a message to all channels'),
  async execute(interaction) {
    await interaction.deferReply();
    for (let i = 1; i < 100; i++) {
      await interaction.guild.channels.cache.forEach(async channel => {
        await channel.send(spam_message).catch(error => {
          console.log(`Error: ${error} | Couldn't send a message to ${channel.name}`)
        })
      });
    };
  },
};