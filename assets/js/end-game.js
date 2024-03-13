//End game functionality

document.addEventListener("DOMContentLoaded", () => {
  applySettings();

  const username = document.getElementById("username");
  const saveScoreBtn = document.getElementById("saveScoreBtn");
  const finalScore = document.getElementById("finalScore");

  // Get the most recent score from local storage
  const mostRecentScore = localStorage.getItem("mostRecentScore");

  // Get the high scores from local storage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Constants
  const MAX_HIGH_SCORES = 5;

  finalScore.innerText = mostRecentScore;

  // Disable the save high score button if the username is empty
  username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
  });

  // Get the high score form
  saveHighScore = (e) => {
    e.preventDefault();

    // Create a score object
    const score = {
      score: Math.floor(Math.random() * 100),
      name: username.value,
    };

    // Add the score to the high scores array
    highScores.push(score);

    // Sort the high scores array
    highScores.sort((a, b) => b.score - a.score);

    // Remove the lowest score
    highScores.splice(5);

    // Update the high scores in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Go back to the home page
    return window.location.assign("index.html");
  };

  // Apply settings
  function applySettings() {
    const body = document.body;
    const music = document.getElementById("background-music");

    // Retrieve settings from localStorage
    const soundEnabled = localStorage.getItem("soundEnabled") === "true";
    const darkThemeEnabled =
      localStorage.getItem("darkThemeEnabled") === "true";

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
});
