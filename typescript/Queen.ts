class Queen {
    public _name: string;
    public _actingStat: number;
    public _comedyStat: number;
    public _danceStat: number;
    public _designStat: number;
    public _improvStat: number;
    public _runwayStat: number;
    public _lipsyncStat: number;

    public trackRecord: Array<string> = [];
    public runwayScore: number = 0;
    public lipsyncScore: number = 0;
    public performanceScore: number = 0;
    public finaleScore: number = 0;
    public winCount: number = 0;
    public favoritism: number = 0;
    public unfavoritism: number = 0;
    public image: string;

    public lipstick: Queen;
    public votes: number = 0;

    constructor(name: string, acting: number, comedy: number, dance: number, design: number, improv: number, runway: number, lipsync: number, image?: string) {
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
        this.image = "image/queens/" + image + ".webp";
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

let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 12, "Akashia");
let bebe = new Queen("BeBe Zahara Benet", 7, 7, 7, 10, 7, 10, 9, "BeBe");
let jade = new Queen("Jade Sotomeyer", 3, 3, 6, 7, 3, 7, 7, "Jade");
let ninaf = new Queen("Nina Flowers", 4, 4, 5, 11, 3, 10, 4, "NinaFlowers");
let ongina = new Queen("Ongina", 10, 7, 7, 9, 10, 8, 8, "Ongina");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 9, 7, "Shannel");
let tammie = new Queen("Tammie Brown", 10, 8, 5, 7, 8, 7, 6, "Tammie");
let victoria = new Queen("Victoria 'Porkchop' Parker", 10, 8, 4, 3, 9, 5, 4, "Victoria");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];

//SEASON 2:
let jessica = new Queen("Jessica Wild", 8, 9, 7, 7, 8, 9, 9, "Jessica");
let jujubee = new Queen("Jujubee", 9, 10, 8, 6, 10, 6, 15, "Jujubee");
let morgan = new Queen("Morgan McMichaels", 6, 6, 8, 8, 3, 10, 9, "Morgan");
let mystique = new Queen("Mystique Summers Madison", 4, 6, 3, 3, 3, 6, 6, "Mystique");
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 6, 6, 4, 7, 7, "Nicole");
let pandora = new Queen("Pandora Boxx", 9, 11, 7, 6, 10, 7, 9, "Pandora");
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 10, "Raven");
let sahara = new Queen("Sahara Davenport", 9, 7, 10, 4, 6, 7, 11, "Sahara");
let shangela = new Queen("Shangela", 10, 11, 7, 2, 10, 6, 9, "Shangela");
let sonique = new Queen("Kylie Sonique Love", 8, 7, 12, 10, 6, 9, 8, "Kylie");
let tatianna = new Queen("Tatianna", 8, 10, 7, 8, 10, 8, 10, "Tatianna");
let tyra = new Queen("Tyra Sanchez", 9, 4, 7, 11, 3, 9, 10, "Tyra");
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];

//SEASON 3:
let alexis = new Queen("Alexis Mateo", 10, 11, 8, 6, 9, 7, 12, "Alexis");
let carmen = new Queen("Carmen Carrera", 3, 2, 6, 4, 2, 5, 8, "Carmen");
let delta = new Queen("Delta Work", 8, 7, 5, 5, 5, 7, 9, "Delta");
let india = new Queen("India Ferrah", 6, 4, 8, 8, 3, 10, 7, "India");
let manila = new Queen("Manila Luzon", 10, 9, 8, 11, 9, 10, 11, "Manila");
let mariah = new Queen("Mariah", 8, 5, 6, 8, 5, 9, 7, "Mariah");
let mimi = new Queen("Mimi Imfurst", 10, 8, 6, 9, 9, 8, 7, "Mimi");
let phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4, "Phoenix");
let raja = new Queen("Raja", 9, 9, 7, 13, 9, 10, 11, "Raja");
let stacey = new Queen("Stacy Layne Matthews", 6, 10, 5, 4, 9, 5, 9, "Stacy");
let venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2, "Venus");
let yara = new Queen("Yara Sofia", 9, 10, 7, 10, 5, 10, 9, "Yara");
let us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];

