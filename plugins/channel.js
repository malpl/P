let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
