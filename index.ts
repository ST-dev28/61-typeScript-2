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
    console.log(`Trikampio 1 perimetras (cm):  ${trikampis1.trikampioPerimetas()}.`);
    console.log(`Trikampio 2 perimetras (cm):  ${trikampis2.trikampioPerimetas()}.`);
    console.log(`Ar trikampis stausis:  ${trikampis1.arTrikampisStatusis()}.`);
    //console.log(`Ar trikampis 1 egzistuoja:  ${trikampis2.arTrikampisEgzistuoja()}.`);
    console.log("------------");

    if(this.arTrikampisEgzistuoja()) {
        console.log("Trikampis egzistuoja!");  
    } else{
        console.log("Trikampis NEegzistuoja!");
    }
       console.log("------------");
    }


    public trikampioPerimetas(): number {
        return this.a + this.b + this.c;
    }
     public arTrikampisEgzistuoja(): boolean {
        if(this.a +this.b > this.c ||
            this.a + this.c > this.b ||
            this.b + this.c > this.a) {
                return true;
            }
        return false;
    }

        public arTrikampisStatusis(): boolean {
            const a2 = this.a * this.a;
            const b2 = this.b * this.b;
            const c2 = this.c * this.c;
        if ( a2 + b2 === c2 ||
            c2 + b2 === a2 ||
            a2 + c2 === b2) {
                return true;
            }
         return false;   
    }
}

const trikampis1 = new Trikampis(10, 10, 20);
const trikampis2 = new Trikampis(10, 15, 30);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();

console.log(trikampis1);
console.log(trikampis2);
