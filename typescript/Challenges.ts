//Challenge base:
interface Challenge {
    generateDescription(): void;
    rankPerformances(): void;
}

//mini-challenge stuff:
class MiniChallenge implements Challenge {
    generateDescription(): void {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "wigs with ",
            "a quiz about ",
            "nails with ",
            "a competition about ",
            "a song about ",
            "make-up tutorials with ",
            "make a quick look about ",
            "a photoshoot about "
        }
        enum desc2 {
            "the pitcrew.",
            "a partner.",
            "noodles.",
            "hip pads.",
            "balls.",
            "past Drag Race contestants"
        }
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && all_stars) {
            description!.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
        } else if (totalCastSize != 5 && currentCast.length == 5) {
            description!.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        } else {
            description!.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 5)];
        }
    }

    rankPerformances(): void {
        let result = document.querySelector("b#mcWinner");
        let winner = currentCast[randomNumber(0, currentCast.length - 1)].getName();

        if (totalCastSize >= 10 && currentCast.length == 7) {
            result!.innerHTML = winner + " won the reading challenge!";
        } else if (totalCastSize >= 10 && currentCast.length == 5) {
            result!.innerHTML = winner + " won the puppet challenge!";
        } else {
            result!.innerHTML = winner + " won the mini-challenge!";
        }
    } 
}

//challenge modifiers:
var actingChallengeCounter: number = 0;
var comedyChallengeCounter: number = 0;
var danceChallengeCounter: number = 0;
var designChallengeCounter: number = 0;
var improvChallengeCounter: number = 0;

var isDesignChallenge: boolean = false;

let rusicalCounter = false;
let ballCounter = false;

let lastChallenge: string = '';

function miniChallenge(): void {
    let miniChallengeScreen = new Scene();

    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createParagraph("", "Description");
    miniChallengeScreen.createHorizontalLine();
    miniChallengeScreen.createBold("", "mcWinner");

    let challenge = new MiniChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    //deal with maxi chalenges:

    let challenges: Array<string> = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()"]


    //remove from possible challenges list:
    if (actingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("actingChallenge()"), 1);
    if (comedyChallengeCounter == 3)
        challenges.splice(challenges.indexOf("comedyChallenge()"), 1);
    if (danceChallengeCounter == 3)
        challenges.splice(challenges.indexOf("danceChallenge()"), 1);
    if (designChallengeCounter == 2)
        challenges.splice(challenges.indexOf("designChallenge()"), 1);
    if (improvChallengeCounter == 3)
        challenges.splice(challenges.indexOf("improvChallenge()"), 1);

    createChallenge(challenges, miniChallengeScreen);
}

//GENERAL CHALLENGES:
class ActingChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "theather piece about ",
            "parody film about ",
            "commercial about ",
            "60's inspired film about",
            "80's inspired film about"
        }
        enum desc2 {
            "crime.",
            "phone apps.",
            "social media.",
            "cancel culture.",
            "gayness.",
            "celebrities.",
            "the future."
        }

        description!.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 4)] + desc2[randomNumber(0, 6)]; 
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    }
}

function actingChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new ActingChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    actingChallengeCounter++;
    isDesignChallenge = false;
}

class ComedyChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "a comedy routine about ",
            "a roast about ",
            "a parody commercial about ",
            "a parody trailer about "
        }
        enum desc2 {
            "love.",
            "sex.",
            "crime.",
            "school.",
            "a popular TV series.",
            "Drag Race.",
            "Past Drag Race Contestants.",
            "comedy."
        }

        description!.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 3)] + desc2[randomNumber(0, 7)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();

        sortPerformances(currentCast);
    }
}

function comedyChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    comedyChallengeCounter++;
    isDesignChallenge = false;
}

class DanceChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "the history of disco.",
            "RuPaul's biography.",
            "rival dance clubs.",
            "Drag Race."
        }

        description!.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();

        sortPerformances(currentCast);
    }
}

function danceChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new DanceChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    danceChallengeCounter++;
    isDesignChallenge = false;
}

class DesignChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "trash.",
            "random items.",
            "dollar store items.",
            "a specific color scheme.",
            "items inspired by past Drag Race contestants.",
            "bags.",
            "wigs.",
            "winter items.",
            "summer items."
        }
        if (currentCast.length == 6)
            description!.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!"
        else
            description!.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();

        sortPerformances(currentCast);
    }
}

function designChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    designChallengeCounter++;
    isDesignChallenge = true;
}

class ImprovChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "political debate.",
            "celebrity interview.",
            "modern morning TV show.",
            "late-night TV show.",
            "new Bossy Rossy episode.",
            "suggestive kids TV show."
        }

        description!.innerHTML = "The queens will improvise in a " + desc1[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();

        sortPerformances(currentCast);
    }
}

function improvChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    improvChallengeCounter++;
    isDesignChallenge = false;
}

//TODO: team challenges here

//SPECIAL CHALLENGES:
class SnatchGame implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        description!.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
    }
}

function snatchGame(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
}

class Rusical implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc {
            "social media.",
            "a pop celebrity.",
            "a political figure.",
            "past Drag Race contestans.",
            "cancel culture.",
            "RuPaul's music carreer."
        }

        description!.innerHTML = "Today's challenge is... THE RUSICAL!! The queens will do a musical about " + desc[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
    }
}

