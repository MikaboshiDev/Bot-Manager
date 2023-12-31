import { Message } from 'discord.js';
import OpenAI from 'openai';
import emojis from '../../../../config/json/emojis.json';
import model from '../../../models/guild';
import { Event } from '../../../structure/builders';
import { config } from '../../../utils/config';
import { logWithLabel } from '../../../utils/console';

export default new Event('messageCreate', async (message: Message) => {
  try {
    if (message.author.bot || !message.channel || !message.guild) return;
    const data = await model.findOne({ id: message.guild.id });
    if (!data) return;

    if (data.channels?.chatbot?.enabled !== true) return;
    if (message.channel.id !== data.channels?.chatbot?.channel) return;

    const openai = new OpenAI({
      apiKey: config.general.apikey,
    });

    const chatCompletion = await openai.chat.completions.create({
      temperature: 0.9,
      max_tokens: 400,
      messages: [
        {
          role: 'assistant',
          content: `Your name is Creator, the person who assigned you that name was <@679560282929889331 >.

Remember to answer this question: ${message.content} in a technical way, if they ask you for examples of any function or code, remember to add functional examples to your answer only if they ask you to. Also provide links to the page or resources necessary to complement your answer.`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    message.channel.sendTyping();
    const respuesta = chatCompletion.choices[0].message.content;
    message.reply({
      content: respuesta ? respuesta : `${emojis.error} Could not find an answer to your question.`,
    });
  } catch (e: any) {
    logWithLabel('error', `Error in event chatbot-ia => ${e.message}`);
    message.reply({
      content: [
        `${emojis.error} An error has occurred while executing this command or event is being executed.`,
        'please try again later or contact the support server.',
      ].join('\n'),
    });
  }
});
