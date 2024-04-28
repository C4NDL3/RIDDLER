const riddles = [
  {
    question: "What has keys but can't open locks?",
    answer: "A piano",
  },
  {
    question: "What travels around the world while staying in a corner?",
    answer: "A stamp",
  },
  {
    question: "What comes up but never comes down?",
    answer: "Your age",
  },
  {
    question: "What has a head and a tail but no body?",
    answer: "A coin",
  },
  {
    question: "What can you break, even when you never pick it up or touch it?",
    answer: "A promise",
  },
  {
    question: "What is yours but mostly used by others?",
    answer: "Your name",
  },
  {
    question: "What kind of lion never roars?",
    answer: "A dandelion",
  },
  {
    question:
      "What’s bright orange with green on top and sounds like a parrot?",
    answer: "A carrot",
  },
  {
    question: "What’s really easy to get into, and hard to get out of?",
    answer: "Trouble",
  },
  {
    question:
      "You cut me, slice me, dice me, and all the while, you cry. What am I?",
    answer: "An Onion",
  },
];
const phrases = [
  "Why so serious?",
  "What doesn't kill you simply makes you stranger!",
  "As you know, madness is like gravity: All it takes is a little push",
  "If you’re good at something, never do it for free",
  "When they treat you like a joke, leave them like it's funny",
  "A joke a day keeps the gloom away!",
  "Don't test the monster in me!",
];

// get the btn to start the game
const btn = document.getElementById("Ready");
// get the users input value
const userInput = document.getElementById("user-value");
// get the score element
const score = document.getElementById("user-Score");
// get the question display element
const riddleQ = document.querySelector(".lstRiddle");
// get submit element
const submitBtn = document.getElementById("submitAnswer");
// setup a counter
let counter = 0;
// update score
let scoreCounter = 0;

// create a function that updates the score each time someone gets a question right
function updateScore() {
  score.innerHTML = scoreCounter;
}

// check if the answer is correct
function checkAnswer() {
  if (userInput.value.trim() === "") {
    btn.classList.remove("readybtn");
    btn.innerHTML = "Must Answer First";
  } else {
    if (
      userInput.value.toLowerCase() === riddles[counter].answer.toLowerCase()
    ) {
      btn.classList.remove("readybtn");
      phrasesLst();
      scoreCounter++;
      updateScore();
      counter++;
      if (counter === riddles.length) {
        counter = 0;
      }
      displayQ();
      userInput.value = "";
    } else {
      btn.innerHTML = "Wrong Answer!";
      scoreCounter--;
      updateScore();
      userInput.value = "";
      if (scoreCounter === 0) {
        submitBtn.innerHTML = "hahaha you lost";
        btn.innerHTML = "hahaha you lost";
        resetGame();
      }
    }
  }
}
// create a function that iterates through the phraseslst
function phrasesLst() {
  // create a random number
  const ranNum = Math.floor(Math.random() * phrases.length);
  btn.innerHTML = phrases[ranNum];
}
// create a function that displays the question when the button ready is hit
function displayQ() {
  riddleQ.innerHTML = riddles[counter].question;
}

// create a function to reset the game when the score gets to zero
function resetGame() {
  counter = 0;
  scoreCounter = 0;
  updateScore();
  displayQ();
  submitBtn.innerHTML = "Submit Answer";
  btn.classList.add("redaybtn");
  userInput.value = "";
  checkAnswer();
}

submitBtn.onclick = checkAnswer;

displayQ();

// Making a transition for riddles to appear smoothly

