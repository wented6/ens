const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');





const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();







    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("585748291476783104");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`_Hi , You’R in **Dureté.**_`), 8400)
}
});

   console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("585748291476783104");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`_Hi , You’R in **Dureté.**_`), 9000)
}
});





   console.log("oNNN3");
p3.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("585748291476783104");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`_Hi , You’R in **Dureté.**_`), 9600)
}
});



   console.log("oNNN4");
p4.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("585748291476783104");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`_Hi , You’R in **Dureté.**_`), 10000)
}
});





   console.log("oNNN5");
p5.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("585748291476783104");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`_Hi , You’R in **Dureté.**_`), 10800)
}
});







p1.login(process.env.B);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);

