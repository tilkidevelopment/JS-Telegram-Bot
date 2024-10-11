module.exports = {
    name: 'ping',
    description: 'Botun cevap süresini gösterir',
    execute: (ctx) => {
        const start = Date.now();
        ctx.reply('Pong!').then(() => {
            const ms = Date.now() - start;
            ctx.reply(`Gecikme: ${ms} ms`);
        });
    }
};
