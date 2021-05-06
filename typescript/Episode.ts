let currentCast: Array<Queen> = [];
let eliminatedCast: Array<Queen> = [];
let safeQueens: Array<Queen> = [];
let topQueens: Array<Queen> = [];
let bottomQueens: Array<Queen> = [];

let top2: Array<Queen> = [];

let doubleShantay = false;
let doubleSashay = false;

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
}