const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *DOWNLOAD MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╭════〘 *ZAKI BOT* 〙════⊱❁۪۪۪
┃   ╭─────────────────
┃□│⊱❥ NAMA : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃   ╰─────────────────
╰══════════════════⊱❁۪۪۪
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏══════════════════ ❁ཻུ۪۪⸙͎  
┃╭───────────────────
┃│➸ *${prefix}play*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}tiktod*
┃│➸ *${prefix}FB(perbaikan)*
┃│➸ *${prefix}IG(perbaikan)*
┃╰───────────────────
┗══════════════════ ❁ཻུ۪۪⸙͎  
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.download = download