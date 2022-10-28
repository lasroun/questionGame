// creer un quiz standard,

// creer un systeme de classement, 

// creer un localstorage,

// introduire json in database, 

// lieer a une api python


// fichier JSON
let quiz = {
    "data": [
        {
            "question": "Quel est le style de combat de Zoro ?",
            "choix": ["3 sabres", "Fruit du démon", "Lance-pierre"],
            "reponse": "3 sabres"
        },
        {
            "question": "Qui est Brook ?",
            "choix": ["Un copain de Baggy", "Un squelette avec une coupe afro", "Un Amiral"],
            "reponse": "Un squelette avec une coupe afro"
        },
        {
            "question": "Qui est le père de Luffy ?",
            "choix": ["Monkey D. Garp", "Monkey D. Shanks", "Monkey D. Dragon"],
            "reponse": "Monkey D. Dragon"
        },
        {
            "question": "Sanji a-t-il déjà vu Nami nue ?",
            "choix": ["Non", "Oui, dans les douches du palais d'Alabasta", "Oui, dans les toilettes du palais d'Alabasta"],
            "reponse": "Oui, dans les douches du palais d'Alabasta"
        },
        {
            "question": "Qui a tué Ace ?",
            "choix": ["Borsalino", "Sakazuki", "Kuzan"],
            "reponse": "Sakazuki"
        }
    ]
}

// variable
let joueur
let pointTotal = 0
function reload(){
    for (const iterator of Object.keys(localStorage)) {
        let cacheDoc = document.createElement('p')
        cacheDoc.textContent = `${iterator} - ${localStorage.getItem(iterator)}`
        htmlScores.appendChild(cacheDoc)
    }
}

// recuperation des elements html
let htmlCommencer = document.querySelector("#formulaire")
let htmlQuestion = document.querySelector("#question")
let htmlBtnA = document.querySelector("#btn-A")
let htmlBtnB = document.querySelector("#btn-B")
let htmlBtnC = document.querySelector("#btn-C")
let htmlScores = document.querySelector("#score")
let htmlSectionQuestion = document.querySelector("#section-question")
let htmlSectionReponse = document.querySelector("#section-reponse")
let htmlSectionStart = document.querySelector("#section-start")
let htmlQuizTotal = document.querySelector("#quiz-total")
let htmlQuizResolu = document.querySelector("#quiz-resolu")
let htmlPseudo = document.querySelector("#pseudo")
let htmlSectionNavigation = document.querySelector("#section-navigation")
let htmlNext = document.querySelector("#next")
let htmlPrevious = document.querySelector("#previous")
let htmlSectionFinish = document.querySelector("#section-finish")
let htmlFinish = document.querySelector("#finish")

reload()
//fonction
function displayQuestion(){
    htmlSectionQuestion.style.display = "flex"
    htmlSectionReponse.style.display = "block"
    htmlSectionNavigation.style.display = "block"
}

function displayStarter(){
    htmlSectionStart.style.display = "block"
}

function displayNoneQuestion(){
    htmlSectionQuestion.style.display = "none"
    htmlSectionReponse.style.display = "none"
    htmlSectionNavigation.style.display = "none"
}

function displayNoneStarter(){
    htmlSectionStart.style.display = "none"
}

function disabledElement(element){
    element.style.pointerEvents = "none"
}
function enableElement(element){
    element.style.pointerEvents = "auto"
}


function soloQuiz(element){
    displayQuestion()
    enableElement(htmlBtnA)
    enableElement(htmlBtnB)
    enableElement(htmlBtnC)
    htmlBtnA.className = "btn btn-secondary display-6"
    htmlBtnB.className = "btn btn-secondary display-6"
    htmlBtnC.className = "btn btn-secondary display-6"

    htmlQuestion.textContent = element.question
    htmlBtnA.value = element.choix[0]
    htmlBtnB.value = element.choix[1]
    htmlBtnC.value = element.choix[2]
    verify(element)
}


