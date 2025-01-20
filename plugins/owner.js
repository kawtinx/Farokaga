import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*\n\n
*Whatsapp channel:*\n https://whatsapp.com/channel/0029VaeUe4uEwEk2i4vI9c1T\n
*instagram:*\ninstagram.com/0r_9r

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
