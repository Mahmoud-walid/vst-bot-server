import {
  InlineKeyboardButton,
  InlineKeyboardMarkup,
} from 'telegraf/typings/core/types/typegram';
import { TranslationService } from './translationService';
import { LANGUAGE_FLAGS, LanguageKey } from '../config/languages';
import { ENV } from '../config/env';

export class KeyboardService {
  private static instance: KeyboardService;
  private translationService: TranslationService;

  private constructor() {
    this.translationService = TranslationService.getInstance();
  }

  public static getInstance(): KeyboardService {
    if (!KeyboardService.instance) {
      KeyboardService.instance = new KeyboardService();
    }
    return KeyboardService.instance;
  }

  public createLanguageKeyboard(): InlineKeyboardMarkup {
    const languages: LanguageKey[] =
      this.translationService.getAvailableLanguages();
    const buttons: InlineKeyboardButton[][] = [];

    // create rows of 2 language buttons each
    for (let i = 0; i < languages.length; i += 2) {
      const row: InlineKeyboardButton[] = [];

      for (let j = i; j < Math.min(i + 2, languages.length); j++) {
        const lang = languages[j] || 'EN';
        row.push({
          text: `${LANGUAGE_FLAGS[lang]} ${lang}`,
          callback_data: `lang_${lang}`,
        });
      }

      buttons.push(row);
    }

    return { inline_keyboard: buttons };
  }

  public createMainMenuKeyboard(language: LanguageKey): InlineKeyboardMarkup {
    const t = (key: keyof import('../types/bot.types').BotTranslations) =>
      this.translationService.translate(key, language);

    return {
      inline_keyboard: [
        [
          { text: t('language_settings'), callback_data: 'language_menu' },
          { text: t('add_to_group'), callback_data: 'add_to_group' },
        ],
        [
          { text: t('bot_instructions'), callback_data: 'instructions' },
          { text: t('about_creator'), callback_data: 'creator_info' },
        ],
      ],
    };
  }

  public createBackToMenuKeyboard(language: LanguageKey): InlineKeyboardMarkup {
    const t = (key: keyof import('../types/bot.types').BotTranslations) =>
      this.translationService.translate(key, language);

    return {
      inline_keyboard: [
        [{ text: t('back_to_menu'), callback_data: 'main_menu' }],
      ],
    };
  }

  public createAddToGroupKeyboard(language: LanguageKey): InlineKeyboardMarkup {
    const t = (key: keyof import('../types/bot.types').BotTranslations) =>
      this.translationService.translate(key, language);

    return {
      inline_keyboard: [
        [
          {
            text: t('add_to_group'),
            url: `https://t.me/${ENV.BOT_USERNAME}?startgroup=true`,
          },
        ],
        [
          {
            text: t('add_to_channel'),
            url: `https://t.me/${ENV.BOT_USERNAME}?startchannel=true`,
          },
        ],
        [{ text: t('back_to_menu'), callback_data: 'main_menu' }],
      ],
    };
  }
}
