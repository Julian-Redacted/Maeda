const Discord = require("discord.js")
const dotenv = require("dotenv")

dotenv.config()
const TOKEN = process.env.TOKEN

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})



client.login(TOKEN)