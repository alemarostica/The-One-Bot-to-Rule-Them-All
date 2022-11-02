const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('saluta')
    .setDescription('saluda andonio'),
    async execute(interaction) {
        await interaction.reply(`Ciao, ${interaction.user}.`);
    },
};