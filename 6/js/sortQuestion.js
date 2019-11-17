window.onload = () => {


    //play the audio of the question
    new this.Audio("audio/1.mp3").play();

    //fetch commit button
    var btn = this.document.querySelector(".btn");

    //fetch all selects taqs
    var selects = this.document.querySelectorAll(".select");

    //stores values of selectes
    var selectedValues = [];

    //add event listnner
    btn.onclick = e => {

        //empty the array
        selectedValues = [];

        //get values from select taqs
        selects.forEach(e => {


            //get value from select
            let value = e.options[e.selectedIndex].text;

            //push value to selectedValues array
            selectedValues.push(value);
        });

        //flag to check if it valid or not
        var isValid = true;

        //loop to check value
        selectedValues.forEach(value => {

            //change value of flag if there is a bad input
            if (value == "") {
                isValid = false;
            }

        });

        //if there is an empty input
        if (isValid == false) {
            //alert with bad inputs alert
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: "! " + 'الرجاء الإجابة على جميع الخيارات',
            });
            return;
        };

        //number of inputs
        const numberOfInputs = 6;

        //change the type from array to set
        let setOfValues = new Set(selectedValues);

        //check if there is a duplicated values
        if (numberOfInputs != setOfValues.size) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: "! " + 'الرجاء عدم اختيار نفس الرقم لأكثر من جملة',
            });
            return;
        }

        //check the answer if it correct or not

        //array for the true answer
        var tureAnswer = [6, 5, 1, 4, 2, 3];

        //flag for if it correct or not
        var isCorrect = true;

        //checking if they are the same
        selectedValues.forEach((value, index) => {

            //check if is not equal then it's not correct
            if (tureAnswer[index] != value) {

                //assign value to false
                isCorrect = false;
            }
        });


       var questionNumber = this.sessionStorage.getItem("questionNumber");

       questionNumber = parseInt(questionNumber) +1;

       this.sessionStorage.setItem("questionNumber" , questionNumber);


        //redirect to true or false page
        if (isCorrect == false) {

            redirectToFalsePage();

        } else {

            redirectToTruePage();
        }

    }//end of listenner

}

function redirectToFalsePage() {

    const questionNumber = 1;
    const trueFlag = 0;

    sessionStorage.setItem(questionNumber ,trueFlag);

    const falsePage = "false.html";

    location.href = falsePage;

}


function redirectToTruePage() {

    const questionNumber = 1;
    const falseFlag = 1;

    sessionStorage.setItem(questionNumber ,falseFlag);

    const truePage = "true.html";

    location.href = truePage;


}