//SEASON 4:
let alisa = new Queen("Alisa Summers", 4, 4, 6, 2, 3, 5, 3, "Alisa");
let chad = new Queen("Chad Michaels", 9, 9, 8, 8, 9, 9, 9, "Chad");
let dida = new Queen("Dida Ritz", 6, 7, 7, 5, 7, 7, 11, "Dida");
let jiggly = new Queen("Jiggly Caliente", 6, 4, 7, 3, 3, 6, 9, "Jiggly");
let kenya = new Queen("Kenya Michaels", 5, 6, 6, 6, 4, 7, 8, "Kenya");
let leshauwn = new Queen("Lashauwn Beyond", 5, 4, 7, 11, 5, 9, 8, "Lashauwn");
let latrice = new Queen("Latrice Royale", 9, 9, 9, 6, 9, 5, 9, "Latrice");
let madame = new Queen("Madame LaQueer", 7, 7, 6, 6, 7, 7, 7, "Madame");
let milan = new Queen("Milan", 5, 5, 9, 6, 5, 8, 10, "Milan");
let phiphi = new Queen("Phi Phi O'Hara", 9, 7, 8, 9, 9, 10, 9, "PhiPhi");
let princess = new Queen("The Princess", 4, 4, 5, 8, 4, 7, 8, "Princess");
let willam = new Queen("Willam", 8, 9, 7, 10, 8, 9, 8, "Willam");
let us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam];

//ALL STARS 1:
let allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];

//SEASON 5:
let alaska = new Queen("Alaska", 10, 11, 7, 8, 9, 9, 11, "Alaska");
let alyssa = new Queen("Alyssa Edwards", 5, 9, 12, 5, 9, 7, 9, "Alyssa");
let coco = new Queen("Coco Montrese", 4, 9, 9, 8, 6, 9, 15, "Coco");
let detox = new Queen("Detox", 8, 10, 6, 8, 3, 9, 9, "Detox");
let honey = new Queen("Honey Mahogany", 3, 3, 3, 6, 2, 5, 3, "Honey");
let ivy = new Queen("Ivy Winters", 8, 8, 9, 9, 7, 9, 7, "Ivy");
let jadejolie = new Queen("Jade Jolie", 6, 5, 6, 6, 6, 6, 9, "JadeJ");
let jinkx = new Queen("Jinkx Monsoon", 11, 10, 8, 7, 10, 9, 9, "Jinkx");
let lineysha = new Queen("Lineysha Sparx", 9, 6, 8, 10, 6, 9, 8, "Lineysha");
let monica = new Queen("Monica Beverly Hillz", 4, 4, 9, 6, 3, 8, 9, "Monica");
let penny = new Queen("Penny Tration", 7, 9, 4, 5, 7, 5, 5, "Penny");
let roxxxy = new Queen("Roxxxy Andrews", 6, 4, 6, 10, 4, 9, 9, "Roxxxy");
let serena = new Queen("Serena ChaCha", 3, 3, 8, 4, 5, 5, 7, "Serena");
let vivienne = new Queen("Vivienne Pinay", 3, 3, 5, 5, 3, 6, 5, "Vivienne");
let us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];

//SEASON 6:
let adore = new Queen("Adore Delano", 9, 8, 8, 5, 9, 7, 9, "Adore");
let april = new Queen("April Carrión", 6, 5, 7, 9, 5, 9, 8, "April");
let bendelacreme = new Queen("BenDeLaCreme", 10, 8, 7, 8, 10, 9, 7, "Bendelacreme");
let bianca = new Queen("Bianca Del Rio", 11, 11, 8, 10, 10, 9, 6, "Bianca");
let courtney = new Queen("Courtney Act", 8, 8, 9, 8, 8, 9, 9, "Courtney");
let darienne = new Queen("Darienne Lake", 9, 9, 7, 4, 8, 7, 14, "Darienne");
let gia = new Queen("Gia Gunn", 5, 4, 8, 8, 3, 8, 8, "Gia");
let joslyn = new Queen("Joslyn Fox", 7, 9, 9, 5, 9, 6, 9, "Joslyn");
let kelly = new Queen("Kelly Mantle", 8, 8, 7, 5, 7, 7, 7, "Kellu");
let laganja = new Queen("Laganja Estranja", 8, 5, 8, 7, 4, 8, 9, "Laganja");
let magnolia = new Queen("Magnolia Crawford", 7, 7, 6, 4, 5, 7, 4, "Magnolia");
let milk = new Queen("Milk", 9, 8, 5, 7, 6, 7, 5, "Milk");
let trinityk = new Queen("Trinity K. Bonet", 5, 9, 8, 10, 6, 9, 12, "TrinityKB");
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, "Vivacious");
let us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];

