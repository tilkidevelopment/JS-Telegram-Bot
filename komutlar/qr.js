module.exports = {
    name: 'qr',
    description: 'Verilen veriye göre bir QR kodu oluşturur',
    execute: (ctx) => {

        const query = ctx.message.text.split(' ').slice(1).join(' ');

        if (!query) {
            return ctx.reply('Lütfen QR kodu oluşturmak için bir veri girin. Örnek: /qr tilki.dev');
        }

        const qrLink = `https://tilki.dev/api/qr?data=${encodeURIComponent(query)}`;
        
        ctx.replyWithPhoto({ url: qrLink }, { caption: `İşte Oluşturduğunuz QR kodunuz: ${query}` });
    }
};
