import { EmbedBuilder } from 'discord.js';
import emojis from '../../../../config/json/emojis.json';
import { client } from '../../../shulker';
import { Event } from '../../../structure/builders';
const cooldowns = new Map();

export default new Event('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand() || !interaction.channel) return;
  const command = client.commands.get(interaction.commandName);
  const { member } = interaction;
  if (!command) return;

  const embed = new EmbedBuilder()
    .setAuthor({ name: `Command Control`, iconURL: interaction.user.displayAvatarURL() })
    .setThumbnail(client.user?.displayAvatarURL() ?? '')
    .setColor('Red');

  if (command.options?.owner && interaction.user.id !== client.config.dashboard.owner_id)
    return interaction.reply({
      embeds: [
        embed.setDescription(
          [
            `${emojis.error} You don't have permission to use this command because it's only for the owner of the bot.`,
            `If you think this is an error, please contact the owner of the bot.`,
          ].join('\n')
        ),
      ],
    });

  if (command.options?.premium && !interaction.guild?.premiumSubscriptionCount)
    return interaction.reply({
      embeds: [
        embed.setDescription(
          [
            `${emojis.error} You don't have permission to use this command because it's only for premium servers.`,
            `If you think this is an error, please contact the owner of the bot.`,
          ].join('\n')
        ),
      ],
    });
  command.run(client, interaction, client.paypal);
});
