import { LanguageKey } from '../config/languages';
import { UserSession } from '../types/bot.types';

export class UserSessionService {
  private static instance: UserSessionService;
  private userSessions: Map<number, UserSession> = new Map();

  private constructor() {}

  public static getInstance(): UserSessionService {
    if (!UserSessionService.instance) {
      UserSessionService.instance = new UserSessionService();
    }
    return UserSessionService.instance;
  }

  public createOrUpdateSession(
    userId: number,
    updates: Partial<UserSession>
  ): UserSession {
    const existingSession = this.userSessions.get(userId);
    const newSession: UserSession = {
      userId,
      language: 'EN',
      ...existingSession,
      ...updates,
    };

    this.userSessions.set(userId, newSession);
    return newSession;
  }

  public getSession(userId: number): UserSession {
    return (
      this.userSessions.get(userId) || {
        userId,
        language: 'EN',
      }
    );
  }

  public updateLanguage(userId: number, language: LanguageKey): void {
    const session = this.getSession(userId);
    session.language = language;
    this.userSessions.set(userId, session);
  }

  public terminateSession(userId: number): boolean {
    const wasDeleted = this.userSessions.delete(userId);
    return wasDeleted;
  }

  public resetSession(userId: number): UserSession {
    // create a fresh session with default values
    const newSession: UserSession = {
      userId,
      language: 'EN',
    };

    this.userSessions.set(userId, newSession);
    return newSession;
  }

  public getAllSessions(): UserSession[] {
    return Array.from(this.userSessions.values());
  }
}