//SEASON 7:
let ginger = new Queen("Ginger Minj", 12, 13, 8, 7, 13, 7, 12, "Ginger");
let jaidynn = new Queen("Jaidynn Diore Fierce", 8, 9, 7, 6, 8, 7, 9, "Jaidynn");
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 7, "Jasmine");
let kandy = new Queen("Kandy Ho", 4, 5, 7, 5, 4, 7, 9, "KandyH");
let katya = new Queen("Katya", 9, 9, 9, 7, 9, 9, 9, "Katya");
let kennedy = new Queen("Kennedy Davenport", 9, 9, 8, 7, 9, 6, 11, "Kennedy");
let max = new Queen("Max", 10, 4, 6, 8, 3, 8, 3, "Max");
let fame = new Queen("Miss Fame", 4, 4, 5, 10, 3, 9, 4, "MissFame");
let kasha = new Queen("Mrs. Kasha Davis", 8, 8, 7, 7, 8, 8, 9, "Kasha");
let pearl = new Queen("Pearl", 3, 9, 8, 9, 8, 8, 5, "Pearl");
let sashab = new Queen("Sasha Belle", 6, 6, 6, 6, 6, 6, 6, "SashaB");
let tempest = new Queen("Tempest DuJour", 8, 8, 7, 3, 6, 7, 6, "Tempest");
let trixie = new Queen("Trixie Mattel", 10, 6, 6, 9, 9, 9, 6, "Trixie");
let violet = new Queen("Violet Chachki", 8, 7, 7, 14, 7, 10, 8, "Violet");
let us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];

//SEASON 8:
let acid = new Queen("Acid Betty", 8, 3, 7, 9, 2, 8, 7, "Acid");
let bob = new Queen("Bob The Drag Queen", 13, 15, 8, 7, 13, 7, 13, "Bob");
let chichi = new Queen("Chi Chi DeVayne", 7, 8, 12, 3, 5, 7, 9, "ChiChi");
let cynthia = new Queen("Cynthia Lee Fontaine", 5, 4, 8, 6, 4, 7, 6, "Cynthia");
let dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 7, 6, 7, 4,  "Dax");
let derrick = new Queen("Derrick Barry", 4, 9, 7, 3, 9, 7, 8, "Derrick");
let kim = new Queen("Kim Chi", 6, 7, 4, 13, 6, 10, 5, "Kim");
let laila = new Queen("Laila McQueen", 7, 7, 4, 4, 6, 8, 8, "Laila");
let naomi = new Queen("Naomi Smalls", 9, 9, 8, 8, 9, 10, 10, "Naomi");
let naysha = new Queen("Naysha Lopez", 4, 4, 4, 4, 3, 6, 4, "Naysga");
let robbie = new Queen("Robbie Turner", 5, 4, 6, 4, 3, 6, 6, "Robbie");
let thorgy = new Queen("Thorgy Thor", 9, 9, 7, 8, 9, 9, 9, "Thorgy");
let us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];

//ALL STARS 2:
let allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];

