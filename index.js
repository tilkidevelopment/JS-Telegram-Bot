const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');
const bot = new Telegraf('BURAYA BOT TOKENİNİ YAZ');

// Komut Dosyası
const komutlarKlasoru = path.join(__dirname, 'komutlar');
const komutlar = [];

fs.readdirSync(komutlarKlasoru).forEach(file => {
    const komut = require(`./komutlar/${file}`);
    komutlar.push({ name: komut.name, description: komut.description });
    bot.command(komut.name, komut.execute);
});

// /yardim komutu (OTO Ekliyor)
bot.command('yardim', (ctx) => {
    let mesaj = "Yardım Menüsü:\n";
    komutlar.forEach(komut => {
        mesaj += `/${komut.name} - ${komut.description}\n`;
    });
    ctx.reply(mesaj);
});

bot.launch();
console.log("Bot çalışıyor...");
