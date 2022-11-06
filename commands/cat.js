const { SlashCommandBuilder } = require('discord.js');
const Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer:{
        headless: true
    }
});

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('The strongest entity in the world')
    .addStringOption(option =>
        option
            .setName('keyword')
            .setDescription('Parametro aggiuntivo di ricerca')
            .setRequired(false)
        ),

    async execute(interaction) {
        await interaction.deferReply();

        const str = interaction.options.getString('keyword').concat(' cat');

        const image_results = await google.scrape(str, 20);
        const rnd = Math.floor(Math.random() * (image_results.length));
        const result = {content: "Here's your cat", files: [{attachment: image_results[rnd].url, name: 'cat.jpg'}]};

        await interaction.editReply(result);

        //debug
        console.log(`Search query: ${str}`);
        console.log(`Results array size: ${image_results.length}`);
        console.log(`Called command '${interaction}'`);
        console.log(`Bot replied: ${JSON.stringify(result)}`);
    }
}