//SEASON 9:
let aja = new Queen("Aja", 7, 7, 9, 4, 7, 9, 9, "Aja");
let alexism = new Queen("Alexis Michelle", 8, 8, 8, 6, 9, 6, 11, "AlexisM");
let charlie = new Queen("Charlie Hides", 6, 7, 5, 7, 3, 9, 2, "Charlie");
let eureka = new Queen("Eureka O'Hara", 9, 8, 6, 6, 10, 7, 8, "Eureka");
let farrah = new Queen("Farrah Moan", 9, 5, 7, 3, 6, 8, 7, "Farrah");
let jaymes = new Queen("Jaymes Mansfield", 8, 8, 3, 6, 9, 7, 6, "Jaymes");
let kimora = new Queen("Kimora Blac", 5, 5, 4, 2, 5, 8, 3, "Kimora");
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 8, 8, 8, 9, 12, "NinaBB");
let peppermint = new Queen("Peppermint", 8, 10, 7, 7, 3, 7, 14, "Peppermint");
let sasha = new Queen("Sasha Velour", 10, 9, 7, 9, 9, 10, 11, "Sasha");
let shea = new Queen("Shea Couleé", 10, 9, 9, 8, 10, 10, 11, "Shea");
let trinity = new Queen("Trinity The Tuck", 9, 8, 8, 9, 8, 9, 8, "TrinityTT");
let valentina = new Queen("Valentina", 9, 9, 9, 9, 9, 9, 7, "Valentina");
let us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];

//ALL STARS 3:
let allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];

//SEASON 10:
let aquaria = new Queen("Aquaria", 9, 9, 8, 14, 9, 10, 10, "Aquaria");
let asia = new Queen("Asia O'Hara", 9, 5, 6, 6, 8, 9, 9, "Asia");
let blair = new Queen("Blair St. Clair", 9, 5, 6, 9, 7, 8, 7, "Blair");
let dusty = new Queen("Dusty Ray Bottoms", 7, 6, 8, 7, 6, 7, 6, "Dusty");
let kalorie = new Queen("Kalorie K. Williams", 6, 8, 6, 5, 7, 7, 8, "Kalorie");
let kameron = new Queen("Kameron Michaels", 5, 7, 9, 8, 6, 8, 14, "Kameron");
let mayhem = new Queen("Mayhem Miller", 6, 8, 8, 8, 5, 9, 8, "Mayhem");
let miz = new Queen("Miz Cracker", 9, 9, 5, 7, 9, 7, 7, "Miz");
let monet = new Queen("Monét X Change", 9, 10, 7, 5, 7, 9, 11, "Monet");
let monique = new Queen("Monique Heart", 9, 8, 7, 8, 10, 8, 9, "Monique");
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 10, 7, 7, 6, 7, 7, 8, "Vanjie");
let vixen = new Queen("The Vixen", 4, 4, 11, 9, 3, 8, 13, "Vixen");
let yuhua = new Queen("Yuhua Hamasaki", 5, 7, 6, 8, 6, 7, 7, "Yuhua");
let us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];

//ALL STARS 4:
let allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];

//SEASON 11:
let akeria = new Queen("A'keria C. Davenport", 10, 9, 9, 8, 8, 9, 9, "Akeria");
let ariel = new Queen("Ariel Versace", 6, 8, 7, 6, 8, 8, 8, "Ariel");
let brooke = new Queen("Brooke Lynn Hytes",  8, 6, 10, 8, 4, 9, 9, "Brooke");
let honeyd = new Queen("Honey Davenport", 6, 6, 7, 6, 6, 9, 4, "HoneyD");
let kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 7, "Kahanna");
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 6, 6, 6, 8, 8, "Mercedes");
let ninaw = new Queen("Nina West", 10, 7, 6, 6, 9, 7, 5, "NinaW");
let plastique = new Queen("Plastique Tiara", 7, 7, 8, 9, 5, 8, 6, "Plastique");
let rajah = new Queen("Ra'Jah O'Hara", 7, 8, 14, 13, 6, 10, 12, "Rajah");
let scarlet = new Queen("Scarlet Envy", 10, 8, 6, 9, 7, 9, 8, "Scarlet");
let shuga = new Queen("Shuga Cain", 8, 7, 7, 5, 7, 10, 7, "Shuga");
let silky = new Queen("Silky Nutmeg Ganache", 8, 9, 7, 6, 9, 7, 7, "Silky");
let yvie = new Queen("Yvie Oddly", 10, 5, 8, 9, 5, 8, 11, "Yvie");
let us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];

