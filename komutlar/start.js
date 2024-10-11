module.exports = {
    name: 'start',
    description: 'Botun tanıtım komutu',
    execute: (ctx) => {
        const mesaj = `Merhaba ben tilki ^w^
Komutlarıma bakmak için /yardim yaz!`;
        const resimLinki = 'https://tilki.neocities.org/resim/tilki_afis.png'; 
        ctx.replyWithPhoto(
            { url: resimLinki },
            {
                caption: mesaj, 
            }
        );
    }
};
