const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('chisei')
    .setDescription('Chi sono?'),
    async execute(interaction) {
        await interaction.reply({content: `Sono un piccolo bot della foresta incantata`, ephemeral: true});
    },
};