export const LANGUAGES = {
  EN: 'en',
  AR: 'ar',
  RU: 'ru',
  ES: 'es',
  PT: 'pt',
  TR: 'tr',
  DE: 'de',
  FR: 'fr',
  IT: 'it',
  JA: 'ja',
  KO: 'ko',
  ZH: 'zh',
  'PT-BR': 'pt-br',
} as const;

export type LanguageCode = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export type LanguageKey = keyof typeof LANGUAGES;

export const LANGUAGE_FLAGS: Record<LanguageKey, string> = {
  EN: '🇺🇸',
  AR: '🇸🇦',
  RU: '🇷🇺',
  ES: '🇪🇸',
  PT: '🇵🇹',
  TR: '🇹🇷',
  DE: '🇩🇪',
  FR: '🇫🇷',
  IT: '🇮🇹',
  JA: '🇯🇵',
  KO: '🇰🇷',
  ZH: '🇨🇳',
  'PT-BR': '🇧🇷',
};
