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

// recuperation des elements html
let htmlCommencer = document.querySelector("#formulaire")
let htmlQuestion = document.querySelector("#question")
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
let htmlChoiceA = document.querySelector("#choiceA")
let htmlChoiceB = document.querySelector("#choiceB")
let htmlChoiceC = document.querySelector("#choiceC")

let listQuiz = []
if(!(localStorage.getItem("listscore"))){
    localStorage.setItem("listscore", [])
}

for (let index = 0; index < quiz.data.length; index++) {
    let _ = {
        "question": quiz.data[index].question,
        "choix": quiz.data[index].choix,
        "reponse": quiz.data[index].reponse,
        "index": index +1
    }
    listQuiz.push(_)
}

let pseudo

htmlSectionQuestion.style.display = 'none'
htmlSectionReponse.style.display = 'none'
htmlSectionNavigation.style.display = 'none'
htmlSectionFinish.style.display = 'none'
htmlCommencer.addEventListener("click", (e)=>{
    e.preventDefault()
    if(htmlPseudo.value !== ""){
        htmlCommencer.style.display = 'none'

        pseudo = htmlPseudo.value

        htmlQuestion.textContent = listQuiz[0].question
        htmlChoiceA.textContent = listQuiz[0].choix[0]
        htmlChoiceB.textContent = listQuiz[0].choix[1]
        htmlChoiceC.textContent = listQuiz[0].choix[2]
        htmlQuizResolu.textContent = listQuiz[indexNow].index
        htmlQuizTotal.textContent = listQuiz.length

        htmlSectionQuestion.style.display = ''
        htmlSectionReponse.style.display = ''
        htmlSectionNavigation.style.display = ''
    }
})

let indexNow = 0
let score = 0
let saveInfo = []

