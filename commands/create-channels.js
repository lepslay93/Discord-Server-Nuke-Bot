const { SlashCommandBuilder } = require('discord.js');
const { channel_name } = require('../config.json');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-channels')
    .setDescription('Creates a bunch of channels'),
  async execute(interaction) {
    await interaction.deferReply();

    for (let i = 1; i < 300; i++) {
      await interaction.guild.channels.create({ name: `${channel_name}` })
    };
  },
};