let totalCastSize: number;

function randomNumber(min: number, max: number): number {
    let randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

function sortPerformances(cast: Array<Queen>) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}

//generate spaces to insert cast:
function generateSpace() {
    let castSize = (<HTMLInputElement>document.querySelector("input#castSize")).valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");

    castSelection!.innerHTML = '';

    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList")
            select.setAttribute("id", i.toString());
            
            for (let k = 0; k < allQueens.length; k++) {
                let option = document.createElement("option");
                option.innerHTML = allQueens[k].getName();

                select.add(option);
            }
            
            let br = document.createElement("br");

            castSelection!.appendChild(select);
            castSelection!.appendChild(br);
        }

        let button = document.createElement("button");
        button.setAttribute("onclick", "randomize()");
        button.innerHTML = "Randomize";
        castSelection!.append(button);
}

let top3: boolean = false;
let top4: boolean = false;
let all_stars: boolean = false;
let lipsync_assassin: boolean = false;
let team: boolean = false;

function predefCast(cast: Array<Queen>, format: string, premiere: string = '') {
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
        allQueens = allQueens.filter(function (queen) {return queen.getLipSyncStat() >= 9});
        allQueens = allQueens.filter(function (queen) {return currentCast.indexOf(queen) == -1});
    }

    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    
    if ((<HTMLInputElement>document.getElementById("disableDouble")).checked == true)
        noDouble = true;
    if ((<HTMLInputElement>document.getElementById("disableReturn")).checked == true)
        noReturn = true;

    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}

let indexList: Array<number> = [];
//randomize cast selection
function randomize(): void {
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById(i.toString()));

        let index: number = randomNumber(0, select.options.length - 1);

        while (indexList.indexOf(index) != -1) {
            index = randomNumber(0, select.options.length - 1);
        }

        select.options.selectedIndex = index;
    }

    indexList = [];
}

function startSimulation(challenge: string = "") {
    //set challenge seasons
    if (challenge == "sweatshop")
        sweatshop = true;
    if (challenge == "chaos")
        chaos = true;

    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById(i.toString()));
        let value: string = select.options[select.selectedIndex].text;

        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName()) 
                currentCast.push(allQueens[k]);      
        }
    }
    
    if (currentCast.length == 0)
        window.alert("Your cast is empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        let select = (<HTMLSelectElement>document.getElementById("format"));
        let select2 = (<HTMLSelectElement>document.getElementById("premiere-format"));

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
            allQueens = allQueens.filter(function (queen) {return queen.getLipSyncStat() >= 8});
            allQueens = allQueens.filter(function (queen) {return currentCast.indexOf(queen) == -1});
            allQueensCopy = [...allQueens];
        }

        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;

        if ((<HTMLInputElement>document.getElementById("disableDouble")).checked == true)
            noDouble = true;
        if ((<HTMLInputElement>document.getElementById("disableReturn")).checked == true)
            noReturn = true;

        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars){
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            currentCast = [];
        } else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        } else if ((s6Premiere || s12Premiere || porkchopPremiere) && currentCast.length < 8) {
            window.alert("Double Premiere formats needs at least 10 queens!")
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;

            top4 = false;
            top3 = false;
            lipsync_assassin = false;
            all_stars = false;

            currentCast = [];
        } else if (s6Premiere || s12Premiere) {
            doublePremiere();
        } else if (porkchopPremiere) {
            porkchopLipsyncs();
        } else {
            newEpisode();
        }
    }
}

//see if there is two of the same queens:
function duplicateQueens(cast: Array<Queen>) {
    let valuesAlreadySeen = [];

    for (let i = 0; i < cast.length; i++) {
        let value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}

function shuffle(array: Array<Queen>): Array<Queen> {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
