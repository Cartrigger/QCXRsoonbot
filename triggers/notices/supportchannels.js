// For now, the only available property is name array. Not making the name array will result in an error.
const embeds = require("../../embeds.js");

module.exports = {
	name: ["<:notsupportchannel:993043214472859778>"], //Put the trigger words in the array to use it

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.
		const channelExceptions = ["945502948111290498", "946021441298649158", "946184804657934469", "1057074981135196230", "821078174992957480", "821076673331724309", "932673625813823518"];
		if (channelExceptions.includes(message.channelId) || channelExceptions.includes(message.channel.parentId)) {
			return;
		}
		message.channel.send({
			embeds: [embeds.support_channels]
		});

	}
};
