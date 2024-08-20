const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response = "تعلا يبن المتناكه"
  async function loading() {
var hawemod = [
" خد يبني انت",
" انت ي كلبجي",
" خد ي كليجي ي علق",
" رد يبني",
" انت متعصب",
" يديوث يحيوان",
" ي كلب انت",
" ي ابن ال كلب",
" ي قله ي وسخ",
" ي زوبري انت",
" انت ي اهطل",
" رد عليا شويه ي عرصجي انت",
" انت ياض",
" يامسخرة",
" ملكش فيها",
" خالص ياض"
]
   let { key } = await conn.sendMessage(m.chat, {text: `تعلا يبني`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(تعلا)$/i;
handler.rowner = true
export default handler;
