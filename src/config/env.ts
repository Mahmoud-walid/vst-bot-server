import { configDotenv } from 'dotenv';
configDotenv();

export const ENV = {
  ['PORT']: process.env.PORT!,
  ['TELEGRAM_TOKEN']: process.env.TELEGRAM_TOKEN!,
  ['BOT_USERNAME']: process.env.BOT_USERNAME || 'your-awesome-bot',
  ['CREATOR_USERNAME']: process.env.CREATOR_USERNAME || '@example',
  ['CREATOR_NAME']: process.env.CREATOR_NAME || 'example',
} as const;
