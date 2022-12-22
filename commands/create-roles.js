const { SlashCommandBuilder } = require('discord.js');
const { role_name } = require('../config.json')



module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-roles')
    .setDescription('Creates a bunch of roles'),
  async execute(interaction) {
    await interaction.deferReply();

    for (let i = 1; i < 200; i++) {
      await interaction.guild.roles.create({ name: `${role_name}` })
    }
  },
};