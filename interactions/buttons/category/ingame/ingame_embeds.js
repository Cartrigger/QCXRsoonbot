const { EmbedBuilder, Embed } = require('discord.js');

const ingame_embeds = {
  ingame: new EmbedBuilder()
    .setTitle("You have selected an [INGAME] issue")
    .setDescription("Please respond with the correct buttons for each of the options below - At the moment once you select an option you cannot go back, if you wish to make a new instance of the test please run ``/ingame`` \n\n✅ - Yes | ❌ - No\n\nIf at any point I have solved your issue, please do not select any more buttons and leave a notice below so a support staff member can close your ticket\nIf your issue is unrelated at any point, and you can get past the login screen at any point by simply ignoring these messages.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
  
  v51: new EmbedBuilder()
    .setTitle("Do you have Metas V51 firmware installed?")
    .setDescription("If you do please send a screenshot below which shows proof of that and a support member will review it and send you the fixed build\n\n**If you do not know how to see this:**\n1. On your quest head to 'settings'\n2. Then head to 'system' and select 'software update'\n3. Check the first 2 digits of the number under the 'firmware' section.")
    .setColor("Green")
    .setFooter({ text: 'Developed by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  v51_yes: new EmbedBuilder()
    .setTitle("Please bear with us")
    .setDescription("A support member will be with you shorty to review your screenshot, if you have not sent it yet please send it below\n\n*If you are not in a ticket please make one and send the screenshot there if a support member is currently unavailable* ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  instances: new EmbedBuilder()
    .setTitle("Have your instances downloaded successfully?")
    .setDescription("Sometimes the instances can fail to download for various reasons. If your instances only show one instance (you cant change between 1.18.2 and 1.19.3) or neither at all, that means your instances failed to download for whatever reason. If you can see both 1.18.2 and 1.19.3 then your instances downloaded successfully.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
  instances_no: new EmbedBuilder()
    .setTitle("Instances download failure")
    .setDescription("To fix the instance download issue is simple, you just have to reinstall QuestCraft fresh. Additionally, you can do `/download Reinstall` for precise steps on how to do this.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),

  mods: new EmbedBuilder()
    .setTitle("Did you install mods?")
    .setDescription("Questcraft will often have issues with most complex and even some simple mods, and many people can and do have issues regarding incompatible mods.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),

  immersivemc: new EmbedBuilder()
    .setTitle("Are you having an issue with ImmersiveMC?")
    .setDescription("Most mod issues are based around the ImmersiveMC mod, as many people dont realise that it has multiple dependencies.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
  immersivemc_yes: new EmbedBuilder()
    .setTitle("Make sure to download the dependencies!")
    .setDescription("Please run the `/immersivemc` command and select the version of the game that you are trying to run.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),

  send_logs: new EmbedBuilder()
    .setTitle("Send us your Logs!")
    .setDescription("To debug your issue and help you, we need your game's logs, these store everything that the game does up until the point of the crash.\nIf you dont know how to locate your logs, the `/location Logs` command will help you.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
};
module.exports = ingame_embeds;