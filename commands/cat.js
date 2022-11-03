const { SlashCommandBuilder, Attachment } = require('discord.js');
//No google or imgur, devo capire come si registra l'application per avere le api bruh complex shit

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('The strongest entity in the world'),
    async execute(interaction) {
        const str = "placeholder per futura immagine";
        await interaction.reply(str);
        console.log(`Called command '${interaction}'`);
        console.log(`Bot replied: ${str}`);
    }
}