//checa por retornantes:
function CheckForReturning(): boolean {
    if (eliminatedCast.length == 0 && currentCast.length > totalCastSize - 3 && currentCast.length < 6)
        return false;
    else {
        if (doubleSashay == false) {
            if (randomNumber(0, 100) <= 5 && returningQueen == false) {
                returningQueen = true;
                return true;
            }
    
            return false;
    
        } else {
            if (randomNumber(0, 100) <= 85 && returningQueen == false) {
                returningQueen = true;
                return true;
            }
    
            return false;
        }
    }
}

function returningQueenScreen(): void {
    let screen = new Scene();
    screen.clean();

    screen.createHeader("A lovely surprise...");

    if (randomNumber(0, 100) <= 50)
        queenReturns();
    else
        queenReturnsVote();
    
    screen.createButton("Proceed", "newEpisode()");
}

function queenReturns() {
    let screen = new Scene();

    screen.createParagraph("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");

    let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];

    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);

    screen.createBold(queen.getName());
}

function queenReturnsVote() {
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