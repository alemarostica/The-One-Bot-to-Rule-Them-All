const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('insulta')
    .setDescription('saluda andonio')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('Utente da insultare')
            .setRequired(true)),

    async execute(interaction) {
        const insults = fs.readFileSync('insulti.txt', 'utf-8');
        let insultsArray = insults.split(/\r?\n/);
        //console.log(insultsArray + insultsArray.length);
        const rnd = Math.floor(Math.random() * (insultsArray.length));
        //console.log(rnd);
        const str = (`${insultsArray[rnd]}, ${interaction.options.getUser('target')}`);
        await interaction.reply(str);
        console.log(`Called command '${interaction}'`);
        console.log(`Selected insult in position: ${rnd}`);
        console.log(`Bot replied: ${str}`);
    },
};