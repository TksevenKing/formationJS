console.log("Hello, world");


let score = 0;

let i = 0;
//1. Proposez un mot l'utilisateur

let choix = prompt("Veuillez choisir la liste: mots ou phrases ");

while(choix !== "mots" && choix !== "phrases"){
    choix = prompt("Mots ou Phrases? : ");
};

if(choix === "mots"){
    // Si il choisit "mots"
    for(let i=0; i< listeMots.length; i++){
        let mot = prompt("Saisir un mot:  "+ listeMots[i])

        // estMot(mot)
        if(mot === listeMots[i]){
            console.log("Correct vous avez tapez le bon mot")
            score++
        }else{
            console.log("Incorrect vous n'avez pas tapez le bon mot")
        }
    }
    let messageScore = retournerMessageScore(score, listeMots.length)
    console.log(messageScore)

}else{
    // S'il choisit phrase


    for(let i=0; i< listePhrases.length;i++){
        let phrase = prompt("Saisir un mot: "+ listePhrases[i])

        // estPhrase(phrase)
        if(phrase === listePhrases[i]){
            console.log("Correct")
            score++
        }else{
            console.log("Incorrect")
        }

        let messageScore = retournerMessageScore(score, listePhrases.length)
        console.log(messageScore)
}
}
function estMot(mot){

    if(mot === listeMots[i]){
        console.log("Correct vous avez tapez le bon mot")
        score++
    }else{
        console.log("Incorrect vous n'avez pas tapez le bon mot")
    }
    console.log("Votre score est "+ score + " sur " + listeMots.length)
}
function estPhrase(phrase){
    if(phrase === listePhrases[i]){
        console.log("Correct")
        score++
    }else{
        console.log("Incorrect")
    }

}

function retournerMessageScore(score, nombreQuestion){
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestion
    return message
}
