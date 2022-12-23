const { SlashCommandBuilder } = require('discord.js');
const { dm_message } = require('../config.json')



module.exports = {
  data: new SlashCommandBuilder()
    .setName('dm-all')
    .setDescription('DMs all users of a server'),
  async execute(interaction) {
    await interaction.deferReply();
    setTimeout(async () => {
      await interaction.guild.members.cache.forEach(async member => {

        await member.send(dm_message).catch(error => {
          console.log(`Error: ${error} | Couldn't send a message to ${member.tag}`)
        })
      }, 2500)
    });

  },
};
