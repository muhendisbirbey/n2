const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {
   member.send("Beni kırmazsanız çok sevinirim :blossom: Yarışmada birinci olmaya çalışıyorum. Sunucuya gelebilir misiniz ? :blush:  :heart: :small_blue_diamond: https://discord.gg/Hm4FdXM ");});

bot.login(process.env.BOT_TOKEN);
