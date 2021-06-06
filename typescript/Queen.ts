class Queen {
    private _name: string;
    private _actingStat: number;
    private _comedyStat: number;
    private _danceStat: number;
    private _designStat: number;
    private _improvStat: number;
    private _runwayStat: number;
    private _lipsyncStat: number;

    public trackRecord: Array<string> = [];
    public runwayScore: number = 0;
    public lipsyncScore: number = 0;
    public performanceScore: number = 0;
    public finaleScore: number = 0;
    public winCount: number = 0;
    public favoritism: number = 0;
    public unfavoritism: number = 0;

    public lipstick: Queen;
    public votes: number = 0;

    constructor(name: string, acting: number, comedy: number, dance: number, design: number, improv: number, runway: number, lipsync: number) {
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
    }

    private _calculateScores(min: number, max: number, stat: number = 0): number {
        let score = randomNumber(min, max);

        return score - stat;
    }

    public getName(): string {
        return this._name;
    }
    public getLipSyncStat(): number {
        return this._lipsyncStat;
    }

    public getActing(): void {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    public getComedy(): void {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    public getDance(): void {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    public getDesign(): void {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    public getImprov(): void {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    public getSnatch(): void {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    public getRusical(): void {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    public getBall(): void {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    public getRumix(): void {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    public getTalentShow(): void {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    public getFinale():void {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }

    public getRunway(): void {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    public getLipsync(): void {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    public getASLipsync(): void {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    public addToTrackRecord(placement: string): void {
        this.trackRecord.push(placement);
    }
}

//QUEENS:

//SEASON 1:

let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 12);
let bebe = new Queen("BeBe Zahara Benet", 7, 7, 7, 10, 7, 10, 9);
let jade = new Queen("Jade Sotomeyer", 3, 3, 6, 7, 3, 7, 7);
let ninaf = new Queen("Nina Flowers", 4, 4, 5, 11, 3, 10, 4);
let ongina = new Queen("Ongina", 10, 7, 7, 9, 10, 8, 8);
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5);
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 9, 7);
let tammie = new Queen("Tammie Brown", 10, 8, 5, 7, 8, 7, 6);
let victoria = new Queen("Victoria 'Porkchop' Parker", 10, 8, 4, 3, 9, 5, 4);
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];

//SEASON 2:
let jessica = new Queen("Jessica Wild", 8, 9, 7, 7, 8, 9, 9);
let jujubee = new Queen("Jujubee", 9, 10, 8, 6, 10, 6, 15);
let morgan = new Queen("Morgan McMichaels", 6, 6, 8, 8, 3, 10, 9);
let mystique = new Queen("Mystique Summers Madison", 4, 6, 3, 3, 3, 6, 6);
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 6, 6, 4, 7, 7);
let pandora = new Queen("Pandora Boxx", 9, 11, 7, 6, 10, 7, 9);
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 10);
let sahara = new Queen("Sahara Davenport", 9, 7, 10, 4, 6, 7, 11);
let shangela = new Queen("Shangela", 10, 11, 7, 2, 10, 6, 9);
let sonique = new Queen("Kylie Sonique Love", 8, 7, 12, 10, 6, 9, 8);
let tatianna = new Queen("Tatianna", 8, 10, 7, 8, 10, 8, 10);
let tyra = new Queen("Tyra Sanchez", 9, 4, 7, 11, 3, 9, 10);
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];

//SEASON 3:
let alexis = new Queen("Alexis Mateo", 10, 11, 8, 6, 9, 7, 12);
let carmen = new Queen("Carmen Carrera", 3, 2, 6, 4, 2, 5, 8);
let delta = new Queen("Delta Work", 8, 7, 5, 5, 5, 7, 9);
let india = new Queen("India Ferrah", 6, 4, 8, 8, 3, 10, 7);
let manila = new Queen("Manila Luzon", 10, 9, 8, 11, 9, 10, 11);
let mariah = new Queen("Mariah", 8, 5, 6, 8, 5, 9, 7);
let mimi = new Queen("Mimi Imfurst", 10, 8, 6, 9, 9, 8, 7);
let phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4);
let raja = new Queen("Raja", 9, 9, 7, 13, 9, 10, 11);
let stacey = new Queen("Stacey Layne Matthews", 6, 10, 5, 4, 9, 5, 9);
let venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2);
let yara = new Queen("Yara Sofia", 9, 10, 7, 10, 5, 10, 9);
let us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];

//SEASON 4:
let alisa = new Queen("Alisa Summers", 4, 4, 6, 2, 3, 5, 3);
let chad = new Queen("Chad Michaels", 9, 9, 8, 8, 9, 9, 9);
let dida = new Queen("Dida Ritz", 6, 7, 7, 5, 7, 7, 11);
let jiggly = new Queen("Jiggly Caliente", 6, 4, 7, 3, 3, 6, 9);
let kenya = new Queen("Kenya Michaels", 5, 6, 6, 6, 4, 7, 8);
let leshauwn = new Queen("Lashauwn Beyond", 5, 4, 7, 11, 5, 9, 8);
let latrice = new Queen("Latrice Royale", 9, 9, 9, 6, 9, 5, 9);
let madame = new Queen("Madame LaQueer", 7, 7, 6, 6, 7, 7, 7);
let milan = new Queen("Milan", 5, 5, 9, 6, 5, 8, 10);
let phiphi = new Queen("Phi Phi O'Hara", 9, 7, 8, 9, 9, 10, 9);
let princess = new Queen("The Princess", 4, 4, 5, 8, 4, 7, 8);
let sharon = new Queen("Sharon Needles", 7, 8, 4, 9, 7, 8, 7);
let willam = new Queen("Willam", 8, 9, 7, 10, 8, 9, 8);
let us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, sharon, willam];

//ALL STARS 1:
let allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];

//SEASON 5:
let alaska = new Queen("Alaska", 10, 11, 7, 8, 9, 9, 11);
let alyssa = new Queen("Alyssa Edwards", 5, 9, 12, 5, 9, 7, 9);
let coco = new Queen("Coco Montrese", 4, 9, 9, 8, 6, 9, 15);
let detox = new Queen("Detox", 8, 10, 6, 8, 3, 9, 9);
let honey = new Queen("Honey Mahogany", 3, 3, 3, 6, 2, 5, 3);
let ivy = new Queen("Ivy Winters", 8, 8, 9, 9, 7, 9, 7);
let jadejolie = new Queen("Jade Jolie", 6, 5, 6, 6, 6, 6, 9);
let jinkx = new Queen("Jinkx Monsoon", 11, 10, 8, 7, 10, 9, 9);
let lineysha = new Queen("Lineysha Sparx", 9, 6, 8, 10, 6, 9, 8);
let monica = new Queen("Monica Beverly Hillz", 4, 4, 9, 6, 3, 8, 9);
let penny = new Queen("Penny Tration", 7, 9, 4, 5, 7, 5, 5);
let roxxxy = new Queen("Roxxxy Andrews", 6, 4, 6, 10, 4, 9, 9);
let serena = new Queen("Serena ChaCha", 3, 3, 8, 4, 5, 5, 7);
let vivienne = new Queen("Vivienne Pinay", 3, 3, 5, 5, 3, 6, 5);
let us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];

