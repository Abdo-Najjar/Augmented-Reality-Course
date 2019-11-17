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