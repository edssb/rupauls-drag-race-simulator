let firstLS: Array<Queen> = [];
let secondLS: Array<Queen> = [];
let finalLS: Array<Queen> = [];

function finaleLS() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("The grande finale!");
	screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
	screen.createHorizontalLine();

	for (let i = 0; i < 2; i++) {
		let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
		firstLS.push(q1);
		currentCast.splice(currentCast.indexOf(q1), 1);

		let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
		secondLS.push(q2);
		currentCast.splice(currentCast.indexOf(q2), 1);
	}

	screen.createBigText("The preliminaries will be: ");
	screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
	screen.createParagraph("and");
	screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());

	screen.createButton("Proceed", "finaleLipSyncs()");
}

function finaleLipSyncs() {
	let screen = new Scene();
	screen.clean();

	screen.createHeader("The Lip-Syncs...");
	screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");

	for (let i = 0; i < firstLS.length; i++) {
		firstLS[i].getLipsync();
	}
	firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));

	finalLS.push(firstLS[0]);

	firstLS[1].addToTrackRecord("ELIMINATED");
	eliminatedCast.unshift(firstLS[1]);

	screen.createBold(firstLS[0].getName() + ", shantay you stay.");
	screen.createBold(firstLS[1].getName() + ", sashay away...");

	screen.createHorizontalLine();

	screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");

	for (let i = 0; i < secondLS.length; i++) {
		secondLS[i].getLipsync();
	}
	secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));

	finalLS.push(secondLS[0]);

	secondLS[1].addToTrackRecord("ELIMINATED");
	eliminatedCast.unshift(secondLS[1]);

	screen.createBold(secondLS[0].getName() + ", shantay you stay.");
	screen.createBold(secondLS[1].getName() + ", sashay away...");

	screen.createButton("Proceed", "finalLipSync()");
}

function finalLipSync() {
	let screen = new Scene();
	screen.clean();

	screen.createHeader("The end...");
	screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
	screen.createHorizontalLine();
	screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");

	let winner = 0;

	screen.createBigText(finalLS[winner].getName() + "!!");
	screen.createBold("Now prance, my queen!");

	finalLS[winner].addToTrackRecord("WINNER");
	
	for (let i = 0; i < finalLS.length; i++) {
		if (!(finalLS.indexOf(finalLS[i]) == winner)) {
			finalLS[i].addToTrackRecord("RUNNER UP");
			eliminatedCast.unshift(finalLS[i]);
			finalLS.splice(i, 1);
		}
	}

	screen.createButton("Proceed", "contestantProgress()");
}

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
	if (all_stars) {
		currentCast[1].addToTrackRecord("RUNNER UP");
		eliminatedCast.unshift(currentCast[1]);
		currentCast.splice(1, 1);
	}
	
	screen.createButton("Proceed", "contestantProgress()");
}

function finaleAS() {
	//sort queens by finale score:
	for (let i = 0; i < currentCast.length; i ++) {
		currentCast[i].getFinale()
	}
	currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));

	let screen = new Scene();
	screen.clean();
	screen.createHeader("The grande finale!");
	screen.createParagraph("Our Top 4 will create verses and coreography for a new original song!");
	screen.createButton("Proceed", "runway()", "button2");
}

function finaleASJudging() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("The final minutes...");
	screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
	screen.createBold(currentCast[3].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
	currentCast[3].addToTrackRecord("ELIMINATED");
	eliminatedCast.unshift(currentCast[3]);
	currentCast.splice(3, 1);
	screen.createHorizontalLine();

	screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
	screen.createButton("Proceed", "finaleFinale()");
}

function contestantProgress() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("Contestant Progress");

	if (top3 || all_stars)
		screen.createBold(currentCast[0].getName() + ": ", "winTR");
	else if (top4)
		screen.createBold(finalLS[0].getName() + ": ", "winTR");

	let winTR = document.querySelector("b#winTR");
	
	if (top3 || all_stars)
		for (let i = 0; i < currentCast[0].trackRecord.length; i++) 
			winTR!.innerHTML += currentCast[0].trackRecord[i] + " ";
	else if (top4)
		for (let i = 0; i < finalLS[0].trackRecord.length; i++) 
			winTR!.innerHTML += finalLS[0].trackRecord[i] + " ";

	for (let i = 0; i < eliminatedCast.length; i++) {
		screen.createBold(eliminatedCast[i].getName() + ": ", "TR" + i);

		let TR = document.querySelector("b#TR" + i);

		for (let k = 0; k < eliminatedCast[i].trackRecord.length; k++) 
			TR!.innerHTML += eliminatedCast[i].trackRecord[k] + " ";
	}

	screen.createButton("Simulate again!", "location.reload()");
}