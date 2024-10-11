const axios = require('axios');
 
module.exports = {
    name: 'havadurumu',
    description: 'Verilen konumun hava durumunu gösterir',
    execute: async (ctx) => {
        const args = ctx.message.text.split(' ').slice(1); 
        const konum = args.join(' '); 

        if (!konum) {
            return ctx.reply('Lütfen bir konum belirtin. Örnek: /havadurumu Samsun');
        }

        const apiUrl = `https://tilki.dev/api/hava-durumu?konum=${encodeURIComponent(konum)}`;

        try {
        
            const response = await axios.get(apiUrl);
            const veri = response.data;

            const uyari = veri.uyari || 'Yok';

            const mesaj = `
Konum: ${veri.konum}
Enlem: ${veri.enlem}
Uzunluk: ${veri.uzunluk}
Saat Dilimi: ${veri.saatdilimi}
Uyarı: ${uyari}
Sıcaklık: ${veri.sicaklik}°${veri.dereceturu}
Hava Durumu: ${veri.havadurumu}
Gözlem Noktası: ${veri.gozlem_noktasi}
            `;

            ctx.replyWithPhoto(
                { url: veri.resim_url },
                { caption: mesaj }
            );
        } catch (error) {
            ctx.reply('Hava durumu bilgisi alınırken bir hata oluştu veya belirtilen konum bulunamadı.');
        }
    }
};
