//Le tueur
let name = "jason";
let tueurHP = 100;

//Les noms et caractéristiques
let noms = ["Henry", "Mathew", "Jane", "Harry", "Kenny"];
let caracteristques = ["Sportif", "Nerd", "Populaire", "Maladroit", "Courageux"];

let vivants = []; 
let morts = []; 


//creation des 5 personnages
for (let i = 0; i < 5; i++) {
  let nomAleatoire = Math.floor(Math.random() * noms.length);
  let caraAleatoire = Math.floor(Math.random() * caracteristques.length);

  let nom = noms[nomAleatoire];
  let cara = caracteristques[caraAleatoire];

  noms.splice(nomAleatoire, 1);
  caracteristques.splice(caraAleatoire, 1);

  let meurt = 0.2;
  let esquive = 0.5;
  let frappe = 0.3;

  perso = [nom, cara, meurt, esquive, frappe];
  vivants.push(perso);
  
}

//combat
while (vivants.length > 0 && tueurHP > 0) {
  let survivant = vivants[0];
  let proba = Math.random();

  if (proba < survivant[2]) {
    console.log("Jason a tué " + survivant[0] + "!");
    morts.push(survivant[0]);
    vivants.shift();  
  } else if (proba >= survivant[2] && proba < survivant[2] + survivant[3]) {
    tueurHP = tueurHP - 10;
    console.log(survivant[0] + " a fait perdre 10HP à Jason"); 
  } else {
    tueurHP = tueurHP - 15;
    console.log(survivant[0] + " a fait perdre 15HP à Jason mais Jason l'a tué aussi."); 
    morts.push(survivant[0]);
    vivants.shift();
  }
  console.log("Il reste " + tueurHP + "HP à Jason");
    
}

//Qui a gagné
if (tueurHP <= 0) {
  console.log("les survivants ont réussi mais Rip à ceux qui sont morts : morts" + morts)  ;
} else {
  console.log("Jason a massacré tous le monde !"); 
}
