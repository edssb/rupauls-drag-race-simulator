let currentCast: Array<Queen> = [];
let eliminatedCast: Array<Queen> = [];
let safeQueens: Array<Queen> = [];
let topQueens: Array<Queen> = [];
let bottomQueens: Array<Queen> = [];

let top2: Array<Queen> = [];

let doubleShantay = false;
let doubleSashay = false;

let episodeChallenges: Array<string> = [];

let returningQueen: boolean = false;

let noDouble: boolean = false;
let noReturn: boolean = false;

let s6Premiere: boolean = false;
let s12Premiere: boolean = false;

let firstPremiere: boolean = false;
let secondPremiere: boolean = false;

let firstPremiereCast: Array<Queen> = [];
let secondPremiereCast: Array<Queen> = [];

//challenge seasons
let sweatshop: boolean = false;

function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];

    //queens remaining screen:

    let queensRemainingScreen = new Scene(); 
    queensRemainingScreen.clean();
    queensRemainingScreen.createHeader("Queens remaining...");

    for (let i = 0; i < currentCast.length; i++) {
        queensRemainingScreen.createBold(currentCast[i].getName());
    }

    if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && (top3 || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()")
    else if (currentCast.length == 4 && all_stars)
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");

    //add an empty placement on eliminated queen's track records
    for (let i = 0; i < eliminatedCast.length; i++)
    eliminatedCast[i].addToTrackRecord('');
}

function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (let i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    
    if (top4) {
        currentCast.push(finalLS[0]);
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    
    currentCast.sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
    eliminatedCast = [];

    //clean track records
    for (let i = 0; i < currentCast.length; i++) {
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

    newEpisode();
}