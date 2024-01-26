const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
        "Who was the first American woman in space? ",
        "True or false: 5 kilometer == 5000 meters? ",
        "(5 + 3)/2 * 10 = ? ",
        "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
        "What is the minimum crew size for the ISS? "
      ];

let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter candidate name: ")
  console.log(candidateAnswer)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question)

  for(let i=0;i < questions.length; i++){
      let qNo = i+1;
       candidateAnswer = input.question(`\n${qNo}. ${questions[i]}`)
       candidateAnswers.push(candidateAnswer)
  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (correctAnswer.toLowerCase() === candidateAnswer.toLowerCase()){
  console.log("Cnngratulations "+candidateName+" , You have answered correctly.")
}

else{

  console.log("incorrect answer")
}*/


  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.

  let count = 0;

  
  for (let y=0;y < correctAnswers.length;y++){

      if(correctAnswers[y].toString().toLowerCase() == candidateAnswers[y].toString().toLowerCase())
      {
        count++
      }
  }
  
  grade = count/correctAnswers.length * 100

  console.log("\n......................................")
  console.log(`\nCandidate Name: ${candidateName}`)
  console.log("......................................\n")

  for (let x = 0; x < questions.length;x++){

    let qNo = x+1;
    console.log(qNo+") "+questions[x])
    console.log(`your Answer: ${candidateAnswers[x]}`)
    console.log(`Correct Answer: ${correctAnswers[x]}\n`)

  }
  
  console.log(`>>> Overall Grade:  ${grade} (${count} of ${questions.length} responses are correct) <<<`)

  if (grade >= 80){
    console.log(">>> STATUS: PASSED <<<")
  }

  else {
    console.log(">>> STATUS: FAILED <<<")
  }

  console.log("......................................\n")
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Welcome ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};