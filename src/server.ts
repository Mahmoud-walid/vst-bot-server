import express, { Request, Response } from 'express';
import helmet from 'helmet';
import expressRateLimit from 'express-rate-limit';
import { ENV } from './config/env';
import { bot } from './bot/telegramBot';
import { UserSessionService } from './services/userSessionService';

const app = express();
const port = ENV.PORT;

app.set('trust proxy', 1); // to use the X-Forwarded-For header for IP addresses

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        fontSrc: ["'self'", 'https:', 'data:'],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'same-origin' },
    dnsPrefetchControl: false,
    frameguard: { action: 'sameorigin' },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    noSniff: true,
    originAgentCluster: true,
    referrerPolicy: { policy: 'no-referrer' },
    xssFilter: true,
  })
);
const limiter = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 200, // limit requests per IP
  standardHeaders: true,
  legacyHeaders: true,
  message: { error: 'Too many requests from this IP, please try again later' },
});
app.use(limiter);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

app.get('/stats', (_req: Request, res: Response) => {
  const userSessionService = UserSessionService.getInstance();
  const sessions = userSessionService.getAllSessions();

  res.status(200).json({
    totalUsers: sessions.length,
    languageDistribution: sessions.reduce((acc, session) => {
      acc[session.language] = (acc[session.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  });
});

// webhook endpoint for production
app.post(
  `/webhook/${ENV.TELEGRAM_TOKEN}`,
  async (req: Request, res: Response) => {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).send('Error');
    }
  }
);

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}`);
  console.log(`🤖 Bot is starting...`);
});

// launch the bot
setTimeout(() => {
  bot
    .launch({
      dropPendingUpdates: true,
    })
    .then(() => {
      console.log('✅ Bot launched successfully!');
    })
    .catch((error) => {
      console.error('❌ Bot launch failed:', error);
    });
}, 5000);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
