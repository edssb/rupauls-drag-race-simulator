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

    episodeChallenges.push("Finale");

	screen.createButton("Proceed", "finaleLipSyncs()");
}

function finaleLipSyncs() {
	let screen = new Scene();
	screen.clean();

	screen.createHeader("The Lip-Syncs...");
	screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
	lsSong();

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
	lsSong();

	for (let i = 0; i < secondLS.length; i++) {
		secondLS[i].getASLipsync();
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
	lsSong();
	screen.createHorizontalLine();
	screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");

	for (let i = 0; i < finalLS.length; i++)
		finalLS[i].getFinale();

	finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
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

function finaleTeam() {
	//sort queens by finale score:
	for (let i = 0; i < currentCast.length; i ++) {
		currentCast[i].getFinale()
	}
	currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));

	let screen = new Scene();
	screen.clean();
	screen.createHeader("The grande finale!");
	screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
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
	lsSong();
	screen.createButton("Proceed", "finaleFinale()");
}

function finaleTeamJudging() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("The final minutes...");
	screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
	screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");

	screen.createHorizontalLine();

	(currentCast as Array<Team>)[1].QueenA.addToTrackRecord("ELIMINATED");
	(currentCast as Array<Team>)[1].QueenB.addToTrackRecord("ELIMINATED");

	eliminatedCast.unshift((currentCast as Array<Team>)[1].QueenA);
	eliminatedCast.unshift((currentCast as Array<Team>)[1].QueenB);

	currentCast.splice(1, 1);

	if (randomNumber(0, 100) <= 50) {
		currentCast.push((currentCast as Array<Team>)[0].QueenA);
		currentCast.push((currentCast as Array<Team>)[0].QueenB);
	} else {
		currentCast.push((currentCast as Array<Team>)[0].QueenB);
		currentCast.push((currentCast as Array<Team>)[0].QueenA);
	}

	currentCast.splice(0, 1);

	screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
	lsSong();
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

    episodeChallenges.push("Finale");
	
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
	lsSong();
	screen.createButton("Proceed", "finaleFinale()");

}

function contestantProgress() {
	let screen = new Scene();
	screen.clean();
	screen.createHeader("Contestant Progress");

	let main = document.querySelector("div#MainBlock");

	let trackRecords = document.createElement("table");

	if (totalCastSize >= 12 && totalCastSize < 15)
		trackRecords.setAttribute("style", "font-size: 85%;")
	if (totalCastSize >= 15)
		trackRecords.setAttribute("style", "font-size: 75%")

	let header = document.createElement("tr");
	trackRecords!.appendChild(header);

	let th = document.createElement("th");
	th.innerHTML = "Queen";
	header.appendChild(th);

	for (let i = 0; i < episodeChallenges.length; i++) {
		let th = document.createElement("th");
		th.innerHTML = episodeChallenges[i];
		header.appendChild(th);
	}

	let winner = document.createElement("tr");

	let name = document.createElement("td");
	name.setAttribute("style", "font-weight: bold;");

	let winnerQueen: Queen;

	if (!top4)
		winnerQueen = currentCast[0];
	else
		winnerQueen = finalLS[0];
	
	name.innerHTML = winnerQueen.getName();

	winner.appendChild(name);

	for (let i = 0; i < winnerQueen.trackRecord.length; i++) {
		let placement = document.createElement("td");
		placement.innerHTML = winnerQueen.trackRecord[i];

		if (placement.innerHTML == "WIN") {
			placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
		} else if (placement.innerHTML == "TOP2") {
			placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
		} else if (placement.innerHTML == "LOW") {
			placement.setAttribute("style", "background-color: pink;");
		} else if (placement.innerHTML == "HIGH") {
			placement.setAttribute("style", "background-color: lightblue;");
		} else if (placement.innerHTML == "BTM2" || placement.innerHTML ==  "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
			placement.setAttribute("style", "background-color: tomato;");
		} else if (placement.innerHTML == "ELIM") {
			placement.setAttribute("style", "font-weight: bold; background-color: red;");
		} else if (placement.innerHTML == "WINNER") {
			placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
		} else if (placement.innerHTML == "RUNNER-UP") {
			placement.setAttribute("style", "font-weight: bold; background-color: silver;");
		} else if (placement.innerHTML == "ELIMINATED") {
			placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
		} else if (placement.innerHTML == "") {
			placement.setAttribute("style", "background-color: gray");
		} else if (placement.innerHTML == "WIN ") {
			placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
		} else if (placement.innerHTML == "SAFE") {
			placement.setAttribute("style", "background-color: white;");
		} else if (placement.innerHTML == " WIN") {
			placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
		} else if (placement.innerHTML == "DISQ") {
			placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
		} else if (placement.innerHTML == "RTRN") {
			placement.setAttribute("style", "font-weight: bold; background-color: orange;");
		}else if (placement.innerHTML == " WIN ") {
			placement.setAttribute("style", "background-color: lightgreen;");
		}else if (placement.innerHTML == "LOSS") {
			placement.setAttribute("style", "background-color: orange;");
		}
		
		winner.appendChild(placement);
	}

	trackRecords.appendChild(winner);

	for (let i = 0; i < eliminatedCast.length; i++) {
		let contestant = document.createElement("tr");

		let name = document.createElement("td");
		name.setAttribute("style", "font-weight: bold;");
		
		name.innerHTML = eliminatedCast[i].getName();
	
		contestant.appendChild(name);

		for (let k = 0; k < eliminatedCast[i].trackRecord.length; k++) {
			let placement = document.createElement("td");
			placement.innerHTML = eliminatedCast[i].trackRecord[k];
	
			if (placement.innerHTML == "WIN") {
				placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
			} else if (placement.innerHTML == "TOP2") {
				placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
			} else if (placement.innerHTML == "LOW") {
				placement.setAttribute("style", "background-color: pink;");
			} else if (placement.innerHTML == "HIGH") {
				placement.setAttribute("style", "background-color: lightblue;");
			} else if (placement.innerHTML == "BTM2" || placement.innerHTML ==  "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
				placement.setAttribute("style", "background-color: tomato;");
			} else if (placement.innerHTML == "ELIM") {
				placement.setAttribute("style", "font-weight: bold; background-color: red;");
			} else if (placement.innerHTML == "WINNER") {
				placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
			} else if (placement.innerHTML == "RUNNER UP") {
				placement.setAttribute("style", "font-weight: bold; background-color: silver;");
			} else if (placement.innerHTML == "ELIMINATED") {
				placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
			} else if (placement.innerHTML == "") {
				placement.setAttribute("style", "background-color: gray"); 
			} else if (placement.innerHTML == "WIN ") {
				placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
			} else if (placement.innerHTML == "SAFE") {
				placement.setAttribute("style", "background-color: white;");
			} else if (placement.innerHTML == " WIN") {
				placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
			} else if (placement.innerHTML == "DISQ") {
				placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
			} else if (placement.innerHTML == "RTRN") {
				placement.setAttribute("style", "font-weight: bold; background-color: orange;");
			} else if (placement.innerHTML == " WIN ") {
				placement.setAttribute("style", "background-color: lightgreen;");
			}else if (placement.innerHTML == "LOSS") {
				placement.setAttribute("style", "background-color: orange;");
			}
			contestant.appendChild(placement);
		}
	
		trackRecords.appendChild(contestant);
	}

	main!.appendChild(trackRecords);

	screen.createButton("Simulate again!", "reSimulate()");
	screen.createHorizontalLine();
	screen.createButton("Back to main page", "location.reload()");
}