//SEASON 6:
let adore = new Queen("Adore Delano", 9, 8, 8, 5, 9, 7, 9);
let april = new Queen("April Carrión", 6, 5, 7, 9, 5, 9, 8);
let bendelacreme = new Queen("BenDeLaCreme", 10, 8, 7, 8, 10, 9, 7);
let bianca = new Queen("Bianca Del Rio", 11, 11, 8, 10, 10, 9, 6);
let courtney = new Queen("Courtney Act", 8, 8, 9, 8, 8, 9, 9);
let darienne = new Queen("Darienne Lake", 9, 9, 7, 4, 8, 7, 14);
let gia = new Queen("Gia Gunn", 5, 4, 8, 8, 3, 8, 8);
let joslyn = new Queen("Joslyn Fox", 7, 9, 9, 5, 9, 6, 9);
let kelly = new Queen("Kelly Mantle", 8, 8, 7, 5, 7, 7, 7);
let laganja = new Queen("Laganja Estranja", 8, 5, 8, 7, 4, 8, 9);
let magnolia = new Queen("Magnolia Crawford", 7, 7, 6, 4, 5, 7, 4);
let milk = new Queen("Milk", 9, 8, 5, 7, 6, 7, 5);
let trinityk = new Queen("Trinity K. Bonet", 5, 9, 8, 10, 6, 9, 12);
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7);
let us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];

