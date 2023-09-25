"use strict";

let nbrTaxis=0;
let nbrFeuxRouges=0;
let Hp=10;
let feuxRouges=30;
let nom ="john";
let random;


let musique1=["anissa","feu de bois","bénéfice","tpm","mw2" ];


while (nbrFeuxRouges < feuxRouges &&  Hp > 0) {

  nbrFeuxRouges = nbrFeuxRouges + 1;

  random = (Math.floor(Math.random()  * 5) + 1);

    switch (random) {
        case 1:
            console.log("A la radio : Anissa ! Vite changement de taxi !");
            Hp = Hp - 1;
            nbrTaxis= nbrTaxis + 1;
            break;

        case 2:
            console.log("A la radio : feu de bois, le voyage continue.");
            break;

        case 3:
            console.log("A la radio : bénéfice, le voyage continue.");
            break;

        case 4:
            console.log("A la radio : tpm, le voyage continue.");
            break;

        case 5:
            console.log("A la radio : mw2, le voyage continue.");
 
            break };

}

if(Hp<=0){
  console.log("John a explosé !");
}else{
  console.log("John est arrivé chez lui, il a pris " + nbrTaxis + " taxis");
}