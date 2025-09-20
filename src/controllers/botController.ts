import { Context } from 'telegraf';
import {
  // Message,
  Update,
} from 'telegraf/typings/core/types/typegram';
import { TranslationService } from '../services/translationService';
import { KeyboardService } from '../services/keyboardService';
import { UserSessionService } from '../services/userSessionService';
import { ENV } from '../config/env';
import { LanguageKey } from '../config/languages';

interface BotContext extends Context {
  update: Update;
}

interface CallbackQueryContext extends BotContext {
  callbackQuery: NonNullable<Update.CallbackQueryUpdate['callback_query']>;
}

interface MessageContext extends BotContext {
  message: NonNullable<Update.MessageUpdate['message']>;
}

export class BotController {
  private static instance: BotController;
  private translationService: TranslationService;
  private userSessionService: UserSessionService;
  private keyboardService: KeyboardService;

  private constructor() {
    this.translationService = TranslationService.getInstance();
    this.userSessionService = UserSessionService.getInstance();
    this.keyboardService = KeyboardService.getInstance();
  }

  public static getInstance(): BotController {
    if (!BotController.instance) {
      BotController.instance = new BotController();
    }
    return BotController.instance;
  }

  private getUserInfo(ctx: BotContext): {
    userId: number;
    username?: string;
    firstName?: string;
    lastName?: string;
  } {
    const from = ctx.from;
    if (!from) {
      throw new Error('User information not available');
    }

    return {
      userId: from?.id,
      username: from.username ?? 'undefined',
      firstName: from.first_name ?? 'undefined',
      lastName: from.last_name ?? 'undefined',
    };
  }

  private translate(
    key: keyof import('../types/bot.types').BotTranslations,
    userId: number
  ): string {
    const session = this.userSessionService.getSession(userId);
    return this.translationService.translate(key, session.language);
  }

  public async handleStart(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);

      // create or update user session
      this.userSessionService.createOrUpdateSession(userInfo.userId, {
        username: userInfo?.username ?? 'undefined',
        firstName: userInfo?.firstName ?? 'undefined',
        lastName: userInfo?.lastName ?? 'undefined',
      });

      // check if it's a group/channel
      if (
        ctx.chat?.type === 'group' ||
        ctx.chat?.type === 'supergroup' ||
        ctx.chat?.type === 'channel'
      ) {
        const message = this.translate('welcome_group', userInfo.userId);
        await ctx.reply(message);
        return;
      }

      // private chat - show language selection
      const welcomeMessage = this.translate('welcome', userInfo.userId);
      const keyboard = this.keyboardService.createLanguageKeyboard();

