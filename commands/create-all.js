const { SlashCommandBuilder } = require('discord.js');
const { channel_name } = require('../config.json');
const { role_name } = require('../config.json');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-all')
    .setDescription('Creates the a bunch of channels and roles'),
  async execute(interaction) {
    await interaction.deferReply();

    for (let i = 1; i < 200; i++) {
      await interaction.guild.channels.create({ name: `${channel_name}` }).catch(error => {
        console.log(`Error: ${error}`)
      })
    };

    for (let i = 1; i < 300; i++) {
      await interaction.guild.roles.create({ name: `${role_name}` }).catch(error => {
        console.log(`Error: ${error}`)
      })
    };
  },
};