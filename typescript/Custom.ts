let customCast: Array<Queen> = [];

function addQueen() {
    let name: string = (<HTMLInputElement>document.getElementById("queenName")).value;
    let acting: number = (<HTMLInputElement>document.getElementById("actingStat")).valueAsNumber;
    let comedy: number = (<HTMLInputElement>document.getElementById("comedyStat")).valueAsNumber;
    let dance: number = (<HTMLInputElement>document.getElementById("danceStat")).valueAsNumber;
    let design: number = (<HTMLInputElement>document.getElementById("designStat")).valueAsNumber;
    let improv: number = (<HTMLInputElement>document.getElementById("improvStat")).valueAsNumber;
    let runway: number = (<HTMLInputElement>document.getElementById("runwayStat")).valueAsNumber;
    let lipsync: number = (<HTMLInputElement>document.getElementById("lipsyncStat")).valueAsNumber;

    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }

    for (let i = 0; i < customCast.length; i++) {
        if (name == customCast[i].getName()) {
            window.alert("Don't use queens with the same name!");
            return;
        }
    }

    customCast.push(new Queen(name, acting, comedy, dance, design, improv, runway, lipsync));

    let list = document.getElementById("cast");
    let queen = document.createElement("option");
    queen.text = name;
    list!.appendChild(queen);
}

function removeQueen() {
    let list: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("cast"));
    let queen: string = list.options[list.selectedIndex].value;

    for (let i = 0; i < customCast.length; i++) {
        if (queen == customCast[i].getName())
            customCast.splice(customCast.indexOf(customCast[i]), 1);
    }

    list.options[list.selectedIndex].remove();
}

function customStartSimulation() {
    if (customCast.length == 0) {
        window.alert("Your cast is empty!")
        return;
    }

    currentCast = customCast;
    totalCastSize = currentCast.length;

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

function preQueens(): void {
    let select = <HTMLSelectElement>document.getElementById("preQueens");

    for (let i = 0; i < allQueens.length; i++)
    {
        let option = document.createElement("option");
        option.innerHTML = allQueens[i].getName();
        select.appendChild(option);
    }
}

function addPreQueen(): void {
    let select = <HTMLSelectElement>document.getElementById("preQueens");
    let value = select.options[select.selectedIndex].value;

    for (let i = 0; i < allQueens.length; i++) {
        if (value == allQueens[i].getName()) {
            customCast.push(allQueens[i]);

            let list = document.getElementById("cast");
            let queen = document.createElement("option");
            queen.text = allQueens[i].getName();
            list!.appendChild(queen);
        }
    }
}

function randomizeStats(): void {
    let stats = <HTMLCollection>document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        (<HTMLInputElement>stats[i]).value = randomNumber(0, 15).toString();
    }
}