class Scene {
    private _MainBlock: HTMLDivElement = <HTMLDivElement>document.querySelector("div#MainBlock");

    public clean(): void {
        this._MainBlock.innerHTML = '';
    }
    
    public createHeader(text: string): void {
        let header = document.createElement("h1");
        header.innerHTML = text;
        this._MainBlock.appendChild(header);
    }
    public createBigText(text: string): void {
        let big = document.createElement("big");
        big.innerHTML = text;
        this._MainBlock.appendChild(big);
    }
    public createParagraph(text: string, id: string = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    public createBold(text: string, id: string = '') {
        let p = document.createElement("p");
        
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.appendChild(bold);

        this._MainBlock.appendChild(p);
    }
    public createButton(text: string, method: string, id: string = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    }
    public createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
}