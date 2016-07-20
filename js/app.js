$(document).ready(function() {

  var question1 = {
    text: "Phish likes to write songs about animals, which of these animals DOES NOT have a Phish song about them?",
    possibleAnswers: ["Ocelot", "Manatee", "Camel", "Antelope"],
    correctAnswer: 1
  };

  var question2 = Object.create(question1);
  question2.text = "What year did keyboardist Page McConnell join the band Phish?";
  question2.possibleAnswers = ["1983", "1986", "1985", "1988"];
  question2.correctAnswer = 2;

  var question3 = {
    text: "Who is the Luthier that built Trey’s iconic guitar?",
    possibleAnswers: ["Paul Reed Smith", "Paul Languedoc", "Les Paul", "David Myka"],
    correctAnswer: 1
  };

  var question4 = {
    text: "What board game did the members of the band play against the audience during a tour?",
    possibleAnswers: ["Monopoly", "Checkers", "Candyland", "Chess"],
    correctAnswer: 3
  };

  var question5 = {
    text: "What aerobic work out does Trey and Mike do during their song You Enjoy Myself?",
    possibleAnswers: ["Jumping on Trampolines", "Running around the stage", "Jumping Jacks", "Jumpping Rope"],
    correctAnswer: 0
  };

  var allQuestions = [question1, question2, question3, question4, question5];
  var currentQuestionIndex = 0;

  $('.start-button').click(function(){
    $('.start').hide();
    $('#question').show();
    displayQuestion();
  });

  $('.next').click(function() {
    
  });

  function displayQuestion() {
    var currentQuestion = allQuestions[currentQuestionIndex];

    $('#question > h3').append(currentQuestion.text);
    var possibleAnswers = currentQuestion.possibleAnswers;
    for (var i=0; i<possibleAnswers.length; i++){
      var listtag = "<li class=\"" + i + "\"><button class = \"answerButton\"> </button>" + possibleAnswers[i] + "</li>";
      $(".answers > ul").append(listtag);
    }

    $('.answerButton').click(function() {
      var chosenIndex = $(this).parent('li').attr('class');
      if (currentQuestion.correctAnswer === +chosenIndex) {
        alert("Correct Answer ! click next to proceed!");
      } else {
        alert("Incorrect Answer! Try again!");
      }
    });
  }

});
  //click event handler for answer choice {verify whether chosen answer is = correctAnswer in the question object}

  //click event handler for next button {move to next question}