//SEASON 7:
let ginger = new Queen("Ginger Minj", 12, 13, 8, 7, 13, 7, 12);
let jaidynn = new Queen("Jaidynn Diore Fierce", 8, 9, 7, 6, 8, 7, 9);
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 7);
let kandy = new Queen("Kandy Ho", 4, 5, 7, 5, 4, 7, 9);
let katya = new Queen("Katya", 9, 9, 9, 7, 9, 9, 9);
let kennedy = new Queen("Kennedy Davenport", 9, 9, 8, 7, 9, 6, 11);
let max = new Queen("Max", 10, 4, 6, 8, 3, 8, 3);
let fame = new Queen("Miss Fame", 4, 4, 5, 10, 3, 9, 4);
let kasha = new Queen("Mrs. Kasha Davis", 8, 8, 7, 7, 8, 8, 9);
let pearl = new Queen("Pearl", 3, 9, 8, 9, 8, 8, 5);
let sashab = new Queen("Sasha Belle", 6, 6, 6, 6, 6, 6, 6);
let tempest = new Queen("Tempest DuJour", 8, 8, 7, 3, 6, 7, 6);
let trixie = new Queen("Trixie Mattel", 10, 6, 6, 9, 9, 9, 6);
let violet = new Queen("Violet Chachki", 8, 7, 7, 14, 7, 10, 8);
let us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];

//SEASON 8:
let acid = new Queen("Acid Betty", 8, 3, 7, 9, 2, 8, 7);
let bob = new Queen("Bob The Drag Queen", 13, 15, 8, 7, 13, 7, 13);
let chichi = new Queen("Chi Chi DeVayne", 7, 8, 12, 3, 5, 7, 9);
let cynthia = new Queen("Cynthia Lee Fontaine", 5, 4, 8, 6, 4, 7, 6);
let dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 7, 6, 7, 4);
let derrick = new Queen("Derrick Barry", 4, 9, 7, 3, 9, 7, 8);
let kim = new Queen("Kim Chi", 6, 7, 4, 13, 6, 10, 5);
let laila = new Queen("Laila McQueen", 7, 7, 4, 4, 6, 8, 8);
let naomi = new Queen("Naomi Smalls", 9, 9, 8, 8, 9, 10, 10);
let naysha = new Queen("Naysha Lopez", 4, 4, 4, 4, 3, 6, 4);
let robbie = new Queen("Robbie Turner", 5, 4, 6, 4, 3, 6, 6);
let thorgy = new Queen("Thorgy Thor", 9, 9, 7, 8, 9, 9, 9);
let us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];

//ALL STARS 2:
let allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];

//SEASON 9:
let aja = new Queen("Aja", 7, 7, 9, 4, 7, 9, 9);
let alexism = new Queen("Alexis Michelle", 8, 8, 8, 6, 9, 6, 11);
let charlie = new Queen("Charlie Hides", 6, 7, 5, 7, 3, 9, 2);
let eureka = new Queen("Eureka O'Hara", 9, 8, 6, 6, 10, 7, 8);
let farrah = new Queen("Farrah Moan", 9, 5, 7, 3, 6, 8, 7);
let jaymes = new Queen("Jaymes Mansfield", 8, 8, 3, 6, 9, 7, 6);
let kimora = new Queen("Kimora Blac", 5, 5, 4, 2, 5, 8, 3);
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 8, 8, 8, 9, 12);
let peppermint = new Queen("Peppermint", 8, 10, 7, 7, 3, 7, 14);
let sasha = new Queen("Sasha Velour", 10, 9, 7, 9, 9, 10, 11);
let shea = new Queen("Shea Couleé", 10, 9, 9, 8, 10, 10, 11);
let trinity = new Queen("Trinity The Tuck", 9, 8, 8, 9, 8, 9, 8);
let valentina = new Queen("Valentina", 9, 9, 9, 9, 9, 9, 7);
let us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];

//ALL STARS 3:
let allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];

