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
 */
var Trikampis = /** @class */ (function () {
    function Trikampis(a, b, c) {
        //console.log("Konstruktorius iskviestas");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Trikampio krastines yra (cm): a = " + this.a + ", b = " + this.b + ", c = " + this.c + ".");
        console.log("Trikampio perimetras (cm):  " + trikampis1.trikampioPerimetas() + ".");
        console.log("Trikampio perimetras (cm):  " + trikampis2.trikampioPerimetas() + ".");
        console.log("------------");
    };
    Trikampis.prototype.trikampioPerimetas = function () {
        return this.a + this.b + this.c;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(10, 10, 20);
var trikampis2 = new Trikampis(10, 15, 30);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
console.log(trikampis1);
console.log(trikampis2);
