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
    TFfirst.content = "يعرف مفهوم التعلم المعزز بأنه تقنية تعلم عند المتعلم، حيث تبني بيئات التعلم أساليبها بناء على احتياجات المتعلمين ومتطلباتهم.ويقتصر مصطلح البيئة في هذا السياق على بيئات التعلم المادية كالصفوف الدراسية";
    TFfirst.optionOne = "صح";
    TFfirst.optionTow = "خطأ";
    TFfirst.answer = "خطأ";

    //second true or false question
    let TFsecond = new Question();

    //instantiate attributes for second quesion
    TFsecond.content = "تؤدي تقنيات الواقع المعزز دورًا مهمًا في مساعدة المعلم على شرح المعلومة بشكل أكثر كفاءة";
    TFsecond.optionOne = "صح";
    TFsecond.optionTow = "خطأ";
    TFsecond.answer = "صح";

    //fetch questionNumber from sessionStorage
    var questionNumber = this.sessionStorage.getItem("questionNumber");
    questionNumber = parseInt(questionNumber);


    //run Question type
    new this.Audio("audio/trueOrFalse.mp3").play();

    //Avoid magic numbers delay in ms to run the audio of current question
    const delay = 2400;


    setTimeout(() => {
        //run question's audio
        new this.Audio(`audio/${questionNumber}.mp3`).play();

    }, delay);


    //store questions in array
    var TFquestions = [
        TFfirst, TFsecond
    ];
    //number of questions have same structure
    const limitToQuestionsHasSameStrucute = 2;

    //check condition 
    if (questionNumber > limitToQuestionsHasSameStrucute) {

        //go to last question has not the same struture
        this.location.href = "questions5Option.html";

    } else {

        //call load question function
        loadQuesion(questionNumber, TFquestions);

    }




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
            selectedOption = e.innerHTML;
        }

    });

    //fetch submit button
    var submitBtn = this.document.querySelector(".btn");

    //give it action
    submitBtn.onclick = e => {

        //input validation
        if (selectedOption == null) {

            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: "! " + 'الرجاء إختيار خيار من الخيارات',
            });

            return;
        }

        //index of the current question in the array of questions
        const index = questionNumber - 1;

        //get the true answer from the current question object
        const trueAnswer = TFquestions[index].answer;

        //increase sessionStorage question number of one
        this.sessionStorage.setItem("questionNumber", ++questionNumber);

        //check if the selected option is ture or not
        if (selectedOption == trueAnswer) {


            sessionStorage.setItem(--questionNumber , 1);

            const truePage = "true.html";

            this.location.href = truePage;

        } else {

            sessionStorage.setItem(--questionNumber , 0);

            const falsePage = "false.html";

            this.location.href = falsePage;
        }

    }


}


//load question
function loadQuesion(questionNumber, array) {

    //get index
    let index = questionNumber - 1;

    //view content of the question to the page
    let para = document.querySelector(".questionPrag");
    para.innerHTML = array[index].content;

    //view First Option to the page
    let option1 = document.querySelector(".option1");
    option1.innerHTML = array[index].optionOne;

    //view Second Option to the page
    let option2 = document.querySelector(".option2");
    option2.innerHTML = array[index].optionTow;

    //select current question number 
    let imageNumber = document.querySelector('.number');

    //give it a value
    imageNumber.src = `imags/number${questionNumber}.png`

    //if the current question what the first question
    if (questionNumber == 1) {

        //fetch question one element
        let element = document.querySelector(".questionNumberOne");

        //style element of question number one
        colorPassedQuestionbar(element);

    } else {

        //fetch question one element
        let element = document.querySelector(".questionNumberOne");

        //style element of question number one
        colorPassedQuestionbar(element);

        //fetch all elements in nav that has link with question tow
        let elements = document.querySelectorAll(".questionNumberTow");

        //loop
        elements.forEach(e => {

            //style elements
            colorPassedQuestionbar(e);

        });

    }

}

//style nav bar according to the question number
function colorPassedQuestionbar(element) {

    const backgroundColor = "#AE6CBF"
    const color = "#fff";

    //style elements
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;


}