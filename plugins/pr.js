import fetch from "node-fetch";
let handler = async (m, { conn, command }) => {
	try {
		let q = m.quoted ? m.quoted : m
		let pp = await conn
			.profilePictureUrl(q.chat, "image")
			.catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
		conn.sendFile(m.chat, pp, "nih bang.png", "*MＡⱢᎥꝄ‽碰撞*\n 您的個人資料圖片已被撤回 ", m, {
			jpegThumbnail: await (await fetch(pp)).buffer(),
		});
	} catch {
		let pp = await conn
			.profilePictureUrl(m.chat, "image")
			.catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
		conn.sendFile(m.chat, pp, "ppsad.png", "*MＡⱢᎥꝄ‽碰撞*\n 您的個人資料圖片已被撤回 ", m, {
			jpegThumbnail: await (await fetch(pp)).buffer(),
		});
	}
};
handler.help = ["pr"];
handler.tags = ['owner'];
handler.command = /^(pr)$/i;
export default handler;
