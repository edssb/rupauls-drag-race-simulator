"use strict";
//mini-challenge stuff:
var MiniChallenge = /** @class */ (function () {
    function MiniChallenge() {
    }
    MiniChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["wigs with "] = 0] = "wigs with ";
            desc1[desc1["a quiz about "] = 1] = "a quiz about ";
            desc1[desc1["nails with "] = 2] = "nails with ";
            desc1[desc1["a competition about "] = 3] = "a competition about ";
            desc1[desc1["a song about "] = 4] = "a song about ";
            desc1[desc1["make-up tutorials with "] = 5] = "make-up tutorials with ";
            desc1[desc1["make a quick look about "] = 6] = "make a quick look about ";
            desc1[desc1["a photoshoot about "] = 7] = "a photoshoot about ";
        })(desc1 || (desc1 = {}));
        var desc2;
        (function (desc2) {
            desc2[desc2["the pitcrew."] = 0] = "the pitcrew.";
            desc2[desc2["a partner."] = 1] = "a partner.";
            desc2[desc2["noodles."] = 2] = "noodles.";
            desc2[desc2["hip pads."] = 3] = "hip pads.";
            desc2[desc2["balls."] = 4] = "balls.";
            desc2[desc2["past Drag Race contestants"] = 5] = "past Drag Race contestants";
        })(desc2 || (desc2 = {}));
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            description.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        }
        else {
            description.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 5)];
        }
    };
    MiniChallenge.prototype.rankPerformances = function () {
        var result = document.querySelector("b#mcWinner");
        var winner = currentCast[randomNumber(0, currentCast.length - 1)].getName();
        if (totalCastSize >= 10 && currentCast.length == 7) {
            result.innerHTML = winner + " won the reading challenge!";
        }
        else if (totalCastSize >= 10 && currentCast.length == 5) {
            result.innerHTML = winner + " won the puppet challenge!";
        }
        else {
            result.innerHTML = winner + " won the mini-challenge!";
        }
    };
    return MiniChallenge;
}());
//challenge modifiers:
var actingChallengeCounter = 0;
var comedyChallengeCounter = 0;
var danceChallengeCounter = 0;
var designChallengeCounter = 0;
var improvChallengeCounter = 0;
var isDesignChallenge = false;
var rusicalCounter = false;
var ballCounter = false;
var makeoverCounter = false;
var snatchCounter = false;
var lastChallenge = '';
function miniChallenge() {
    var miniChallengeScreen = new Scene();
    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createParagraph("", "Description");
    miniChallengeScreen.createHorizontalLine();
    miniChallengeScreen.createBold("", "mcWinner");
    var challenge = new MiniChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    //deal with maxi chalenges:
    var challenges = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()"];
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
var ActingChallenge = /** @class */ (function () {
    function ActingChallenge() {
    }
    ActingChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["theather piece about "] = 0] = "theather piece about ";
            desc1[desc1["parody film about "] = 1] = "parody film about ";
            desc1[desc1["commercial about "] = 2] = "commercial about ";
            desc1[desc1["60's inspired film about"] = 3] = "60's inspired film about";
            desc1[desc1["80's inspired film about"] = 4] = "80's inspired film about";
        })(desc1 || (desc1 = {}));
        var desc2;
        (function (desc2) {
            desc2[desc2["crime."] = 0] = "crime.";
            desc2[desc2["phone apps."] = 1] = "phone apps.";
            desc2[desc2["social media."] = 2] = "social media.";
            desc2[desc2["cancel culture."] = 3] = "cancel culture.";
            desc2[desc2["gayness."] = 4] = "gayness.";
            desc2[desc2["celebrities."] = 5] = "celebrities.";
            desc2[desc2["the future."] = 6] = "the future.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 4)] + desc2[randomNumber(0, 6)];
    };
    ActingChallenge.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    };
    return ActingChallenge;
}());
function actingChallenge() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new ActingChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
}
var ComedyChallenge = /** @class */ (function () {
    function ComedyChallenge() {
    }
    ComedyChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["a comedy routine about "] = 0] = "a comedy routine about ";
            desc1[desc1["a roast about "] = 1] = "a roast about ";
            desc1[desc1["a parody commercial about "] = 2] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 3] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        var desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 3)] + desc2[randomNumber(0, 7)];
    };
    ComedyChallenge.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();
        sortPerformances(currentCast);
    };
    return ComedyChallenge;
}());
function comedyChallenge() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    comedyChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Comedy");
}
var DanceChallenge = /** @class */ (function () {
    function DanceChallenge() {
    }
    DanceChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["the history of disco."] = 0] = "the history of disco.";
            desc1[desc1["RuPaul's biography."] = 1] = "RuPaul's biography.";
            desc1[desc1["rival dance clubs."] = 2] = "rival dance clubs.";
            desc1[desc1["Drag Race."] = 3] = "Drag Race.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
    };
    DanceChallenge.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();
        sortPerformances(currentCast);
    };
    return DanceChallenge;
}());
function danceChallenge() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new DanceChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    danceChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Dance");
}
var DesignChallenge = /** @class */ (function () {
    function DesignChallenge() {
    }
    DesignChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["trash."] = 0] = "trash.";
            desc1[desc1["random items."] = 1] = "random items.";
            desc1[desc1["dollar store items."] = 2] = "dollar store items.";
            desc1[desc1["a specific color scheme."] = 3] = "a specific color scheme.";
            desc1[desc1["items inspired by past Drag Race contestants."] = 4] = "items inspired by past Drag Race contestants.";
            desc1[desc1["bags."] = 5] = "bags.";
            desc1[desc1["wigs."] = 6] = "wigs.";
            desc1[desc1["winter items."] = 7] = "winter items.";
            desc1[desc1["summer items."] = 8] = "summer items.";
        })(desc1 || (desc1 = {}));
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
            description.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!";
        }
        else
            description.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    };
    DesignChallenge.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();
        sortPerformances(currentCast);
    };
    return DesignChallenge;
}());
function designChallenge() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    designChallengeCounter++;
    isDesignChallenge = true;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else
        episodeChallenges.push("Design");
}
var ImprovChallenge = /** @class */ (function () {
    function ImprovChallenge() {
    }
    ImprovChallenge.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate.";
            desc1[desc1["celebrity interview."] = 1] = "celebrity interview.";
            desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show.";
            desc1[desc1["late-night TV show."] = 3] = "late-night TV show.";
            desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode.";
            desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will improvise in a " + desc1[randomNumber(0, 5)];
    };
    ImprovChallenge.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    };
    return ImprovChallenge;
}());
function improvChallenge() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    improvChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Improv");
}
//TODO: team challenges here
//SPECIAL CHALLENGES:
var SnatchGame = /** @class */ (function () {
    function SnatchGame() {
    }
    SnatchGame.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        description.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
    };
    SnatchGame.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
    };
    return SnatchGame;
}());
function snatchGame() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    snatchCounter = true;
    episodeChallenges.push("Snatch");
}
var Rusical = /** @class */ (function () {
    function Rusical() {
    }
    Rusical.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc;
        (function (desc) {
            desc[desc["social media."] = 0] = "social media.";
            desc[desc["a pop celebrity."] = 1] = "a pop celebrity.";
            desc[desc["a political figure."] = 2] = "a political figure.";
            desc[desc["past Drag Race contestans."] = 3] = "past Drag Race contestans.";
            desc[desc["cancel culture."] = 4] = "cancel culture.";
            desc[desc["RuPaul's music carreer."] = 5] = "RuPaul's music carreer.";
        })(desc || (desc = {}));
        description.innerHTML = "Today's challenge is... THE RUSICAL!! The queens will do a musical about " + desc[randomNumber(0, 5)];
    };
    Rusical.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
    };
    return Rusical;
}());
function rusical() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    episodeChallenges.push("Rusical");
}
var Ball = /** @class */ (function () {
    function Ball() {
    }
    Ball.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["Executive realness, "] = 0] = "Executive realness, ";
            desc1[desc1["Party night, "] = 1] = "Party night, ";
            desc1[desc1["Summer, "] = 2] = "Summer, ";
            desc1[desc1["Elegant, "] = 3] = "Elegant, ";
            desc1[desc1["Sweet 16, "] = 4] = "Sweet 16, ";
            desc1[desc1["Black and white, "] = 5] = "Black and white, ";
            desc1[desc1["Winter, "] = 6] = "Winter, ";
        })(desc1 || (desc1 = {}));
        var desc2;
        (function (desc2) {
            desc2[desc2["Antique, "] = 0] = "Antique, ";
            desc2[desc2["Rainbown, "] = 1] = "Rainbown, ";
            desc2[desc2["Rich, "] = 2] = "Rich, ";
            desc2[desc2["Space, "] = 3] = "Space, ";
            desc2[desc2["Wild, "] = 4] = "Wild, ";
            desc2[desc2["Water, "] = 5] = "Water, ";
        })(desc2 || (desc2 = {}));
        var desc3;
        (function (desc3) {
            desc3[desc3["Ice queen."] = 0] = "Ice queen.";
            desc3[desc3["Futuristic."] = 1] = "Futuristic.";
            desc3[desc3["Fire."] = 2] = "Fire.";
            desc3[desc3["Princess."] = 3] = "Princess.";
            desc3[desc3["Jewels."] = 4] = "Jewels.";
            desc3[desc3["Flowers"] = 5] = "Flowers";
        })(desc3 || (desc3 = {}));
        description.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 5)] + desc3[randomNumber(0, 5)];
    };
    Ball.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
    };
    return Ball;
}());
function ball() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
    ballCounter = true;
    episodeChallenges.push("Ball");
}
var Rumix = /** @class */ (function () {
    function Rumix() {
    }
    Rumix.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        var desc1;
        (function (desc1) {
            desc1[desc1["one of RuPaul's singles!"] = 0] = "one of RuPaul's singles!";
            desc1[desc1["an original song!"] = 1] = "an original song!";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a coreography for " + desc1[randomNumber(0, 1)];
    };
    Rumix.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
    };
    return Rumix;
}());
function rumix() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
}
var TalentShow = /** @class */ (function () {
    function TalentShow() {
    }
    TalentShow.prototype.generateDescription = function () {
        var description = document.querySelector("p#Description");
        description.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    };
    TalentShow.prototype.rankPerformances = function () {
        for (var i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
    };
    return TalentShow;
}());
function talentshow() {
    var challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    var challenge = new TalentShow();
    challenge.generateDescription();
    challenge.rankPerformances();
    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
    episodeChallenges.push("Talent");
}
//performance:
function queensPerformances() {
    //remove description button:
    var button1 = document.querySelector("button#button1");
    button1.remove();
    var performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    performanceScreen.createBold("", "excellent");
    performanceScreen.createBold("", "good");
    performanceScreen.createBold("", "ok");
    performanceScreen.createBold("", "bad");
    performanceScreen.createBold("", "horrible");
    var excellent = document.querySelector("b#excellent");
    var good = document.querySelector("b#good");
    var ok = document.querySelector("b#ok");
    var bad = document.querySelector("b#bad");
    var horrible = document.querySelector("b#horrible");
    for (var i = 0; i < currentCast.length; i++) {
        if (currentCast[i].performanceScore < 6)
            excellent.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 6 && currentCast[i].performanceScore < 16)
            good.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 16 && currentCast[i].performanceScore < 26)
            ok.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 26 && currentCast[i].performanceScore < 31)
            bad.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 31 && currentCast[i].performanceScore < 36)
            horrible.innerHTML += currentCast[i].getName() + ", ";
    }
    if (excellent.innerHTML != '')
        excellent.innerHTML += "slayed the challenge!";
    if (good.innerHTML != '')
        good.innerHTML += "did great!";
    if (ok.innerHTML != '')
        ok.innerHTML += "did ok.";
    if (bad.innerHTML != '')
        bad.innerHTML += "did bad...";
    if (horrible.innerHTML != '')
        horrible.innerHTML += "flopped the challenge...";
    if (isDesignChallenge)
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}
//runway:
function runway() {
    var runwayScreen = new Scene();
    var button2 = document.querySelector("button#button2");
    button2.remove();
    runwayScreen.createHeader("Runway!");
    var desc;
    (function (desc) {
        desc[desc["feathers."] = 0] = "feathers.";
        desc[desc["fascinator."] = 1] = "fascinator.";
        desc[desc["pink."] = 2] = "pink.";
        desc[desc["purple."] = 3] = "purple.";
        desc[desc["caftan."] = 4] = "caftan.";
        desc[desc["trains."] = 5] = "trains.";
        desc[desc["yellow."] = 6] = "yellow.";
        desc[desc["white."] = 7] = "white.";
        desc[desc["black."] = 8] = "black.";
        desc[desc["ugly dress."] = 9] = "ugly dress.";
        desc[desc["naughty."] = 10] = "naughty.";
        desc[desc["crazy sexy cool."] = 11] = "crazy sexy cool.";
        desc[desc["country."] = 12] = "country.";
        desc[desc["phoenix."] = 13] = "phoenix.";
        desc[desc["silver."] = 14] = "silver.";
        desc[desc["2 in 1."] = 15] = "2 in 1.";
        desc[desc["surprise!"] = 16] = "surprise!";
        desc[desc["gold."] = 17] = "gold.";
        desc[desc["blue."] = 18] = "blue.";
        desc[desc["fish"] = 19] = "fish";
        desc[desc["butch."] = 20] = "butch.";
        desc[desc["amazon"] = 21] = "amazon";
    })(desc || (desc = {}));
    runwayScreen.createParagraph("The queens will bring it to the runway!");
    if (currentCast.length > 4)
        runwayScreen.createParagraph("The theme is: " + desc[randomNumber(0, 21)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && all_stars || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The theme is... best drag!");
    for (var i = 0; i < currentCast.length; i++) {
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
            currentCast[i].runwayScore = -3;
        }
    }
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
function createChallenge(challenges, miniChallengeScreen) {
    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 && s6Premiere == false || currentCast.length == totalCastSize && top4 && s6Premiere == false || currentCast.length == totalCastSize && team || sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
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
        var currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
        if (currentChallenge === lastChallenge && currentCast.length != totalCastSize) {
            currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
        else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}
var customCast = [];
function addQueen() {
    var name = document.getElementById("queenName").value;
    var acting = document.getElementById("actingStat").valueAsNumber;
    var comedy = document.getElementById("comedyStat").valueAsNumber;
    var dance = document.getElementById("danceStat").valueAsNumber;
    var design = document.getElementById("designStat").valueAsNumber;
    var improv = document.getElementById("improvStat").valueAsNumber;
    var runway = document.getElementById("runwayStat").valueAsNumber;
    var lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    for (var i = 0; i < customCast.length; i++) {
        if (name == customCast[i].getName()) {
            window.alert("Don't use queens with the same name!");
            return;
        }
    }
    customCast.push(new Queen(name, acting, comedy, dance, design, improv, runway, lipsync));
    var list = document.getElementById("cast");
    var queen = document.createElement("option");
    queen.text = name;
    list.appendChild(queen);
}
function removeQueen() {
    var list = document.getElementById("cast");
    var queen = list.options[list.selectedIndex].value;
    for (var i = 0; i < customCast.length; i++) {
        if (queen == customCast[i].getName())
            customCast.splice(customCast.indexOf(customCast[i]), 1);
    }
    list.options[list.selectedIndex].remove();
}
function customStartSimulation() {
    if (customCast.length == 0) {
        window.alert("Your cast is empty!");
        return;
    }
    currentCast = customCast;
    totalCastSize = currentCast.length;
    var select = document.getElementById("format");
    var select2 = document.getElementById("premiere-format");
    if (select.options[select.selectedIndex].value == "top3")
        top3 = true;
    else if (select.options[select.selectedIndex].value == "top4")
        top4 = true;
    else if (select.options[select.selectedIndex].value == "all-stars")
        all_stars = true;
    else if (select.options[select.selectedIndex].value == "team")
        team = true;
    else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 8; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
    }
    if (select2.options[select2.selectedIndex].value == "s6-premiere")
        s6Premiere = true;
    else if (select2.options[select2.selectedIndex].value == "s12-premiere")
        s12Premiere = true;
    else if (select2.options[select2.selectedIndex].value == "porkchop")
        porkchopPremiere = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (document.getElementById("disableReturn").checked == true)
        noReturn = true;
    if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars)
        window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
    else if ((s12Premiere || s6Premiere || porkchopPremiere) && currentCast.length < 10)
        window.alert("You need at least 10 queens for a double premiere!");
    else if (s12Premiere || s6Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
function preQueens() {
    var select = document.getElementById("preQueens");
    for (var i = 0; i < allQueens.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = allQueens[i].getName();
        select.appendChild(option);
    }
}
function addPreQueen() {
    var select = document.getElementById("preQueens");
    var value = select.options[select.selectedIndex].value;
    for (var i = 0; i < allQueens.length; i++) {
        if (value == allQueens[i].getName()) {
            customCast.push(allQueens[i]);
            var list = document.getElementById("cast");
            var queen = document.createElement("option");
            queen.text = allQueens[i].getName();
            list.appendChild(queen);
        }
    }
}
function randomizeStats() {
    var stats = document.getElementsByClassName("stats");
    for (var i = 0; i < stats.length; i++) {
        stats[i].value = randomNumber(0, 15).toString();
    }
}
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var premiereCounter = 0;
var firstCast = [];
var secondCast = [];
function doublePremiere() {
    if (premiereCounter == 0)
        if (s6Premiere || s12Premiere) {
            shuffle(currentCast);
            firstCast = currentCast.splice(0, Math.floor(currentCast.length / 2));
            secondCast = __spreadArray([], currentCast);
        }
    if (premiereCounter == 0) {
        currentCast = firstCast;
        for (var i = 0; i < secondCast.length; i++)
            secondCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 1) {
        currentCast = secondCast;
        for (var i = 0; i < firstCast.length; i++)
            firstCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 2) {
        currentCast = __spreadArray(__spreadArray([], firstCast), secondCast);
        premiereCounter++;
        newEpisode();
    }
}
function porkchopLipsyncs() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createParagraph("After the queens enter the workroom, it's time for them to lip-sync... for their lives!");
    for (var i = 0; i < Math.floor(totalCastSize / 2); i++) {
        screen.createHorizontalLine();
        var queen1 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen1), 1);
        var queen2 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen2), 1);
        if (currentCast.length == 1) {
            var queen3 = currentCast[randomNumber(0, currentCast.length - 1)];
            currentCast.splice(currentCast.indexOf(queen3), 1);
            screen.createBold(queen1.getName() + ", " + queen2.getName() + " and " + queen3.getName() + " will lipsync...");
            lsSong();
            var lipSync_1 = [queen1, queen2, queen3];
            for (var i_1 = 0; i_1 < lipSync_1.length; i_1++) {
                lipSync_1[i_1].getASLipsync();
            }
            lipSync_1.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createBold(queen1.getName() + ", shantay you stay!");
            screen.createBold(queen2.getName() + " and " + queen3.getName() + ", you're getting the porkchop...");
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            queen3.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2, queen3);
        }
        else {
            screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
            lsSong();
            var lipSync_2 = [queen1, queen2];
            for (var i_2 = 0; i_2 < lipSync_2.length; i_2++) {
                lipSync_2[i_2].getASLipsync();
            }
            lipSync_2.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createBold(queen1.getName() + ", shantay you stay!");
            screen.createBold(queen2.getName() + ", you're getting the porkchop...");
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2);
        }
    }
    episodeChallenges.push("Porkchop");
    screen.createButton("Proceed", "doublePremiere()");
}
function doublePremiereJudging() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the Top 2 of the week!");
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (var i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    screen.createBold(topQueens[0].getName() + ", you're a winner baby!");
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[0].favoritism += 2;
    screen.createButton("Proceed", "doublePremiere()");
}
var currentCast = [];
var eliminatedCast = [];
var safeQueens = [];
var topQueens = [];
var bottomQueens = [];
var top2 = [];
var doubleShantay = false;
var doubleSashay = false;
var episodeChallenges = [];
var returningQueen = false;
var noDouble = false;
var noReturn = false;
var s6Premiere = false;
var s12Premiere = false;
var porkchopPremiere = false;
var firstPremiere = false;
var secondPremiere = false;
//challenge seasons
var sweatshop = false;
var chaos = false;
function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    //queens remaining screen:
    var queensRemainingScreen = new Scene();
    queensRemainingScreen.clean();
    queensRemainingScreen.createHeader("Queens remaining...");
    for (var i = 0; i < currentCast.length; i++) {
        queensRemainingScreen.createBold(currentCast[i].getName());
    }
    //chaos season
    if (chaos == true) {
        for (var i = 0; i < currentCast.length; i++) {
            currentCast[i]._actingStat = randomNumber(0, 15);
            currentCast[i]._comedyStat = randomNumber(0, 15);
            currentCast[i]._danceStat = randomNumber(0, 15);
            currentCast[i]._designStat = randomNumber(0, 15);
            currentCast[i]._improvStat = randomNumber(0, 15);
            currentCast[i]._lipsyncStat = randomNumber(0, 15);
            currentCast[i]._runwayStat = randomNumber(0, 15);
        }
    }
    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && (top3 || lipsync_assassin || team))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && all_stars)
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");
    //add an empty placement on eliminated queen's track records
    for (var i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord('');
}
function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (var i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    if (top4) {
        currentCast.push(finalLS[0]);
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    currentCast.sort(function (a, b) { return a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()); });
    eliminatedCast = [];
    firstCast = [];
    secondCast = [];
    premiereCounter = 0;
    totalCastSize = currentCast.length;
    //clean track records
    for (var i = 0; i < currentCast.length; i++) {
        currentCast[i].trackRecord = [];
        currentCast[i].favoritism = 0;
        currentCast[i].unfavoritism = 0;
        currentCast[i].finaleScore = 0;
        currentCast[i].votes = 0;
    }
    //clean challenges
    episodeChallenges = [];
    actingChallengeCounter = 0;
    comedyChallengeCounter = 0;
    danceChallengeCounter = 0;
    designChallengeCounter = 0;
    improvChallengeCounter = 0;
    rusicalCounter = false;
    ballCounter = false;
    doubleShantay = false;
    doubleSashay = false;
    //refill lip-sync songs and lsa
    lsSongs = allLsSongs;
    allQueens = allQueensCopy;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
var firstLS = [];
var secondLS = [];
var finalLS = [];
function finaleLS() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
    screen.createHorizontalLine();
    for (var i = 0; i < 2; i++) {
        var q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        var q2 = currentCast[randomNumber(0, currentCast.length - 1)];
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
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The Lip-Syncs...");
    screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    lsSong();
    for (var i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    finalLS.push(firstLS[0]);
    firstLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(firstLS[1]);
    screen.createBold(firstLS[0].getName() + ", shantay you stay.");
    screen.createBold(firstLS[1].getName() + ", sashay away...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (var i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    finalLS.push(secondLS[0]);
    secondLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(secondLS[1]);
    screen.createBold(secondLS[0].getName() + ", shantay you stay.");
    screen.createBold(secondLS[1].getName() + ", sashay away...");
    screen.createButton("Proceed", "finalLipSync()");
}
function finalLipSync() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The end...");
    screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    for (var i = 0; i < finalLS.length; i++)
        finalLS[i].getFinale();
    finalLS.sort(function (a, b) { return b.finaleScore - a.finaleScore; });
    var winner = 0;
    screen.createBigText(finalLS[winner].getName() + "!!");
    screen.createBold("Now prance, my queen!");
    finalLS[winner].addToTrackRecord("WINNER");
    for (var i = 0; i < finalLS.length; i++) {
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
    for (var i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort(function (a, b) { return (b.finaleScore - a.finaleScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleTeam() {
    //sort queens by finale score:
    for (var i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort(function (a, b) { return (b.finaleScore - a.finaleScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleJudging() {
    var screen = new Scene();
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
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
    screen.createHorizontalLine();
    currentCast[1].QueenA.addToTrackRecord("ELIMINATED");
    currentCast[1].QueenB.addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[1].QueenA);
    eliminatedCast.unshift(currentCast[1].QueenB);
    currentCast.splice(1, 1);
    if (randomNumber(0, 100) <= 50) {
        currentCast.push(currentCast[0].QueenA);
        currentCast.push(currentCast[0].QueenB);
    }
    else {
        currentCast.push(currentCast[0].QueenB);
        currentCast.push(currentCast[0].QueenA);
    }
    currentCast.splice(0, 1);
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleFinale() {
    var screen = new Scene();
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
    for (var i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort(function (a, b) { return (b.finaleScore - a.finaleScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will create verses and coreography for a new original song!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleASJudging() {
    var screen = new Scene();
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
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    var main = document.querySelector("div#MainBlock");
    var trackRecords = document.createElement("table");
    if (totalCastSize >= 12 && totalCastSize < 15)
        trackRecords.setAttribute("style", "font-size: 85%;");
    if (totalCastSize >= 15)
        trackRecords.setAttribute("style", "font-size: 75%");
    var header = document.createElement("tr");
    trackRecords.appendChild(header);
    var th = document.createElement("th");
    th.innerHTML = "Queen";
    header.appendChild(th);
    for (var i = 0; i < episodeChallenges.length; i++) {
        var th_1 = document.createElement("th");
        th_1.innerHTML = episodeChallenges[i];
        header.appendChild(th_1);
    }
    var winner = document.createElement("tr");
    var name = document.createElement("td");
    name.setAttribute("style", "font-weight: bold;");
    var winnerQueen;
    if (!top4)
        winnerQueen = currentCast[0];
    else
        winnerQueen = finalLS[0];
    name.innerHTML = winnerQueen.getName();
    winner.appendChild(name);
    for (var i = 0; i < winnerQueen.trackRecord.length; i++) {
        var placement = document.createElement("td");
        placement.innerHTML = winnerQueen.trackRecord[i];
        if (placement.innerHTML == "WIN") {
            placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
        }
        else if (placement.innerHTML == "TOP2") {
            placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
        }
        else if (placement.innerHTML == "LOW") {
            placement.setAttribute("style", "background-color: pink;");
        }
        else if (placement.innerHTML == "HIGH") {
            placement.setAttribute("style", "background-color: lightblue;");
        }
        else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
            placement.setAttribute("style", "background-color: tomato;");
        }
        else if (placement.innerHTML == "ELIM") {
            placement.setAttribute("style", "font-weight: bold; background-color: red;");
        }
        else if (placement.innerHTML == "WINNER") {
            placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
        }
        else if (placement.innerHTML == "RUNNER-UP") {
            placement.setAttribute("style", "font-weight: bold; background-color: silver;");
        }
        else if (placement.innerHTML == "ELIMINATED") {
            placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
        }
        else if (placement.innerHTML == "") {
            placement.setAttribute("style", "background-color: gray");
        }
        else if (placement.innerHTML == "WIN ") {
            placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
        }
        else if (placement.innerHTML == "SAFE") {
            placement.setAttribute("style", "background-color: white;");
        }
        else if (placement.innerHTML == " WIN") {
            placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
        }
        else if (placement.innerHTML == "DISQ") {
            placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
        }
        else if (placement.innerHTML == "RTRN") {
            placement.setAttribute("style", "font-weight: bold; background-color: orange;");
        }
        else if (placement.innerHTML == " WIN ") {
            placement.setAttribute("style", "background-color: lightgreen;");
        }
        else if (placement.innerHTML == "LOSS") {
            placement.setAttribute("style", "background-color: orange;");
        }
        winner.appendChild(placement);
    }
    trackRecords.appendChild(winner);
    for (var i = 0; i < eliminatedCast.length; i++) {
        var contestant = document.createElement("tr");
        var name_1 = document.createElement("td");
        name_1.setAttribute("style", "font-weight: bold;");
        name_1.innerHTML = eliminatedCast[i].getName();
        contestant.appendChild(name_1);
        for (var k = 0; k < eliminatedCast[i].trackRecord.length; k++) {
            var placement = document.createElement("td");
            placement.innerHTML = eliminatedCast[i].trackRecord[k];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightgreen;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: orange;");
            }
            contestant.appendChild(placement);
        }
        trackRecords.appendChild(contestant);
    }
    main.appendChild(trackRecords);
    screen.createButton("Simulate again!", "reSimulate()");
    screen.createHorizontalLine();
    screen.createButton("Back to main page", "location.reload()");
}
var totalCastSize;
function randomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function sortPerformances(cast) {
    cast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
}
//generate spaces to insert cast:
function generateSpace() {
    var castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    var castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (var i = 0; i < castSize; i++) {
            var select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            for (var k = 0; k < allQueens.length; k++) {
                var option = document.createElement("option");
                option.innerHTML = allQueens[k].getName();
                select.add(option);
            }
            var br = document.createElement("br");
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    var button = document.createElement("button");
    button.setAttribute("onclick", "randomize()");
    button.innerHTML = "Randomize";
    castSelection.append(button);
}
var top3 = false;
var top4 = false;
var all_stars = false;
var lipsync_assassin = false;
var team = false;
function predefCast(cast, format, premiere) {
    if (premiere === void 0) { premiere = ''; }
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "all-stars")
        all_stars = true;
    else if (format == "team")
        team = true;
    else if (format == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
    }
    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (document.getElementById("disableReturn").checked == true)
        noReturn = true;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
var indexList = [];
//randomize cast selection
function randomize() {
    for (var i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        var select = document.getElementById(i.toString());
        var index = randomNumber(0, select.options.length - 1);
        while (indexList.indexOf(index) != -1) {
            index = randomNumber(0, select.options.length - 1);
        }
        select.options.selectedIndex = index;
    }
    indexList = [];
}
function startSimulation(challenge) {
    if (challenge === void 0) { challenge = ""; }
    //set challenge seasons
    if (challenge == "sweatshop")
        sweatshop = true;
    if (challenge == "chaos")
        chaos = true;
    //get selected names and compare them to the all queens list:
    for (var i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        var select = document.getElementById(i.toString());
        var value = select.options[select.selectedIndex].text;
        for (var k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName())
                currentCast.push(allQueens[k]);
        }
    }
    if (currentCast.length == 0)
        window.alert("Your cast is empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        var select = document.getElementById("format");
        var select2 = document.getElementById("premiere-format");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        else if (select.options[select.selectedIndex].value == "team")
            team = true;
        else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
            lipsync_assassin = true;
            allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 8; });
            allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
            allQueensCopy = __spreadArray([], allQueens);
        }
        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;
        if (document.getElementById("disableDouble").checked == true)
            noDouble = true;
        if (document.getElementById("disableReturn").checked == true)
            noReturn = true;
        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars) {
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            currentCast = [];
        }
        else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        }
        else if ((s6Premiere || s12Premiere || porkchopPremiere) && currentCast.length < 8) {
            window.alert("Double Premiere formats needs at least 10 queens!");
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            lipsync_assassin = false;
            all_stars = false;
            currentCast = [];
        }
        else if (s6Premiere || s12Premiere) {
            doublePremiere();
        }
        else if (porkchopPremiere) {
            porkchopLipsyncs();
        }
        else {
            newEpisode();
        }
    }
}
//see if there is two of the same queens:
function duplicateQueens(cast) {
    var valuesAlreadySeen = [];
    for (var i = 0; i < cast.length; i++) {
        var value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}
function shuffle(array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            array[randomIndex], array[currentIndex]
        ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
}
function judging() {
    if ((s12Premiere || porkchopPremiere) && premiereCounter <= 2) {
        //add 2 queens to the top and the rest is safe
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        for (var i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1)
                currentCast[i].addToTrackRecord("SAFE");
        }
        doublePremiereJudging();
    }
    else if (currentCast.length > 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 4 && team) {
        //add 2 teams to the top and 2 teams to the bottom
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 3 && team) {
        //add 1 team to the top and 2 teams to the bottom
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length > 13) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        for (var i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length > 6) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        for (var i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length <= 6 && lipsync_assassin) {
        //add 1 queen to the top and the rest to the btm
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        for (var i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1) {
                bottomQueens.push(currentCast[i]);
            }
        }
        topAndBtm();
    }
    else if (currentCast.length == 6) {
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        for (var i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16 && !all_stars)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
}
function judgingScreen() {
    var judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    if (team == true) {
        judgingScreen.createBold(topQueens[0].getName());
        judgingScreen.createBold(topQueens[1].getName());
        judgingScreen.createBold(bottomQueens[0].getName());
        judgingScreen.createBold(bottomQueens[1].getName());
        judgingScreen.createBold(bottomQueens[2].getName());
    }
    else
        for (var i = 0; i < topQueens.length; i++) {
            judgingScreen.createBold(topQueens[i].getName());
            judgingScreen.createBold(bottomQueens[i].getName());
        }
    judgingScreen.createBold("You are the tops and bottoms of the week.");
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    var safeQueens = document.querySelector("p#safeQueens");
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (var i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (team == false)
                currentCast[i].addToTrackRecord("SAFE");
            if (team == true) {
                currentCast[i].QueenA.addToTrackRecord("SAFE");
                currentCast[i].QueenB.addToTrackRecord("SAFE");
            }
        }
    safeQueens.innerHTML += "you are safe.";
    if (top3 || top4)
        judgingScreen.createButton("Proceed", "winAndBtm2()");
    else if (all_stars)
        judgingScreen.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        judgingScreen.createButton("Proceed", "topAndBtm()");
    else if (team)
        judgingScreen.createButton("Proceed", "teamWinAndBtm2()");
}
function winAndBtm2() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (var i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
    //double win:
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    screen.createParagraph("", "highs");
    var highs = document.querySelector("p#highs");
    for (var i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    screen.createParagraph("", "bottom3");
    if (bottomQueens.length >= 3) {
        var bottom3 = document.querySelector("p#bottom3");
        for (var i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    if (bottomQueens.length == 4) {
        for (var i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens.splice(0, 2);
    }
    else if (bottomQueens.length == 3) {
        for (var i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens.splice(0, 1);
    }
    screen.createBold("", "btm2");
    var btm2 = document.querySelector("b#btm2");
    for (var i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
function teamWinAndBtm2() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (var i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
    topQueens[0].QueenA.addToTrackRecord("WIN");
    topQueens[0].QueenB.addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    screen.createBold(topQueens[0].getName() + ", condragulations you're the winners of this week's challenge!");
    if (topQueens.length > 1) {
        topQueens[1].QueenA.addToTrackRecord("HIGH");
        topQueens[1].QueenB.addToTrackRecord("HIGH");
        screen.createParagraph(topQueens[1].getName() + ", good work this week, you're safe.");
    }
    screen.createHorizontalLine();
    if (bottomQueens.length > 2) {
        screen.createParagraph(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", " + bottomQueens[2].getName() + ", you're the bottoms of the week...");
        for (var i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        bottomQueens[0].QueenA.addToTrackRecord("LOW");
        bottomQueens[0].QueenB.addToTrackRecord("LOW");
        bottomQueens[0].unfavoritism += 1;
        screen.createBold(bottomQueens[0].getName() + ", you are safe.");
        bottomQueens.splice(0, 1);
    }
    screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", I'm sorry my dears but you are up for elimination.");
    screen.createButton("Proceed", "teamLipSync()");
}
function top2AndBtm() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (var i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    screen.createParagraph("", "highs");
    var highs = document.querySelector("p#highs");
    for (var i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    screen.createBold("", "bottoms");
    var bottoms = document.querySelector("b#bottoms");
    for (var i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    for (var i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens[i].performanceScore >= 6 && bottomQueens[i].performanceScore < 16) {
            screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
            bottomQueens[i].addToTrackRecord("LOW");
            bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
            screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", you're up for elimination.");
            break;
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (var i = 0; i < top2.length; i++) {
        if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
            top2[i].lipstick = bottomQueens.sort(function (a, b) { return b.unfavoritism - a.unfavoritism; })[0];
        else
            top2[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
        screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + "'s lipstick!");
    }
    screen.createButton("Proceed", "asLipSync()");
}
function topAndBtm() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (var i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
    top2.push(topQueens[0]);
    top2[0].favoritism += 5;
    topQueens.splice(0, 1);
    screen.createBold(top2[0].getName() + ", condragulations, you're the Top All Star of the week!");
    screen.createParagraph("", "highs");
    var highs = document.querySelector("p#highs");
    for (var i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    screen.createBold("", "bottoms");
    var bottoms = document.querySelector("b#bottoms");
    for (var i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    for (var i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens[i].performanceScore >= 6 && bottomQueens[i].performanceScore < 16 && currentCast.length > 6) {
            screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
            bottomQueens[i].addToTrackRecord("LOW");
            bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
            screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", you're up for elimination.");
            break;
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
        top2[0].lipstick = bottomQueens.sort(function (a, b) { return b.unfavoritism - a.unfavoritism; })[0];
    else
        top2[0].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
    screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + "'s lipstick!");
    screen.createHorizontalLine();
    screen.createBigText("The queens vote...");
    for (var i = 0; i < currentCast.length; i++) {
        if (top2.indexOf(currentCast[i]) == -1) {
            if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort(function (a, b) { return b.unfavoritism - a.unfavoritism; })[0] != currentCast[i] && currentCast.length <= totalCastSize - 2)
                currentCast[i].lipstick = bottomQueens.sort(function (a, b) { return b.unfavoritism - a.unfavoritism; })[0];
            else
                currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            screen.createBold(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!");
            currentCast[i].lipstick.votes++;
        }
    }
    screen.createHorizontalLine();
    for (var i = 0; i < bottomQueens.length; i++) {
        screen.createBold(bottomQueens[i].getName() + ": " + bottomQueens[i].votes.toString() + " votes");
    }
    bottomQueens.sort(function (a, b) { return b.votes - a.votes; });
    screen.createButton("Proceed", "lsaLipSync()");
}
function lipSync() {
    for (var i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    var score1 = bottomQueens[0].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    var score2 = bottomQueens[1].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay && noDouble == false && currentCast.length > 5) {
        screen.createBold("Condragulations, shantay you both stay!!");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 5;
        doubleShantay = true;
    }
    else if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
        doubleSashay = true;
        bottomQueens[0].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[0]);
        currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    else if (randomNumber(0, 1000) >= 995) {
        var disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. I must ask you to sashay away.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 5;
        disqualifiedQueen.trackRecord.pop();
        disqualifiedQueen.addToTrackRecord("DISQ");
        eliminatedCast.unshift(disqualifiedQueen);
        currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
    }
    else {
        screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 3;
        screen.createBold(bottomQueens[1].getName() + ", sashay away...");
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true && noReturn == false)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function teamLipSync() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck and don't fuck it up.");
    if (randomNumber(0, 100) <= 50)
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenA;
    else
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenB;
    if (randomNumber(0, 100) <= 50)
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenA;
    else
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenB;
    screen.createBold("[" + bottomQueens[0].lipsyncQueen.getName() + " and " + bottomQueens[1].lipsyncQueen.getName() + " will be lip-syncing]");
    lsSong();
    bottomQueens[0].lipsyncQueen.getLipsync();
    bottomQueens[1].lipsyncQueen.getLipsync();
    bottomQueens.sort(function (a, b) { return (a.lipsyncQueen.lipsyncScore - a.favoritism + a.unfavoritism) - (b.lipsyncQueen.lipsyncScore - b.favoritism + b.unfavoritism); });
    screen.createHorizontalLine();
    screen.createBold(bottomQueens[0].lipsyncQueen.getName() + ", shantay you stay.");
    screen.createBold(bottomQueens[1].lipsyncQueen.getName() + ", you will always be an All Star, now, sashay away...");
    bottomQueens[0].QueenA.addToTrackRecord("BTM2");
    bottomQueens[0].QueenB.addToTrackRecord("BTM2");
    bottomQueens[0].unfavoritism += 3;
    bottomQueens[1].QueenA.addToTrackRecord("ELIM");
    bottomQueens[1].QueenB.addToTrackRecord("ELIM");
    eliminatedCast.unshift(bottomQueens[1].QueenA);
    eliminatedCast.unshift(bottomQueens[1].QueenB);
    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    screen.createButton("Proceed", "newEpisode()");
}
function asLipSync() {
    for (var i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 7 && top2[1].lipsyncScore > 7 && currentCast.length > 5) {
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[1].favoritism += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        if (top2[0].lipstick == top2[1].lipstick) {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
        else {
            screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            top2[1].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[1].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("TOP2");
        top2[1].favoritism += 4;
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].lipstick.addToTrackRecord("ELIM");
        eliminatedCast.unshift(top2[0].lipstick);
        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    }
    for (var i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function lsaLipSync() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time to ruveal...");
    var assassin = allQueens[randomNumber(0, allQueens.length - 1)];
    bottomQueens.sort(function (a, b) { return b.votes - a.votes; });
    assassin.lipstick = bottomQueens[0];
    top2.push(assassin);
    screen.createBold("The lip-sync assassin is... " + assassin.getName() + "!");
    screen.createParagraph("Now, it's time for you to lip-sync... for your legacy!");
    lsSong();
    screen.createHorizontalLine();
    for (var i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    assassin.lipsyncScore -= 3;
    top2.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    screen.createBold(top2[0].getName() + ", you're a winner baby!");
    if (top2[0] == assassin) {
        screen.createParagraph(top2[1].getName() + ", you're safe.");
        top2[1].addToTrackRecord("WIN ");
    }
    else {
        screen.createParagraph(top2[1].getName() + ", thanks for participating.");
        top2[0].addToTrackRecord("WIN");
    }
    allQueens.splice(allQueens.indexOf(assassin), 1);
    screen.createHorizontalLine();
    screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
    top2[0].lipstick.addToTrackRecord("ELIM");
    eliminatedCast.unshift(top2[0].lipstick);
    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    for (var i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 2;
        bottomQueens[i].votes = 0;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
var Queen = /** @class */ (function () {
    function Queen(name, acting, comedy, dance, design, improv, runway, lipsync) {
        this.trackRecord = [];
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.winCount = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.votes = 0;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
    }
    Queen.prototype._calculateScores = function (min, max, stat) {
        if (stat === void 0) { stat = 0; }
        var score = randomNumber(min, max);
        return score - stat;
    };
    Queen.prototype.getName = function () {
        return this._name;
    };
    Queen.prototype.getLipSyncStat = function () {
        return this._lipsyncStat;
    };
    Queen.prototype.getActing = function () {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    };
    Queen.prototype.getComedy = function () {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    };
    Queen.prototype.getDance = function () {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    };
    Queen.prototype.getDesign = function () {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    };
    Queen.prototype.getImprov = function () {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    };
    //special 'gets':
    Queen.prototype.getSnatch = function () {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    };
    Queen.prototype.getRusical = function () {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    };
    Queen.prototype.getBall = function () {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    };
    Queen.prototype.getRumix = function () {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    };
    Queen.prototype.getTalentShow = function () {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    };
    Queen.prototype.getFinale = function () {
        this.finaleScore = this.favoritism - this.unfavoritism;
    };
    Queen.prototype.getRunway = function () {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    };
    Queen.prototype.getLipsync = function () {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    };
    Queen.prototype.getASLipsync = function () {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    };
    Queen.prototype.addToTrackRecord = function (placement) {
        this.trackRecord.push(placement);
    };
    return Queen;
}());
//QUEENS:
//SEASON 1:
var akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 12);
var bebe = new Queen("BeBe Zahara Benet", 7, 7, 7, 10, 7, 10, 9);
var jade = new Queen("Jade Sotomeyer", 3, 3, 6, 7, 3, 7, 7);
var ninaf = new Queen("Nina Flowers", 4, 4, 5, 11, 3, 10, 4);
var ongina = new Queen("Ongina", 10, 7, 7, 9, 10, 8, 8);
var rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5);
var shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 9, 7);
var tammie = new Queen("Tammie Brown", 10, 8, 5, 7, 8, 7, 6);
var victoria = new Queen("Victoria 'Porkchop' Parker", 10, 8, 4, 3, 9, 5, 4);
var us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//SEASON 2:
var jessica = new Queen("Jessica Wild", 8, 9, 7, 7, 8, 9, 9);
var jujubee = new Queen("Jujubee", 9, 10, 8, 6, 10, 6, 15);
var morgan = new Queen("Morgan McMichaels", 6, 6, 8, 8, 3, 10, 9);
var mystique = new Queen("Mystique Summers Madison", 4, 6, 3, 3, 3, 6, 6);
var nicole = new Queen("Nicole Paige Brooks", 4, 4, 6, 6, 4, 7, 7);
var pandora = new Queen("Pandora Boxx", 9, 11, 7, 6, 10, 7, 9);
var raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 10);
var sahara = new Queen("Sahara Davenport", 9, 7, 10, 4, 6, 7, 11);
var shangela = new Queen("Shangela", 10, 11, 7, 2, 10, 6, 9);
var sonique = new Queen("Kylie Sonique Love", 8, 7, 12, 10, 6, 9, 8);
var tatianna = new Queen("Tatianna", 8, 10, 7, 8, 10, 8, 10);
var tyra = new Queen("Tyra Sanchez", 9, 4, 7, 11, 3, 9, 10);
var us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];
//SEASON 3:
var alexis = new Queen("Alexis Mateo", 10, 11, 8, 6, 9, 7, 12);
var carmen = new Queen("Carmen Carrera", 3, 2, 6, 4, 2, 5, 8);
var delta = new Queen("Delta Work", 8, 7, 5, 5, 5, 7, 9);
var india = new Queen("India Ferrah", 6, 4, 8, 8, 3, 10, 7);
var manila = new Queen("Manila Luzon", 10, 9, 8, 11, 9, 10, 11);
var mariah = new Queen("Mariah", 8, 5, 6, 8, 5, 9, 7);
var mimi = new Queen("Mimi Imfurst", 10, 8, 6, 9, 9, 8, 7);
var phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4);
var raja = new Queen("Raja", 9, 9, 7, 13, 9, 10, 11);
var stacey = new Queen("Stacey Layne Matthews", 6, 10, 5, 4, 9, 5, 9);
var venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2);
var yara = new Queen("Yara Sofia", 9, 10, 7, 10, 5, 10, 9);
var us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];
//SEASON 4:
var alisa = new Queen("Alisa Summers", 4, 4, 6, 2, 3, 5, 3);
var chad = new Queen("Chad Michaels", 9, 9, 8, 8, 9, 9, 9);
var dida = new Queen("Dida Ritz", 6, 7, 7, 5, 7, 7, 11);
var jiggly = new Queen("Jiggly Caliente", 6, 4, 7, 3, 3, 6, 9);
var kenya = new Queen("Kenya Michaels", 5, 6, 6, 6, 4, 7, 8);
var leshauwn = new Queen("Lashauwn Beyond", 5, 4, 7, 11, 5, 9, 8);
var latrice = new Queen("Latrice Royale", 9, 9, 9, 6, 9, 5, 9);
var madame = new Queen("Madame LaQueer", 7, 7, 6, 6, 7, 7, 7);
var milan = new Queen("Milan", 5, 5, 9, 6, 5, 8, 10);
var phiphi = new Queen("Phi Phi O'Hara", 9, 7, 8, 9, 9, 10, 9);
var princess = new Queen("The Princess", 4, 4, 5, 8, 4, 7, 8);
var sharon = new Queen("Sharon Needles", 7, 8, 4, 9, 7, 8, 7);
var willam = new Queen("Willam", 8, 9, 7, 10, 8, 9, 8);
var us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, sharon, willam];
//ALL STARS 1:
var allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];
//SEASON 5:
var alaska = new Queen("Alaska", 10, 11, 7, 8, 9, 9, 11);
var alyssa = new Queen("Alyssa Edwards", 5, 9, 12, 5, 9, 7, 9);
var coco = new Queen("Coco Montrese", 4, 9, 9, 8, 6, 9, 15);
var detox = new Queen("Detox", 8, 10, 6, 8, 3, 9, 9);
var honey = new Queen("Honey Mahogany", 3, 3, 3, 6, 2, 5, 3);
var ivy = new Queen("Ivy Winters", 8, 8, 9, 9, 7, 9, 7);
var jadejolie = new Queen("Jade Jolie", 6, 5, 6, 6, 6, 6, 9);
var jinkx = new Queen("Jinkx Monsoon", 11, 10, 8, 7, 10, 9, 9);
var lineysha = new Queen("Lineysha Sparx", 9, 6, 8, 10, 6, 9, 8);
var monica = new Queen("Monica Beverly Hillz", 4, 4, 9, 6, 3, 8, 9);
var penny = new Queen("Penny Tration", 7, 9, 4, 5, 7, 5, 5);
var roxxxy = new Queen("Roxxxy Andrews", 6, 4, 6, 10, 4, 9, 9);
var serena = new Queen("Serena ChaCha", 3, 3, 8, 4, 5, 5, 7);
var vivienne = new Queen("Vivienne Pinay", 3, 3, 5, 5, 3, 6, 5);
var us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];
//SEASON 6:
var adore = new Queen("Adore Delano", 9, 8, 8, 5, 9, 7, 9);
var april = new Queen("April Carrión", 6, 5, 7, 9, 5, 9, 8);
var bendelacreme = new Queen("BenDeLaCreme", 10, 8, 7, 8, 10, 9, 7);
var bianca = new Queen("Bianca Del Rio", 11, 11, 8, 10, 10, 9, 6);
var courtney = new Queen("Courtney Act", 8, 8, 9, 8, 8, 9, 9);
var darienne = new Queen("Darienne Lake", 9, 9, 7, 4, 8, 7, 14);
var gia = new Queen("Gia Gunn", 5, 4, 8, 8, 3, 8, 8);
var joslyn = new Queen("Joslyn Fox", 7, 9, 9, 5, 9, 6, 9);
var kelly = new Queen("Kelly Mantle", 8, 8, 7, 5, 7, 7, 7);
var laganja = new Queen("Laganja Estranja", 8, 5, 8, 7, 4, 8, 9);
var magnolia = new Queen("Magnolia Crawford", 7, 7, 6, 4, 5, 7, 4);
var milk = new Queen("Milk", 9, 8, 5, 7, 6, 7, 5);
var trinityk = new Queen("Trinity K. Bonet", 5, 9, 8, 10, 6, 9, 12);
var vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7);
var us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];
//SEASON 7:
var ginger = new Queen("Ginger Minj", 12, 13, 8, 7, 13, 7, 12);
var jaidynn = new Queen("Jaidynn Diore Fierce", 8, 9, 7, 6, 8, 7, 9);
var jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 7);
var kandy = new Queen("Kandy Ho", 4, 5, 7, 5, 4, 7, 9);
var katya = new Queen("Katya", 9, 9, 9, 7, 9, 9, 9);
var kennedy = new Queen("Kennedy Davenport", 9, 9, 8, 7, 9, 6, 11);
var max = new Queen("Max", 10, 4, 6, 8, 3, 8, 3);
var fame = new Queen("Miss Fame", 4, 4, 5, 10, 3, 9, 4);
var kasha = new Queen("Mrs. Kasha Davis", 8, 8, 7, 7, 8, 8, 9);
var pearl = new Queen("Pearl", 3, 9, 8, 9, 8, 8, 5);
var sashab = new Queen("Sasha Belle", 6, 6, 6, 6, 6, 6, 6);
var tempest = new Queen("Tempest DuJour", 8, 8, 7, 3, 6, 7, 6);
var trixie = new Queen("Trixie Mattel", 10, 6, 6, 9, 9, 9, 6);
var violet = new Queen("Violet Chachki", 8, 7, 7, 14, 7, 10, 8);
var us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];
//SEASON 8:
var acid = new Queen("Acid Betty", 8, 3, 7, 9, 2, 8, 7);
var bob = new Queen("Bob The Drag Queen", 13, 15, 8, 7, 13, 7, 13);
var chichi = new Queen("Chi Chi DeVayne", 7, 8, 12, 3, 5, 7, 9);
var cynthia = new Queen("Cynthia Lee Fontaine", 5, 4, 8, 6, 4, 7, 6);
var dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 7, 6, 7, 4);
var derrick = new Queen("Derrick Barry", 4, 9, 7, 3, 9, 7, 8);
var kim = new Queen("Kim Chi", 6, 7, 4, 13, 6, 10, 5);
var laila = new Queen("Laila McQueen", 7, 7, 4, 4, 6, 8, 8);
var naomi = new Queen("Naomi Smalls", 9, 9, 8, 8, 9, 10, 10);
var naysha = new Queen("Naysha Lopez", 4, 4, 4, 4, 3, 6, 4);
var robbie = new Queen("Robbie Turner", 5, 4, 6, 4, 3, 6, 6);
var thorgy = new Queen("Thorgy Thor", 9, 9, 7, 8, 9, 9, 9);
var us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];
//ALL STARS 2:
var allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];
//SEASON 9:
var aja = new Queen("Aja", 7, 7, 9, 4, 7, 9, 9);
var alexism = new Queen("Alexis Michelle", 8, 8, 8, 6, 9, 6, 11);
var charlie = new Queen("Charlie Hides", 6, 7, 5, 7, 3, 9, 2);
var eureka = new Queen("Eureka O'Hara", 9, 8, 6, 6, 10, 7, 8);
var farrah = new Queen("Farrah Moan", 9, 5, 7, 3, 6, 8, 7);
var jaymes = new Queen("Jaymes Mansfield", 8, 8, 3, 6, 9, 7, 6);
var kimora = new Queen("Kimora Blac", 5, 5, 4, 2, 5, 8, 3);
var ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 8, 8, 8, 9, 12);
var peppermint = new Queen("Peppermint", 8, 10, 7, 7, 3, 7, 14);
var sasha = new Queen("Sasha Velour", 10, 9, 7, 9, 9, 10, 11);
var shea = new Queen("Shea Couleé", 10, 9, 9, 8, 10, 10, 11);
var trinity = new Queen("Trinity The Tuck", 9, 8, 8, 9, 8, 9, 8);
var valentina = new Queen("Valentina", 9, 9, 9, 9, 9, 9, 7);
var us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];
//ALL STARS 3:
var allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];
//SEASON 10:
var aquaria = new Queen("Aquaria", 9, 9, 8, 14, 9, 10, 10);
var asia = new Queen("Asia O'Hara", 9, 5, 6, 6, 8, 9, 9);
var blair = new Queen("Blair St. Clair", 9, 5, 6, 9, 7, 8, 7);
var dusty = new Queen("Dusty Ray Bottoms", 7, 6, 8, 7, 6, 7, 6);
var kalorie = new Queen("Kalorie K. Williams", 6, 8, 6, 5, 7, 7, 8);
var kameron = new Queen("Kameron Michaels", 5, 7, 9, 8, 6, 8, 14);
var mayhem = new Queen("Mayhem Miller", 6, 8, 8, 8, 5, 9, 8);
var miz = new Queen("Miz Cracker", 9, 9, 5, 7, 9, 7, 7);
var monet = new Queen("Monét X Change", 9, 10, 7, 5, 7, 9, 11);
var monique = new Queen("Monique Heart", 9, 8, 7, 8, 10, 8, 9);
var vanessa = new Queen("Vanessa 'Vanjie' Mateo", 10, 7, 7, 6, 7, 7, 8);
var vixen = new Queen("The Vixen", 4, 4, 11, 9, 3, 8, 13);
var yuhua = new Queen("Yuhua Hamasaki", 5, 7, 6, 8, 6, 7, 7);
var us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];
//ALL STARS 4:
var allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];
//SEASON 11:
var akeria = new Queen("A'keria C. Davenport", 10, 9, 9, 8, 8, 9, 9);
var ariel = new Queen("Ariel Versace", 6, 8, 7, 6, 8, 8, 8);
var brooke = new Queen("Brooke Lynn Hytes", 8, 6, 10, 8, 4, 9, 9);
var honeyd = new Queen("Honey Davenport", 6, 6, 7, 6, 6, 9, 4);
var kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 7);
var mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 6, 6, 6, 8, 8);
var ninaw = new Queen("Nina West", 10, 7, 6, 6, 9, 7, 5);
var plastique = new Queen("Plastique Tiara", 7, 7, 8, 9, 5, 8, 6);
var rajah = new Queen("Ra'Jah O'Hara", 7, 8, 14, 13, 6, 10, 12);
var scarlet = new Queen("Scarlet Envy", 10, 8, 6, 9, 7, 9, 8);
var shuga = new Queen("Shuga Cain", 8, 7, 7, 5, 7, 10, 7);
var silky = new Queen("Silky Nutmeg Ganache", 8, 9, 7, 6, 9, 7, 7);
var yvie = new Queen("Yvie Oddly", 10, 5, 8, 9, 5, 8, 11);
var us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];
//SEASON 12
var aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 8, 7);
var brita = new Queen("Brita", 7, 6, 7, 4, 3, 7, 9);
var crystal = new Queen("Crystal Methyd", 8, 7, 7, 8, 5, 9, 5);
var dahlia = new Queen("Dahlia Sin", 4, 4, 8, 7, 6, 10, 3);
var gigi = new Queen("Gigi Goode", 8, 7, 9, 8, 9, 9, 5);
var heidi = new Queen("Heidi N Closet", 9, 10, 5, 6, 9, 7, 12);
var jackie = new Queen("Jackie Cox", 8, 9, 5, 7, 10, 8, 11);
var jaida = new Queen("Jaida Essence Hall", 7, 9, 9, 14, 9, 10, 14);
var jan = new Queen("Jan", 8, 7, 9, 7, 8, 8, 7);
var nicky = new Queen("Nicky Doll", 4, 4, 7, 10, 3, 10, 5);
var rock = new Queen("Rock M. Sakura", 6, 8, 6, 7, 8, 8, 6);
var widow = new Queen("Widow Von'Du", 8, 9, 7, 7, 9, 8, 9);
var us_season12 = [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];
//ALL STARS 5
var allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];
//SEASON 13
var denali = new Queen("Denali", 4, 7, 12, 7, 9, 9, 12);
var elliott = new Queen("Elliott With 2 Ts", 4, 5, 10, 7, 3, 7, 10);
var mik = new Queen("Gottmik", 8, 9, 4, 13, 9, 10, 6);
var joey = new Queen("Joey Jay", 5, 5, 8, 6, 4, 6, 4);
var kahmora = new Queen("Kahmora Hall", 3, 4, 3, 9, 3, 10, 4);
var kandym = new Queen("Kandy Muse", 9, 9, 7, 6, 9, 6, 13);
var lala = new Queen("LaLa Ri", 4, 6, 10, 2, 5, 7, 13);
var olivia = new Queen("Olivia Lux", 8, 5, 9, 8, 4, 9, 10);
var rose = new Queen("Rosé", 10, 9, 12, 8, 9, 7, 6);
var symone = new Queen("Symone", 12, 8, 8, 7, 12, 9, 13);
var tamisha = new Queen("Tamisha Iman", 7, 6, 7, 6, 6, 7, 8);
var tina = new Queen("Tina Burner", 7, 7, 8, 5, 8, 4, 8);
var utica = new Queen("Utica Queen", 7, 4, 4, 13, 4, 10, 12);
var us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];
//ALL STARS 6
var allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];
//DRUK SEASON 1
var baga = new Queen("Baga Chipz", 11, 12, 6, 7, 11, 8, 9);
var blu = new Queen("Blu Hydrangea", 5, 8, 3, 9, 9, 11, 8);
var cheryl = new Queen("Cheryl Hole", 5, 5, 10, 6, 6, 9, 10);
var crystaluk = new Queen("Crystal", 6, 5, 7, 9, 4, 8, 6);
var divina = new Queen("Divina De Campo", 8, 6, 7, 12, 9, 9, 9);
var gothy = new Queen("Gothy Kendall", 4, 5, 4, 3, 5, 8, 4);
var scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 6, 4);
var sumting = new Queen("Sum‏‏‎ Tin Wong", 9, 9, 7, 8, 9, 8, 8);
var viv = new Queen("The‎‎‎‎‎‎‎‎‏‏‎‎ Vivienne", 10, 12, 9, 12, 12, 10, 11);
var vinegar = new Queen("Vinegar Strokes", 7, 7, 7, 4, 4, 6, 7);
var uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];
//DRUK SEASON 2
var awhora = new Queen("A'Whora", 9, 8, 7, 12, 9, 8, 9);
var asttina = new Queen("Asttina Mandella", 8, 7, 10, 9, 9, 9, 11);
var bimini = new Queen("Bimini Bon-Boulash", 11, 14, 9, 6, 12, 11, 12);
var cherry = new Queen("Cherry Valentine", 5, 6, 5, 10, 6, 11, 4);
var ellie = new Queen("Ellie Diamond", 8, 5, 5, 10, 7, 9, 9);
var ginny = new Queen("Ginny Lemon", 6, 8, 5, 7, 7, 8, 4);
var joe = new Queen("Joe Black", 8, 7, 4, 9, 7, 10, 8);
var lawrence = new Queen("Lawrence Chaney", 14, 13, 3, 11, 9, 12, 14);
var sister = new Queen("Sister Sister", 8, 6, 6, 4, 7, 8, 10);
var tayce = new Queen("Tayce", 9, 9, 12, 5, 9, 9, 14);
var tia = new Queen("Tia Kofi", 9, 11, 8, 3, 6, 5, 12);
var veronica = new Queen("Veronica Green", 7, 7, 11, 8, 5, 10, 8);
var uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];
//CAN SEASON 1
var anastarzia = new Queen("Anastarzia Anaquway", 7, 7, 6, 10, 8, 9, 11);
var boa = new Queen("BOA", 6, 9, 6, 7, 6, 8, 8);
var ilona = new Queen("Ilona Verley", 7, 8, 5, 8, 8, 10, 10);
var jimbo = new Queen("Jimbo", 10, 11, 4, 6, 10, 11, 4);
var juice = new Queen("Juice Boxx", 7, 9, 8, 4, 6, 10, 9);
var kiara = new Queen("Kiara", 8, 7, 9, 8, 6, 8, 13);
var kyne = new Queen("Kyne", 5, 4, 6, 6, 6, 7, 7);
var lemon = new Queen("Lemon", 9, 9, 10, 4, 8, 5, 10);
var priyanka = new Queen("Priyanka", 12, 9, 10, 11, 6, 10, 15);
var rita = new Queen("Rita Baga", 10, 9, 5, 10, 9, 12, 13);
var bobo = new Queen("Scarlett BoBo", 9, 9, 9, 9, 9, 10, 12);
var tynomi = new Queen("Tynomi Banks", 5, 7, 7, 8, 5, 9, 12);
var can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];
//DRAG RACE HOLLAND
var chelsea = new Queen("Chelsea Boy", 8, 9, 6, 9, 9, 11, 5);
var envy = new Queen("Envy Peru", 10, 10, 9, 10, 9, 13, 12);
var janey = new Queen("Janey Jacké", 7, 8, 7, 11, 9, 12, 9);
var madamem = new Queen("Madame Madness", 6, 6, 6, 8, 5, 8, 7);
var mama = new Queen("Ma'Ma Queen", 7, 7, 5, 6, 8, 10, 7);
var megan = new Queen("Megan Schoonbrood", 7, 8, 7, 5, 6, 9, 11);
var abby = new Queen("Miss Abby OMG", 9, 8, 12, 8, 7, 8, 11);
var patty = new Queen("Patty Pam-Pam", 8, 6, 6, 8, 8, 9, 7);
var roem = new Queen("Roem", 8, 8, 5, 5, 7, 6, 5);
var sederginne = new Queen("Sederginne", 8, 6, 6, 10, 7, 13, 5);
var hol_season1 = [chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne];
//DRT SEASON 1
var amadiva = new Queen("Amadiva", 9, 6, 7, 9, 3, 13, 6);
var annee = new Queen("Anneé Maywong", 9, 9, 7, 13, 4, 14, 9);
var b = new Queen("B Ella", 7, 9, 6, 8, 11, 7, 7);
var bunny = new Queen("Bunny Be Fly", 7, 5, 5, 8, 5, 8, 6);
var dearis = new Queen("Dearis Doll", 7, 7, 7, 10, 10, 11, 10);
var jaja = new Queen("JAJA", 8, 6, 7, 9, 5, 11, 9);
var meannie = new Queen("Meannie Minaj", 7, 5, 5, 6, 5, 5, 5);
var morrigan = new Queen("Morrigan", 5, 6, 7, 5, 7, 7, 7);
var natalia = new Queen("Natalia Pliacam", 9, 9, 7, 13, 9, 14, 12);
var petchra = new Queen("Petchra", 7, 7, 6, 7, 8, 7, 9);
var drt_season1 = [amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra];
//DRT SEASON 2
var angele = new Queen("Angele Anang", 9, 9, 9, 12, 8, 14, 10);
var bandit = new Queen("Bandit", 7, 7, 7, 10, 6, 14, 9);
var genie = new Queen("Genie", 9, 8, 9, 9, 7, 9, 8);
var kana = new Queen("Kana Warrior", 8, 8, 8, 7, 7, 9, 13);
var kandyz = new Queen("Kandy Zyanide", 9, 9, 9, 9, 9, 12, 7);
var katy = new Queen("Katy Killer", 7, 8, 7, 8, 7, 10, 8);
var m = new Queen("M Stranger Fox", 5, 6, 5, 6, 6, 8, 8);
var maya = new Queen("Maya B'haro", 9, 8, 6, 9, 9, 10, 7);
var mocha = new Queen("Mocha Diva", 9, 9, 6, 10, 9, 7, 9);
var gimhuay = new Queen("Miss Gimhuay", 8, 9, 7, 11, 10, 12, 8);
var silver = new Queen("Silver Sonic", 5, 5, 7, 6, 7, 7, 8);
var srimala = new Queen("Srimala", 7, 7, 8, 7, 8, 11, 12);
var tormai = new Queen("Tormai", 8, 8, 7, 7, 6, 8, 9);
var vanda = new Queen("Vanda Miss Joaquim", 9, 8, 9, 7, 7, 11, 10);
var drt_season2 = [angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda];
//DRAG RACE DOWN UNDER
var anita = new Queen("Anita Wigl'it", 9, 9, 8, 7, 8, 7, 8);
var art = new Queen("Art Simone", 5, 4, 5, 10, 4, 10, 2);
var cocoj = new Queen("Coco Jumbo", 7, 6, 7, 6, 5, 8, 9);
var elektra = new Queen("Elektra Shock", 8, 6, 7, 5, 4, 6, 10);
var etc = new Queen("Etcetera Etcetera", 7, 8, 7, 6, 7, 8, 8);
var jojo = new Queen("Jojo Zaho", 5, 5, 5, 5, 5, 6, 8);
var karen = new Queen("Karen From Finance", 6, 6, 7, 7, 5, 7, 5);
var kita = new Queen("Kita Mean", 8, 8, 7, 8, 9, 9, 10);
var maxi = new Queen("Maxi Shield", 6, 7, 7, 9, 7, 8, 9);
var drdu = [anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi];
//DRAG RACE ESPAÑA
var arantxa = new Queen("Arantxa Castilla La Mancha", 8, 8, 7, 7, 4, 9, 9);
var carmenf = new Queen("Carmen Farala", 8, 7, 9, 9, 5, 11, 9);
var dovima = new Queen("Dovima Nurmi", 6, 5, 5, 4, 5, 8, 8);
var drag = new Queen("Drag Vulcano", 6, 6, 5, 7, 7, 8, 6);
var hugaceo = new Queen("Hugáceo Crujiente", 7, 6, 7, 11, 6, 8, 9);
var inti = new Queen("Inti", 7, 7, 7, 7, 7, 12, 7);
var killer = new Queen("Killer Queen", 7, 8, 6, 7, 9, 9, 7);
var pupi = new Queen("Pupi Poisson", 8, 8, 8, 6, 9, 9, 9);
var sagittaria = new Queen("Sagittaria", 7, 8, 9, 9, 8, 9, 8);
var macarena = new Queen("The Macarena", 6, 7, 6, 5, 5, 7, 7);
var dres = [arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena];
//SPECIAL
var pangina = new Queen("Pangina Heals", 10, 10, 9, 12, 9, 13, 11);
var international_as = [baga, blu, cheryl, janey, jimbo, jujubee, lemon, monique, pangina];
//all possible queens:
var allQueens = [
    akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
    jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
    alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
    alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, sharon, willam,
    alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
    adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
    ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
    acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
    aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
    aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
    akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, yvie,
    aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow,
    denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
    baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar,
    awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
    anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi,
    chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,
    amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra,
    angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda,
    anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi,
    arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena,
    pangina
].sort(function (a, b) { return a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()); });
var allQueensCopy = [];
//checa por retornantes:
function CheckForReturning() {
    if (eliminatedCast.length == 0 && currentCast.length > totalCastSize - 3 && currentCast.length < 6)
        return false;
    else {
        if (doubleSashay == false) {
            if (randomNumber(0, 100) <= 5 && returningQueen == false) {
                returningQueen = true;
                return true;
            }
            return false;
        }
        else {
            if (randomNumber(0, 100) <= 85 && returningQueen == false) {
                returningQueen = true;
                return true;
            }
            return false;
        }
    }
}
function returningQueenScreen() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("A lovely surprise...");
    if (randomNumber(0, 100) <= 50)
        queenReturns();
    else
        queenReturnsVote();
    screen.createButton("Proceed", "newEpisode()");
}
function queenReturns() {
    var screen = new Scene();
    screen.createParagraph("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");
    var queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
    screen.createBold(queen.getName());
}
function queenReturnsVote() {
    var screen = new Scene();
    screen.createParagraph("I've decided that one of my quens deserve a second chance... you'll vote for which of the eliminated queens will come back!");
    screen.createHorizontalLine();
    screen.createBold("The queens vote...");
    for (var i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        currentCast[i].lipstick.votes++;
        screen.createParagraph(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!");
    }
    for (var i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(eliminatedCast[i].getName() + ": " + eliminatedCast[i].votes.toString() + " votes");
    }
    screen.createHorizontalLine();
    var queen = __spreadArray([], eliminatedCast).sort(function (a, b) { return b.votes - a.votes; })[0];
    screen.createBold(queen.getName() + " returns to the competition!");
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
var Scene = /** @class */ (function () {
    function Scene() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    Scene.prototype.clean = function () {
        this._MainBlock.innerHTML = '';
    };
    Scene.prototype.createHeader = function (text) {
        var header = document.createElement("h1");
        header.innerHTML = text;
        this._MainBlock.appendChild(header);
    };
    Scene.prototype.createBigText = function (text) {
        var big = document.createElement("big");
        big.innerHTML = text;
        this._MainBlock.appendChild(big);
    };
    Scene.prototype.createParagraph = function (text, id) {
        if (id === void 0) { id = ''; }
        var p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    };
    Scene.prototype.createBold = function (text, id) {
        if (id === void 0) { id = ''; }
        var p = document.createElement("p");
        var bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    };
    Scene.prototype.createButton = function (text, method, id) {
        if (id === void 0) { id = ''; }
        var button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    };
    Scene.prototype.createHorizontalLine = function () {
        var hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    };
    return Scene;
}());
function lsSong() {
    var screen = new Scene();
    var song = randomNumber(0, lsSongs.length - 1);
    screen.createBold("The lip-sync song is... " + lsSongs[song] + "!");
    lsSongs.splice(song, 1);
}
var allLsSongs = [
    "Supermodel by RuPaul",
    "We Break The Dawn by Michelle Williams",
    "The Greatest Love Of All by Whitney Houstoun",
    "Would I Lie to You by Eurythmics",
    "Stronger by Britney Spears",
    "Shackles (Praise You) by Mary Mary",
    "Cover Girl (Put The Bass In Your Walk) by RuPaul",
    "My Lovin' (You're Never Gonna Get It) by En Vogue",
    "I Hear You Knocking by Wynnona Judd",
    "Two of Hearts by Stacey Q",
    "Carry On by Martha Wash",
    "Black Velvet by Alannah Myles",
    "He's The Greatest Dancer by Sister Sledge",
    "Shake Your Love by Debbie Gibson",
    "Something He Can Feel by Aretha Franklin",
    "Jealous of My Boogie by RuPaul",
    "The Right Stuff by Vanessa Williams",
    "Bad Romance by Lady Gaga",
    "Don't Leave Me This Way by Thelma Houston",
    "Meeting in the Ladies Room by Klymaxx",
    "Looking For A New Love by Jody Watley",
    "Knock On Wood by Amii Stewart",
    "MacArthur Park by Donna Summer",
    "Hey Mickey by Toni Basil",
    "Believe by Cher",
    "Even Angels by Fantasia",
    "Straight Up by Paula Abdul",
    "I Think About You by Patti LaBelle",
    "Champion by RuPaul",
    "Toxic by Britney Spears",
    "Bad Girls by Donna Summer",
    "This Will Be (An Everlasting Love) by Natalie Cole",
    "Trouble by P!nk",
    "Vogue by Madonna",
    "Born This Way by Lady Gaga",
    "Mi Vida Loca by Pam Tillis",
    "It's Raining Men (The Sequel) by Martha Wash and RuPaul",
    "I've Got To Use My Imagination by Gladys Knight",
    "(You Make Me Feel Like) A Natural Woman by Aretha Franklin",
    "No One Else On Earth by Wynnona Judd",
    "Glamazon by RuPaul",
    "Party in the U.S.A by Miley Cyrus",
    "Only Girl (In The World) by Rihanna",
    "When I Grow Up by Pussycat Dolls",
    "Oops!...I Did It Again by Britney Spears",
    "Take Me Home by Cher",
    "I'm So Excited by The Pointer Sisters",
    "Whip My Hair by Willow Smith",
    "Ain't Nothin' Going on but the Rent by Gwen Guthrie",
    "Cold Hearted by Paula Abdul",
    "(It Takes) Two To Make It Right by Seduction",
    "Malambo No. 1 by Yma Sumac",
    "The Beginning by RuPaul",
    "Express Yourself by Madonna",
    "Turn The Beat Around by Vicky Sue Robinson",
    "Shake it Up by Selena Gomez",
    "I'm Every Woman by Chaka Khan",
    "Head to Toe by Lisa Lisa & Cult Jam",
    "Whatta Man by Salt-n-Pepa feat. En Vogue",
    "Point of No Return by Exposé",
    "Stupid Girls by P!nk",
    "Vibeology by Paula Abdul",
    "Think by Aretha Franklin",
    "Stronger (What Doesn't Kill You) by Kelly Clarkson",
    "Sissy That Walk by RuPaul",
    "Geronimo by RuPaul",
    "Twist of Fate by Olivia Newton-John",
    "I Was Gonna Cancel by Kylie Minogue",
    "Dreaming by Blondie",
    "Lovergirl by Teena Marie",
    "Break Free by Ariana Grande",
    "No More Lies by Michel'le",
    "I Think We're Alone Now by Tiffany",
    "Really Don't Care by Demi Lovato",
    "Show Me Love by Robin S.",
    "Roar by Katy Perry",
    "Born Naked by RuPaul",
    "Applause by Lady Gaga",
    "I Will Survive by Gloria Gaynor",
    "Mesmerized by Faith Evans",
    "Call Me by Blondie",
    "Causing A Commotion by Madonna",
    "I Don't Care by Icona Pop",
    "And I Am Telling You I'm Not Going by Jennifer Holliday",
    "You Make Me Feel (Mighty Real) by Sylvester",
    "The Realness by RuPaul",
    "Love Shack by The B-52's",
    "Holding Out For A Hero by Bonnie Tyler",
    "I Wanna Go by Britney Spears",
    "Woman Up by Meghan Trainor",
    "Music by Madonna",
    "Finally by Cece Peniston",
    "Baby I'm Burnin' by Dolly Parton",
    "Greedy by Ariana Grande",
    "Cool For The Summer by Demi Lovato",
    "Macho Man by The Village People",
    "U Wear It Well by RuPaul",
    "So Emotional by Whitney Houston",
    "It's Not Right But It's Okay by Whitney Houston",
    "Ain't No Other Man by Christina Aguilera",
    "Best Of My Love by The Emotions",
    "Celebrity Skin by Hole",
    "Pound The Alarm by Nicki Minaj",
    "Man! I Feel Like A Woman by Shania Twain",
    "I'm Coming Out by Diana Ross",
    "Cut To The Feeling by Carly Rae Jepsen",
    "Groove Is In The Heart by Deee-Lite",
    "New Attitude by Patti LaBelle",
    "Good As Hell by Lizzo",
    "Nasty Girl by Vanity 6",
    "Call Me Mother by RuPaul",
    "Nasty by Janet Jackson",
    "If by Janet Jackson",
    "Bang Bang by Jessie J, Ariana Grande and Nicki Minaj",
    "Best of Both Worlds by Hannah Montana",
    "Work Bitch by Britney Spears",
    "Waiting For Tonight by Jennifer Lopez",
    "Living in America by James Brown",
    "I'm Your Baby Tonight by Whitney Houston",
    "Last Dance by Donna Summer",
    "Strut by Sheena Easton",
    "Sorry Not Sorry by Demi Lovato",
    "Hood Boy by Fantasia",
    "No More Drama by Mary J. Blige",
    "No Scrubs by TLC",
    "Pride: A Deeper Love by Aretha Franklin",
    "Bootylicious by Destiny's Child",
    "SOS by Rihanna",
    "The Edge of Glory by Lady Gaga",
    "Starships by Nicki Minaj",
    "Call Your Girlfriend by Robyn",
    "Problem by Ariana Grande and Iggy Azalea",
    "S&M by Rihanna",
    "Heart to Break by Kim Petras",
    "Let It Go by Caissie Levy",
    "Burning Up by Madonna",
    "This Is My Night by Chaka Khan",
    "Firework by Katy Perry",
    "Kill The Lights by Alex Newell",
    "1999 by Prince",
    "On The Floor by Jennifer Lopez and Pitbull",
    "Bring Back My Girls by RuPaul",
    "Survivor by Destiny's Child",
    "Call Me Maybe by Carly Rae Jepsen",
    "The Pleasure Principle by Janet Jackson",
    "Rumors by Lindsay Lohan",
    "Ex's & Oh's by Elle King",
    "Lady Marmalade by Christina Aguilera, Lil' Kim, Mya & Pink",
    "Break My Heart by Dua Lipa",
    "If U Seek Amy by Britney Spears",
    "100% Pure Love by Crystal Waters",
    "Fancy by Iggy Azalea and Charli XCX",
    "Hit 'Em Up Style (Oops!) by Blue Cantrell",
    "Whole Lotta Woman by Kelly Clarkson",
    "BO$$ by Fifth Harmony",
    "Fascinated by Company B",
    "My Humps by Black Eyed Peas",
    "No Tears Left To Cry by Ariana Grande",
    "Strong Enough by Cher",
    "I Learned from the Best by Whitney Houston",
    "Gimme More by Britney Spears",
    "Till the World Ends by Britney Spears",
    "Turn Me On by David Guetta and Nicki Minaj",
    "Ignorance by Paramore",
    "Tightrope by Janelle Monae",
    "In The Next Life by Kim Petras",
    "Dancing Queen by ABBA",
    "Bring Me To Life by Evanescence",
    "Sk8er Boi by Avril Lavigne",
    "Kiss by Prince",
    "Hung Up by Madonna",
    "Cannibal by Kesha",
    "Candyman by Christina Aguilera",
    "Bohemian Rhapsody by Queen",
    "Venus by Lady Gaga",
    "Hair by Lady Gaga",
    "Dancing Queen by ABBA",
    "STFU by Rina Sawayama",
    "HOT HOT by Bree Runway",
    "I Can Love You by Mary J. Blige and Lil Kim",
    "Superbass by Nicki Minaj",
    "Can't Get You Out of My Head by Kylie Minogue",
    "Misery Business by Paramore",
    "The Promise by Girls Aloud",
    "Star Love by Cheryl Lynn",
    "Freeway of Love by Aretha Franklin",
    "Tell It To My Heart by Taylor Dayne",
    "Don't Rush Me by Taylor Dayne",
    "Dirrty by Christina Aguilera",
    "34+35 by Ariana Grande",
    "Barbie Girl by Aqua",
    "Va Va Voom by Nicki Minaj",
    "Hallucinate by Dua Lipa",
    "Bubblegum Bitch by MARINA",
    "Boss Bitch by Doja Cat",
    "Hopelessly Devote to You by Olivia Newton John",
    "Your Disco Needs You by Kylie Minogue",
    "Froot by MARINA",
    "She Works Hard For The Money by Donna Summer",
    "Supernova by Carly Rae Jepsen",
    "Detention by Melanie Martinez",
    "Complicated by Avril Lavigne",
    "So What by P!nk",
    "Good 4 U by Olivia Rodrigo",
    "Take A Chance On Me by ABBA",
    "Casanova by Allie X",
    "TIk Tok by Kesha",
    "Telefone by Lady Gaga ft. Beyoncé",
    "Heart of Glass by Blondie",
    "When I Think of You by Janet Jackson",
    "Prisoner by Miley Cyrus (ft. Dua Lipa)",
    "Homemade Dynamite by Lorde",
    "claws by Charli XCX",
    "NASA by Ariana Grande",
    "Say So by Doja Cat",
    "Captain Hook by Megan Thee Stallion",
    "Pynk by Janelle Monaé (ft. Grimes)",
    "Into the Groove by Madonna",
    "Cool Girl by Tove Lo",
    "Break The Ice by Britney Spears",
    "Still Into You by Paramore",
    "Vroom Vroom by Charlie XCX",
    "XS by Rina Sawayama",
    "Teenage Dream by Katy Perry",
    "Unwritten by Natasha Bedingfield",
    "Hollaback Girl by Gwen Stefani",
    "Miss You Much by Janet Jackson",
    "I Feel Love by Donna Summer",
    "Don't Stop The Music by Rihanna",
    "Love On The Brain by Rihanna",
    "Valerie by Amy Winehouse",
    "Killer Queen by Queen",
    "Ribs by Lorde",
    "Solar Power by Lorde",
    "Jerome by Lizzo",
    "Kinky by Kesha",
    "G.U.Y by Lady Gaga",
    "Waka Waka (This Time For Africa) by Shakira",
    "Dangerous Woman by Ariana Grande",
    "Whenever, Whenever by Shakira",
    "Lowlife by Poppy",
    "Conqueror by Estelle",
    "Dynasty by Rina Sawayama",
    "Fergalicious by Fergie",
    "Meet Me Halfway by Black Eyed Peas",
    "I Say A Little Prayer by Aretha Franklin",
    "Aura by Lady Gaga",
    "Now That You Got It by Gwen Stefani",
    "Skyfall by Adele",
    "Back To Black by Amy Winehouse",
    "Tears Dry On Their Own by Amy Winehouse",
    "Seven Wonders by Fleetwood Mac",
    "Baby One More Time by Britney Spears",
    "Naked by Ava Max",
    "A Little Party Never Killed Nobody by Fergie",
    "Tears by Clean Bandit",
    "Work by Kelly Rowland",
    "Say My Name by Tove Styrke",
    "Do It by Chloe X Halle",
    "Like A Virgin by Madonna",
    "Chun Li by Nicki Minaj",
    "ATM by Bree Runway",
    "Star Love by Cheryl Lynn",
    "Express by Christina Aguillera",
    "Kill V. Main by Grimes",
    "Taki Taki by DJ Snake (ft. Selena Gomez, Cardi B)",
    "Black Cat by Janet Jackson",
    "Tainted Love by Gloria Jones",
    "Private Dancer by Tina Turner",
    "Sweet Dreams by Beyoncé",
    "Kiss Me More by Doja Cat (ft. SZA)",
    "Take A Chance On Me by ABBA",
    "Mine by Slayyyter",
    "Baby One More Time by Britney Spears",
    "Troubled Paradise by Slayyyter",
    "Swine by Lady Gaga",
    "Vacation by GRL",
    "Alive by SIA",
    "Now That I Found You by Carly Rae Jepsen",
    "IDGAF by Dua Lipa",
    "In My Bed by Amy Winehouse",
    "Get Outta My Way by Kylie Minogue",
    "I Drove All Night by Celine Dion",
    "Bad Bitch Tip by LaLa Ri",
    "Run The World (Girls) by Beyoncé",
    "Focus by Charli XCX",
    "Judas by Lady Gaga",
    "Circus by Britney Spears",
    "Buttons by The Pussycat Dolls",
    "Venom by Slayyyter",
    "Shut Up And Drive by Rihanna",
    "Dollhouse by Melanie Martinez",
    "Brick By Boring Brick by Paramore",
    "How I Feel About You by Miranda Cosgrove",
    "Real Love by Clean Bandit & Jess Glyne",
    "Queen Of The Night by Whitney Houston",
    "Lucky Star by Madonna",
    "Good Girl by Carrie Underwood",
    "WTF Do I Know by Miley Cyrus",
    "Say So by Doja Cat",
    "Soulmate by Lizzo",
    "Bitch I'm Madonna by Madonna",
    "Hold My Hand by Jess Glyne",
    "Not Myself Tonight by Christina Aguillera",
    "Boys by Lizzo",
    "Same Old Fool by Dolly Parton",
    "Fantasy by Mariah Carey",
    "What You Get Is What You See by Tina Turner",
    "All About That Bass by Meghan Trainor",
    "Edge Of Seventeen by Stevie Nicks",
    "Chandelier by SIA",
    "Comme Des Garçon by Rina Sawayama",
    "See You Again by Miley Cyrus",
    "Spice Up Your Life by Spice Girls"
];
var lsSongs = __spreadArray([], allLsSongs);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(QueenA, QueenB) {
        var _this = this;
        var Name;
        if (QueenA == kasha)
            Name = "Team Mrs. " + QueenB._name.split(" ")[0] + " Davis";
        else if (QueenB == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB) == latrice && ((QueenA && QueenB) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB) == yara && ((QueenA && QueenB) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB) == chad && ((QueenA && QueenB) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB) == ninaf && ((QueenA && QueenB) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB) == raven && ((QueenA && QueenB) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB) == mimi && ((QueenA && QueenB) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        else if (QueenA._name.split(' ')[0].length > 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0];
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0];
        else
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        _this = _super.call(this, Name, ((QueenA._actingStat + QueenB._actingStat) / 2), ((QueenA._comedyStat + QueenB._comedyStat) / 2), ((QueenA._danceStat + QueenB._danceStat) / 2), ((QueenA._designStat + QueenB._designStat) / 2), ((QueenA._improvStat + QueenB._improvStat) / 2), ((QueenA._runwayStat + QueenB._runwayStat) / 2), 0) || this;
        _this.QueenA = QueenA;
        _this.QueenB = QueenB;
        return _this;
    }
    return Team;
}(Queen));
function teamsScreen() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Pair time!");
    screen.createParagraph("After all the queens enter the werkroom, they now have to choose their pairs!");
    screen.createHorizontalLine();
    var teamList = [];
    for (var i = 0; i < totalCastSize / 2; i++) {
        var indexA = randomNumber(0, currentCast.length - 1);
        var indexB = randomNumber(0, currentCast.length - 1);
        while (indexB == indexA)
            indexB = randomNumber(0, currentCast.length - 1);
        var QueenA = currentCast[indexA];
        var QueenB = currentCast[indexB];
        var team_1 = new Team(QueenA, QueenB);
        screen.createBold(QueenA.getName() + " and " + QueenB.getName() + " formed " + team_1.getName() + "!");
        teamList.push(team_1);
        currentCast.splice(currentCast.indexOf(QueenA), 1);
        currentCast.splice(currentCast.indexOf(QueenB), 1);
    }
    currentCast = __spreadArray([], teamList);
    totalCastSize = currentCast.length;
    screen.createButton("Proceed", "miniChallenge()");
}
