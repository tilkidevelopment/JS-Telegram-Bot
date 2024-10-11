const axios = require('axios');

module.exports = {
    name: 'ceviri',
    description: 'Verilen metni veya etiketlenen mesajı Türkçeye çevirir',
    execute: async (ctx) => {
        let yazi;

        if (ctx.message.text.split(' ').length > 1) {
            const args = ctx.message.text.split(' ').slice(1);
            yazi = args.join(' '); 
        } 
        else if (ctx.message.reply_to_message) {
            yazi = ctx.message.reply_to_message.text; 
        } 
        else {
            return ctx.reply('Lütfen çevirmek istediğiniz metni veya bir mesajı etiketleyin.');
        }

        const apiUrl = `https://tilki.dev/api/cevir?yazi=${encodeURIComponent(yazi)}&dil=tr`;

        try {
            const response = await axios.get(apiUrl);
            const ceviri = response.data.ceviri;

            ctx.reply(`Çeviri: ${ceviri}`);
        } catch (error) {
            ctx.reply('Çeviri yapılırken bir hata oluştu.');
        }
    }
};
