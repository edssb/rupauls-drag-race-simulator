"use strict";
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
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && all_stars) {
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
        if (totalCastSize != 8 && currentCast.length == 8) {
            result.innerHTML = winner + " won the reading challenge!";
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            result.innerHTML = winner + " won the puppet challenge!";
        }
        else {
            result.innerHTML = winner + " won the mini-challenge!";
        }
    };
    return MiniChallenge;
}());
//make the mini-challenge:
var actingChallengeCounter = 0;
var comedyChallengeCounter = 0;
var danceChallengeCounter = 0;
var designChallengeCounter = 0;
var improvChallengeCounter = 0;
var isDesignChallenge = false;
var rusicalCounter = false;
var ballCounter = false;
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
    if (currentCast.length == totalCastSize && top3 || currentCast.length == totalCastSize && top4)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    else if (currentCast.length == totalCastSize && totalCastSize)
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    else if (totalCastSize <= 10 && currentCast.length == 9)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    else if (currentCast.length == totalCastSize - 4 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    else if (currentCast.length > 6 && randomNumber(0, 20) == 20 && !rusicalCounter)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    else if (currentCast.length == 6 && randomNumber(0, 15) == 15)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    else if (currentCast.length == 5 && top4)
        miniChallengeScreen.createButton("Proceed", "rumix()");
    else if (currentCast.length == 4 && top3)
        miniChallengeScreen.createButton("Proceed", "ball()");
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
//challenges:
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
        if (currentCast.length == 6)
            description.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!";
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
}
//TODO: team challenges here
//special challenges
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
            desc1[desc1["Sweet 16"] = 4] = "Sweet 16";
            desc1[desc1["Black and white"] = 5] = "Black and white";
            desc1[desc1["Winter"] = 6] = "Winter";
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
}
//performance:
function queensPerformances() {
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
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && all_stars)
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
            currentCast[i].runwayScore = -5;
        }
    }
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && top3)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && top3)
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && all_stars)
        runwayScreen.createButton("Proceed", "finaleASJudging()");
}
var currentCast = [];
var eliminatedCast = [];
var safeQueens = [];
var topQueens = [];
var bottomQueens = [];
var top2 = [];
var doubleShantay = false;
var doubleSashay = false;
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
    if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top3)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && all_stars)
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");
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
    screen.createButton("Proceed", "finaleLipSyncs()");
}
function finaleLipSyncs() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("The Lip-Syncs...");
    screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    for (var i = 0; i < firstLS.length; i++) {
        firstLS[i].getASLipsync();
    }
    firstLS.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    finalLS.push(firstLS[0]);
    firstLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(firstLS[1]);
    screen.createBold(firstLS[0].getName() + ", shantay you stay.");
    screen.createBold(firstLS[1].getName() + ", sashay away...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
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
    screen.createButton("Proceed", "finaleFinale()");
}
function contestantProgress() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    if (top3 || all_stars)
        screen.createBold(currentCast[0].getName() + ": ", "winTR");
    else if (top4)
        screen.createBold(finalLS[0].getName() + ": ", "winTR");
    var winTR = document.querySelector("b#winTR");
    if (top3 || all_stars)
        for (var i = 0; i < currentCast[0].trackRecord.length; i++)
            winTR.innerHTML += currentCast[0].trackRecord[i] + " ";
    else if (top4)
        for (var i = 0; i < finalLS[0].trackRecord.length; i++)
            winTR.innerHTML += finalLS[0].trackRecord[i] + " ";
    for (var i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(eliminatedCast[i].getName() + ": ", "TR" + i);
        var TR = document.querySelector("b#TR" + i);
        for (var k = 0; k < eliminatedCast[i].trackRecord.length; k++)
            TR.innerHTML += eliminatedCast[i].trackRecord[k] + " ";
    }
    screen.createButton("Simulate again!", "location.reload()");
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
}
function predefCast(cast, format) {
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "all-stars")
        all_stars = true;
    newEpisode();
}
var top3 = false;
var top4 = false;
var all_stars = false;
function startSimulation() {
    //get selected names and compare them to the all queens list:
    for (var i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        var select = document.getElementById(i.toString());
        var value = select.options[select.selectedIndex].text;
        for (var k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName())
                currentCast.push(allQueens[k]);
        }
    }
    if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        var select = document.getElementById("format");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        newEpisode();
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
function judging() {
    if (currentCast.length > 11 && currentCast.length == totalCastSize) {
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
    else if (currentCast.length == 6) {
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        for (var i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        if (!all_stars)
            winAndBtm2();
        else
            top2AndBtm();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        if (!all_stars)
            winAndBtm2();
        else
            top2AndBtm();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        if (!all_stars)
            winAndBtm2();
        else
            top2AndBtm();
    }
}
function judgingScreen() {
    var judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
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
            currentCast[i].addToTrackRecord("SAFE");
        }
    safeQueens.innerHTML += "you are safe.";
    if (!all_stars)
        judgingScreen.createButton("Proceed", "winAndBtm2()");
    else
        judgingScreen.createButton("Proceed", "top2AndBtm()");
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
    if (topQueens[0].performanceScore == topQueens[1].runwayScore) {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[1].addToTrackRecord("WIN");
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
        bottomQueens[0].unfavoritism += 3;
        bottomQueens[1].unfavoritism += 3;
        bottomQueens.splice(0, 2);
    }
    else if (bottomQueens.length == 3) {
        for (var i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort(function (a, b) { return (a.performanceScore - b.performanceScore); });
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 3;
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
function top2AndBtm() {
    var screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
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
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (var i = 0; i < top2.length; i++) {
        top2[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
        screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + "'s lipstick!");
    }
    screen.createButton("Proceed", "asLipSync()");
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
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    var score1 = bottomQueens[0].lipsyncScore;
    var score2 = bottomQueens[1].lipsyncScore;
    if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay) {
        screen.createBold("Condragulations, shantay you both stay!!");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 8;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 8;
        doubleShantay = true;
    }
    else if (score1 < 3 && score2 < 3 && randomNumber(0, 100) <= 20 && !doubleSashay && currentCast.length > 5) {
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
        doubleSashay = true;
        bottomQueens[0].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[0]);
        currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    else if (randomNumber(0, 1000) >= 999) {
        var disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. I must ask you to sashay away.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 8;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 8;
        disqualifiedQueen.trackRecord[disqualifiedQueen.trackRecord.length - 1] += "+DISQ";
        eliminatedCast.unshift(disqualifiedQueen);
        currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
    }
    else {
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
function asLipSync() {
    for (var i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
    var screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    top2[0].addToTrackRecord("WIN");
    top2[0].favoritism += 8;
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
    for (var i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
    }
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
var akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 10);
var bebe = new Queen("BeBe Zahara Benet", 7, 7, 7, 10, 7, 10, 7);
var jade = new Queen("Jade Sotomeyer", 3, 3, 6, 7, 3, 7, 7);
var ninaf = new Queen("Nina Flowers", 4, 4, 5, 11, 3, 10, 4);
var ongina = new Queen("Ongina", 10, 7, 7, 9, 10, 8, 8);
var rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 6);
var shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 9, 6);
var tammie = new Queen("Tammie Brown", 10, 8, 5, 7, 8, 7, 6);
var victoria = new Queen("Victoria 'Porkchop' Parker", 10, 8, 4, 3, 9, 5, 4);
var us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//SEASON 2:
var jessica = new Queen("Jessica Wild", 8, 9, 7, 7, 8, 9, 9);
var jujubee = new Queen("Jujubee", 9, 10, 8, 6, 10, 6, 14);
var morgan = new Queen("Morgan McMichaels", 6, 6, 8, 8, 3, 10, 9);
var mystique = new Queen("Mystique Summers Madison", 4, 6, 3, 3, 3, 6, 6);
var nicole = new Queen("Nicole Paige Brookes", 4, 4, 6, 6, 4, 7, 7);
var pandora = new Queen("Pandora Boxx", 9, 11, 7, 6, 10, 7, 9);
var raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 10);
var sahara = new Queen("Sahara Davenport", 9, 7, 10, 4, 6, 7, 11);
var shangela = new Queen("Shangela", 10, 11, 7, 2, 10, 6, 9);
var sonique = new Queen("Sonique", 8, 7, 10, 9, 5, 9, 8);
var tatianna = new Queen("Tatianna", 8, 10, 7, 8, 10, 8, 10);
var tyra = new Queen("Tyra Sanchez", 9, 4, 7, 11, 3, 9, 9);
var us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];
//SEASON 3:
var alexis = new Queen("Alexis Mateo", 10, 11, 8, 6, 9, 7, 12);
var carmen = new Queen("Carmen Carrera", 3, 2, 6, 4, 2, 5, 8);
var delta = new Queen("Delta Work", 8, 7, 5, 5, 5, 7, 9);
var india = new Queen("India Ferrah", 6, 4, 8, 8, 3, 10, 7);
var manila = new Queen("Manila Luzon", 10, 9, 8, 11, 9, 10, 10);
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
var dida = new Queen("Dida Ritz", 6, 7, 7, 5, 7, 7, 10);
var jiggly = new Queen("Jiggly Caliente", 6, 4, 7, 3, 3, 6, 9);
var kenya = new Queen("Kenya Michaels", 5, 6, 6, 6, 4, 7, 8);
var leshauwn = new Queen("Lashauwn Beyond", 5, 4, 7, 11, 5, 9, 8);
var latrice = new Queen("Latrice Royale", 9, 9, 9, 6, 9, 5, 9);
var madame = new Queen("Madame LaQueer", 7, 7, 6, 6, 7, 7, 7);
var milan = new Queen("Milan", 5, 5, 9, 6, 5, 8, 9);
var phiphi = new Queen("Phi Phi O'Hara", 9, 7, 8, 9, 9, 10, 8);
var princess = new Queen("The Princess", 4, 4, 5, 8, 4, 7, 8);
var sharon = new Queen("Sharon Needles", 7, 8, 4, 9, 7, 8, 7);
var willam = new Queen("Willam", 8, 9, 7, 10, 8, 9, 8);
var us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, sharon, willam];
//ALL STARS 1:
var allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];
//SEASON 5:
var alaska = new Queen("Alaska", 10, 11, 7, 8, 9, 9, 9);
var alyssa = new Queen("Alyssa Edwards", 5, 9, 12, 5, 9, 7, 9);
var coco = new Queen("Coco Montrese", 4, 9, 9, 8, 6, 9, 14);
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
var bianca = new Queen("Bianca Del Rio", 11, 11, 8, 10, 10, 9, 9);
var courtney = new Queen("Courtney Act", 8, 8, 9, 8, 8, 9, 9);
var darienne = new Queen("Darienne Lake", 9, 9, 7, 4, 8, 7, 11);
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
var ginger = new Queen("Ginger Minj", 9, 10, 8, 7, 9, 7, 11);
var jaidynn = new Queen("Jaidynn Diore Fierce", 8, 9, 7, 6, 8, 7, 9);
var jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 7);
var kandy = new Queen("Kandy Ho", 4, 5, 7, 5, 4, 7, 9);
var katya = new Queen("Katya", 9, 9, 9, 7, 9, 9, 9);
var kennedy = new Queen("Kennedy Davenport", 9, 9, 8, 7, 9, 6, 11);
var max = new Queen("Max", 10, 4, 6, 8, 3, 8, 3);
var fame = new Queen("Miss Fame", 4, 4, 5, 10, 3, 9, 4);
var kasha = new Queen("Ms. Kasha Davis", 8, 8, 7, 7, 8, 8, 9);
var pearl = new Queen("Pearl", 3, 9, 8, 9, 8, 8, 5);
var sashab = new Queen("Sasha Belle", 6, 6, 6, 6, 6, 6, 6);
var tempest = new Queen("Tempest DuJour", 8, 8, 7, 3, 6, 7, 6);
var trixie = new Queen("Trixie Mattel", 10, 6, 6, 9, 9, 9, 6);
var violet = new Queen("Violet Chachki", 8, 7, 7, 14, 7, 10, 8);
var us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];
//SEASON 8:
var acid = new Queen("Acid Betty", 8, 3, 7, 9, 2, 8, 7);
var bob = new Queen("Bob The Drag Queen", 12, 14, 6, 6, 12, 7, 10);
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
var akeria = new Queen("Akeria C. Davenport", 10, 9, 9, 8, 8, 9, 9);
var ariel = new Queen("Ariel Versace", 6, 8, 7, 6, 8, 8, 8);
var brooke = new Queen("Brooke Lynn Hytes", 8, 6, 10, 8, 4, 9, 9);
var honeyd = new Queen("Honey Davenport", 6, 6, 7, 6, 6, 9, 4);
var kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 7);
var mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 6, 6, 6, 8, 8);
var ninaw = new Queen("Nina West", 10, 7, 6, 6, 9, 7, 5);
var plastique = new Queen("Plastique Tiara", 7, 7, 8, 9, 5, 8, 6);
var rajah = new Queen("Ra'Jah O'Hara", 7, 8, 10, 10, 6, 10, 12);
var scarlet = new Queen("Scarlet Envy", 10, 8, 6, 9, 7, 9, 8);
var shuga = new Queen("Shuga Cain", 8, 7, 7, 5, 7, 10, 7);
var silky = new Queen("Silky Nutmeg Ganache", 8, 9, 7, 6, 9, 7, 7);
var yvie = new Queen("Yvie Oddly", 10, 5, 8, 9, 5, 8, 11);
var us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];
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
    akeria, ariel, brooke, honeyd, kahanna, ninaw, plastique, rajah, scarlet, shuga, silky, yvie
];
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
