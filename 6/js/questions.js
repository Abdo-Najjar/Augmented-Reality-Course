window.onload = () => {


    //coloring nav bar
    colorPassedQuestionbar();

    //fetch questionNumber from sessionStorage
    var questionNumber = this.sessionStorage.getItem("questionNumber");
    questionNumber = parseInt(questionNumber);


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
           selectedOption =  e.classList[0];
            
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

        //increase times by one
        var times = this.sessionStorage.getItem("times");
        times = parseInt(times)+1;
        this.sessionStorage.setItem("times" , times)


        //increase sessionStorage question number of one
        this.sessionStorage.setItem("questionNumber", ++questionNumber);

        //true answer
        const trueAnswer = "option1";

        const numberOfQuesion = 2;

        //check if the selected option is ture or not
        if (selectedOption == trueAnswer) {


            sessionStorage.setItem(numberOfQuesion , 1);

            const truePage = "true.html";

            this.location.href = truePage;

        } else {

            sessionStorage.setItem(numberOfQuesion , 0);

            const falsePage = "false.html";

            this.location.href = falsePage;
        }

    }

}


//style nav bar according to the question number
function colorPassedQuestionbar() {

    const backgroundColor = "#AE6CBF"
    const color = "#fff";
    
    let numNav = document.querySelectorAll('.numNav');

    numNav.forEach(e=>{
    //style elements
    e.style.backgroundColor = backgroundColor;
    e.style.color = color;
    });

    let lineNav = document.querySelector(".lineNav");
    lineNav.style.backgroundColor = backgroundColor;
    lineNav.style.color = color;
}