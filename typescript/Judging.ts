function judging(): void {
	if (currentCast.length > 11 && currentCast.length == totalCastSize) {
		//add 4 queens to the top and 4 queens to the bottom
		currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
		for (let i = 0; i < 4; i++) {
			topQueens.push(currentCast[i]);
			bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
		}

		judgingScreen();
	}
	else if (currentCast.length > 6) {
		//add first 3 queens to the top and last 3 queens to the bottom:
		currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
		for (let i = 0; i < 3; i++) {
			topQueens.push(currentCast[i]);
			bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
		}

		judgingScreen();
	}
	else if (currentCast.length == 6) {
		currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
		for (let i = 0; i < 3; i++) {
			topQueens.push(currentCast[i]);
			bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
		}

		winAndBtm2();
	}
	else if (currentCast.length == 5) {
		//add first 2 queens to the top and last 3 queens to the bottom:
		currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
		topQueens.push(currentCast[0]);
		topQueens.push(currentCast[1]);

		if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16)
			topQueens.push(currentCast[2]);
		else
			bottomQueens.push(currentCast[2]);
		
		bottomQueens.push(currentCast[3]);
		bottomQueens.push(currentCast[4]);

		winAndBtm2();
	}
	else if (currentCast.length == 4) {
		//add first 2 queens to the top and last 2 queens to the bottom:
		currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
		topQueens.push(currentCast[0]);
		topQueens.push(currentCast[1]);

		bottomQueens.push(currentCast[2]);
		bottomQueens.push(currentCast[3]);

		winAndBtm2();
	}
}

function judgingScreen() {
	let judgingScreen = new Scene();

	judgingScreen.clean();
	judgingScreen.createHeader("Judging!");
	judgingScreen.createBold("Based on tonight's performances...");

	for (let i = 0; i < topQueens.length; i++) {
		judgingScreen.createBold(topQueens[i].getName());
		judgingScreen.createBold(bottomQueens[i].getName());
	}

	judgingScreen.createBold("You are the tops and bottoms of the week.");
	judgingScreen.createHorizontalLine();

	judgingScreen.createParagraph("", "safeQueens");
	let safeQueens = document.querySelector("p#safeQueens");

	//check if the queen is in the top or in the bottom, and if not put her as safe:
	for (let i = 0; i < currentCast.length; i++) 
		if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
			safeQueens!.innerHTML += currentCast[i].getName() + ", ";
			currentCast[i].addToTrackRecord("SAFE");
		}

	safeQueens!.innerHTML += "you are safe.";

	judgingScreen.createButton("Proceed", "winAndBtm2()");
}

function winAndBtm2() {
	let screen = new Scene();

	screen.clean();
	screen.createHeader("Bring back my girls!");

	screen.createBold("Ladies, I've made some decisions...");

	//sort the top queens now taking runway and favoritism in consideration:
	for (let i = 0; i < topQueens.length; i++)
		topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
	topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
	
	//double win:

	if (topQueens[0].performanceScore == topQueens[1].runwayScore) {
		topQueens[0].addToTrackRecord("WIN");
		topQueens[0].favoritism += 5;
		topQueens[1].addToTrackRecord("WIN");
		topQueens[1].favoritism += 5;


		screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");

		topQueens.splice(0, 2);
	} else {
		topQueens[0].addToTrackRecord("WIN");
		topQueens[0].favoritism += 5;

		screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");

		topQueens.splice(0, 1);	
	}

	screen.createParagraph("", "highs");
	let highs = document.querySelector("p#highs");

	for (let i = 0; i < topQueens.length; i++) {
		highs!.innerHTML += topQueens[i].getName() + ", ";
		topQueens[i].addToTrackRecord("HIGH");
	}

	highs!.innerHTML += "good work this week, you're safe.";

	screen.createHorizontalLine();

	screen.createParagraph("", "bottom3");

	if (bottomQueens.length >= 3) {
		let bottom3 = document.querySelector("p#bottom3");
		for (let i = 0; i < bottomQueens.length; i++)
			bottom3!.innerHTML += bottomQueens[i].getName() + ", ";
		bottom3!.innerHTML += "you're the bottoms of the week..."
	}

	//do the same, but for the bottom queens:
	if (bottomQueens.length == 4) {
		for (let i = 0; i < topQueens.length; i++)
			bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
		bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
		bottomQueens[0].addToTrackRecord("LOW");
		bottomQueens[1].addToTrackRecord("LOW");

		screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
		bottomQueens[0].unfavoritism += 3;
		bottomQueens[1].unfavoritism += 3;

		bottomQueens.splice(0, 2);
	}
	else if (bottomQueens.length == 3) {
		for (let i = 0; i < topQueens.length; i++)
			bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
		bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
		bottomQueens[0].addToTrackRecord("LOW");

		screen.createBold(bottomQueens[0].getName() + "... you are safe.");
		bottomQueens[0].unfavoritism += 3;

		bottomQueens.splice(0, 1);
	}

	screen.createBold("", "btm2");
	let btm2 = document.querySelector("b#btm2");

	for (let i = 0; i < bottomQueens.length; i++) {
		btm2!.innerHTML += bottomQueens[i].getName() + ", ";
	}

	btm2!.innerHTML += "I'm sorry my dears but you are up for elimination.";

	screen.createButton("Proceed", "lipSync()")
}

function lipSync() {

	for (let i = 0; i < bottomQueens.length; i++) {
		bottomQueens[i].getLipsync();
	}
	bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));

	let screen = new Scene();
	screen.clean();
	screen.createHeader("It's time...");
	screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
	screen.createHorizontalLine();

	screen.createBold("I've made my decision.");

	let score1 = bottomQueens[0].lipsyncScore;
	let score2 = bottomQueens[1].lipsyncScore;

	if (score1 > 7 && score2 > 7 && randomNumber(0, 5) == 5 && !doubleShantay && currentCast.length < 8){
		screen.createBold("Condragulations, shantay you both stay!!");
		bottomQueens[0].addToTrackRecord("BTM2");
		bottomQueens[0].unfavoritism += 8;

		bottomQueens[1].addToTrackRecord("BTM2");
		bottomQueens[1].unfavoritism += 8;

		doubleShantay = true;
	} else if (score1 < 3 && score2 < 3 && randomNumber(0, 20) == 20 && !doubleSashay && currentCast.length > 4) {
		screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
		doubleSashay = true;

		bottomQueens[0].addToTrackRecord("ELIM");
		eliminatedCast.unshift(bottomQueens[0]);
		currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);

		bottomQueens[1].addToTrackRecord("ELIM");
		eliminatedCast.unshift(bottomQueens[1]);
		currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
	} else {
		screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
		bottomQueens[0].addToTrackRecord("BTM2");
		bottomQueens[0].unfavoritism += 7;

		screen.createBold(bottomQueens[1].getName() + ", sashay away...");
		bottomQueens[1].addToTrackRecord("ELIM");
		eliminatedCast.unshift(bottomQueens[1]);
		currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
	}

	screen.createButton("Proceed", "newEpisode()");
}