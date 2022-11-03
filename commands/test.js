const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Salute!'),
    async execute(interaction) {
        const str = "se vedi questa risposta vuol dire che funziono";
        await interaction.reply(str);
        console.log(`Called command '${interaction}'`);
        console.log(`Bot replied: ${str}`);
    },
};