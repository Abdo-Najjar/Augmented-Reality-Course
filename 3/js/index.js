window.onload =  () => {

    //fire introdaction audio
    new this.Audio("audio/introdaction.mp3").play();

    //Delied time in const to avoid magic numbers
    const delay = 17500;

    //fire instructions audio after introdaction audio
    this.setTimeout(function () {
        new this.Audio('audio/instructions.mp3').play();
    }, delay);

    //select start button
    var startButton = document.querySelector("#start-button");

    //add action to start button
    startButton.addEventListener('click' , ()=>{

        const sortQuestion = "questionsDrag.html";

        //go to questions page
        location.href = sortQuestion;

    });

    //set sessionStorage 
    this.sessionStorage.setItem("questionNumber" , 1);
    this.sessionStorage.setItem("times" ,1);
    
}