//SEASON 12
let aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 8, 7, "Aiden");
let brita = new Queen("Brita", 7, 6, 7, 4, 3, 7, 9, "Brita");
let crystal = new Queen("Crystal Methyd", 8, 7, 7, 8, 5, 9, 5, "CrystalM");
let dahlia = new Queen("Dahlia Sin", 4, 4, 8, 7, 6, 10, 3, "Dahlia");
let gigi = new Queen("Gigi Goode", 8, 7, 9, 8, 9, 9, 5, "Gigi");
let heidi = new Queen("Heidi N Closet", 9, 10, 5, 6, 9, 7, 12, "Heidi");
let jackie = new Queen("Jackie Cox", 8, 9, 5, 7, 10, 8, 11, "Jackie");
let jaida = new Queen("Jaida Essence Hall", 7, 9, 9, 14, 9, 10, 14, "Jaida");
let jan = new Queen("Jan", 8, 7, 9, 7, 8, 8, 7, "Jan");
let nicky = new Queen("Nicky Doll", 4, 4, 7, 10, 3, 10, 5, "Nicky");
let rock = new Queen("Rock M. Sakura", 6, 8, 6, 7, 8, 8, 6, "Rock");
let widow = new Queen("Widow Von'Du", 8, 9, 7, 7, 9, 8, 9, "Widow");
let us_season12 =  [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];

//ALL STARS 5
let allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];

//SEASON 13
let denali = new Queen("Denali", 4, 7, 12, 7, 9, 9, 12, "Denali");
let elliott = new Queen("Elliott With 2 Ts", 4, 5, 10, 7, 3, 7, 10, "Elliott");
let mik = new Queen("Gottmik", 8, 9, 4, 13, 9, 10, 6, "Gottmik")
let joey = new Queen("Joey Jay", 5, 5, 8, 6, 4, 6, 4, "Joey");
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 9, 3, 10, 4, "Kahmora");
let kandym = new Queen("Kandy Muse", 9, 9, 7, 6, 9, 6, 13, "KandyM");
let lala = new Queen("LaLa Ri", 4, 6, 10, 2, 5, 7, 13, "Lala");
let olivia = new Queen("Olivia Lux", 8, 5, 9, 8, 4, 9, 10, "Olivia");
let rose = new Queen("Rosé", 10, 9, 12, 8, 9, 7, 6, "Rose");
let symone = new Queen("Symone", 12, 8, 8, 7,  12, 9, 13, "Symone");
let tamisha = new Queen("Tamisha Iman", 7, 6, 7, 6, 6, 7, 8, "Tamisha");
let tina = new Queen("Tina Burner", 7, 7, 8, 5, 8, 4, 8, "TinaB");
let utica = new Queen("Utica Queen", 7, 4, 4, 13, 4, 10, 12, "Utica");
let us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];

//ALL STARS 6
let allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];

//DRUK SEASON 1
let baga = new Queen("Baga Chipz", 11, 12, 6, 7, 11, 8, 9, "Baga");
let blu = new Queen("Blu Hydrangea", 5, 8, 3, 9, 9, 11, 8, "Blu");
let cheryl = new Queen("Cheryl Hole", 5, 5, 10, 6, 6, 9, 10, "Cheryl");
let crystaluk = new Queen("Crystal", 6, 5, 7, 9, 4, 8, 6, "Crystal");
let divina = new Queen("Divina De Campo", 8, 6, 7, 12, 9, 9, 9, "Divina");
let gothy = new Queen("Gothy Kendall", 4, 5, 4, 3, 5, 8, 4, "Gothy");
let scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 6, 4, "Scaredy");
let sumting = new Queen("Sum‏‏‎ Tin Wong", 9, 9, 7, 8, 9, 8, 8, "Sum");
let viv = new Queen("The‎‎‎‎‎‎‎‎‏‏‎‎ Vivienne", 10, 12, 9,  12, 12, 10, 11, "TVivienne");
let vinegar = new Queen("Vinegar Strokes", 7, 7, 7, 4, 4, 6, 7, "Vinegar");

let uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];

