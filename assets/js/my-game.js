// This file contains the JavaScript code for my game.
document.addEventListener("DOMContentLoaded", () => {
  // Apply settings
  applySettings();

  // Initialization logic, including setting up the questions based on difficulty
  setupGame();

  // Add event listener to the Next button only once
  nextButton.addEventListener("click", handleNextButton);
});

// Apply settings
function applySettings() {
  const body = document.body;
  const music = document.getElementById("background-music");

  // Retrieve settings from localStorage
  const soundEnabled = localStorage.getItem("soundEnabled") === "true";
  const darkThemeEnabled = localStorage.getItem("darkThemeEnabled") === "true";

  // Apply sound setting
  if (soundEnabled && music) {
    music.play();
  } else if (music) {
    music.pause();
  }

  // Apply dark theme setting
  if (darkThemeEnabled) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
}

// Function to set up the game
function setupGame() {
  const selectedDifficulty = localStorage.getItem("difficulty") || "easy"; // Ensure a default value
  let questions;

  // Using a switch or if-else structure to map selectedDifficulty to the correct array
  switch (selectedDifficulty) {
    case "easy":
      questions = easyQuestions;
      break;
    case "medium":
      questions = mediumQuestions;
      break;
    case "hard":
      questions = hardQuestions;
      break;
    default:
      console.error("Unexpected difficulty level:", selectedDifficulty);
      questions = []; // Default to an empty array to avoid errors
      break;
  }

  startGame(questions);
}

//DOM Elements
const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const nextButton = document.getElementById("next-btn-container");

// Variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions

// Easy Questions
let easyQuestions = [
  {
    question: "What is the name of Mickey Mouse's pet dog?",
    options: ["Goofy", "Pluto", "Max", "Fido"],
    answer: 2,
  },
  {
    question: "Which cartoon character lives in a pineapple under the sea?",
    options: [
      "SpongeBob SquarePants",
      "Patrick Star",
      "Squidward Tentacles",
      "Mr. Krabs",
    ],
    answer: 1,
  },
  {
    question: "What color are the Smurfs?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: 2,
  },
  {
    question: "Who is the fastest character in Looney Tunes?",
    options: ["Foghorn Leghorn", "Daffy Duck", "Road Runner", "Bugs Bunny"],
    answer: 3,
  },
  {
    question: "Which character loves honey and lives in the Hundred Acre Wood?",
    options: ["Piglet", "Tigger", "Eeyore", "Winnie the Pooh"],
    answer: 4,
  },
  {
    question: "Who is Jerry's nemesis in the cartoon 'Tom and Jerry'?",
    options: ["Tom", "Spike", "Butch", "Tyke"],
    answer: 1,
  },
  {
    question: "What type of animal is Baloo in 'The Jungle Book'?",
    options: ["Bear", "Tiger", "Panther", "Wolf"],
    answer: 1,
  },
  {
    question: "Which superhero leads the Teen Titans?",
    options: ["Cyborg", "Beast Boy", "Robin", "Starfire"],
    answer: 3,
  },
  {
    question: "In 'Finding Nemo', what type of fish is Nemo?",
    options: ["Clownfish", "Goldfish", "Beta Fish", "Guppy"],
    answer: 1,
  },
  {
    question: "What is the name of the city where 'The Simpsons' live?",
    options: ["Springfield", "Shelbyville", "Quahog", "Cohog"],
    answer: 1,
  },
];

// Medium Questions
let mediumQuestions = [
  {
    question: "In 'Adventure Time', who is Finn's best friend?",
    options: ["Jake", "Princess Bubblegum", "Ice King", "Marceline"],
    answer: 1,
  },
  {
    question: "What is the secret identity of 'The Iron Giant'?",
    options: [
      "A War Machine",
      "A Space Explorer",
      "A Child's Imagination",
      "A Protector",
    ],
    answer: 4,
  },
  {
    question:
      "In 'Avatar: The Last Airbender', who is the only character able to bend all four elements?",
    options: ["Zuko", "Toph", "Aang", "Katara"],
    answer: 3,
  },
  {
    question:
      "Which character from 'Rick and Morty' is known for his catchphrase 'Wubba Lubba Dub Dub'?",
    options: ["Morty", "Beth", "Jerry", "Rick"],
    answer: 4,
  },
  {
    question:
      "In 'Gravity Falls', what is the name of the mysterious book Dipper finds?",
    options: [
      "Journal 3",
      "The Mystery Guide",
      "The Grimoire",
      "Secrets of the Unknown",
    ],
    answer: 1,
  },
  {
    question: "What is Gargamel's main goal in 'The Smurfs'?",
    options: [
      "Capture the Smurfs",
      "Destroy the Smurf village",
      "Be friends with the Smurfs",
      "Steal Smurfette",
    ],
    answer: 1,
  },
  {
    question: "Which character from 'Futurama' is a bending unit?",
    options: ["Fry", "Leela", "Bender", "Zoidberg"],
    answer: 3,
  },
  {
    question:
      "In 'Steven Universe', what are the gems on a mission to protect Earth from?",
    options: [
      "Alien Invaders",
      "Environmental Collapse",
      "Other Gems",
      "Human Greed",
    ],
    answer: 3,
  },
  {
    question: "In 'Regular Show', what are Mordecai and Rigby's occupations?",
    options: [
      "Park Managers",
      "Groundskeepers",
      "Convenience Store Clerks",
      "Security Guards",
    ],
    answer: 2,
  },
  {
    question: "Who is the main antagonist in 'Kim Possible'?",
    options: ["Shego", "Dr. Drakken", "Monkey Fist", "Duff Killigan"],
    answer: 2,
  },
];