htmlNext.addEventListener("click", ()=>{
    if(indexNow < (listQuiz.length - 1)){
        let _ = []
        for (let index = 0; index < saveInfo.length; index++) {
            _.push(saveInfo[index].index)
        }

        htmlChoiceA.style.pointerEvents = 'auto'
        htmlChoiceB.style.pointerEvents = 'auto'
        htmlChoiceC.style.pointerEvents = 'auto'
        htmlChoiceA.className = 'btn btn-secondary'
        htmlChoiceB.className = 'btn btn-secondary'
        htmlChoiceC.className = 'btn btn-secondary'

        indexNow = indexNow + 1
        
        htmlQuestion.textContent = listQuiz[indexNow].question
        htmlChoiceA.textContent = listQuiz[indexNow].choix[0]
        htmlChoiceB.textContent = listQuiz[indexNow].choix[1]
        htmlChoiceC.textContent = listQuiz[indexNow].choix[2]
        htmlQuizResolu.textContent = listQuiz[indexNow].index
        htmlQuizTotal.textContent = listQuiz.length
        if(_.includes(indexNow)){
            for (let index = 0; index < saveInfo.length; index++) {
                if(indexNow == saveInfo[index].index){
                    if(htmlChoiceA.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceA.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceA.className = 'btn btn-success'
                        }else{
                            htmlChoiceA.className = 'btn btn-danger'
                        }
                    }
                    if(htmlChoiceB.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceB.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceB.className = 'btn btn-success'
                        }else{
                            htmlChoiceB.className = 'btn btn-danger'
                        }
                    }
                    if(htmlChoiceC.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceC.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceC.className = 'btn btn-success'
                        }else{
                            htmlChoiceC.className = 'btn btn-danger'
                        }
                    }
                }
            }
        }
    }
    if(saveInfo.length == listQuiz.length-1){
        htmlSectionNavigation.style.display = 'none'
        htmlSectionFinish.style.display = ''
    }
})
htmlPrevious.addEventListener("click", ()=>{
    if(indexNow > 0){
        let _ = []
        for (let index = 0; index < saveInfo.length; index++) {
            _.push(saveInfo[index].index)
        }
        htmlChoiceA.style.pointerEvents = 'auto'
        htmlChoiceB.style.pointerEvents = 'auto'
        htmlChoiceC.style.pointerEvents = 'auto'
        htmlChoiceA.className = 'btn btn-secondary'
        htmlChoiceB.className = 'btn btn-secondary'
        htmlChoiceC.className = 'btn btn-secondary'

        indexNow = indexNow - 1
        htmlQuestion.textContent = listQuiz[indexNow].question
        htmlChoiceA.textContent = listQuiz[indexNow].choix[0]
        htmlChoiceB.textContent = listQuiz[indexNow].choix[1]
        htmlChoiceC.textContent = listQuiz[indexNow].choix[2]
        htmlQuizResolu.textContent = listQuiz[indexNow].index
        htmlQuizTotal.textContent = listQuiz.length

        if(_.includes(indexNow)){
            for (let index = 0; index < saveInfo.length; index++) {
                if(indexNow == saveInfo[index].index){
                    if(htmlChoiceA.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceA.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceA.className = 'btn btn-success'
                        }else{
                            htmlChoiceA.className = 'btn btn-danger'
                        }
                    }
                    if(htmlChoiceB.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceB.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceB.className = 'btn btn-success'
                        }else{
                            htmlChoiceB.className = 'btn btn-danger'
                        }
                    }
                    if(htmlChoiceC.textContent == saveInfo[indexNow].save){
                        if(htmlChoiceC.textContent == listQuiz[indexNow].reponse){
                            htmlChoiceC.className = 'btn btn-success'
                        }else{
                            htmlChoiceC.className = 'btn btn-danger'
                        }
                    }
                }
            }
        }
    }
    if(saveInfo.length == listQuiz.length-1){
        htmlSectionNavigation.style.display = 'none'
        htmlSectionFinish.style.display = ''
    }
})
function answersA(){
    if(saveInfo.length !== 0){
        let _ = []
        for (let index = 0; index < saveInfo.length; index++) {
            _.push(saveInfo[index].index)
        }
        if(!(_.includes(indexNow))){
            if(htmlChoiceA.textContent == listQuiz[indexNow].reponse){
                htmlChoiceA.className = "btn btn-success"
                score += 1
            }else{
                htmlChoiceA.className = "btn btn-danger"
            }
            htmlChoiceA.style.pointerEvents = 'none'
            htmlChoiceB.style.pointerEvents = 'none'
            htmlChoiceC.style.pointerEvents = 'none'
    
            saveInfo.push({
                "index": indexNow,
                "save": htmlChoiceA.textContent
            })
        }
    }else{
        if(htmlChoiceA.textContent == listQuiz[indexNow].reponse){
            htmlChoiceA.className = "btn btn-success"
            score += 1
        }else{
            htmlChoiceA.className = "btn btn-danger"
        }
        htmlChoiceA.style.pointerEvents = 'none'
        htmlChoiceB.style.pointerEvents = 'none'
        htmlChoiceC.style.pointerEvents = 'none'

        saveInfo.push({
            "index": indexNow,
            "save": htmlChoiceA.textContent
        })
    }
}
function answersB(){
    if(saveInfo.length !== 0){
        let _ = []
        for (let index = 0; index < saveInfo.length; index++) {
            _.push(saveInfo[index].index)
        }
        if(!(_.includes(indexNow))){
            if(htmlChoiceB.textContent == listQuiz[indexNow].reponse){
                htmlChoiceB.className = "btn btn-success"
                score += 1
            }else{
                htmlChoiceB.className = "btn btn-danger"
            }
            htmlChoiceA.style.pointerEvents = 'none'
            htmlChoiceB.style.pointerEvents = 'none'
            htmlChoiceC.style.pointerEvents = 'none'
    
            saveInfo.push({
                "index": indexNow,
                "save": htmlChoiceB.textContent
            })
        }
    }else{
        if(htmlChoiceB.textContent == listQuiz[indexNow].reponse){
            htmlChoiceB.className = "btn btn-success"
            score += 1
        }else{
            htmlChoiceB.className = "btn btn-danger"
        }
        htmlChoiceA.style.pointerEvents = 'none'
        htmlChoiceB.style.pointerEvents = 'none'
        htmlChoiceC.style.pointerEvents = 'none'

        saveInfo.push({
            "index": indexNow,
            "save": htmlChoiceB.textContent
        })
    }
}
function answersC(){
    if(saveInfo.length !== 0){
        let _ = []
        for (let index = 0; index < saveInfo.length; index++) {
            _.push(saveInfo[index].index)
        }
        if(!(_.includes(indexNow))){
            if(htmlChoiceC.textContent == listQuiz[indexNow].reponse){
                htmlChoiceC.className = "btn btn-success"
                score += 1
            }else{
                htmlChoiceC.className = "btn btn-danger"
            }
            htmlChoiceA.style.pointerEvents = 'none'
            htmlChoiceB.style.pointerEvents = 'none'
            htmlChoiceC.style.pointerEvents = 'none'
    
            saveInfo.push({
                "index": indexNow,
                "save": htmlChoiceC.textContent
            })
        }
    }else{
        if(htmlChoiceC.textContent == listQuiz[indexNow].reponse){
            htmlChoiceC.className = "btn btn-success"
            score += 1
        }else{
            htmlChoiceC.className = "btn btn-danger"
        }
        htmlChoiceA.style.pointerEvents = 'none'
        htmlChoiceB.style.pointerEvents = 'none'
        htmlChoiceC.style.pointerEvents = 'none'

        saveInfo.push({
            "index": indexNow,
            "save": htmlChoiceC.textContent
        })
    }
}

htmlChoiceA.addEventListener("click", answersA)
htmlChoiceB.addEventListener("click", answersB)
htmlChoiceC.addEventListener("click", answersC)

htmlFinish.addEventListener("click", ()=>{
    if(localStorage.getItem('listscore') == ''){
        let _ = [{
            "pseudo" : pseudo,
            "score" : score
        }]
        localStorage.setItem("listscore", JSON.stringify(_))
        console.log(localStorage.getItem("listscore"))
    }else{
        let recup = JSON.parse(localStorage.getItem("listscore"))
        recup.push({
            "pseudo" : pseudo,
            "score" : score
        })
        localStorage.setItem('listscore', JSON.stringify(recup))
    }
    window.location.reload()
})
let htmlCode = ''
if((localStorage.getItem('listscore')) && (localStorage.getItem('listscore') !== '')){
    let _ = JSON.parse(localStorage.getItem('listscore'))
    for (let index = 0; index < _.length; index++) {
        htmlCode += `<span>${_[index].pseudo} - ${_[index].score}</span> </br>`
    }
    htmlScores.innerHTML = htmlCode
}