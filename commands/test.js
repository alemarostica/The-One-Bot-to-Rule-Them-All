const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Salute!'),
    async execute(interaction) {
        await interaction.reply('se vedi questa risposta vuol dire che funziono');
        console.log(interaction.user.id);
    },
};