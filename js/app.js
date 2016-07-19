$(document).ready(function() {

  var question1 = {
    text: "",
    possibleAnswers: ["", "", "", ""],
    correctAnswer: 0
  };

  var question2 = Object.create(question1);
  question2.text = "";
  question2.possibleAnswers = ["", "", "", ""];
  question2.correctAnswer = 0;

  var question3 = {
    text: "",
    possibleAnswers: ["", "", "", ""],
    correctAnswer: 0
  };

  var allQuestions = [question, question2, question3];
  var currentQuestionIndex = 0;

  displayQuestion();

  function displayQuestion() {
    var currentQuestion = allQuestions[currentQuestionIndex];
    // display the current question
  }

  //click event handler for answer choice {verify whether chosen answer is = correctAnswer in the question object}

  //click event handler for next button {move to next question}



});
