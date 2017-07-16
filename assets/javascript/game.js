//VARIABLES
var questions = [{
  question: "<h4>Which crew is Hong10 from?</h4>",
  choices: ["<h4 class='correct'>Drifterz</h4>","<h4 class='wrong'>Rivers</h4>","<h4 class='wrong'>Gamblerz</h4>","<h4 class='wrong'>Last 4 One</h4>"],
  correctAnswer: "<h4>Drifterz</h4>"
}, {
  question: "<h4>Which Jinjo Crew member won a RedBull BC One?</h4>",
  choices: ["<h4 class='wrong'>Skim</h4>","<h4 class='correct'>Wing</h4>","<h4 class='wrong'>Vero</h4>","<h4 class='wrong'>Rookie</h4>"],
  correctAnswer: "<h4>Wing</h4>"
}, {
  question: "<h4>Which of these is considered a power move?</h4>",
  choices: ["<h4 class='wrong'>Baby Freeze</h4>","<h4 class='wrong'>Air Chair</h4>","<h4 class='correct'>Flares</h4>","<h4 class='wrong'>Six Step</h4>"],
  correctAnswer: "<h4>Flares</h4>"
},{
  question: "<h4>Which local crew from the 562 won America's Best Dance Crew?</h4>",
  choices: ["<h4 class='wrong'>Super Crew</h4>","<h4 class='wrong'>Sanity</h4>","<h4 class='wrong'>Deuces Wild</h4>","<h4 class='correct'>Quest Crew</h4>"],
  correctAnswer: "<h4>Quest Crew</h4>"
}];
var timer = 3;
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
          $("#timer").html("<h4>Time remaining: " + timer + "</h4.");
          // display the question
          $("#question").html("<h4>Question: </h4>" + questions[questionCounter].question);
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
        $("#setup").append("<h4>Correct Answer: " + correctCount + "</h4>" + "<br>").append("<h4>Wrong Answer: " + wrongCount + "</h4>" + "<br>").append("<h4>Unanswered: " + noCount + "</h4>" + "<br>").append("<button id ='restart'>Play again?</button>");
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
      function NC(){
            noCount++;
      }        
      //display the correct anwer slide
      function answerPage(){
        $("#choice").empty();
        $("#answer").html("<h4>Correct Answer:</h4>" + questions[questionCounter].correctAnswer);
        $("#timer").empty();
          // increase question counter to move to next question
          questionCounter++;
          //stops the time
          stop();
          //resets the time
          timer = 3;  
          //runs game and counter after 1.5 sec delay
          setTimeout(playGame,1500);
          //only run the counter if game is not over with a 1.5 sec delay
          if (questionCounter < questions.length) {
          setTimeout(run,1500);
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
        $("#timer").html("<h4>Time remaining: " + timer + "</h4.")
          if (timer === 0) {
            //show answer page when time runs out         
            setTimeout(answerPage,1000);
            // answerPage();
          }                       
      }			
});
