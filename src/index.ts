import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';
import crypto from "crypto";

import logger from '@/utils/logger';
import pkg from '../package.json';

logger.info(`Starting bot 🤖 (Version ${pkg.version}) in [${process.env.NODE_ENV}] mode...`);

const bot = new Telegraf(Bun.env.BOT_TOKEN);

bot.on(message("text"), ctx => ctx.reply("Hello"));
const randomAlphaNumericString = () => crypto.randomBytes(64).toString("hex");

// Start webhook via launch method (preferred)
bot.launch({
  webhook: {
    // Public domain for webhook; e.g.: example.com
    domain: Bun.env.WEBHOOK_DOMAIN,

    // Port to listen on; e.g.: 8080
    port: Bun.env.PORT,

    // Optional path to listen for.
    // path: bot.secretPathComponent(),
    path: Bun.env.WEBHOOK_PATH,

    // Optional secret to be sent back in a header for security.
    // e.g.: `crypto.randomBytes(64).toString("hex")`
    secretToken: randomAlphaNumericString(),
  },
} as Telegraf.LaunchOptions);
