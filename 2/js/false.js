window.onload = () => {


    //select button
    var btn = document.querySelector(".btn");

    //Fetch number of the current quesion
    const questionNumber = this.sessionStorage.getItem("questionNumber");

    //number of limit to view review page
    const limitOfQuesions = 4;

    if (questionNumber >= limitOfQuesions) {

        new this.Audio("audio/wrongAnswerTryAgain.mp3").play();

        var btn = this.document.querySelector(".btn");

        btn.children[1].innerHTML = "عرض النتائج";


    } else {

        //run false answer audio
        new this.Audio("audio/falseAnswer.mp3").play();
    }


    //number of same structured questions
    const NumberOfSameStructuredQuestions = 2;

    //add listenner to click button
    btn.onclick = e => {

        //check if the questions ended
        if (questionNumber >= limitOfQuesions) {

            const review = "review.html";

            this.location.href = review;

            //check if the same quesions number passed or not
        } else if (questionNumber > NumberOfSameStructuredQuestions) {

            const questions5Option = "questions5Option.html";

            //redirect to questions5Option page
            this.location.href = questions5Option;


        } else {

            const questions = "questions.html";

            //redirect to question page
            this.location.href = questions;

        }
    }

}