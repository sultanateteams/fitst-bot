const TelegramBot = require("node-telegram-bot-api");

const token = "8416630931:AAFERfHnumE5GCSsr0gA0i0TXi_sVysRXng";

const bot = new TelegramBot(token, { polling: true });

const obj = {};

const gameOption = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "1",
        },
        {
          text: "2",
          callback_data: "2",
        },
        {
          text: "3",
          callback_data: "3",
        },
      ],
      [
        {
          text: "4",
          callback_data: "4",
        },
        {
          text: "5",
          callback_data: "5",
        },
        {
          text: "6",
          callback_data: "6",
        },
      ],
      [
        {
          text: "7",
          callback_data: "7",
        },
        {
          text: "8",
          callback_data: "8",
        },
        {
          text: "9",
          callback_data: "9",
        },
      ],
      [{ text: "0", callback_data: "0" }],
    ],
  },
};

const workerBot = () => {
  bot.setMyCommands([
    {
      command: "/start",
      description: "Botni ishga tushirish",
    },
    {
      command: "/info",
      description: "O'zingiz haqingizda ma'lumot",
    },
    {
      command: "/game",
      description: "O'yin o'ynash",
    },
  ]);

  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text == "/start") {
      return await bot.sendMessage(chatId, "Amringizga muntazirman");
    }

    if (text == "/info") {
      return await bot.sendPhoto(
        chatId,
        "https://www.topgear.com/sites/default/files/2023/08/Bugatti%20Chiron%20Super%20Sport%20Golden%20Era_material%20under%20embargo%20%281%29.jpg?w=892&h=502"
      );
    }

    if (text == "/game") {
      await bot.sendMessage(
        chatId,
        "Bot 0 dan 9 gacha bo'lgan son o'yladi shuni toping"
      );
      const randomNumber = Math.floor(Math.random() * 10);
      obj[chatId] = randomNumber;
      return await bot.sendMessage(chatId, "To'g'ri sonni toping", gameOption);
    }

    await bot.sendMessage(chatId, "Noto'g'ri buyuriq kiritdingiz");
  });
};

workerBot();