//DRUK SEASON 2
let awhora = new Queen("A'Whora", 9, 8, 7, 12, 9, 8, 9, "Awhora");
let asttina = new Queen("Asttina Mandella", 8, 7, 10, 9, 9, 9, 11, "Asttina");
let bimini = new Queen("Bimini Bon-Boulash", 11, 14, 9, 6, 12, 11, 12, "Bimini");
let cherry = new Queen("Cherry Valentine", 5, 6, 5, 10, 6, 11, 4, "Cherry");
let ellie = new Queen("Ellie Diamond", 8, 5, 5, 10, 7, 9, 9, "Ellie");
let ginny = new Queen("Ginny Lemon", 6, 8, 5, 7, 7, 8, 4, "Ginny");
let joe = new Queen("Joe Black", 8, 7, 4, 9, 7, 10, 8, "Joe");
let lawrence = new Queen("Lawrence Chaney", 14, 13, 3, 11, 9, 12, 14, "Lawrence");
let sister = new Queen("Sister Sister", 8, 6, 6, 4, 7, 8, 10, "Sister");
let tayce = new Queen("Tayce", 9, 9, 12, 5, 9, 9, 14, "Tayce");
let tia = new Queen("Tia Kofi", 9, 11, 8, 3, 6, 5, 12, "Tia");
let veronica = new Queen("Veronica Green", 7, 7, 11, 8, 5, 10, 8, "Veronica")
let uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];

//DRUK SEASON 3
let anubis = new Queen("Anubis", 6, 6, 7, 4, 5, 6, 4, "Anubis");
let charity = new Queen("Charity Kase", 8, 7, 6, 8, 8, 7, 7, "Charity");
let choriza = new Queen("Choriza May", 9, 9, 6, 9, 7, 8, 10, "Choriza");
let elektraF = new Queen("Elektra Fence", 5, 6, 5, 4, 5, 4, 9, "ElektraF");
let ella = new Queen("Ella Vaday", 9, 9, 9, 8, 7, 9, 8, "Ella");
let kitty = new Queen("Kitty Scott Claus", 10, 10, 8, 8, 8, 7, 7, "Kitty");
let krystal = new Queen("Krystal Versace", 7, 6, 8, 9, 9, 9, 8, "Krystal");
let river = new Queen("River Medway", 8, 8, 7, 5, 6, 5, 7, "River");
let scarlett = new Queen("Scarlett Harlett", 8, 7, 8, 8, 5, 8, 8, "ScarlettH");
let vanity = new Queen("Vanity Milan", 6, 9, 6, 8, 8, 7, 9, "Vanity");
let victoriaS = new Queen("Victoria Scone", 10, 10, 8, 10, 9, 9, 8, "VictoriaS");
let uk_season3 = [anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS];

//CAN SEASON 1
let anastarzia = new Queen("Anastarzia Anaquway", 7, 7, 6, 10, 8, 9, 11, "Starzy");
let boa = new Queen("BOA", 6, 9, 6, 7, 6, 8, 8, "BOA");
let ilona = new Queen("Ilona Verley", 7, 8, 5, 8, 8, 10, 10, "Ilona");
let jimbo = new Queen("Jimbo", 10, 11, 4, 6, 10, 11, 4, "Jimbo");
let juice = new Queen("Juice Boxx", 7, 9, 8, 4, 6, 10, 9, "Juice");
let kiara = new Queen("Kiara", 8, 7, 9, 8, 6, 8, 13, "Kiara");
let kyne = new Queen("Kyne", 5, 4, 6, 6, 6, 7, 7, "Kyne");
let lemon = new Queen("Lemon", 9, 9, 10, 4, 8, 5, 10, "Lemon");
let priyanka = new Queen("Priyanka", 12, 9, 10, 11, 6, 10, 15, "Priyanka");
let rita = new Queen("Rita Baga", 10, 9, 5, 10, 9, 12, 13, "Rita");
let bobo = new Queen("Scarlett BoBo", 9, 9, 9, 9, 9, 10, 12, "Scarlett");
let tynomi = new Queen("Tynomi Banks", 5, 7, 7, 8, 5, 9, 12, "Tynomi");
let can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];