function verify(element){

    function addEventlistA(){
        element.choice = htmlBtnA
        element.config = true
        if(htmlBtnA.value == element.reponse){
            htmlBtnA.className = "btn btn-success display-6"
            htmlBtnA.removeEventListener("click", addEventlistA)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
            pointTotal += 1
            console.log(pointTotal)

        }else{
            htmlBtnA.className = "btn btn-danger display-6"
            htmlBtnA.removeEventListener("click", addEventlistA)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
        }
        console.log(`${element.choice.value} verify`)
    }
    function addEventlistB(){
        element.choice = htmlBtnB
        element.config = true
        if(htmlBtnB.value == element.reponse){
            htmlBtnB.className = "btn btn-success display-6"
            htmlBtnB.removeEventListener("click", addEventlistB)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
            pointTotal += 1
            console.log(pointTotal)

        }else{
            htmlBtnB.className = "btn btn-danger display-6"
            htmlBtnB.removeEventListener("click", addEventlistB)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
        }
        console.log(`${element.choice.value} verify`)
    }
    function addEventlistC(){
        element.choice = htmlBtnC
        element.config = true
        if(htmlBtnC.value == element.reponse){
            htmlBtnC.className = "btn btn-success display-6"
            htmlBtnC.removeEventListener("click", addEventlistC)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
            pointTotal += 1
            console.log(pointTotal)
        }else{
            htmlBtnC.className = "btn btn-danger display-6"
            htmlBtnC.removeEventListener("click", addEventlistC)
            disabledElement(htmlBtnA)
            disabledElement(htmlBtnB)
            disabledElement(htmlBtnC)
        }
        console.log(`${element.choice.value} verify`)
    }
    htmlBtnA.addEventListener("click", addEventlistA)
    htmlBtnB.addEventListener("click", addEventlistB)
    htmlBtnC.addEventListener("click", addEventlistC)
}

htmlSectionFinish.addEventListener("click", () => {
    console.log(pointTotal)
    joueur.scoreInfo = pointTotal
    localStorage.setItem(`${joueur.nameJoueur}`, `${joueur.scoreInfo}`)
    reload()
})

// class utile

class Quiz{
    constructor(question, choix, reponse){
        this.question = question
        this.choix = choix
        this.reponse = reponse
    }
}

class Joueur{
    constructor(name){
        this.name = name
        this.score = 0
    }
    get scoreInfo(){
        return this.score
    }
    set scoreInfo(valeur){
        this.score = valeur
    }
    get nameJoueur(){
        return this.name
    }
}

class Jeu{
    constructor() {
        let listQuiz = []
        let nowIndex = 0
        htmlPrevious.style.display = 'none'

        // initialisation listQuizObject
        for (const key of quiz.data) {
            let _ = new Quiz(key.question, key.choix, key.reponse)
            listQuiz.push(_)
        }
        htmlQuizResolu.textContent = nowIndex +1
        htmlQuizTotal.textContent = listQuiz.length

        // htmlPrevious.addEventListener("click", () => {
        //     if(nowIndex >= 1){
        //         nowIndex -= 1
        //         htmlQuizResolu.textContent = nowIndex +1
        //         htmlQuizTotal.textContent = listQuiz.length
        //         soloQuiz(listQuiz[nowIndex])
        //     }
        //     if(nowIndex === 0){
        //         htmlQuizResolu.textContent = nowIndex +1
        //         htmlQuizTotal.textContent = listQuiz.length
        //         soloQuiz(listQuiz[nowIndex])
        //         htmlPrevious.style.display = 'none'
        //     }
        // })
        htmlNext.addEventListener("click", () =>{
            console.log(nowIndex, pointTotal)
            if(nowIndex < listQuiz.length-1){
                nowIndex += 1
                htmlQuizResolu.textContent = nowIndex +1
                htmlQuizTotal.textContent = listQuiz.length
                soloQuiz(listQuiz[nowIndex])
                // htmlPrevious.style.display = 'inline-block'
            }
            if(nowIndex === listQuiz.length-1){
                htmlQuizResolu.textContent = nowIndex +1
                htmlQuizTotal.textContent = listQuiz.length
                soloQuiz(listQuiz[nowIndex])
                htmlNext.style.display = 'none'
                htmlSectionFinish.style.display = 'inline-block'
                // htmlPrevious.style.display = 'inline-block'
            }
        })
        displayNoneQuestion()
        htmlSectionFinish.style.display = "none"
        htmlCommencer.addEventListener("submit", (e) => {
        e.preventDefault()
        displayNoneStarter()
        if(htmlPseudo.value !== ""){
            joueur = new Joueur(htmlPseudo.value)
            setTimeout(()=>{
                soloQuiz(listQuiz[nowIndex])
            }, 500)
        }else{
            displayStarter()
        }
        })
    }
}

// debut
let start = new Jeu()