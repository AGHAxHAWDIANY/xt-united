const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",

    async execute(member) {

        const channel = member.guild.channels.cache.find(
            ch => ch.name === "welcome"
        );

        if (!channel) return;

        const embed = new EmbedBuilder()
            .setColor("#00ff99")
            .setTitle("🎉 بەخێربێیت بۆ XT UNITED")
            .setDescription(
                `سڵاو ${member} 👋\n\n` +
                `بەخێربێیت بۆ سێرڤەرەکەمان ❤️\n\n` +
                `👥 ئەندامی ژمارە: **${member.guild.memberCount}**\n` +
                `📌 تکایە یاساکان بخوێنەوە و چالاک بە`
            )
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({
                text: "XT UNITED"
            });

        channel.send({ embeds: [embed] });
    }
};
