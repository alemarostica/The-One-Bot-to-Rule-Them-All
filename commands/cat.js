const { SlashCommandBuilder, Attachment } = require('discord.js');
//No google or imgur, devo capire come si registra l'application per avere le api bruh complex shit

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('The strongest entity in the world'),
    async execute(interaction) {
        await interaction.reply("placeholder per futura immagine");
    }
}