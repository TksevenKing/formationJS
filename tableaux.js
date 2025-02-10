// Les Tableaux en JS

// declaration avec const ou let
const films = ["avnegers", "iron man", "black panther"];
console.log(films);

// Les methodes sur les tableaux
// ajout d'un elt 
films.push("captain America");
let nbrFilm = films.length

console.log(nbrFilm)

// Ditinguez les Copie par Valeurs et par References
let varSimple1 = 42;
let varSimple2 = varSimple1; // ceci est une copie par valeur 

// Mais pour les types complexes comme les tableuax et les objets ca ne marche pas 

///////////////////////
// Copie par référence
///////////////////////
let tab1 = ["volvo", "toyota", "Supra"];
let tab2 = tab1; // Ceci est une copie par reference car tab2 et tab1 poite vers le meme contenu
//tab2.pop(); // va modifier aussi tab1 alors qu'on ne veut pas ca
console.log(tab1);
// Pour vrament dupliquer le tableau copiez les elts un a un avec l'opearteur "..." qui est un "spread operator"
tab2 = [...tab1]; // Ceci copie tous les elts de tab1 dans tab2 sans faire une reference

tab2.pop();
console.log("tab1: [" + tab1 + "]");
console.log("tab2: [" + tab2 + "]");

let car1 = {
  marque : "volvo",
  prix : 2500
}
// Cas des Objets 
let car2 = {...car1};

car2.annee = 2020;

console.log(car2);
console.log(car1);


// Exo d'application 
let playlist = ['al Dossari', 'rachid el jay', 'koita'];
let totalMorceaux = playlist.length;

playlist.push("Ali","Walid");
console.log(playlist)

playlist.pop()

console.log(playlist)