window.onload = () => {

    //play the audio of the question
    new this.Audio("audio/1.mp3").play();

    //fetch commit button
    var btn = this.document.querySelector(".btn");


    //add event listnner
    btn.onclick = e => {

        //validation inputs 
        var isValid = areInputsValid();



        if (isValid) {

            var isCorrect = isAnswerCorrect();
            

            redirectToResultPage(isCorrect);


        } else {

            const message = 'الرجاء الإجابة على جميع الأسالة';

            fireAlert(message);
        }

    };


    //select all fields that can be has image inside of it. (container)
    var containers = document.querySelectorAll('.space');

    //select all images 
    var imgs = document.querySelectorAll('.imgs')


    var draggedImage = null;

    //add eventlistener to all images
    imgs.forEach(img => {

        img.addEventListener('dragstart', ev => {

            //Image that has been dragged 
            let selectedImage = ev.target;

            //set draggedImageID variable 
            draggedImage = selectedImage;
        });

    });


    //addevent listnener to all divs containers
    containers.forEach(container => {

        container.addEventListener('dragover', ev => {
            //allow to dragover div container (Enter div container)
            ev.preventDefault();
        });


        //when drag leaves 
        container.addEventListener('drop', ev => {

            //avoid to go to another page (firefox bug)
            ev.preventDefault();

            //select container
            let markedItem = ev.target;

            //boolean variable to check if targeted elemet is Image or not
            let isImage = markedItem.className.includes('imgs');

            //validaion for avoid multiple img append 
            if (isImage) {

                //alert message 
                Swal.fire({
                    type: 'error',
                    title: 'خطأ',
                    text: 'الرجاء وضع الإجابة في مكان فارغ'
                });

                //exit function (don't do anything)
                return;
            }
            //add image into that div
            markedItem.append(draggedImage);
        });

    });


}


//main function Retrun true
function isAnswerCorrect() {

    var isCorrectAnswer = true;

    const keyAnswer = "educationViaSpeicalSigns";


    var answers = document.querySelectorAll(".answer");

    answers.forEach(answer => {
        

        if (!answer.childNodes[0].src.includes(keyAnswer)) {

            isCorrectAnswer = false;

        }
    });

    return isCorrectAnswer;
}


//main function
function redirectToResultPage(isCorrect) {

    increaseSessionQuesionNumber();

    //redirect to true or false page
    if (isCorrect == false) {

        redirectToFalsePage();

    } else {

        redirectToTruePage();
    }
};

//main function
function fireAlert(message) {

    Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: "! " + `${message}`,
    });

}

//main function 
function areInputsValid() {
    //variable that has bool value if inputs are validate or not
    let isValid = true;

    //select hold values div 
    let holdsContainsers = document.querySelectorAll('.hold');

    //loop for holdsContainsers array 
    holdsContainsers.forEach(hold => {
        //check child nodes
        if (hold.children.length == 0) {
            isValid = false;
        }

    });
    return isValid;
}


//helper funcion
function redirectToFalsePage() {

    var questionNumber = this.sessionStorage.getItem("questionNumber");

    const trueFlag = 0;

    sessionStorage.setItem(--questionNumber, trueFlag);

    const falsePage = "false.html";

    location.href = falsePage;

}

//helper funciom
function redirectToTruePage() {

    var questionNumber = this.sessionStorage.getItem("questionNumber");

    const falseFlag = 1;

    sessionStorage.setItem(--questionNumber, falseFlag);

    const truePage = "true.html";

    location.href = truePage;


}

//helper function
function increaseSessionQuesionNumber() {
    var questionNumber = this.sessionStorage.getItem("questionNumber");

    questionNumber = parseInt(questionNumber) + 1;

    this.sessionStorage.setItem("questionNumber", questionNumber);

}


