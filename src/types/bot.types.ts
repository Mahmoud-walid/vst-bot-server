import { LanguageKey } from '../config/languages';

export interface BotTranslations {
  welcome: string;
  help: string;
  language_selected: string;
  choose_language: string;
  add_to_group: string;
  add_to_channel: string;
  instructions_title: string;
  instructions_content: string;
  creator_info_title: string;
  creator_info_content: string;
  bot_features: string;
  how_to_use: string;
  support_info: string;
  back_to_menu: string;
  main_menu: string;
  language_settings: string;
  about_creator: string;
  bot_instructions: string;
  unknown_command: string;
  error_occurred: string;
  language_changed: string;
  welcome_group: string;
  thanks_for_adding: string;
  add_to_group_message: string;
  add_to_channel_instruction: string;
  terminate: string;
  terminate_confirm_title: string;
  terminate_confirm_message: string;
  terminate_success: string;
  terminate_cancelled: string;
  confirm_terminate: string;
  cancel_terminate: string;
}

export interface UserSession {
  userId: number;
  language: LanguageKey;
  username?: string;
  firstName?: string;
  lastName?: string;
}
