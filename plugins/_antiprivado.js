export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] 𝑯𝑶𝑳𝑨 @${m.sender.split`@`[0]}, 𝑺𝑶𝒀 𝑩𝑶𝑻 𝑵𝑶 𝑴𝑨𝑵𝑫𝑬𝑺 𝑷𝑹𝑰𝑽𝑨𝑫𝑶 𝑺𝑰 𝑸𝑼𝑰𝑬𝑹𝑺 𝑪𝑶𝑴𝑷𝑹𝑨 𝑼𝑵 𝑩𝑶𝑻 𝑴𝑨𝑵𝑫𝑨 𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑨 𝑴𝑰 𝑫𝑼𝑬𝑵̃𝑶 https://wa.me/+525538375800
    *`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
