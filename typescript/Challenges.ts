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
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description!.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
        } else if (totalCastSize != 5 && currentCast.length == 5) {
            description!.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        } else {
            description!.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 5)];
        }
    }

    rankPerformances(): void {
        let screen: Scene = new Scene();
        let winner = currentCast[randomNumber(0, currentCast.length - 1)];

        if (totalCastSize >= 10 && currentCast.length == 7) {
            screen.createImage(winner.image, "royalblue");
            screen.createBold(`${winner.getName()} won the reading challenge!`);
        } else if (totalCastSize >= 10 && currentCast.length == 5) {
            screen.createImage(winner.image, "royalblue");
            screen.createBold(`${winner.getName()} won the puppet challenge!`);
        } else {
            screen.createImage(winner.image, "royalblue");
            screen.createBold(`${winner.getName()} won the mini-challenge!`);
        }
    } 
}

//challenge modifiers:
let actingChallengeCounter: number = 0;
let comedyChallengeCounter: number = 0;
let danceChallengeCounter: number = 0;
let designChallengeCounter: number = 0;
let improvChallengeCounter: number = 0;

var isDesignChallenge: boolean = false;

let rusicalCounter = false;
let ballCounter = false;
let makeoverCounter = false;
let snatchCounter = false;

let lastChallenge: string = '';

function miniChallenge(): void {
    let miniChallengeScreen = new Scene();

    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createParagraph("", "Description");
    miniChallengeScreen.createHorizontalLine();

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

    queensPerformances();
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
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

    queensPerformances();
    comedyChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Comedy");
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

    queensPerformances();
    danceChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Dance");
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
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
            description!.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!"
        }
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

    isDesignChallenge = true;
    queensPerformances();
    designChallengeCounter++;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else
        episodeChallenges.push("Design");
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

    queensPerformances();
    improvChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Improv");
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

    queensPerformances();
    isDesignChallenge = false;
    snatchCounter = true;
    episodeChallenges.push("Snatch");
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

    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rusical");
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

    queensPerformances();
    isDesignChallenge = true;
    ballCounter = true;
    episodeChallenges.push("Ball");
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

    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
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
    
    isDesignChallenge = true;
    queensPerformances();
    episodeChallenges.push("Talent");
}

//performance:
function queensPerformances(): void {
    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");

    let slay: Array<Queen> = currentCast.filter(function (queen) {return queen.performanceScore < 6});
    let great: Array<Queen> = currentCast.filter(function (queen) {return queen.performanceScore >= 6 && queen.performanceScore < 16});
    let good: Array<Queen> = currentCast.filter(function (queen) {return queen.performanceScore >= 16 && queen.performanceScore < 26});
    let bad: Array<Queen> = currentCast.filter(function (queen) {return queen.performanceScore >= 26 && queen.performanceScore < 31});
    let flop: Array<Queen> = currentCast.filter(function (queen) {return queen.performanceScore >= 31 && queen.performanceScore < 36});

    createPerformanceDesc(slay, great, good, bad, flop);

    if (isDesignChallenge == true || episodeChallenges[episodeChallenges.length - 1] == "Design")
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}

//runway:

function runway(): void {
    let runwayScreen = new Scene();
    runwayScreen.createHorizontalLine();
    let button2 = document.querySelector("button#button2");
    button2!.remove();
    runwayScreen.createBigText("Runway!");

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
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && all_stars || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The theme is... best drag!");

    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].getRunway();

    let slay: Array<Queen> = currentCast.filter(function (queen) {return queen.runwayScore < 6});
    let great: Array<Queen> = currentCast.filter(function (queen) {return queen.runwayScore >= 6 && queen.runwayScore < 16});
    let good: Array<Queen> = currentCast.filter(function (queen) {return queen.runwayScore >= 16 && queen.runwayScore < 26});
    let bad: Array<Queen> = currentCast.filter(function (queen) {return queen.runwayScore >= 26});

    createRunwayDesc(slay, great, good, bad);

    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || lipsync_assassin || team))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && team)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3 || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && all_stars)
        runwayScreen.createButton("Proceed", "finaleASJudging()");
    else if (currentCast.length == 2 && team)
        runwayScreen.createButton("Proceed", "finaleTeamJudging()");
}

//helper functions

////create next challenge
function createChallenge(challenges: Array<string>, miniChallengeScreen: Scene): void {
    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 && s6Premiere == false || currentCast.length == totalCastSize && top4 && s6Premiere == false || currentCast.length == totalCastSize && team ||sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()")
    //rumix challenge for s6 or porkchop premiere
    else if (premiereCounter <= 2 && (s12Premiere || porkchopPremiere))
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //talent show for all stars
    else if (currentCast.length == totalCastSize && (all_stars || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game
    else if (totalCastSize >= 10 && currentCast.length == 9 && !team && snatchCounter == false || totalCastSize >= 6 && currentCast.length == 5 && team)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc seasons
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter || currentCast.length == 3 && team)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) == 20 && !rusicalCounter || currentCast.length > 5 && randomNumber(0, 20) == 20 && team && rusicalCounter == false)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && (top3 || top4) && makeoverCounter == false || currentCast.length == 6 && randomNumber(0, 15) == 15 && (all_stars || lipsync_assassin) && makeoverCounter == false)
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

////create performance descriptions
function createPerformanceDesc(slay: Queen[], great: Queen[], good: Queen[], bad: Queen[], flop: Queen[]): void {
    let screen: Scene = new Scene();

    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) 
            screen.createImage(slay[i].image, "darkblue");
        
        screen.createBold("", "slay");

        let slayText: HTMLElement = <HTMLElement>document.getElementById("slay");

        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }

    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        
        screen.createBold("", "great");

        let greatText: HTMLElement = <HTMLElement>document.getElementById("great");

        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }

    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        
        screen.createBold("", "good");

        let goodText: HTMLElement = <HTMLElement>document.getElementById("good");

        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }

    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        
        screen.createBold("", "bad");

        let badText: HTMLElement = <HTMLElement>document.getElementById("bad");

        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }

    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        
        screen.createBold("", "flop");

        let flopText: HTMLElement = <HTMLElement>document.getElementById("flop");

        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
}

function createRunwayDesc(slay: Queen[], great: Queen[], good: Queen[], bad: Queen[]): void {
    let screen: Scene = new Scene();

    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) {
            screen.createImage(slay[i].image, "darkblue");
            slay[i].runwayScore = 10;
        }
        
        screen.createBold("", "slayR");

        let slayText: HTMLElement = <HTMLElement>document.getElementById("slayR");

        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the runway!";
    }

    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++) {
            screen.createImage(great[i].image, "royalblue");
            great[i].runwayScore = 5;
        }
        
        screen.createBold("", "greatR");

        let greatText: HTMLElement = <HTMLElement>document.getElementById("greatR");

        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great runway!";
    }

    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++) {
            screen.createImage(good[i].image);
            good[i].runwayScore = 0;
        }
        
        screen.createBold("", "goodR");

        let goodText: HTMLElement = <HTMLElement>document.getElementById("goodR");

        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good runway.";
    }

    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++) {
            screen.createImage(bad[i].image, "pink");
            bad[i].runwayScore = -3;
        }
        
        screen.createBold("", "badR");

        let badText: HTMLElement = <HTMLElement>document.getElementById("badR");

        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad runway...";
    }
}