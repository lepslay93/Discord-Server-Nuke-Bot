const { SlashCommandBuilder } = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('delete-all')
    .setDescription('Deletes all channels and roles'),
  async execute(interaction) {
    await interaction.deferReply();

    await interaction.guild.channels.cache.forEach(async channel => {
      await channel.delete().catch(error => {
        console.log(`Error: ${error} | Couldn't delete ${channel.name}`)
      })
    });

    await interaction.guild.roles.cache.forEach(async role => {
      await role.delete().catch(error => {
        console.log(`Error: ${error} | Couldn't delete ${role.name}`)
      })
    });
  }
};