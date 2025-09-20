import { Telegraf } from 'telegraf';
import { ENV } from '../config/env';
import { BotController } from '../controllers/botController';

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
