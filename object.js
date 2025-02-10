let car = {
    marque : "Volvo",  // NB: marque : "volvo" et non marque = "volvo"
    moteur : "v8",
    anneeFab : 2025
  }
  // Ajout un autre attribut a notre objet
  
  car.prix = 2500;
  
  console.log("Marque "+ car.marque + " moteur " + car.moteur + " Annee de fabrication "+ car.anneeFab + " Prix " + car.prix + "$");
  
  console.log(car);

  // =======================#============================ //

  // Exo ticket de cinema
let ticket = {
    nomFilm : "Avengers",
    prix : 10.00,
    numSalle : 1
  }
  
  const nom = "oumar";
  
  let texteAffichage = "Bonjour " + nom + ", votre film "+ ticket.nomFilm + " est en salle " + ticket.numSalle ;
  console.log(texteAffichage);
