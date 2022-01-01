function addQueen(): void {
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

    let customQueen: Queen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync);
    
    let sameName: boolean = false;

    for (let i = 0; i < allCustomQueens.length; i++)
        if (allCustomQueens[i].getName() == customQueen.getName()) {
            window.alert(`There's already a queen with the name ${customQueen.getName()}! Please use another name.`)
            sameName = true;
            break;
        }

    if (sameName == false) {
        allCustomQueens.push(customQueen);

        let announce: HTMLElement = <HTMLElement>document.getElementById("announce-new");
        announce.innerHTML = `${customQueen.getName()} added to the queen list!`;

        localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
        
        setTimeout(() => {
            document.location.reload();
        }, 1500);
    }
        
}

function customQueenSelectList(): void {
    let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("custom-remove");
    
    for (let i = 0; i < allCustomQueens.length; i++) {
        let option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option.innerHTML = allCustomQueens[i].getName();
        option.value = i.toString();
        select.appendChild(option);
    }
}

function removeCustomQueen(): void {
    let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("custom-remove");
    let index: number = parseInt(select.options[select.selectedIndex].value);

    let announce: HTMLElement = <HTMLElement>document.getElementById("announce-remove");
    announce.innerHTML = `${allCustomQueens[index].getName()} removed from the queen list!`;
    allCustomQueens.splice(index, 1);

    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));

    setTimeout(() => {
        document.location.reload();
    }, 1500);
}

function randomizeStats(): void {
    let stats = <HTMLCollection>document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        (<HTMLInputElement>stats[i]).value = randomNumber(0, 15).toString();
    }
}