window.onload = () => {

    class Quesion5Option {
        constructor(content, option1, option2, option3, option4, option5) {
            this.content = content;
            this.option1 = option1;
            this.option2 = option2;
            this.option3 = option3;
            this.option4 = option4;
            this.option5 = option5;
        }
    }

    var quesion = new Quesion5Option();

    quesion.content = "من مبررات استخدام تقنية الواقع المعزز على المتعلمين بالمقارنة مع خبرات التعلم بدون استخدام تقنية الواقع المعزز ما يلي";
    quesion.option1 = "زيادة في فهم المحتوى العلمي في مواضيع معينة";
    quesion.option2 = "الاحتفاظ بالمعلومات في الذاكرة لفترة أطول";
    quesion.option3 = "مساعدة الطلاب على التحكم بطريقة التعلم من خلال التعليم وفقًا لمدى استيعابهم وطريقتهم المفضلة";
    quesion.option4 = "أنه يبنى حول الأماكن التي ليس لها وجود من الأساس";
    quesion.option5 = "يُضفي صبغة خيالية على منظر خيالي";

    //load audio and run it for quesion three
    new this.Audio("audio/3.mp3").play();


    //render the page

    //select content and view it
    var questionContent = document.querySelector(".questionPrag");
    questionContent.innerHTML = quesion.content;

    // //number of options
    // const numberOfOptions = 5;

    //fetch all options
    var options = document.querySelectorAll(".choice");

    //view Chices
    options[0].childNodes[1].innerHTML = quesion.option1;
    options[1].childNodes[1].innerHTML = quesion.option2;
    options[2].childNodes[1].innerHTML = quesion.option3;
    options[3].childNodes[1].innerHTML = quesion.option4;
    options[4].childNodes[1].innerHTML = quesion.option5;


    //coloring nav bar
    navBarColor();


    //stores selected options
    var selectedOptionOne = null;
    var selectedOptionTwo = null;

    var counterForSelectedChoices = 0;

    var selectedOptions = [];

    const maxNumberOfSelectedChoices = 3;

    //add listenner to all options
    options.forEach(o => {

        //click event
        o.onclick = e => {

            //add class to hight light option
            o.classList.add('choice-checked');

            //push it to array
            selectedOptions.push(o);

            //increase it by one
            counterForSelectedChoices++;

            //store choices
            if (counterForSelectedChoices == 1) {

                selectedOptionOne = o.childNodes[1].innerHTML;
            } else {

                selectedOptionTwo = o.childNodes[1].innerHTML;

            }

            //stuff to do in the user check another choices more than 3 hits
            if (counterForSelectedChoices >= maxNumberOfSelectedChoices) {
                var tempArray = [];
                tempArray.push(selectedOptions[1]);
                tempArray.push(selectedOptions[2]);
                selectedOptions = [];
                tempArray.forEach(e => {
                    selectedOptions.push(e);
                });

                options.forEach(e => {
                    e.classList.remove('choice-checked');
                });


                selectedOptions.forEach(e => {
                    e.classList.add("choice-checked");
                });

                selectedOptionOne = selectedOptions[0].childNodes[1].innerHTML;
                selectedOptionTwo = selectedOptions[1].childNodes[1].innerHTML;
            }

            //validation to avoid select multiple the same value
            if (selectedOptionOne == selectedOptionTwo) {
                selectedOptionOne = null;
            }


        }//end of event

    });


    //select confirm button
    var confirmBtn = this.document.querySelector(".btn");

    //add event to button 
    confirmBtn.onclick = e => {

        //validation
        if (selectedOptionOne == null || selectedOptionTwo == null) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: "! " + 'الرجاء إختيار خيارين من الخيارات',
            });
            return;
        }


        increaseQuestionNumberByOne();


        var times = sessionStorage.getItem("times");

        times = parseInt(times);
        
        times = times + 1;
        
        console.log(times);
        
        
        sessionStorage.setItem("times", times);


        // check if it true
        if (selectedOptionOne == quesion.option5 && selectedOptionTwo == quesion.option4 || selectedOptionOne == quesion.option4 && selectedOptionTwo == quesion.option5) {

            this.sessionStorage.setItem(3 ,1);


            goToTruePage();


        } else {

            this.sessionStorage.setItem(3 ,0);


            goToFalsePage();
        }

    }


}


//redirect to true page
function goToTruePage() {

    const truePage = "true.html";

    this.location.href = truePage;
}

//redricect to false page
function goToFalsePage() {

    const falsePage = "false.html";

    this.location.href = falsePage;

}

function increaseQuestionNumberByOne() {

    //fetch questionNumber from sessionStorage
    var questionNumber = this.sessionStorage.getItem("questionNumber");
    questionNumber = parseInt(questionNumber);

    //increase sessionStorage question number of one
    this.sessionStorage.setItem("questionNumber", ++questionNumber);

}

//coloring nav bar
function navBarColor() {

    //fetch nav bar elemets
    var numNav = document.querySelectorAll(".numNav");

    //coloring
    numNav.forEach(e => {

        colorPassedQuestionbar(e);

    });

    var lineNav = document.querySelectorAll(".lineNav");

    //coloring
    lineNav.forEach(e => {

        colorPassedQuestionbar(e);

    });
}


//style nav bar according to the question number
function colorPassedQuestionbar(element) {

    const backgroundColor = "#AE6CBF"
    const color = "#fff";

    //style elements
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;

}
        