import { ChannelType, EmbedBuilder, TextChannel } from 'discord.js';
import { logWithLabel } from '../../../utils/console';
import { Event } from '../../../class/builders';
import { client } from '../../../shulker';
import model from '../../../models/guild';

export default new Event('guildMemberAdd', async (member) => {
  const data = await model.findOne({ guildId: member.guild.id });
  if (!data) return;

  const log_channel = member.guild.channels.cache.get(data.channels?.log?.channel as string);
  if (!log_channel) return;
  
  const embed = new EmbedBuilder()
    .setColor('Blurple')
    .setTitle('Log System - Member Joined')
    .addFields({
      name: `Member`,
      value: `> ${member.user.tag} (\`${member.user.id}\`)\n> \`${member.user.username}\``,
      inline: true,
    })
    .setThumbnail(
      member.user.avatarURL({ forceStatic: true }) || (client.user?.avatarURL({ forceStatic: true }) as any)
    )
    .setFooter({ text: `Server Logs: ${member.guild.name}`, iconURL: member.guild.iconURL() as any })
    .setTimestamp();

  (log_channel as TextChannel).send({ embeds: [embed] });
});
