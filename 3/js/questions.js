window.onload = () => {


    //run Question type
    new this.Audio("audio/trueOrFalse.mp3").play();

    //Avoid magic numbers delay in ms to run the audio of current question
    const delay = 2400;


    setTimeout(() => {
        //run question's audio
        new this.Audio(`audio/2.mp3`).play();

    }, delay);


    //stores the selected option
    let selectedOption;

    //select all options
    var options = document.querySelectorAll(".option");

    //give selectedOption default value
    selectedOption = null;

    //add event for every option
    options.forEach(e => {

        e.onclick = () => {
            //set the value of selectedOption var to the inner html of the clicked option
            selectedOption = e.classList[0];
        }

    });




    //fetch submit button
    var submitBtn = this.document.querySelector(".btn");

    //give it action
    submitBtn.onclick = e => {

        //validation
        if (selectedOption == null) {
            const message = "الرجاء إختيار خيار من الخيارات";

            fireAlert(message);
            return;
        }

        //true answer 
        const trueAnswer = "option1";

        //check the input if it correct or not
        var isCorrect = selectedOption == trueAnswer;

        //make prossess
        redirectToResultPage(isCorrect);

    }

}



function redirectToResultPage(isCorrect) {

    increaseSessionQuesionNumber();

    increaseSessionTimes();

    //redirect to true or false page
    if (isCorrect == false) {

        redirectToFalsePage();

    } else {

        redirectToTruePage();
    }
};


function redirectToFalsePage() {

    var questionNumber = this.sessionStorage.getItem("questionNumber");
    const trueFlag = 0;

    sessionStorage.setItem(--questionNumber, trueFlag);

    const falsePage = "false.html";

    location.href = falsePage;

}


function redirectToTruePage() {
   var questionNumber = this.sessionStorage.getItem("questionNumber");

    const falseFlag = 1;

    sessionStorage.setItem(--questionNumber, falseFlag);

    const truePage = "true.html";

    location.href = truePage;


}

function increaseSessionQuesionNumber() {
    var questionNumber = this.sessionStorage.getItem("questionNumber");

    questionNumber = parseInt(questionNumber) + 1;

    this.sessionStorage.setItem("questionNumber", questionNumber);

}

function fireAlert(message) {

    Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: "! " + `${message}`,
    });

}

function increaseSessionTimes() {
    var times = window.sessionStorage.getItem("times");
    times = parseInt(times) + 1;
    window.sessionStorage.setItem("times" , times);

}