//SEASON 10:
let aquaria = new Queen("Aquaria", 9, 9, 8, 14, 9, 10, 10);
let asia = new Queen("Asia O'Hara", 9, 5, 6, 6, 8, 9, 9);
let blair = new Queen("Blair St. Clair", 9, 5, 6, 9, 7, 8, 7);
let dusty = new Queen("Dusty Ray Bottoms", 7, 6, 8, 7, 6, 7, 6);
let kalorie = new Queen("Kalorie K. Williams", 6, 8, 6, 5, 7, 7, 8);
let kameron = new Queen("Kameron Michaels", 5, 7, 9, 8, 6, 8, 14);
let mayhem = new Queen("Mayhem Miller", 6, 8, 8, 8, 5, 9, 8);
let miz = new Queen("Miz Cracker", 9, 9, 5, 7, 9, 7, 7);
let monet = new Queen("Monét X Change", 9, 10, 7, 5, 7, 9, 11);
let monique = new Queen("Monique Heart", 9, 8, 7, 8, 10, 8, 9);
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 10, 7, 7, 6, 7, 7, 8);
let vixen = new Queen("The Vixen", 4, 4, 11, 9, 3, 8, 13);
let yuhua = new Queen("Yuhua Hamasaki", 5, 7, 6, 8, 6, 7, 7);
let us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];

//ALL STARS 4:
let allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];

//SEASON 11:
let akeria = new Queen("A'keria C. Davenport", 10, 9, 9, 8, 8, 9, 9);
let ariel = new Queen("Ariel Versace", 6, 8, 7, 6, 8, 8, 8);
let brooke = new Queen("Brooke Lynn Hytes",  8, 6, 10, 8, 4, 9, 9);
let honeyd = new Queen("Honey Davenport", 6, 6, 7, 6, 6, 9, 4);
let kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 7);
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 6, 6, 6, 8, 8);
let ninaw = new Queen("Nina West", 10, 7, 6, 6, 9, 7, 5);
let plastique = new Queen("Plastique Tiara", 7, 7, 8, 9, 5, 8, 6);
let rajah = new Queen("Ra'Jah O'Hara", 7, 8, 14, 13, 6, 10, 12);
let scarlet = new Queen("Scarlet Envy", 10, 8, 6, 9, 7, 9, 8);
let shuga = new Queen("Shuga Cain", 8, 7, 7, 5, 7, 10, 7);
let silky = new Queen("Silky Nutmeg Ganache", 8, 9, 7, 6, 9, 7, 7);
let yvie = new Queen("Yvie Oddly", 10, 5, 8, 9, 5, 8, 11);
let us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];

//SEASON 12
let aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 8, 7);
let brita = new Queen("Brita", 7, 6, 7, 4, 3, 7, 9);
let crystal = new Queen("Crystal Methyd", 8, 7, 7, 8, 5, 9, 5);
let dahlia = new Queen("Dahlia Sin", 4, 4, 8, 7, 6, 10, 3);
let gigi = new Queen("Gigi Goode", 8, 7, 9, 8, 9, 9, 5);
let heidi = new Queen("Heidi N Closet", 9, 10, 5, 6, 9, 7, 12);
let jackie = new Queen("Jackie Cox", 8, 9, 5, 7, 10, 8, 11);
let jaida = new Queen("Jaida Essence Hall", 7, 9, 9, 14, 9, 10, 14);
let jan = new Queen("Jan", 8, 7, 9, 7, 8, 8, 7);
let nicky = new Queen("Nicky Doll", 4, 4, 7, 10, 3, 10, 5);
let rock = new Queen("Rock M. Sakura", 6, 8, 6, 7, 8, 8, 6);
let widow = new Queen("Widow Von'Du", 8, 9, 7, 7, 9, 8, 9);
let us_season12 =  [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];

//ALL STARS 5
let allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];

//SEASON 13
let denali = new Queen("Denali", 4, 7, 12, 7, 9, 9, 12);
let elliott = new Queen("Elliott With 2 Ts", 4, 5, 10, 7, 3, 7, 10);
let mik = new Queen("Gottmik", 8, 9, 4, 13, 9, 10, 6)
let joey = new Queen("Joey Jay", 5, 5, 8, 6, 4, 6, 4);
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 9, 3, 10, 4);
let kandym = new Queen("Kandy Muse", 9, 9, 7, 6, 9, 6, 13);
let lala = new Queen("LaLa Ri", 4, 6, 10, 2, 5, 7, 13);
let olivia = new Queen("Olivia Lux", 8, 5, 9, 8, 4, 9, 10);
let rose = new Queen("Rosé", 10, 9, 12, 8, 9, 7, 6);
let symone = new Queen("Symone", 12, 8, 8, 7,  12, 9, 13);
let tamisha = new Queen("Tamisha Iman", 7, 6, 7, 6, 6, 7, 8);
let tina = new Queen("Tina Burner", 7, 7, 8, 5, 8, 4, 8);
let utica = new Queen("Utica Queen", 7, 4, 4, 13, 4, 10, 12);
let us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];

