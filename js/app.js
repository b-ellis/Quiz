$(document).ready(function() {

  var question1 = {
    text: "Phish likes to write songs about animals, which of these animals DOES NOT have a Phish song about them?",
    possibleAnswers: ["Ocelot", "Manatee", "Camel", "Antelope"],
    correctAnswer: 1
  };

  var question2 = {
  text: "What year did keyboardist Page McConnell join the band Phish?",
  possibleAnswers: ["1983", "1986", "1985", "1988"],
  correctAnswer: 2
  };

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
  var score = 0;

  $('.end').hide();

  $('.start-button').click(function(){
    $('.start').hide();
    $('#question').show();
    displayQuestion();
  });

  $('.next').click(function(){
    currentQuestionIndex++;
    $('#question > h3').html("");
    $('.answers > ul').html("");
    $('.correct').html("");
    if (currentQuestionIndex < allQuestions.length) {
        displayQuestion();
    } else {
        $('.next').hide();
        $('.end').show();
    }
  });
  
  $('.newGame').click(function(){
    restart();
  });

  function displayQuestion() {
    $('.next').show();
    var currentQuestion = allQuestions[currentQuestionIndex];
    $('#question > h3').html(currentQuestion.text);
    var possibleAnswers = currentQuestion.possibleAnswers;
    for (var i=0; i<possibleAnswers.length; i++){
      var listtag = "<li class=\"" + i + "\"><button class = \"answerButton\"> </button>" + possibleAnswers[i] + "</li>";
      $(".answers > ul").append(listtag);
    };

    $('.answerButton').click(function() {
      var chosenIndex = $(this).parent('li').attr('class');
      if (currentQuestion.correctAnswer === +chosenIndex) {
        $('.correct').html("Correct Answer ! click next to proceed!");
      } else {
        $('.correct').html("Incorrect Answer! Try again!");
      }

      if (currentQuestion.correctAnswer === +chosenIndex)
      score = ++score;
    var percent = score/5;
    var Percent = percent * 100 + "%"
    $('.score').html(Percent);
    });
  }

  function restart() {
    currentQuestionIndex = 0
    $('.end').hide();
    $('.start').show();
  };

});
  //click event handler for answer choice {verify whether chosen answer is = correctAnswer in the question object}

  //click event handler for next button {move to next question}
