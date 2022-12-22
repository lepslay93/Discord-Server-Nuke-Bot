const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { clientId } = require('../config.json');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays all commands and information on how to use them'),
  async execute(interaction) {
    await interaction.deferReply();

    const helpEmbed = new EmbedBuilder()
      .setColor(0xFF7400)
      .setTitle('Bot Information')
      .setURL('https://github.com/AmNobCop/Discord-Raid-Bot')
      .setDescription(`**Developer:** Nob#8609 \n **Support Server:** https://discord.gg/ZpkXb7j6RC \n **Github Repository:** https://github.com/AmNobCop/Discord-Raid-Bot \n \n **Bot Invite Link:** https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot%20applications.commands`)
      .addFields(
        { name: 'Command Information', value: 'All commands can be found below along with the description of each command.' },
        { name: 'ban-all', value: 'Will ban all users that are able to be banned by the bot.', inline: true },
        { name: 'create-all', value: 'Will create a bunch of channels and roles in the server.', inline: true },
        { name: 'create-channels', value: 'Will create a bunch of channels in the server.', inline: true },
        { name: 'create-roles', value: 'Will create a bunch of roles in the server.', inline: true },
        { name: 'delete-all', value: 'Will delete all channels and roles from the server.', inline: true },
        { name: 'delete-channels', value: 'Will delete all channels from the server.', inline: true },
        { name: 'delete-roles', value: 'Will delete all roles from the server.', inline: true },
        { name: 'dm-all', value: 'Will DM all the users that are able to be DMed by the bot.', inline: true },
        { name: 'nuke', value: 'Will delete all channels and roles from the server, create a bunch of channels and roles, and spam messages to all channels.', inline: true },
        { name: 'spam', value: 'Will spam messages to all channels in the server.', inline: true },
      )
      .setTimestamp()
      .setFooter({ text: 'Bot made by Nob#8609' });

    await interaction.editReply({ embeds: [helpEmbed] })
  },
};