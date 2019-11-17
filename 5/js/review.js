window.onload = () => {


    //view Result
    viewResult();

    viewResultsInImages();

    const numberOfLimitTimeValue = 4;

    var times = window.sessionStorage.getItem("times");



    var btn = this.document.querySelector(".btn");

    if (times >= numberOfLimitTimeValue || isAllTrue()) {
        btn.children[1].innerHTML = "عرض الإجابات";

    }

    btn.onclick = () => {

        if (times >= numberOfLimitTimeValue || isAllTrue()) {

            const viewAnswer = "viewAnswer.html";

            window.location.href = viewAnswer;

        } else {

            restSession();

            const questions = "questionsDrag.html";

            window.location.href = questions;
        }

    }

}


function restSession() {
    this.sessionStorage.setItem("questionNumber", 1);
}

function sumAnswers() {
    var a = this.sessionStorage.getItem("1");
    a = parseInt(a);
    var b = this.sessionStorage.getItem("2");
    b = parseInt(b);
    var c = this.sessionStorage.getItem("3");
    c = parseInt(c);

    var sum = a + b + c;
    return sum;
}


function isAllTrue() {
    return sumAnswers() == 3;
}


function viewResult() {
    var trueAnswers = document.querySelector("#trueAnswers");
    var wrongAnswers = document.querySelector("#wrongAnswers");

    trueAnswers.innerHTML = sumAnswers();
    wrongAnswers.innerHTML = Math.abs(sumAnswers() - 3);

}


function viewResultsInImages() {
    let wrong1 = document.querySelector("#wrong1");
    let true1 = document.querySelector("#true1");
    var a = this.sessionStorage.getItem("1");
    a = parseInt(a);
    if(a==1){
        wrong1.src = "imags/-.png";
        true1.src = "imags/d-check.png"
    }else{
        wrong1.src = "imags/i-remove.png";
        true1.src = "imags/-.png";
        
    }

    let wrong2 = document.querySelector("#wrong2");
    let true2 = document.querySelector("#true2");
    var b = this.sessionStorage.getItem("2");
    b = parseInt(b);
    if(b==1){
        wrong2.src = "imags/-.png";
        true2.src = "imags/d-check.png"
    }else{
        wrong2.src = "imags/i-remove.png";
        true2.src = "imags/-.png";
        
    }
    

    let wrong3 = document.querySelector("#wrong3");
    let true3 = document.querySelector("#true3");
    var c = this.sessionStorage.getItem("3");
    c = parseInt(c);
    if(c==1){
        wrong3.src = "imags/-.png";
        true3.src = "imags/d-check.png"
    }else{
        wrong3.src = "imags/i-remove.png";
        true3.src = "imags/-.png";
        
    }
    
}