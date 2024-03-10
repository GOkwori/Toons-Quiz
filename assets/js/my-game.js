// DOM Elements
const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option-text");
const scoreEl = document.getElementById("score");
const questionCounterEl = document.getElementById("questionCounter");
const nextButton = document.getElementById("next-btn");

// Variables for the game
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

