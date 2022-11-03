const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('chisei')
    .setDescription('Chi sono?'),
    async execute(interaction) {
        const str = `Sono un piccolo bot della foresta incantata`;
        await interaction.reply({content: str, ephemeral: true});
        console.log(`Called command '${interaction}'`);
        console.log(`Bot replied: ${str}`);
    },
};