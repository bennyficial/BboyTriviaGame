//VARIABLES
var questions = [{
  question: "<h3> Which one of these power moves was NOT invented by bboys?</h3>",
  choices: ["<h4 class='correct'>Flare</h4>","<h4 class='wrong'>Jackhammer</h4>","<h4 class='wrong'>Hand hops</h4>","<h4 class='wrong'>Headspin</h4>"],
  correctAnswer: "<h3>The flare was originally created by gymnast Kurt Thomas.</h3>"  + "<img src='assets/images/flares.gif' alt='flare'/>"
}, {
  question: "<h3>Which company hosts the biggest one on one bboy competition?</h3>",
  choices: ["<h4 class='wrong'>Monster</h4>","<h4 class='correct'>Red Bull</h4>","<h4 class='wrong'>Pepsi</h4>","<h4 class='wrong'>Coke</h4>"],
  correctAnswer: "<h3>Red Bull hosts Red Bull BC One annualy, the premier 1v1 bboy event.</h3>"  + "<img src='assets/images/redbull.jpg' alt='redbull'/>"
}, {
  question: "<h3>Which of these is considered a power move?</h3>",
  choices: ["<h4 class='wrong'>Baby Freeze</h4>","<h4 class='wrong'>Air Chair</h4>","<h4 class='correct'>Halos</h4>","<h4 class='wrong'>Six Step</h4>"],
  correctAnswer: "<h3>Halos are considered a power move rather than a freeze.</h3>"  + "<img src='assets/images/halos.gif' alt='halos'/>"
},{
  question: "<h3>Which of the following is not a traditional element in breakdancing?</h3>",
  choices: ["<h4 class='wrong'>Freezes</h4>","<h4 class='wrong'>Power Moves</h4>","<h4 class='wrong'>Top Rock</h4>","<h4 class='correct'>Salsa Rock</h4>"],
  correctAnswer: "<h3>Salsa Rock itself is not one of the traditional elements of breakdancing.</h3>"  + "<img src='assets/images/salsa.jpg' alt='salsa'/>"
},{
  question: "<h3>What does BOTY stand for?</h3>",
  choices: ["<h4 class='correct'>Battle of the Year</h4>","<h4 class='wrong'>Bboy of the Year</h4>","<h4 class='wrong'>Breakdancer of the Year</h4>","<h4 class='wrong'>Breakbeat of the year</h4>"],
  correctAnswer: "<h3>BOTY is short for Battle of the Year.</h3>"  + "<img src='assets/images/boty.jpg' alt='boty'/>"
},{
  question: "<h3>Which country won IBE 2016 Super Solo Bboy Battle?</h3>",
  choices: ["<h4 class='wrong'>Germany</h4>","<h4 class='correct'>America</h4>","<h4 class='wrong'>Japan</h4>","<h4 class='wrong'>Korea</h4>"],
  correctAnswer: "<h3>Victor from MF Kidz/Squadron represented America and won in 2016. </h3>"  + "<img src='assets/images/america.png' alt='america'/>"
},{
  question: "<h3>Where did breakdancing originate from?</h3>",
  choices: ["<h4 class='wrong'>Chicago</h4>","<h4 class='wrong'>Harlem</h4>","<h4 class='correct'>Bronx</h4>","<h4 class='wrong'>Jersey</h4>"],
  correctAnswer: "<h3>The Bronx in the early, 70's Dj Kool Herc would play the 'breaks' of songs.</h3>"  + "<img src='assets/images/koolherc.jpg' alt='koolherc'/>"
},{
  question: "<h3>What is bboy short for?</h3>",
  choices: ["<h4 class='wrong'>Breakdance boy</h3>","<h4 class='wrong'>Beat boy</h3>","<h4 class='wrong'>Boom boy</h4>","<h4 class='correct'>Break boy</h4>"],
  correctAnswer: "<h3>Bboy is short for Break boy</h3>" + "<img src='assets/images/bboy.jpg' alt='bboy'/>"
},{
  question: "<h3>Bboys who focus mainly on style are usually referred to as what?</h3>",
  choices: ["<h4 class='wrong'>Style Jockey</h4>","<h4 class='correct'>Style Head</h4>","<h4 class='wrong'>Style Junkie</h4>","<h4 class='wrong'>Style Master</h4>"],
  correctAnswer: "<h3>Style Heads are the term used for bboys who favor style above all else.</h3>" + "<img src='assets/images/footwork.jpg' alt='footwork'/>"
},{
  question: "<h3>What is the term bboys to call out someone for plagiarism?</h3>",
  choices: ["<h4 class='wrong'>Copy cat</h4>","<h4 class='wrong'>Mimic</h4>","<h4 class='wrong'>Ditto</h4>","<h4 class='correct'>Biter</h4>"],
  correctAnswer: "<h3>Biter is a term bboys use to call out someone who has copied someone else's move or style.</h3>" + "<img src='assets/images/biter.jpg' alt='biter'/>"
}];
var timer = 9;
var questionCounter = 0; 
var wrongCount = 0;
var correctCount = 0;
var answerCount = 0;
var intervalId;

  //FUNCTIONS
  // on the page load, do the following
  $(document).ready(function(){
    // start game and timer on click
		$("#start").on("click", playGame);
    $("#start").on("click", run);
    // starts the game
      function playGame(){
    //plays game as long as you still have questions left    
        if (questionCounter < questions.length) {
          $("#start").hide(); 
          $("#answer").empty();
            choice();
          // run WC when clicking wrong answer  
          $(".wrong").on("click", WC);
          // run CC when clicking correct answer
          $(".correct").on("click", CC);
          // display time left
          $("#timer").html("<h3>Time remaining: " + timer + "</h3.");
          // display the question
          $("#question").html("<h3>" + questions[questionCounter].question + "</h3>");
        // end game when no more questions left  
        } else if (questionCounter === questions.length) {
                    stop();          
                    finalPage();  
                  } 
      }
      //display the results page
      function finalPage(){
        //empties out the divs for a clear page
        $("#question").empty();
        $("#choice").empty();
        $("#answer").empty();
        $("#timer").empty();
        //writes the counts for correct answer, wrong answer, no answer
        var noCount = questionCounter-(wrongCount+correctCount);
        $("#setup").append("<h3>Correct Answer: " + correctCount + "</h3>" + "<br>").append("<h3>Wrong Answer: " + wrongCount + "</h3>" + "<br>").append("<h3>Unanswered: " + noCount + "</h3>" + "<br>").append("<button class = 'btn btn-primary'id ='restart'>Play again?</button>");
        //refreshes to page to restart the game
        $("#restart").on("click",refresh);
      }
      //resets game
      function refresh() {
        location.reload();
      }
      //display the possible answers  
      function choice(){
        $("#choice").append("<button class='btn btn-primary'>" + questions[questionCounter].choices[0] + "</button>" + "<br>" + "<br>");
        $("#choice").append("<button class='btn btn-primary'>" + questions[questionCounter].choices[1] + "</button>" + "<br>" + "<br>"); 
        $("#choice").append("<button class='btn btn-primary'>" + questions[questionCounter].choices[2] + "</button>" + "<br>" + "<br>");
        $("#choice").append("<button class='btn btn-primary'>" + questions[questionCounter].choices[3] + "</button>"); 
      }
      //increase the wrong counter
      function WC(){
            wrongCount++;
      answerPage();
      }
      //increase the correct counter
      function CC(){
            correctCount++;  
      answerPage();
      }       
      //display the correct anwer slide
      function answerPage(){
        $("#choice").empty();
        $("#answer").html("<h3>Correct Answer: " + questions[questionCounter].correctAnswer + "</h3>");
        $("#timer").empty();
          // increase question counter to move to next question
          questionCounter++;
          //stops the time
          stop();
          //resets the time
          timer = 9;  
          //runs game and counter after 1.5 sec delay
          setTimeout(playGame,4500);
          //only run the counter if game is not over with a 1.5 sec delay
          if (questionCounter < questions.length) {
          setTimeout(run,4500);
          } else {
            stop();
          }
      }
      //run the countdown every second
      function run() {
            intervalId = setInterval(decrement, 1000);
      }
      //stop the count down
      function stop() {
        clearInterval(intervalId);
      }
      //display the remaining time and countdown
      function decrement() {
      //decrease the timer  
      timer--;
        $("#timer").html("<h3>Time remaining: " + timer + "</h3.")
          if (timer === 0) {
            //show answer page when time runs out         
            setTimeout(answerPage,1000);
            // answerPage();
          }                       
      }			
});
