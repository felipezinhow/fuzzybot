const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
	console.log("Connected as "+client.user.tag)
switch (new Date().getDay()) {
  case 0:
    client.user.setActivity("Luiggi Simulator | >help")
    break;
  case 1:
    client.user.setActivity("pedra no pedreiro | >help")
    break;
  case 2:
    client.user.setActivity("seu pau | >help", {type: "WATCHING"})
    break;
  case 3:
	client.user.setActivity("TCC da Fuzzy | >help", {type: "WATCHING"})
    break;
  case 4:
    client.user.setActivity("futebas com a lixeira | >help")
    break;
  case 5:
    client.user.setActivity("o novo episódio de Hunter x Hunter | >help", {type: "WATCHING"})
    break;
  case 6:
    client.user.setActivity("o Feijó fazer escândalo | >help", {type: "WATCHING"})
}

	
	let generalChannel = client.channels.cache.get("788848076596052018")
	client.on('message',(receivedMessage)=>{
	if (receivedMessage.author == client.user) {
		return
	}else {
		if (receivedMessage.toString() == "oloco") {
			receivedMessage.channel.send("oloco")
		}
		if (receivedMessage.toString() == "based") {
			receivedMessage.channel.send("based")
		}
		if (receivedMessage.toString() == "m!trigger") {
			receivedMessage.channel.send(receivedMessage.author.toString()+" PAI DO MARRONE AQUI SEU MERDA")
		}
		if (receivedMessage.toString() == ">help") {
			receivedMessage.channel.send(receivedMessage.author.toString()+" te vira lol 😎")
		}		
		//Vsf tu e lit otaku weeb cara
		var intervalID = setInterval(myCallback, 28800000);
		function myCallback() {
			receivedMessage.channel.send("@Bola de Neve Não Tem Freio#1114 cringe")
		}	
		if (receivedMessage.content.startsWith(">")) {
			processCommand(receivedMessage);
		}
		function processCommand(receivedMessage) {
			let fullCommand = receivedMessage.content.substr(1);
			let splitCommand = fullCommand.split(" ");
			let primaryCommand = splitCommand[0];
			let arguments = splitCommand.slice(1);
			if (primaryCommand == "otaku") {
				otakuCommand(arguments, receivedMessage);
			}
			if (primaryCommand == "fuzil") {
				fuzilCommand(arguments, receivedMessage);
			}
		}

		function otakuCommand(arguments, receivedMessage) {
				receivedMessage.channel.send("Vsf tu e lit otaku weeb cara, namoral "+arguments+" tu é esquisito"+
				", se tu acha que loli"+ 
				"con é um bglh normal, pode deixar que eu te interno na porrada")

		}
		function fuzilCommand(arguments, receivedMessage) {
				receivedMessage.channel.send("**RATATATATATATA** "+arguments+" foi FUZZILADO 😎");
		}
	}
	})
})
client.login("Nzc0NzQ5OTExMjgzMDA3NTE5.X6cUFQ.rIb6dv0evzqlGsW0929dX0ckv7Q")