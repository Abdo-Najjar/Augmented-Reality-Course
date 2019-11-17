window.onload = () => {

    //class to hold question attributes
    class Question {
        constructor(content, optionOne, optionTow, answer) {
            this.content = content;
            this.optionOne = optionOne;
            this.optionTow = optionTow;
            this.answer = answer;
        }
    }



    //first true of false question
    let TFfirst = new Question();

    //instantiate attributes for first quesion
    TFfirst.content = "إن الواقع المعزز = واقع حقيقي + معلومات معززة افتراضيًا";
    TFfirst.optionOne = "صح";
    TFfirst.optionTow = "خطأ";
    TFfirst.answer = "صح";

    //second true or false question
    let TFsecond = new Question();

    //instantiate attributes for second quesion
    TFsecond.content = "تقنية تفاعلية تشاركية غير تزامنية تستخدم الأجهزة السلكية واللاسلكية لإضافة بيانات رقمية للواقع الحقيقي على هيئة (صور- وسائط- مقاطع فيديو- روابط) بأشكال متعددة الأبعاد";
    TFsecond.optionOne = "صح";
    TFsecond.optionTow = "خطأ";
    TFsecond.answer = "خطأ";

    questionsArray = [
        TFfirst,
        TFsecond
    ];


    //render page return true answer
    const trueAnswer = renderPage(questionsArray);

    //run Question type
    new this.Audio("audio/trueOrFalse.mp3").play();

    //Avoid magic numbers delay in ms to run the audio of current question
    const delay = 2400;


    setTimeout(() => {
        //run question's audio
        new this.Audio(`audio/${currentQuestion()}.mp3`).play();

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
            selectedOption = e.children[0].innerHTML;
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
        //check the input if it correct or not
        var isCorrect = selectedOption == trueAnswer;

        //make prossess
        redirectToResultPage(isCorrect);

    }

}


function redirectToResultPage(isCorrect) {

    increaseSessionQuesionNumber();


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



function currentQuestion() {
    //fetch questionNumber from sessionStorage
    var questionNumber = this.sessionStorage.getItem("questionNumber");
    return questionNumber = parseInt(questionNumber);
}

function renderPage(array) {

    let quesitonNumber = currentQuestion();

    const trueOrFalseStartNumber = 1;

    const trueOrFalseEndNumber = 2;

    let index = quesitonNumber - trueOrFalseStartNumber;

    var questionPrag = document.querySelector(".questionPrag");
    questionPrag.innerHTML = array[index].content;

    var option1 = document.querySelector(".option1");
    option1.children[0].innerHTML = array[index].optionOne

    var option2 = document.querySelector(".option2");
    option2.children[0].innerHTML = array[index].optionTow

    if (quesitonNumber >= trueOrFalseStartNumber) {
        let questionNavBar = document.querySelector(".question1");
            colorPassedQuestionbar(questionNavBar);
    }

    if (quesitonNumber >= trueOrFalseEndNumber) {
        let questionNavBar = document.querySelectorAll(".question2");
        questionNavBar.forEach(q => {
            colorPassedQuestionbar(q);
        })
    }

    var number = document.querySelector(".number");

    number.src = `imags/number${currentQuestion()}.png`;

    return array[index].answer;
}

//style nav bar according to the question number
function colorPassedQuestionbar(element) {

    const backgroundColor = "#AE6CBF"
    const color = "#fff";

    //style elements
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;


}