const { SlashCommandBuilder } = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban-all')
    .setDescription('Bans all users'),
  async execute(interaction) {
    await interaction.deferReply();

    await interaction.guild.members.cache.forEach(async member => {
      await member.ban().catch(error => {
        console.log(`Error: ${error} | Couldn't ban ${member.tag}`)
      })
    });
  },
};