// Hard Questions
let hardQuestions = [
  {
    question: "In 'Samurai Jack', what is the name of Jack's main adversary?",
    options: ["Aku", "The Shogun", "Demongo", "The Scotsman"],
    answer: 1,
  },
  {
    question:
      "What year did the original 'Transformers' animated series first air?",
    options: ["1982", "1984", "1986", "1988"],
    answer: 2,
  },
  {
    question:
      "In 'The Powerpuff Girls', what substance accidentally added gives the girls their powers?",
    options: ["Sugar", "Spice", "Everything Nice", "Chemical X"],
    answer: 4,
  },
  {
    question:
      "In 'Courage the Cowardly Dog', what is the name of Courage's owner?",
    options: ["Muriel", "Eustace", "Shirley", "Katz"],
    answer: 1,
  },
  {
    question: "Which 'SpongeBob SquarePants' character is a Texas native?",
    options: [
      "Sandy Cheeks",
      "Patrick Star",
      "Mr. Krabs",
      "Squidward Tentacles",
    ],
    answer: 1,
  },
  {
    question:
      "In 'Ed, Edd n Eddy', for what purpose do the characters constantly try to scam their peers?",
    options: [
      "To buy candy",
      "To build a clubhouse",
      "To go on a vacation",
      "To buy a car",
    ],
    answer: 1,
  },
  {
    question:
      "What is the true identity of the 'XJ-9' robot in 'My Life as a Teenage Robot'?",
    options: [
      "Jenny Wakeman",
      "Nora Wakeman",
      "Brad Carbunkle",
      "Tuck Carbunkle",
    ],
    answer: 1,
  },
  {
    question: "In 'Danny Phantom', what event turns Danny into a half-ghost?",
    options: [
      "A ghost portal accident",
      "A chemical spill",
      "A supernatural curse",
      "An alien encounter",
    ],
    answer: 1,
  },
  {
    question:
      "Which of these characters is not a member of 'The Fairly OddParents'?",
    options: ["Timmy Turner", "Cosmo", "Wanda", "Jimmy Neutron"],
    answer: 4,
  },
  {
    question: "In 'Adventure Time', what is the name of the vampire queen?",
    options: [
      "Princess Bubblegum",
      "Marceline",
      "Flame Princess",
      "Lumpy Space Princess",
    ],
    answer: 2,
  },
];

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// Functions

// Initialize the game
startGame = (questions) => {
  // Ensure questions is an array before proceeding
  if (!Array.isArray(questions)) {
    return; // Exit the function if questions is not an array
  }
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  nextButton.style.display = "none";
  getNewQuestion();
};

// Fetch and display a new question
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Save the most recent score to local storage
    localStorage.setItem("mostRecentScore", score.toString());

    // Go to the end page
    return window.location.assign("end-game.html");
  }

  // Update the question counter and progress bar
  acceptingAnswers = true;
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // Fetch a random question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // Display the options
  options.forEach((option) => {
    const number = option.dataset.number;
    option.innerText = currentQuestion.options[number - 1];
  });

  // Remove the question from the available questions
  availableQuestions.splice(questionIndex, 1);
};

// Set click listeners for each option
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    // Prevent multiple answers
    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset.number;

    // Apply the correct or incorrect class
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    // Apply the class
    selectedOption.parentElement.classList.add(classToApply);

    if (classToApply === "incorrect") {
      options
        .find((option) => option.dataset.number == currentQuestion.answer)
        .parentElement.classList.add("correct");
    }

    // Show Next button after an answer selection
    nextButton.style.display = "block"; // Show Next button after an answer selection
  });
});

// Increment the score
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// This function will handle the 'click' event of the next button
function handleNextButton() {
  options.forEach((option) => {
    // Remove classes for next question
    option.parentElement.classList.remove("correct", "incorrect");
  });
  getNewQuestion(); // Fetch and display the next question
  // Hide Next button until another answer is selected
  nextButton.style.display = "none";
}

startGame();