//DRAG RACE HOLLAND
let chelsea = new Queen("Chelsea Boy", 8, 9, 6, 9, 9, 11, 5, "Chelsea");
let envy = new Queen("Envy Peru", 10, 10, 9, 10, 9, 13, 12, "Envy");
let janey = new Queen("Janey Jacké", 7, 8, 7, 11, 9, 12, 9, "Janey");
let madamem = new Queen("Madame Madness", 6, 6, 6, 8, 5, 8, 7, "MadameM");
let mama = new Queen("Ma'Ma Queen", 7, 7, 5, 6, 8, 10, 7, "Mama");
let megan = new Queen("Megan Schoonbrood", 7, 8, 7, 5, 6, 9, 11, "Megan");
let abby = new Queen("Miss Abby OMG", 9, 8, 12, 8, 7, 8, 11, "Abby");
let patty = new Queen("Patty Pam-Pam", 8, 6, 6, 8, 8, 9, 7, "Patty");
let roem = new Queen("Roem", 8, 8, 5, 5, 7, 6, 5, "Roem");
let sederginne = new Queen("Sederginne", 8, 6, 6, 10, 7, 13, 5, "Sederginne");

let hol_season1 = [chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne];

//DRAG RACE HOLLAND SEASON 2
let ivyelise = new Queen("Ivy-Elise", 5, 5, 5, 4, 6, 5, 9, "IvyE");
let juicy = new Queen("Juicy Kouture", 5, 6, 5, 5, 7, 7, 6, "Juicy");
let keta = new Queen("Keta Minaj",  8, 9, 7, 9, 9, 9, 7, "Keta");
let love = new Queen("Love Masisi", 6, 7, 7, 8, 8, 10, 10, "Love");
let mlp = new Queen("My Little Puny", 7, 6, 9, 9, 6, 9, 8, "MLP");
let reggy = new Queen("Reggy B", 7, 6, 9, 7, 8, 8, 8, "Reggy");
let tabitha = new Queen("Tabitha", 7, 7, 7, 7, 6, 8, 8, "Tabitha");
let countess = new Queen("The Countess", 8, 9, 7, 9, 8, 8, 8, "Countess");
let vanessaC = new Queen("Vanessa Van Cartier", 7, 8, 8, 10, 9, 11, 10, "VanessaC");
let vivaldi = new Queen("Vivaldi", 8, 9, 7, 7, 9, 9, 9, "Vivaldi");

let hol_season2 = [ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi];


//DRT SEASON 1
let amadiva = new Queen("Amadiva", 9, 6, 7, 9, 3, 13, 6, "Amadiva");
let annee = new Queen("Anneé Maywong", 9, 9, 7, 13, 4, 14, 9, "Annee");
let b = new Queen("B Ella", 7, 9, 6, 8, 11, 7, 7, "B");
let bunny = new Queen("Bunny Be Fly", 7, 5, 5, 8, 5, 8, 6, "Bunny");
let dearis = new Queen("Dearis Doll", 7, 7, 7, 10, 10, 11, 10, "Dearis");
let jaja = new Queen("JAJA", 8, 6, 7, 9, 5, 11, 9, "Jaja");
let meannie = new Queen("Meannie Minaj", 7, 5, 5, 6, 5, 5, 5, "Meannie");
let morrigan = new Queen("Morrigan", 5, 6, 7, 5, 7, 7, 7, "Morrigan");
let natalia = new Queen("Natalia Pliacam", 9, 9, 7, 13, 9, 14, 12, "Natalia");
let petchra = new Queen("Petchra", 7, 7, 6, 7, 8, 7, 9, "Petchra");

let drt_season1 = [amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra];

