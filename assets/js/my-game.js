// DOM Elements
const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option-text");
const scoreEl = document.getElementById("score");
const questionCounterEl = document.getElementById("questionCounter");
const nextButton = document.getElementById("next-btn");

// Variables for the game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions
let questions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
};

// Easy Questions
let easyQuestions = [
  {
    question: "What is the name of Mickey Mouse's pet dog?",
    options: ["Goofy", "Pluto", "Max", "Fido"],
    answer: "Pluto",
  },
  {
    question: "Which cartoon character lives in a pineapple under the sea?",
    options: [
      "SpongeBob SquarePants",
      "Patrick Star",
      "Squidward Tentacles",
      "Mr. Krabs",
    ],
    answer: "SpongeBob SquarePants",
  },
  {
    question: "What color are the Smurfs?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: "Blue",
  },
  {
    question: "Who is the fastest character in Looney Tunes?",
    options: ["Foghorn Leghorn", "Daffy Duck", "Road Runner", "Bugs Bunny"],
    answer: "Road Runner",
  },
  {
    question: "Which character loves honey and lives in the Hundred Acre Wood?",
    options: ["Piglet", "Tigger", "Eeyore", "Winnie the Pooh"],
    answer: "Winnie the Pooh",
  },
  {
    question: "Who is Jerry's nemesis in the cartoon 'Tom and Jerry'?",
    options: ["Tom", "Spike", "Butch", "Tyke"],
    answer: "Tom",
  },
  {
    question: "What type of animal is Baloo in 'The Jungle Book'?",
    options: ["Bear", "Tiger", "Panther", "Wolf"],
    answer: "Bear",
  },
  {
    question: "Which superhero leads the Teen Titans?",
    options: ["Cyborg", "Beast Boy", "Robin", "Starfire"],
    answer: "Robin",
  },
  {
    question: "In 'Finding Nemo', what type of fish is Nemo?",
    options: ["Clownfish", "Goldfish", "Beta Fish", "Guppy"],
    answer: "Clownfish",
  },
  {
    question: "What is the name of the city where 'The Simpsons' live?",
    options: ["Springfield", "Shelbyville", "Quahog", "Cohog"],
    answer: "Springfield",
  },
];

// Medium Questions
let mediumQuestions = [
  {
    question: "In 'Adventure Time', who is Finn's best friend?",
    options: ["Jake", "Princess Bubblegum", "Ice King", "Marceline"],
    answer: "Jake",
  },
  {
    question: "What is the secret identity of 'The Iron Giant'?",
    options: [
      "A War Machine",
      "A Space Explorer",
      "A Child's Imagination",
      "A Protector",
    ],
    answer: "A Protector",
  },
  {
    question:
      "In 'Avatar: The Last Airbender', who is the only character able to bend all four elements?",
    options: ["Zuko", "Toph", "Aang", "Katara"],
    answer: "Aang",
  },
  {
    question:
      "Which character from 'Rick and Morty' is known for his catchphrase 'Wubba Lubba Dub Dub'?",
    options: ["Morty", "Beth", "Jerry", "Rick"],
    answer: "Rick",
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
    answer: "Journal 3",
  },
  {
    question: "What is Gargamel's main goal in 'The Smurfs'?",
    options: [
      "To capture the Smurfs",
      "To destroy the Smurf village",
      "To become friends with the Smurfs",
      "To steal Smurfette",
    ],
    answer: "To capture the Smurfs",
  },
  {
    question: "Which character from 'Futurama' is a bending unit?",
    options: ["Fry", "Leela", "Bender", "Zoidberg"],
    answer: "Bender",
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
    answer: "Other Gems",
  },
  {
    question: "In 'Regular Show', what are Mordecai and Rigby's occupations?",
    options: [
      "Park Managers",
      "Groundskeepers",
      "Convenience Store Clerks",
      "Security Guards",
    ],
    answer: "Groundskeepers",
  },
  {
    question: "Who is the main antagonist in 'Kim Possible'?",
    options: ["Shego", "Dr. Drakken", "Monkey Fist", "Duff Killigan"],
    answer: "Dr. Drakken",
  },
];

// Hard Questions
let hardQuestions = [
  {
    question: "In 'Samurai Jack', what is the name of Jack's main adversary?",
    options: ["Aku", "The Shogun", "Demongo", "The Scotsman"],
    answer: "Aku",
  },
  {
    question:
      "What year did the original 'Transformers' animated series first air?",
    options: ["1982", "1984", "1986", "1988"],
    answer: "1984",
  },
  {
    question:
      "In 'The Powerpuff Girls', what substance accidentally added gives the girls their powers?",
    options: ["Sugar", "Spice", "Everything Nice", "Chemical X"],
    answer: "Chemical X",
  },
  {
    question:
      "In 'Courage the Cowardly Dog', what is the name of Courage's owner?",
    options: ["Muriel", "Eustace", "Shirley", "Katz"],
    answer: "Muriel",
  },
  {
    question: "Which 'SpongeBob SquarePants' character is a Texas native?",
    options: [
      "Sandy Cheeks",
      "Patrick Star",
      "Mr. Krabs",
      "Squidward Tentacles",
    ],
    answer: "Sandy Cheeks",
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
    answer: "To buy candy",
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
    answer: "Jenny Wakeman",
  },
  {
    question: "In 'Danny Phantom', what event turns Danny into a half-ghost?",
    options: [
      "A ghost portal accident",
      "A chemical spill",
      "A supernatural curse",
      "An alien encounter",
    ],
    answer: "A ghost portal accident",
  },
  {
    question:
      "Which of these characters is not a member of 'The Fairly OddParents'?",
    options: ["Timmy Turner", "Cosmo", "Wanda", "Jimmy Neutron"],
    answer: "Jimmy Neutron",
  },
  {
    question: "In 'Adventure Time', what is the name of the vampire queen?",
    options: [
      "Princess Bubblegum",
      "Marceline",
      "Flame Princess",
      "Lumpy Space Princess",
    ],
    answer: "Marceline",
  },
];

let selectedDifficulty = "easy";

// Constants
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

// Function to start the game
function startGame(difficulty = "easy") {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions[difficulty]];
  nextButton.classList.add("hide"); // Ensure the Next button is hidden at the start
  nextQuestion();
}

// Function to get the next question
function nextQuestion() {
    acceptingAnswers = true;
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score);
      return window.location.assign('/end-game.html'); // Adjust as necessary
    }


