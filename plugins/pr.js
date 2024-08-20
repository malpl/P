import fetch from "node-fetch";
let handler = async (m, { conn, command }) => {
	try {
		let q = m.quoted ? m.quoted : m
		let pp = await conn
			.profilePictureUrl(q.chat, "image")
			.catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
		conn.sendFile(m.chat, pp, "nih bang.png", "*MＡⱢᎥꝄ‽*支持禁止接近的危險 一個經過驗證的號碼，沒有任何問題，\n 請不要封鎖該號碼，因為它對我和我的工作非常重要。 \n 好的，谢谢支持团队 ¥¥¥¥¥¥\n🥶 https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🥶", m, {
			jpegThumbnail: await (await fetch(pp)).buffer(),
		});
	} catch {
		let pp = await conn
			.profilePictureUrl(m.chat, "image")
			.catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
		conn.sendFile(m.chat, pp, "ppsad.png", "*MＡⱢᎥꝄ‽*支持禁止接近的危險 一個經過驗證的號碼，沒有任何問題，\n 請不要封鎖該號碼，因為它對我和我的工作非常重要。 \n 好的，谢谢支持团队 ¥¥¥¥¥¥\n🥶 https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🥶", m, {
			jpegThumbnail: await (await fetch(pp)).buffer(),
		});
	}
};
handler.help = ["pr"];
handler.tags = ['owner'];
handler.command = /^(pr)$/i;
export default handler;
