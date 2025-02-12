console.log("Hello, world");


let inputSaisie = document.getElementById("inputSaisie")
let motPropose = document.querySelector(".zoneProposition")
let zoneScore = document.querySelector("#score span")
let inputMot = document.getElementById("mots")
let inputPhrases = document.getElementById("phrases")
let listRadioBtn = document.querySelectorAll('input[type="radio"]')



let i = 0;

// fonction Principale pour lancer le jeu


function lancerJeu(){
    let score = 0;
    let nbMotsProposez = 0 ;
    //1. Proposez un mot l'utilisateur


    let liste = listeMots

    motPropose.innerHTML = listeMots[0]
    for(let index =0; index <  listRadioBtn.length;index++){
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







