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
 */


class Trikampis {
a: number;   
b: number;
c: number;

constructor(a: number, b: number, c: number) {
console.log("Konstruktorius iskviestas");
this.a = a;
this.b = b;
this.c = c;
}
spausdintiDuomenis(): void {
        console.log(`Trikampio krastines yra: ${this.a}, ${this.b}, ${this.c} cm.`);
        console.log("------------");
    }
}

const trikampis1 = new Trikampis(10, 10, 20);
const trikampis2 = new Trikampis(10, 15, 30);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
