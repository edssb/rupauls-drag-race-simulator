function finale() {
	//sort queens by finale score:
	for (let i = 0; i < currentCast.length; i ++) {
		currentCast[i].getFinale()
	}
	currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));

	let screen = new Scene();
	screen.clean();
	screen.createHeader("The grande finale!");
	screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
	screen.createButton("Proceed", "runway()", "button2");
}

function finaleJudging() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("The final minutes...");
	screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
	screen.createBold(currentCast[2].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
	currentCast[2].addToTrackRecord("ELIMINATED");
	eliminatedCast.unshift(currentCast[2]);
	currentCast.splice(2, 1);
	screen.createHorizontalLine();

	screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
	screen.createButton("Proceed", "finaleFinale()");
}

function finaleFinale() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("The end.");
	screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");

	screen.createBigText(currentCast[0].getName() + "!!");
	screen.createBold("Now prance, my queen!");

	currentCast[0].addToTrackRecord("WINNER");
	
	currentCast[1].addToTrackRecord("RUNNER UP");
	eliminatedCast.unshift(currentCast[1]);
	currentCast.splice(1, 1);

	screen.createButton("Proceed", "contestantProgress()");
}

function contestantProgress() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("Contestant Progress");
	screen.createBold(currentCast[0].getName() + ": ", "winTR");
	let winTR = document.querySelector("b#winTR");

	for (let i = 0; i < currentCast[0].trackRecord.length; i++) 
		winTR!.innerHTML += currentCast[0].trackRecord[i] + " ";

	for (let i = 0; i < eliminatedCast.length; i++) {
		screen.createBold(eliminatedCast[i].getName() + ": ", "TR" + i);

		let TR = document.querySelector("b#TR" + i);

		for (let k = 0; k < eliminatedCast[i].trackRecord.length; k++) 
			TR!.innerHTML += eliminatedCast[i].trackRecord[k] + " ";
	}

	screen.createButton("Simulate again!", "location.reload()");
}