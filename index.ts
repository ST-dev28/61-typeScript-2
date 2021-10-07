/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su trikampiais
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 * 
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 * 
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 * 
 * 8. Papildykite klasę metodu, kuris nurodo, ar trikampis yra
 * statusis.
 *
 * 9. Sukurkite masyvą, kuris saugo trikampių reikšmes,
 * panaudodami ciklą atspausdinkite visų masyve esančių trikampių
 * duomenis.
 *
 * 10. ND: Papildykite programą funkcionalumu, kuris trikampių
 * masyvą užpildo trikampiais (50 reikšmių), kurių kraštinės yra
 * atsitiktinės reikšmės.
 *
 * Papildoma: Vėliau programa, masyvą prafiltravus, paliktu
 * tik egzistuojančius trikampius ir atspausdintų jų duomenis.
 */


class Trikampis {
    public a: number;
    public b: number;
    public c: number;

    constructor(a: number, b: number, c: number) {
        //console.log("Konstruktorius iskviestas");
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public spausdintiDuomenis(): void {
        console.log(`Trikampio krastines yra (cm): a = ${this.a}, b = ${this.b}, c = ${this.c}.`);
        console.log(`Trikampio perimetras (cm):  ${this.trikampioPerimetas()}.`);
        console.log(`Ar trikampis stausis:  ${this.arTikampisStatusis()}.`);
        console.log(`Ar trikampis egzistuoja =>  ${this.arTrikampisEgzistuoja()}.`);
        //console.log(`Ar trikampis egsistuoja => ${(this.arTrikampisEgzistuoja) ? "Taip" : "Ne"}`);  //su ternary operatorium
        //console.log(`Trikampis ${this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"}.`);
        //console.log(`Ar trikampis statusis => ${(this.arTikampisStatusis) ? "Taip" : "Ne"}`); //ternary iskart spausdina tinkama atsakyma
        //console.log("------------");
        /*
        // galima su ternary operatorium vietoj IF
            if(this.arTrikampisEgzistuoja()) {
                    console.log("Trikampis egzistuoja!");  
                } else{
                    console.log("Trikampis NEegzistuoja!");
                }
        
        // galima su ternary operatorium vietoj IF
                if(this.arTikampisStatusis()) {
                    console.log("Trikampis statusis!");  
                } else{
                    console.log("Trikampis NEstatusis!");
                }*/
    }

    public trikampioPerimetas(): number {
        return this.a + this.b + this.c;
    }

    // tikrinam, ar trikampis su uzduotais parametrais gali egzistuoti
    public arTrikampisEgzistuoja(): boolean {
        if (this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a &&
            this.a !== 0 && this.b !== 0 && this.c !== 0) {
            return true;
        }
        return false;
    }
    /*
        // metodas su GET ir ternary operatorium
        public get arTrikampisEgzistuoja(): boolean {
            return this.a + this.b > this.c ||
                this.b + this.c > this.a ||
                this.a + this.c > this.b;
        }*/

    // tikrinam, ar trikampis statusis
    public arTikampisStatusis(): boolean {
        const a2 = this.a * this.a;
        const b2 = this.b * this.b;
        const c2 = this.c * this.c;
        if (a2 + b2 === c2 ||
            c2 + b2 === a2 ||
            a2 + c2 === b2) {
            return true;
        }
        return false;
    }


    // generuojam atsistiktinius skaicius
    public getRandomNumber(): number {
        return Math.floor(Math.random() * 100);
    }

    // sukuriam naujus trikampius su atsistiktiniais parametrais
    public createTrikampius(newArray: any, qty: number): [] {
        for (let i = 0; i < qty; i++) {
            newArray.push({ a: this.getRandomNumber, b: this.getRandomNumber, c: this.getRandomNumber })
        }
        return newArray;
    }

    public spausintiDuomenis(newArray: any): void {
        for (const trikampis of newArray) {
            console.log(trikampis);
        }
    }
}
const trikampis = new Trikampis(2, 10, 15);
const trikampis1 = new Trikampis(2, 50, 16);
const trikampis2 = new Trikampis(3, 4, 81);
const trikampis3 = new Trikampis(5, 8, 30);

//trikampis1.spausdintiDuomenis();
//trikampis2.spausdintiDuomenis();

//console.log(trikampis1);
//console.log(trikampis2);

let trikampiai: Trikampis[] = [];

//kurima random parametrus (trikampio duomenis)
function getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
}

//kuriam random trikampius
function createTrikampius(quantity: number = 50): void {
    for (let i = 0; i < quantity; i++) {
        trikampiai.push(new Trikampis(getRandomNumber(), getRandomNumber(), getRandomNumber()));
    }
    console.log(trikampiai);
}

//iskvieciam funkcija reikiamam kiekiui elementu (siu atveju trikampiu) masyve atspausdinti
createTrikampius();

//spausdina duomenis is uzduoto masyvo
function spausdintiRezultata(newArray: Trikampis[]): void {
    let count = 1;
    for (const trikampis of newArray) {
        console.log(`${count++}.`);
        trikampis.spausdintiDuomenis();
    };
}
// spausdina visa detalia informacija apie trikampius, pagal uzduotas salygas/veiksmus auksciau
//spausdintiRezultata(trikampiai);

// issfiltruojam trikampius, kurie egzistuoja (true)
const existingTrikampiai = trikampiai.filter(trikampis => trikampis.arTrikampisEgzistuoja() === true);
console.log(existingTrikampiai);
// spausdina visas uzduotas auksciau detales (visa kita info)
//spausdintiRezultata(existingTrikampiai);

/*************************/
/*const trikampiai: Trikampis[] = [];
for (let i = 0; i <= 49; i++) {

  let aAny: number = Math.floor(Math.random() * 100);
  let bAny: number = Math.floor(Math.random() * 100);
  let cAny: number = Math.floor(Math.random() * 100);

  trikampiai.push(new Trikampis(aAny, bAny, cAny));
}
//console.table(trikampiai);
console.log(trikampiai);

for (const trikampis of trikampiai) {
  if (trikampis.arTrikampisEgzistuoja){
    trikampis.spausdintiDuomenis();
  }
}

// keli galimi variantai
//const trikampiai: Trikampis[] = [new Trikampis(2, 2, 16), new Trikampis(3, 3, 81)];   // sis arba kitas var
//trikampiai.push(new Trikampis(10, 10, 20));                                           // sis arba kitas var
//console.log(trikampiai);

for (let {a, b, c} of trikampiai ) {                                                  // sis arba kitas var
    trikampis.spausdintiDuomenis();
}*/