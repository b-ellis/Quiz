$(document).ready(function() {

  var Question = function(text, possibleAnswers, correctAnswer){
    this.text = text;
    this.possibleAnswers = possibleAnswers;
    this. correctAnswer = correctAnswer;
  };

  var one = new Question("Phish likes to write songs about animals, which of these animals DOES NOT have a Phish song about them?", ["Ocelot", "Manatee", "Camel", "Antelope"], 1);
  var two = new Question("What year did keyboardist Page McConnell join the band Phish?", ["1983", "1986", "1985", "1988"], 2);
  var three = new Question("Who is the Luthier that built Trey’s iconic guitar?", ["Paul Reed Smith", "Paul Languedoc", "Les Paul", "David Myka"], 1);
  var four = new Question("What board game did the members of the band play against the audience during a tour?", ["Monopoly", "Checkers", "Candyland", "Chess"], 3);
  var five = new Question("What aerobic work out does Trey and Mike do during their song You Enjoy Myself?", ["Jumping on Trampolines", "Running around the stage", "Jumping Jacks", "Jumpping Rope"], 0);


  var allQuestions = [one, two, three, four, five];
  var currentQuestionIndex = 0;
  var score = 0;

  $('.end').hide();
  $('.next').hide();

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
