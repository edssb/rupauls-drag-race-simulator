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
            select.setAttribute("onchange", "setImage()");

            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());

            let p = document.createElement("p");
            p.appendChild(img);
            
            for (let k = 0; k < allQueens.length; k++) {
                let option = document.createElement("option");
                option.innerHTML = allQueens[k].getName();
                option.value = allQueens[k].image;

                select.add(option);
            }
            
            select.selectedIndex = randomNumber(0, allQueens.length - 1);

            let br = document.createElement("br");

            castSelection!.appendChild(p);
            castSelection!.appendChild(select);
            castSelection!.appendChild(br);
        }
    setImage();
}

function setImage(): void {
    let images: HTMLCollection = document.getElementsByClassName("images");

    for (let i = 0; i < images.length; i++) {
        let img: HTMLImageElement = (<HTMLImageElement>document.getElementById("image" + i.toString()));
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById(i.toString())); 

        img.src = select.options[select.selectedIndex].value;
    }
}

let top3: boolean = false;
let top4: boolean = false;
let all_stars: boolean = false;
let lipsync_assassin: boolean = false;
let team: boolean = false;

function predefCast(cast: Array<Queen>, format: string, premiere: string = '', returning: string = '') {
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

    if (returning == "return")
        randomReturn = true;
    else if (returning == "vote")
        voteReturn = true;
    else if (returning == "smackdown")
        smackdown = true;
    
    if ((<HTMLInputElement>document.getElementById("disableDouble")).checked == true)
        noDouble = true;

    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}

function startSimulation(challenge: string = "") {
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
        let select: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("format"));
        let select2: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("premiere-format"));
        let select3: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("returning"));

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
        
        if (select3.options[select3.selectedIndex].value == "random")
            randomReturn = true;
        else if (select3.options[select3.selectedIndex].value == "votes")
            voteReturn = true;
        else if (select3.options[select3.selectedIndex].value == "rurupalooza")
            rurupalooza = true;
        else if (select3.options[select3.selectedIndex].value == "smackdown")
            smackdown = true;

        if ((<HTMLInputElement>document.getElementById("disableDouble")).checked == true)
            noDouble = true;

        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars){
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            currentCast = [];
        } else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        } else if ((s6Premiere || s12Premiere || porkchopPremiere) && currentCast.length < 10) {
            window.alert("Double Premiere formats needs at least 10 queens!")
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;

            top4 = false;
            top3 = false;
            lipsync_assassin = false;
            all_stars = false;

            currentCast = [];
        } else if (team && (smackdown || voteReturn || randomReturn || s6Premiere || rurupalooza || s12Premiere || porkchopPremiere)) {
            window.alert("The team format isn't supported with any special premiere or returning formats, sorry!");
            team = false;
            smackdown = false;
            voteReturn = false;
            randomReturn = false;
            rurupalooza = false;
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
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
