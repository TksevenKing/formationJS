console.log("Hello, world");


let inputSaisie = document.getElementById("inputSaisie")
// console.log(inputSaisie)

// console.log(btnValidation)
let motPropose = document.querySelector(".zoneProposition")
// console.log(motPropose)
let zoneScore = document.querySelector("#score span")
// console.log(zoneScore)
let btnRadio = document.querySelectorAll(".zoneChoix input")
// console.log(btnRadio)
let inputMot = document.getElementById("mots")
// console.log(inputMot)
let inputPhrases = document.getElementById("phrases")
// console.log(inputPhrases)
let valueRadiobtn = btnRadio[0].getAttribute("value")
// console.log(value)
let listRadioBtn = document.querySelectorAll('input[type="radio"]')



let i = 0;

// fonction Principale pour lancer le jeu


function lancerJeu(){
    let score = 0;
    let nbMotsProposez = 0 ;
    //1. Proposez un mot l'utilisateur

    let choix = choisirPhrasesOuMots() 
    let liste = listeMots



    //2. verifier si le mot saisie est correct ou non
    if(choix === "mots"){
        // S'il choisit "mots"
        // score = lancerBoucleDeJeu(listeMots)
        liste = [...listeMots]
        nbMotsProposez = listeMots.length
        

    }else{
        // S'il choisit phrase
        // score = lancerBoucleDeJeu(listePhrases)
        liste = [...listePhrases]
        nbMotsProposez = listePhrases.length
    }
    
    console.log(listRadioBtn)
    for(let index =0;index<listRadioBtn.length;index++){
        listRadioBtn[index].addEventListener("change", (event) =>{
            console.log(event.target.value)
            if(event.target.value === "1"){
                choix = "mots"
                liste = [...listeMots]
            }else{
                choix = "phrases"
                liste = [...listePhrases]
            }
            i = 0;
            afficherProposition(liste[i])
        })
    }

    motPropose.innerHTML = liste[0]
    
    let btnValidation = document.getElementById("btnValidation")

    
    btnValidation.addEventListener("click", () => {
        
        // je recupere le contenu du saisie
        let motSaisie = inputSaisie.value
        if(motSaisie === liste[i]){
            console.log("Correct vous avez tapez le bon mot ou phrase")
            score++
        }
        i++  // pour faire le test sur le mot suivant
        if( liste[i] === undefined ){
            afficherProposition("le jeu est finie")
            btnValidation.disabled = true
        }else{
            afficherProposition(liste[i])
        }
        
        // Vider le champ apres click du boutton
        inputSaisie.value = ""

        console.log(motSaisie)
        console.log(i)
        // chaque fois mettre a jour le score
        afficherResultat(score,liste.length)
        
    })


   

    
}

function afficherProposition(mot){
    motPropose.innerHTML = mot
}

// function updateScore()

function afficherResultat(score, nombreQuestion){
    // console.log('Votre score est de ' + score + ' sur ' + nombreQuestion)
    zoneScore.innerHTML = `${score} / ${nombreQuestion}`;  // mettre a jour le resultat YESSSSSSSSSSSSSSSSSSS!!!!!!!!!!!
}

function choisirPhrasesOuMots(){
    // let choix = prompt("mots ou phrase: ")
    let radioBtnValue = "";
    for(let i=0; i<listRadioBtn.length;i++){
        if(listRadioBtn[i].checked){
            radioBtnValue = listRadioBtn[i].value
            
        }
    }
    console.log(radioBtnValue)
    if(radioBtnValue === "1"){
        choix = "mots"
    }else{
        choix = "phrases"
    }

    return choix
}



// function lancerBoucleDeJeu(listeMotsOuPhrase){
//     let score = 0

//     for(let i=0;i< listeMotsOuPhrase.length;i++){
//         let motOuPhrase = prompt("Saisir un mot: "+ listeMotsOuPhrase[i])
//         // // Proposer les mots un a un 
//         // motPropose.innerHTML = `${listeMotsOuPhrase[i]}`
//         // let motOuPhrase = inputSaisie.value
//         // console.log(motOuPhrase)
//         // Ajout un addEvenListener  au btn Vlaider

//         if(motOuPhrase === listeMotsOuPhrase[i]){
//             console.log("Correct vous avez tapez le bon mot ou phrase")
//             score++
//         }
//     }

//     return score
// }

