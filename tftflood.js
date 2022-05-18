//dice so nice hooks for us to use the custom dice
Hooks.on('diceSoNiceReady', (dice3d) => {
	console.log("TFTFLOOD - Dice init");
	dice3d.addSystem({id: "tftflood", name : "Things From the Flood"}, "force");
	
	dice3d.addColorset({
		name: 'flood-purple',
		description : "Things From the Flood Dice",
		category : "Things From the Flood",
		foreground : '#96274f',
		background : '#96274f',
		outline : '#96274f',
		edge : '#96274f',
		texture : '#96274f',
		material : 'plastic'
	});
	
	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"moodules/tftflood/img/dice/face1.png",
			"systems/tftflood/img/dice/face2.png",
			"systems/tftflood/img/dice/face3.png",
			"systems/tftflood/img/dice/face4.png",
			"systems/tftflood/img/dice/face5.png",
			"systems/tftflood/img/dice/face6.png"
		],
		colorset: "flood-purple",
		system: "tftloop"
	});
});
