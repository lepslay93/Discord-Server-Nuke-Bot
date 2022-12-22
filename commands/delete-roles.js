const { SlashCommandBuilder } = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('delete-roles')
    .setDescription('Deletes all roles'),
  async execute(interaction) {
    await interaction.deferReply();

    await interaction.guild.roles.cache.forEach(async role => {
      await role.delete().catch(error => {
        console.log(`Error: ${error} | Couldn't delete ${role.name}`)
      })
    });
  },
};