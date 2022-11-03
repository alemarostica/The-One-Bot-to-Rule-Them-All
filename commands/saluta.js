const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('saluta')
    .setDescription('saluda andonio'),
    async execute(interaction) {
        const str = `Ciao, ${interaction.user}!`;
        await interaction.reply(str);
        console.log(`Called command '${interaction}'`);
        console.log(`Bot replied: ${str}`);
    },
};