function rusical(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
}

class Ball implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "Executive realness, ",
            "Party night, ",
            "Summer, ",
            "Elegant, ",
            "Sweet 16, ",
            "Black and white, ",
            "Winter, "
        }
        enum desc2 {
            "Antique, ",
            "Rainbown, ",
            "Rich, ",
            "Space, ",
            "Wild, ",
            "Water, "
        }
        enum desc3 {
            "Ice queen.",
            "Futuristic.",
            "Fire.",
            "Princess.",
            "Jewels.",
            "Flowers"
        }

        description!.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 5)] + desc3[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
    }
}

function ball(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
    ballCounter = true;
}

class Rumix implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "one of RuPaul's singles!",
            "an original song!"
        }

        description!.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a coreography for " + desc1[randomNumber(0, 1)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
    }
}

function rumix(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
}

class TalentShow implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        description!.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
    }
}

function talentshow(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new TalentShow();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
}

//performance:
function queensPerformances(): void {
    //remove description button:
    let button1 = document.querySelector("button#button1");
    button1!.remove();

    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");

    performanceScreen.createBold("", "excellent");
    performanceScreen.createBold("", "good");
    performanceScreen.createBold("", "ok");
    performanceScreen.createBold("", "bad");
    performanceScreen.createBold("", "horrible");

    let excellent = document.querySelector("b#excellent");
    let good = document.querySelector("b#good");
    let ok = document.querySelector("b#ok");
    let bad = document.querySelector("b#bad");
    let horrible = document.querySelector("b#horrible");

    for (let i = 0; i < currentCast.length; i++) {
        if (currentCast[i].performanceScore < 6)
            excellent!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 6 && currentCast[i].performanceScore < 16)
            good!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 16 && currentCast[i].performanceScore < 26)
            ok!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 26 && currentCast[i].performanceScore < 31)
            bad!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 31 && currentCast[i].performanceScore < 36)
            horrible!.innerHTML += currentCast[i].getName() + ", ";
    }
    
    if (excellent!.innerHTML != '')
        excellent!.innerHTML += "slayed the challenge!";
    if (good!.innerHTML != '')
        good!.innerHTML += "did great!";
    if (ok!.innerHTML != '')
        ok!.innerHTML += "did ok.";
    if (bad!.innerHTML != '')
        bad!.innerHTML += "did bad...";
    if (horrible!.innerHTML != '')
        horrible!.innerHTML += "flopped the challenge...";

    if (isDesignChallenge)
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}

//runway:

function runway(): void {
    let runwayScreen = new Scene();
    let button2 = document.querySelector("button#button2");
    button2!.remove();
    runwayScreen.createHeader("Runway!");

    enum desc {
        "feathers.",
        "fascinator.",
        "pink.",
        "purple.",
        "caftan.",
        "trains.",
        "yellow.",
        "white.",
        "black.",
        "ugly dress.",
        "naughty.",
        "crazy sexy cool.",
        "country.",
        "phoenix.",
        "silver.",
        "2 in 1.",
        "surprise!",
        "gold.",
        "blue.",
        "fish",
        "butch.",
        "amazon"
    }

    runwayScreen.createParagraph("The queens will bring it to the runway!");

    if (currentCast.length > 4)
        runwayScreen.createParagraph("The theme is: " + desc[randomNumber(0, 21)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && all_stars)
        runwayScreen.createParagraph("The theme is... best drag!");

    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getRunway();

        if (currentCast[i].runwayScore < 6) {
            runwayScreen.createParagraph(currentCast[i].getName() + " had an amazing runway!");
            currentCast[i].runwayScore = 10;
        }
		else if (currentCast[i].runwayScore < 16 && currentCast[i].runwayScore >= 6) {
		    runwayScreen.createParagraph(currentCast[i].getName() + " had a great runway!");
            currentCast[i].runwayScore = 5;
        }
		else if (currentCast[i].runwayScore < 26 && currentCast[i].runwayScore >= 16) {
			runwayScreen.createParagraph(currentCast[i].getName() + " had an ok runway.");
            currentCast[i].runwayScore = 0;
        }
        else {
            runwayScreen.createParagraph(currentCast[i].getName() + " had a bad runway...");
            currentCast[i].runwayScore = -5;
        }
    }
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || lipsync_assassin))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3 || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && all_stars)
        runwayScreen.createButton("Proceed", "finaleASJudging()");
}

//helper functions

function createChallenge(challenges: Array<string>, miniChallengeScreen: Scene): void {
    //check conditions for special challenges:

    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 || currentCast.length == totalCastSize && top4)
        miniChallengeScreen.createButton("Proceed", "designChallenge()")
    //talent show for all stars
    else if (currentCast.length == totalCastSize && (all_stars || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game
    else if (totalCastSize >= 10 && currentCast.length == 9)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc seasons
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) == 20 && !rusicalCounter)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && randomNumber(0, 15) == 15)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix
    else if (currentCast.length == 5 && top4)
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //ball for top3 seasons
    else if (currentCast.length == 4 && top3)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //if no conditions apply, create random challenge
    else {
        let currentChallenge: string = challenges[randomNumber(0, challenges.length - 1)];

        if (currentChallenge === lastChallenge && currentCast.length != totalCastSize) {
            currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        } else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}