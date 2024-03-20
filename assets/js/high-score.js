document.addEventListener("DOMContentLoaded", () => {
  applySettings();
  displayHighScores();
});

// Function to display high scores
function displayHighScores() {
  const highScoresList = document.getElementById("highScoresList");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Create list items for each high score and append to the highScoresList
  highScoresList.innerHTML = highScores
    .map(
      (score) => `<li class="high-score">${score.name} - ${score.score}</li>`
    )
    .join("");
}

// Function to apply settings for sound and dark theme
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
