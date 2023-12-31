import { ActivityType } from 'discord.js';
import { client } from '../../../shulker';
import { Event } from '../../../structure/builders';
import { logWithLabel } from '../../../utils/console';

const os = require('node:os');
const cpus = os.cpus();
async function getMemoryUsage() {
  const memoryUsage = process.memoryUsage().heapUsed / (1024 * 1024);
  return memoryUsage.toFixed(1);
}

export default new Event('ready', async () => {
  logWithLabel('success', 'Bot is ready! the bot is ready to use');
  client.user?.setPresence({
    activities: [
      {
        name: 'Beginning contraction of the development team',
        type: ActivityType.Playing,
      },
    ],
    status: 'online',
  });

  const statusArray = [
    `Software: ${process.platform} ${process.arch} Linux`,
    `Servers: ${client.guilds.cache.size} guilds`,
    `Api Version: ${process.version}`,
    `Users: ${client.users.cache.size} members`,
  ];

  let index = 0;
  const randTime = Math.floor(Math.random() * 5) + 1;
  setInterval(() => {
    if (index === statusArray.length) index = 0;
    const status = statusArray[index];

    client.user?.setPresence({
      activities: [{ name: status, type: ActivityType.Playing }],
      status: 'online',
    });
    index++;
  }, 6 * 1000);
});
