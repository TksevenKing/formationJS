console.log("Hello, world");




let i = 0;

// fonction Principale pour lancer le jeu
lancerJeu()

function afficherResultat(score, nombreQuestion){
    console.log('Votre score est de ' + score + ' sur ' + nombreQuestion)
}

function choisirPhrasesOuMots(){
    let choix = prompt("Veuillez choisir la liste: mots ou phrases ");

    while(choix !== "mots" && choix !== "phrases"){
        choix = prompt("Mots ou Phrases? : ");
    };
    return choix
}



function lancerBoucleDeJeu(listeMotsOuPhrase){
    let score = 0
    for(let i=0; i< listeMotsOuPhrase.length; i++){
        let phrase = prompt("Saisir un mot: "+ listeMotsOuPhrase[i])
    
    
        if(phrase === listeMotsOuPhrase[i]){
            console.log("Correct vous avez tapez le bon mot ou phrase")
            score++
        }
    }

    return score
}

function lancerJeu(){
    let score = 0;
    let nbMotsProposez = 0 ;
    //1. Proposez un mot l'utilisateur

    let choix = choisirPhrasesOuMots() 

    //2. verifier si le mot saisie est correct ou non
    if(choix === "mots"){
        // Si il choisit "mots"
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposez = listeMots.length

    }else{
        // S'il choisit phrase
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposez = listePhrases.length
    }
    afficherResultat(score,nbMotsProposez)
}