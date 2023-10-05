/**
 * @file Buttons.
 * @author TechyGiraffe999
 */

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons = {
    
    // ImmersiveMC Buttons Outdated - Select Menu now used    
    immersive_mc: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('immersivemc_1_18_2')
            .setLabel('1.18.2')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_19_3')
            .setLabel('1.19.3')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_19_4')
            .setLabel('1.19.4')
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_20_1')
            .setLabel('1.20.1')
            .setStyle(ButtonStyle.Danger),           
    ),

    logs: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('logs_pc')
            .setLabel('PC')
            .setEmoji("🖥️")
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('logs_quest')
            .setLabel('Quest')
            .setEmoji("🥽")
            .setStyle(ButtonStyle.Danger),       
    ),

    adb: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('adb')
            .setLabel('ADB Uninstall')
            .setEmoji("💾")
            .setStyle(ButtonStyle.Success),   
    ),

    installation: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('installation')
            .setLabel('Installation')
            .setEmoji("⚙️")
            .setStyle(ButtonStyle.Success),   
    ),

    servers: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('simple_voice_chat')
            .setLabel('🎤 Simple Voice Chat')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('bedrock_geyser')
            .setLabel('Bedrock players')
            .setEmoji("<:bedrock:1089270506441687221>")
            .setStyle(ButtonStyle.Danger),
    )
};
module.exports = buttons;
