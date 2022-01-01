let randomReturn: boolean = false;
let voteReturn: boolean = false;
let rurupalooza: boolean = false;
let smackdown: boolean = false;

function CheckForReturning(): boolean {
    if ((randomReturn || voteReturn) == true && currentCast.length < totalCastSize - 3 && returningQueen == false && eliminatedCast.length > 0) {
        if (randomNumber(0, 100) < 5 * episodeCount || currentCast.length == 4) {
            returningQueen = true;
            return true;
        }
        return false;
    }

    if (smackdown && currentCast.length == 4 && (all_stars || top4 || lipsync_assassin) && returningQueen == false || smackdown && currentCast.length == 3 && returningQueen == false) {
        returningQueen = true;
        return true;
    }

    return false;
}

function returningQueenScreen(): void {
    let screen = new Scene();
    screen.clean();

    screen.createHeader("A lovely surprise...");

    if (randomReturn)
        queenReturns();
    if (voteReturn)
        queenReturnsVote();
    if (smackdown)
        lipsyncSmackdown();
    
    screen.createButton("Proceed", "newEpisode()");
}

function queenReturns(): void {
    let screen = new Scene();

    screen.createParagraph("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");

    let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];

    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);

    screen.createBold(queen.getName());
}

function queenReturnsVote(): void {
    let screen = new Scene();

    screen.createParagraph("I've decided that one of my quens deserve a second chance... you'll vote for which of the eliminated queens will come back!");

    screen.createHorizontalLine();
    screen.createBold("The queens vote...");

    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        currentCast[i].lipstick.votes++;
        screen.createParagraph(`${currentCast[i].getName()} voted for ${currentCast[i].lipstick.getName()}!`);
    }

    for (let i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(`${eliminatedCast[i].getName()}: ${eliminatedCast[i].votes.toString()} votes`);
    }

    screen.createHorizontalLine();

    let queen = [...eliminatedCast].sort((a, b) => b.votes - a.votes)[0];

    screen.createBold(`${queen.getName()} returns to the competition!`);

    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}

function lipsyncSmackdown(): void {
    let screen: Scene = new Scene();

    screen.createBold("All eliminated queens will return for a lip-sync smackdown tournament!");
    
    let currentWinner: Queen = eliminatedCast[eliminatedCast.length - 1];
    let lipsync: Array<Queen> = [currentWinner, eliminatedCast[eliminatedCast.length - 2]];

    for (let i = eliminatedCast.length - 2; i >= 0; i--) {
        screen.createHorizontalLine();
        screen.createImage(lipsync[0].image);
        screen.createImage(lipsync[1].image);
        screen.createParagraph(`${lipsync[0].getName()} and ${lipsync[1].getName()} will lip-sync`);
        lsSong();
        currentWinner = smackdownLS(lipsync);

        screen.createImage(currentWinner.image, "royalblue");
        if (i - 1 >= 0)
            screen.createBold(`${currentWinner.getName()}, condragulations, you'll proceed to the next stage!`);
        else
            screen.createBold(`${currentWinner.getName()}, condragulations, you can return to the competition!`);
        
        screen.createImage(lipsync[1].image, "orange");
        screen.createParagraph(`${lipsync[1].getName()}, thank you for participating, now sashay away...`);

        if (i - 1 < 0)
            break
        else {
            lipsync = [currentWinner, eliminatedCast[i - 1]];
        }
    }

    currentWinner.addToTrackRecord("WIN");
    eliminatedCast.splice(eliminatedCast.indexOf(currentWinner), 1);    

    episodeChallenges.push("Smackdown");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].addToTrackRecord("SAFE");
    currentCast.push(currentWinner);

    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord("LOSS");
}

function smackdownLS(queens: Array<Queen>): Queen {
    for (let i = 0; i < queens.length; i++) {
        queens[i].getASLipsync();
    }
    queens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));

    return queens[0];
}