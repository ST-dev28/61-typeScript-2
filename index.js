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
 * Papildoma: Vėliau programa masyvą prafiltravus
 * paliktų tik egzistuojančius trikampius ir atspausdintų jų duomenis.
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
        console.log("Trikampio 1 perimetras (cm):  " + trikampis1.trikampioPerimetas() + ".");
        console.log("Trikampio 2 perimetras (cm):  " + trikampis2.trikampioPerimetas() + ".");
        console.log("Ar trikampis stausis:  " + trikampis1.arTrikampisStatusis() + ".");
        //console.log(`Ar trikampis 1 egzistuoja:  ${trikampis2.arTrikampisEgzistuoja()}.`);
        console.log("------------");
        /*if(this.arTrikampisEgzistuoja()) {
            console.log("Trikampis egzistuoja!");
        } else{
            console.log("Trikampis NEegzistuoja!");
        }*/
        console.log("Trikampis " + (this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"));
        console.log("Trikampis " + (this.arTrikampisStatusis ? "statusis" : "ne statusis"));
        /*if(this.arTrikampisStatusis()) {
            console.log("Trikampis Statusis!");
        } else{
            console.log("Trikampis NE status!");
        }*/
        console.log("------------");
    };
    Trikampis.prototype.trikampioPerimetas = function () {
        return this.a + this.b + this.c;
    };
    Trikampis.prototype.arTrikampisEgzistuoja = function () {
        if (this.a + this.b > this.c ||
            this.a + this.c > this.b ||
            this.b + this.c > this.a) {
            return true;
        }
        return false;
    };
    Trikampis.prototype.arTrikampisStatusis = function () {
        var a2 = this.a * this.a;
        var b2 = this.b * this.b;
        var c2 = this.c * this.c;
        if (a2 + b2 === c2 ||
            c2 + b2 === a2 ||
            a2 + c2 === b2) {
            return true;
        }
        return false;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(10, 10, 20);
var trikampis2 = new Trikampis(10, 15, 30);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
console.log(trikampis1);
console.log(trikampis2);
var trikampiai = [new Trikampis(10, 10, 20)]; // sis arba kitas var
trikampiai.push(new Trikampis(10, 10, 20)); // sis arba kitas var
for (var _i = 0, trikampiai_1 = trikampiai; _i < trikampiai_1.length; _i++) { // sis arba kitas var
    var trikampis = trikampiai_1[_i];
    trikampis.spausdintiDuomenis();
}