//ALL STARS 6
let allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];

//DRUK SEASON 1
let baga = new Queen("Baga Chipz", 11, 12, 6, 7, 11, 8, 9);
let blu = new Queen("Blu Hydrangea", 5, 8, 3, 9, 9, 11, 8);
let cheryl = new Queen("Cheryl Hole", 5, 5, 10, 6, 6, 9, 10);
let crystaluk = new Queen("Crystal", 6, 5, 7, 9, 4, 8, 6);
let divina = new Queen("Divina De Campo", 8, 6, 7, 12, 9, 9, 9);
let gothy = new Queen("Gothy Kendall", 4, 5, 4, 3, 5, 8, 4);
let scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 6, 4);
let sumting = new Queen("Sum‏‏‎ Tin Wong", 9, 9, 7, 8, 9, 8, 8);
let viv = new Queen("The‎‎‎‎‎‎‎‎‏‏‎‎ Vivienne", 10, 12, 9,  12, 12, 10, 11);
let vinegar = new Queen("Vinegar Strokes", 7, 7, 7, 4, 4, 6, 7);

let uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];

//DRUK SEASON 2
let awhora = new Queen("A'Whora", 9, 8, 7, 12, 9, 8, 9);
let asttina = new Queen("Asttina Mandella", 8, 7, 10, 9, 9, 9, 11);
let bimini = new Queen("Bimini Bon-Boulash", 11, 14, 9, 6, 12, 11, 12);
let cherry = new Queen("Cherry Valentine", 5, 6, 5, 10, 6, 11, 4);
let ellie = new Queen("Ellie Diamond", 8, 5, 5, 10, 7, 9, 9);
let ginny = new Queen("Ginny Lemon", 6, 8, 5, 7, 7, 8, 4);
let joe = new Queen("Joe Black", 8, 7, 4, 9, 7, 10, 8);
let lawrence = new Queen("Lawrence Chaney", 14, 13, 3, 11, 9, 12, 14);
let sister = new Queen("Sister Sister", 8, 6, 6, 4, 7, 8, 10);
let tayce = new Queen("Tayce", 9, 9, 12, 5, 9, 9, 14);
let tia = new Queen("Tia Kofi", 9, 11, 8, 3, 6, 5, 12);
let veronica = new Queen("Veronica Green", 7, 7, 11, 8, 5, 10, 8)
let uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];

//CAN SEASON 1
let anastarzia = new Queen("Anastarzia Anaquway", 7, 7, 6, 10, 8, 9, 11);
let boa = new Queen("BOA", 6, 9, 6, 7, 6, 8, 8);
let ilona = new Queen("Ilona Verley", 7, 8, 5, 8, 8, 10, 10);
let jimbo = new Queen("Jimbo", 10, 11, 4, 6, 10, 11, 4);
let juice = new Queen("Juice Boxx", 7, 9, 8, 4, 6, 10, 9);
let kiara = new Queen("Kiara", 8, 7, 9, 8, 6, 8, 13);
let kyne = new Queen("Kyne", 5, 4, 6, 6, 6, 7, 7);
let lemon = new Queen("Lemon", 9, 9, 10, 4, 8, 5, 10);
let priyanka = new Queen("Priyanka", 12, 9, 10, 11, 6, 10, 15);
let rita = new Queen("Rita Baga", 10, 9, 5, 10, 9, 12, 13);
let bobo = new Queen("Scarlett BoBo", 9, 9, 9, 9, 9, 10, 12);
let tynomi = new Queen("Tynomi Banks", 5, 7, 7, 8, 5, 9, 12);
let can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];

//all possible queens:
let allQueens: Array<Queen> = [
akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, sharon, willam,
alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, yvie,
aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow,
denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar,
awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi
].sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));