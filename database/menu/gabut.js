const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return ` ❁ཻུ۪۪⸙͎ -----[ *GABUTZ MENU* ]-----  ❁ཻུ۪۪⸙͎
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╭════〘 *ZAKI BOT* 〙════⊱❁۪۪۪
┃□│⊱❥ NAMA : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□│
╰══════════════════⊱❁۪۪۪
Berikut adalah fitur yang ada pada bot ini!✨
┏══════════════════ ❁ཻུ۪۪⸙͎
┃╭─────────────────
┃│➸ *${prefix}apakah*
┃│➸ *${prefix}bisakah*
┃│➸ *${prefix}kapankah*
┃│➸ *${prefix}hobby*
┃│➸ *${prefix}rate*
┃│➸ *${prefix}seberapagay*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}truth*
┃│➸ *${prefix}dare*
┃│➸ *${prefix}timer*
┃╰─────────────────
┗══════════════════ ❁ཻུ۪۪⸙͎
 ❁ཻུ۪۪⸙͎ -----[ *POWERED BY ${ownerName}* ]-----  ❁ཻུ۪۪⸙͎`
}
exports.gabut = gabut