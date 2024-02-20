const answers = document.querySelectorAll(`.answer`);


for(i=0;i<answers.length;i++) {
    let answer = answers[i];
    let topof = answer.querySelector(`.topof`);
    let plus = answer.querySelector(`.plusimg`);

    topof.addEventListener(`click`, function(evt){
        if (answer.classList.contains(`answer-closed`)) {
            answers.forEach(answer => {
                answer.classList.add(`answer-closed`)
                answer.querySelector(`.plusimg`).classList.remove(`rotation`)
            });
            answer.classList.remove(`answer-closed`)
            plus.classList.add(`rotation`)
        } else {
            answers.forEach(answer => {
                answer.classList.add(`answer-closed`)
                answer.querySelector(`.plusimg`).classList.remove(`rotation`)
            });
            answer.classList.add(`answer-closed`)
            plus.classList.remove(`rotation`)
        }
    })
}