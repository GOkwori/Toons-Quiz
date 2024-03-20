// This script is for the end game page.
document.addEventListener("DOMContentLoaded", function () {
  applySettings();

  const username = document.getElementById("username");
  const saveScoreBtn = document.getElementById("saveScoreBtn");
  const finalScore = document.getElementById("finalScore");

  // Get the most recent score from local storage and parse it to an integer
  const mostRecentScore = parseInt(localStorage.getItem("mostRecentScore"), 10);

  // Get the high scores from local storage or initialize an empty array if none
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Constants
  const MAX_HIGH_SCORES = 5;

  finalScore.innerText = mostRecentScore;

  // Disable the save high score button if the username is empty
  username.addEventListener("keyup", function () {
    saveScoreBtn.disabled = !username.value.trim();
  });

  // Save high score function
  function saveHighScore(e) {
    e.preventDefault();

    const score = {
      // Use the score from localStorage
      score: mostRecentScore,
      name: username.value.trim(),
    };

    // Add the new score to the high scores array
    highScores.push(score);

    // Sort the high scores array in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Keep only the top 5 scores
    highScores.splice(MAX_HIGH_SCORES);

    // Save the updated high scores back to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect to the home page or high scores page
    window.location.assign("index.html");
  }

  // Attach the saveHighScore function to the click event of saveScoreBtn
  saveScoreBtn.addEventListener("click", saveHighScore);

  // Apply settings function defined as before
  function applySettings() {
    const body = document.body;
    const music = document.getElementById("background-music");

    const soundEnabled = localStorage.getItem("soundEnabled") === "true";
    const darkThemeEnabled =
      localStorage.getItem("darkThemeEnabled") === "true";

    if (soundEnabled && music) {
      music.play();
    } else if (music) {
      music.pause();
    }

    if (darkThemeEnabled) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }
});
