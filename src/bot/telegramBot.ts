import { Telegraf } from 'telegraf';
import { ENV } from '../config/env';
import { BotController } from '../controllers/botController';
import { UserSessionService } from '../services/userSessionService';
import { TranslationService } from '../services/translationService';

export const bot = new Telegraf(ENV.TELEGRAM_TOKEN);
const botController = BotController.getInstance();

// Commands
bot.start(async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleStart(
      ctx as Parameters<typeof botController.handleStart>[0]
    );
  }
});

bot.command('help', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleHelp(
      ctx as Parameters<typeof botController.handleHelp>[0]
    );
  }
});

bot.command('language', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleLanguageCommand(
      ctx as Parameters<typeof botController.handleLanguageCommand>[0]
    );
  }
});

bot.command('addtogroup', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleAddToGroup(
      ctx as Parameters<typeof botController.handleAddToGroup>[0]
    );
  }
});

bot.command('instructions', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleInstructions(
      ctx as Parameters<typeof botController.handleInstructions>[0]
    );
  }
});

bot.command('creator', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleCreator(
      ctx as Parameters<typeof botController.handleCreator>[0]
    );
  }
});

bot.command('terminate', async (ctx) => {
  if ('text' in ctx.message!) {
    await botController.handleTerminate(
      ctx as Parameters<typeof botController.handleTerminate>[0]
    );
  }
});

// callback queries
bot.on('callback_query', async (ctx) => {
  await botController.handleCallbackQuery(
    ctx as Parameters<typeof botController.handleCallbackQuery>[0]
  );
});

// new chat members (when bot is added to group)
bot.on('new_chat_members', async (ctx) => {
  await botController.handleNewChatMember(ctx);
});

bot.on('my_chat_member', async (ctx) => {
  try {
    const chatMember = ctx.myChatMember;
    const chat = ctx.chat;

    if (
      chat.type === 'channel' &&
      chatMember.new_chat_member.status === 'administrator'
    ) {
      const userInfo = {
        userId: chatMember.from.id,
        username: chatMember.from.username,
        firstName: chatMember.from.first_name,
        lastName: chatMember.from.last_name,
      };

      // const botController = BotController.getInstance();
      const userSessionService = UserSessionService.getInstance();
      const translationService = TranslationService.getInstance();

      userSessionService.createOrUpdateSession(userInfo.userId, {
        username: userInfo.username ?? 'unknown-username',
        firstName: userInfo.firstName ?? 'unknown-firstName',
        lastName: userInfo.lastName ?? 'unknown-lastName',
      });

      const session = userSessionService.getSession(userInfo.userId);
      const channelWelcomeMessage = translationService.translate(
        'welcome_group',
        session.language
      );

      await ctx.reply(channelWelcomeMessage);

      try {
        const privateThankYouMessage = translationService.translate(
          'thanks_for_adding',
          session.language
        );
        await bot.telegram.sendMessage(userInfo.userId, privateThankYouMessage);
      } catch (error) {}
    }
  } catch (error) {
    console.error('Error in my_chat_member handler:', error);
  }
});

// unknown commands
bot.on('message', async (ctx) => {
  if ('text' in ctx.message && ctx.message.text.startsWith('/')) {
    await botController.handleUnknownCommand(
      ctx as Parameters<typeof botController.handleUnknownCommand>[0]
    );
  }
});

// error handling
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('❌ An unexpected error occurred. Please try again later.');
});
