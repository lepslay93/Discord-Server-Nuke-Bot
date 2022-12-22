const fs = require('fs');
const path = require('path');
const { Collection, EmbedBuilder, Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');
const { username } = require('./config.json');
const client = new Client({ intents: [3276799] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.on('ready', () => {
  console.log(`Online. Logged in as ${client.user.tag}`);

  const activities = [
    { type: ActivityType.Listening, name: `https://github.com/AmNobCop/` },
    { type: ActivityType.Watching, name: `${username}\s raid` },
  ];

  const status = activities[Math.floor(Math.random() * activities.length)];
  client.user.setActivity({ type: status.type, name: status.name });

});

client.once(Events.ClientReady, async () => {

});

const errorEmbed = new EmbedBuilder()
  .setColor(0xFF0000)
  .setTitle('Unexpected Error')
  .setDescription(`An unexpected error occurred while running this command.`)
  .setTimestamp()
  .setFooter({ text: 'Bot made by Nob#8609' });

client.on('interactionCreate', async (interaction) => {
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
  }
});

client.login(token);