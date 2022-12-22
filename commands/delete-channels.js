const { SlashCommandBuilder } = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('delete-channels')
    .setDescription('Deletes all channels'),
  async execute(interaction) {
    await interaction.deferReply();

    await interaction.guild.channels.cache.forEach(async channel => {
      await channel.delete().catch(error => {
        console.log(`Error: ${error} | Couldn't delete ${channel.name}`)
      })
    });
  },
};