      await ctx.reply(welcomeMessage, {
        reply_markup: keyboard,
        parse_mode: 'Markdown',
      });
    } catch (error) {
      console.error('Error in handleStart:', error);
      await ctx.reply('❌ An error occurred. Please try again.');
    }
  }

  public async handleHelp(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const helpMessage = this.translate('help', userInfo.userId);
      const keyboard = this.keyboardService.createMainMenuKeyboard(
        this.userSessionService.getSession(userInfo.userId).language
      );

      await ctx.reply(helpMessage, {
        reply_markup: keyboard,
        parse_mode: 'Markdown',
      });
    } catch (error) {
      console.error('Error in handleHelp:', error);
      const userInfo = this.getUserInfo(ctx);
      const errorMessage = this.translate('error_occurred', userInfo.userId);
      await ctx.reply(errorMessage);
    }
  }

  public async handleLanguageCommand(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const message = this.translate('choose_language', userInfo.userId);
      const keyboard = this.keyboardService.createLanguageKeyboard();

      await ctx.reply(message, {
        reply_markup: keyboard,
      });
    } catch (error) {
      console.error('Error in handleLanguageCommand:', error);
      const userInfo = this.getUserInfo(ctx);
      const errorMessage = this.translate('error_occurred', userInfo.userId);
      await ctx.reply(errorMessage);
    }
  }

  public async handleAddToGroup(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const session = this.userSessionService.getSession(userInfo.userId);
      const keyboard = this.keyboardService.createAddToGroupKeyboard(
        session.language
      );

      await ctx.reply(
        '🚀 *Add me to your group or channel!*\n\nClick the buttons below to add me:',
        {
          reply_markup: keyboard,
          parse_mode: 'Markdown',
        }
      );
    } catch (error) {
      console.error('Error in handleAddToGroup:', error);
      const userInfo = this.getUserInfo(ctx);
      const errorMessage = this.translate('error_occurred', userInfo.userId);
      await ctx.reply(errorMessage);
    }
  }

  public async handleInstructions(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const session = this.userSessionService.getSession(userInfo.userId);

      const title = this.translate('instructions_title', userInfo.userId);
      const content = this.translate('instructions_content', userInfo.userId);
      const keyboard = this.keyboardService.createBackToMenuKeyboard(
        session.language
      );

      await ctx.reply(`${title}\n\n${content}`, {
        reply_markup: keyboard,
        parse_mode: 'Markdown',
      });
    } catch (error) {
      console.error('Error in handleInstructions:', error);
      const userInfo = this.getUserInfo(ctx);
      const errorMessage = this.translate('error_occurred', userInfo.userId);
      await ctx.reply(errorMessage);
    }
  }

  public async handleCreator(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const session = this.userSessionService.getSession(userInfo.userId);

      const title = this.translate('creator_info_title', userInfo.userId);
      const content = this.translate('creator_info_content', userInfo.userId);
      const keyboard = this.keyboardService.createBackToMenuKeyboard(
        session.language
      );

      await ctx.reply(`${title}\n\n${content}`, {
        reply_markup: keyboard,
        parse_mode: 'Markdown',
      });
    } catch (error) {
      console.error('Error in handleCreator:', error);
      const userInfo = this.getUserInfo(ctx);
      const errorMessage = this.translate('error_occurred', userInfo.userId);
      await ctx.reply(errorMessage);
    }
  }

  public async handleCallbackQuery(ctx: CallbackQueryContext): Promise<void> {
    try {
      const data =
        'data' in ctx.callbackQuery ? ctx.callbackQuery.data : undefined;
      const userInfo = this.getUserInfo(ctx);

      if (!data) return;

      // handle language selection
      if (data.startsWith('lang_')) {
        const language = data.replace('lang_', '') as LanguageKey;
        this.userSessionService.updateLanguage(userInfo.userId, language);

        const message = this.translate('language_selected', userInfo.userId);
        const keyboard = this.keyboardService.createMainMenuKeyboard(language);

        await ctx.editMessageText(
          `${message}\n\n${this.translate('help', userInfo.userId)}`,
          {
            reply_markup: keyboard,
            parse_mode: 'Markdown',
          }
        );

        await ctx.answerCbQuery(
          this.translate('language_changed', userInfo.userId)
        );
        return;
      }

      const session = this.userSessionService.getSession(userInfo.userId);

      // handle menu navigation
      switch (data) {
        case 'main_menu':
          const helpMessage = this.translate('help', userInfo.userId);
          const mainKeyboard = this.keyboardService.createMainMenuKeyboard(
            session.language
          );
          await ctx.editMessageText(helpMessage, {
            reply_markup: mainKeyboard,
            parse_mode: 'Markdown',
          });
          break;

        case 'language_menu':
          const langMessage = this.translate(
            'choose_language',
            userInfo.userId
          );
          const langKeyboard = this.keyboardService.createLanguageKeyboard();
          await ctx.editMessageText(langMessage, {
            reply_markup: langKeyboard,
          });
          break;

        case 'add_to_group':
          const addMessage =
            '🚀 *Add me to your group or channel!*\n\nClick the buttons below to add me:';
          const addKeyboard = this.keyboardService.createAddToGroupKeyboard(
            session.language
          );
          await ctx.editMessageText(addMessage, {
            reply_markup: addKeyboard,
            parse_mode: 'Markdown',
          });
          break;

        case 'instructions':
          const instTitle = this.translate(
            'instructions_title',
            userInfo.userId
          );
          const instContent = this.translate(
            'instructions_content',
            userInfo.userId
          );
          const instKeyboard = this.keyboardService.createBackToMenuKeyboard(
            session.language
          );
          await ctx.editMessageText(`${instTitle}\n\n${instContent}`, {
            reply_markup: instKeyboard,
            parse_mode: 'Markdown',
          });
          break;

        case 'creator_info':
          const creatorTitle = this.translate(
            'creator_info_title',
            userInfo.userId
          );
          const creatorContent = this.translate(
            'creator_info_content',
            userInfo.userId
          );
          const creatorKeyboard = this.keyboardService.createBackToMenuKeyboard(
            session.language
          );
          await ctx.editMessageText(`${creatorTitle}\n\n${creatorContent}`, {
            reply_markup: creatorKeyboard,
            parse_mode: 'Markdown',
          });
          break;
      }

      await ctx.answerCbQuery();
    } catch (error) {
      console.error('Error in handleCallbackQuery:', error);
      await ctx.answerCbQuery('❌ An error occurred');
    }
  }

  public async handleUnknownCommand(ctx: MessageContext): Promise<void> {
    try {
      const userInfo = this.getUserInfo(ctx);
      const message = this.translate('unknown_command', userInfo.userId);
      await ctx.reply(message);
    } catch (error) {
      console.error('Error in handleUnknownCommand:', error);
      await ctx.reply('❌ An error occurred. Please try again.');
    }
  }

  public async handleNewChatMember(ctx: BotContext): Promise<void> {
    try {
      if ('new_chat_members' in ctx.message!) {
        const newMembers = ctx.message.new_chat_members!;
        const botMember = newMembers.find(
          (member) =>
            member.is_bot &&
            member.username === ENV.BOT_USERNAME.replace('@', '')
        );

        if (botMember) {
          const userInfo = this.getUserInfo(ctx);
          const welcomeMessage = this.translate(
            'welcome_group',
            userInfo.userId
          );
          await ctx.reply(welcomeMessage);
        }
      }
    } catch (error) {
      console.error('Error in handleNewChatMember:', error);
    }
  }
}
