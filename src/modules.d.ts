declare module "bun" {
  interface Env {
    BOT_TOKEN: string;
    WEBHOOK_DOMAIN: string;
    PORT: number;
    WEBHOOK_PATH: string;
  }
}

declare module 'pino-pretty';
