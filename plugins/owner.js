import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 م有关 Bot Malik¿? 的信息」*

*数字 :*https://wa.me/+201030825867
*群组链接❤‍🔥:*　　　⢀⡤⠔⠒⠒⢌⡛⠒⢦⣄     
　　⡠⠚⠁　⣀⡠⠒⠚⡄⠑　⠈⠳⡄   
　⢀⡞⠁⠠⠦　　　⠸⠠ 　⢀⠤⠜⣆  
⢀⡎　　⠡⡀　⠐⠂　⠈　　⣁ ⣀⣸⡆ 
⢸ ⡤⡀　⡧　　　⠠⠤　⠨　　　⢧ 
 ⢧　⠈⢀⠆⣤⣤⣶⣶⣦⣤⠁⢀⠔⣢⣴⣶⢨⠇
　⠘⡆⡄　 ⣿⣿⣿⣿⣿⣿⡆　⣼⣿⣿⣿⡏ 
　　⢻ ⠇　⠙⢿⣿⣿⡿⢿⠁ ⠻⠿⠿⢿⡅ 
  ⢈⡷⢼⠈⢈⣀⠠　⠐⠊⢀⣾⡟⣦⠤⠼⠁ 
　　⠘⣆⠅⣽⠉⠘⡆⠆　⢀⠛⠓⡁⢻    
　　　⢺⠐⠙⢦⢀⡧⣈⣘⣈⣀⣢⣣⣾    
　　　⠈⠳⢌⠈⠛⢷⣓⡜⢤⠧⡗⣿⡇    
　　　　　⠳⣄  ⠉⠍⠉⡀⡞     
　　　　　　⠉⠑⠲⠤⠴⠚⠁
𝑴𝑨𝑳𝑰𝑲🍷🇰🇼 
  🥶     malikcrash 20xxxxxxxxxx,5
🥶  ¥
🥶   £
🥶    ₱
🥶            §
🥶 https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🥶


`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
