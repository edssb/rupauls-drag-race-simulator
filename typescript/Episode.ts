let currentCast: Array<Queen|Team> = [];
let eliminatedCast: Array<Queen> = [];
let safeQueens: Array<Queen> = [];
let topQueens: Array<Queen> = [];
let bottomQueens: Array<Queen> = [];

let top2: Array<Queen> = [];

let doubleShantay = false;
let doubleSashay = false;

let episodeChallenges: Array<string> = [];
let episodeCount: number = 0;

let returningQueen: boolean = false;

let noDouble: boolean = false;

let s6Premiere: boolean = false;
let s12Premiere: boolean = false;
let porkchopPremiere: boolean = false;

let firstPremiere: boolean = false;
let secondPremiere: boolean = false;

//challenge seasons
let sweatshop: boolean = false;
let chaos: boolean = false;

function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    episodeCount++;

    let queensRemainingScreen = new Scene(); 

    if (episodeCount == 1 || premiereCounter <= 2 && (s12Premiere||porkchopPremiere||s6Premiere) || team) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Full cast");

        for (let i = 0; i < currentCast.length; i++) {
            queensRemainingScreen.createImage(currentCast[i].image);
            queensRemainingScreen.createBold(currentCast[i].getName());
        }
    } else {
        contestantProgress();
    }
    

    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && (top3 || team))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()")
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()");
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
    firstCast = [];
    secondCast = [];
    premiereCounter = 0;
    episodeCount = 0;
    onFinale = false;
    onTop4Finale = false;
    totalCastSize = currentCast.length;

    returningQueen = false;

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

    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}