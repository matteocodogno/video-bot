# Video Bot

This project is a bot application developed using TypeScript, JavaScript, and npm. It uses the Telegraf framework for creating Telegram bots for interacting with radarr and sonarr.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Bun - Follow the instructions on the [official website](https://bun.js.org/) to install Bun.

### Installing

1. Clone the repository
2. Install the dependencies using npm:

```shell
bun install
```

## Usage

The bot is configured to reply with "Hello" when it receives a text message.  
To start the bot, run the following command:

```shell
bun run dev
```

### Environment Variables

The bot uses the following environment variables:

- `LOG_LEVEL`: The level of logging. Defaults to 'info'.
- `NODE_ENV`: The environment the bot is running in. If set to 'development', the bot will colorize the logs.
- `BOT_TOKEN`: The token of the bot.
- `WEBHOOK_DOMAIN`: The public domain for the webhook.
- `PORT`: The port to listen on.
- `WEBHOOK_PATH`: The optional path to listen for.

## Commit Message Linting

This project uses Husky and [commitlint](https://commitlint.js.org/) for commit message linting. The configuration is located in the `. husky/commit-msg` file.

## Logging

This project uses Pino for logging. The configuration is located in the `src/utils/logger.ts` file.

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [bun](https://bun.js.org/)
- [Telegraf](https://telegraf.js.org/)
- [Pino](https://getpino.io/)

## Versioning

The version of the bot is located in the `package.json` file.

## Authors

- [Matteo Codogno](https://github.com/matteocodogno)

## License

This project is licensed under the MIT License - see the [LICENSE.md](license.md) file for details.
