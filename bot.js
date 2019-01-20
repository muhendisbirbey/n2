const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {member.send("Beni kırmazsanız çok sevinirim :blossom:
 Sunucuya gelebilir misiniz ? :blush:  :heart:

:small_blue_diamond: https://discord.gg/Gc9BGwF ");
});

bot.login('process.env.BOT_TOKEN');
