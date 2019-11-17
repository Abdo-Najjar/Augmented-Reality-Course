window.onload = () => {

    //run true answer audio
    new this.Audio("audio/trueAnswer.mp3").play();


    //select button
    var btn = document.querySelector(".btn");

    //Fetch number of the current quesion
    const questionNumber = this.sessionStorage.getItem("questionNumber");

    const limitOfQuesions = 3;

    if (questionNumber == limitOfQuesions) {
        var btn = this.document.querySelector(".btn");

        
        btn.children[1].innerHTML = "عرض النتائج";
        
    }

    //add listenner to click button
    btn.onclick = e => {

        if (questionNumber >= limitOfQuesions) {

            const review = "review.html";
            
            this.location.href = review;

        } else {

            const questions = "questions.html";

            this.location.href = questions;

        }

    }


}