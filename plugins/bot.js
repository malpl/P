import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│🦹 هاي يا , ${conn.getName(m.sender)}!
:› PẻⱢấy GaMẻ ~🧛
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
│🧛 مالك بيحبك  ✔️ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
 ده رقمي الاساسي   🧛💜
 https://wa.me/+201030825867
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
  ده الروم بتاعي 🧛💜
 https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🧛💜
 *೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
 › FẻNŚsh GaMẻ ~🧛
╰────────────────────
*─[𝑩𝑶𝑻⃟☣️𝑴𝑨𝑳𝑰𝑲🍷🇰🇼]*💜✨
`.trim()
  m.reply(caption)
 
}
      
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(بوت)$/i


export default handler
  