//DRT SEASON 2
let angele = new Queen("Angele Anang", 9, 9, 9, 12, 8, 14, 10, "Angele");
let bandit = new Queen("Bandit", 7, 7, 7, 10, 6, 14, 9, "Bandit");
let genie = new Queen("Genie", 9, 8, 9, 9, 7, 9, 8, "Genie");
let kana = new Queen("Kana Warrior", 8, 8, 8, 7, 7, 9, 13, "Kana");
let kandyz = new Queen("Kandy Zyanide", 9, 9, 9, 9, 9, 12, 7, "KandyZ");
let katy = new Queen("Katy Killer", 7, 8, 7, 8, 7, 10, 8, "Katy");
let m = new Queen("M Stranger Fox", 5, 6, 5, 6, 6, 8, 8, "M");
let maya = new Queen("Maya B'haro", 9, 8, 6, 9, 9, 10, 7, "Maya");
let mocha = new Queen("Mocha Diva", 9, 9, 6, 10, 9, 7, 9, "Mocha");
let gimhuay = new Queen("Miss Gimhuay", 8, 9, 7, 11, 10, 12, 8, "Gimhuay");
let silver = new Queen("Silver Sonic", 5, 5, 7, 6, 7, 7, 8, "Silver");
let srimala = new Queen("Srimala", 7, 7, 8, 7, 8, 11, 12, "Srimala");
let tormai = new Queen("Tormai", 8, 8, 7, 7, 6, 8, 9, "Tormai");
let vanda = new Queen("Vanda Miss Joaquim", 9, 8, 9, 7, 7, 11, 10, "Vanda");

let drt_season2 = [angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda];

//DRAG RACE DOWN UNDER
let anita = new Queen("Anita Wigl'it", 9, 9, 8, 7, 8, 7, 8, "Anita");
let art = new Queen("Art Simone", 5, 4, 5, 10, 4, 10, 2, "Art");
let cocoj = new Queen("Coco Jumbo", 7, 6, 7, 6, 5, 8, 9, "CocoJ");
let elektra = new Queen("Elektra Shock", 8, 6, 7, 5, 4, 6, 10, "Elektra");
let etc = new Queen("Etcetera Etcetera", 7, 8, 7, 6, 7, 8, 8, "Etc");
let jojo = new Queen("Jojo Zaho", 5, 5, 5, 5, 5, 6, 8, "Jojo");
let karen = new Queen("Karen From Finance", 6, 6, 7, 7, 5, 7, 5, "Karen");
let kita = new Queen("Kita Mean", 8, 8, 7, 8, 9, 9, 10, "Kita");
let maxi = new Queen("Maxi Shield", 6, 7, 7, 9, 7, 8, 9, "Maxi");

let drdu = [anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi];

//DRAG RACE ESPAÑA
let arantxa = new Queen("Arantxa Castilla La Mancha", 8, 8, 7, 7, 4, 9, 9, "Arantxa");
let carmenf = new Queen("Carmen Farala", 8, 7, 9, 9, 5, 11, 9, "CarmenF");
let dovima = new Queen("Dovima Nurmi", 6, 5, 5, 4, 5, 8, 8, "Dovima");
let drag = new Queen("Drag Vulcano", 6, 6, 5, 7, 7, 8, 6, "Drag");
let hugaceo = new Queen("Hugáceo Crujiente", 7, 6, 7, 11, 6, 8, 9, "Hugaceo");
let inti = new Queen("Inti", 7, 7, 7, 7, 7, 12, 7, "Inti");
let killer = new Queen("Killer Queen", 7, 8, 6, 7, 9, 9, 7, "Killer");
let pupi = new Queen("Pupi Poisson", 8, 8, 8, 6, 9, 9, 9, "Puppy");
let sagittaria = new Queen("Sagittaria", 7, 8, 9, 9, 8, 9, 8, "Sagittaria");
let macarena = new Queen("The Macarena", 6, 7, 6, 5, 5, 7, 7, "Macarena");

let dres = [arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena];


//SPECIAL

let pangina = new Queen("Pangina Heals", 10, 10, 9, 12, 9, 13, 11);

let international_as = [baga, blu, cheryl, janey, jimbo, jujubee, lemon, monique, pangina];

//all possible queens:
let allQueens: Array<Queen> = [
akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam,
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
anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS,
anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi,
chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,
ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi,
amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra,
angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda,
anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi,
arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena,
pangina
].sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));

let allQueensCopy: Array<Queen> = [];