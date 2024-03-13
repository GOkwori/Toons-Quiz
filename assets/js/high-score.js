// JavaScript file for the high score page
document.addEventListener("DOMContentLoaded", () => {
  applySettings();
  displayHighScores();
  setupEventListeners();
});

// Function to display high scores
function displayHighScores() {
  const highScoresList = document.getElementById("highScoresList");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Display the high scores in the list
  highScoresList.innerHTML = highScores
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
}

// Function to clear high scores from local storage
function clearHighScores() {
  // Confirmation prompt
  const confirmClear = confirm(
    "Are you sure you want to clear all high scores? This action cannot be undone."
  );

  if (confirmClear) {
    // User confirmed, clear high scores from local storage
    localStorage.removeItem("highScores");

    // Clear the display and refresh the high scores list
    displayHighScores();

    alert("High scores cleared!");
  } else {
    // User canceled, no need to navigate away
    alert("Action canceled.");
  }
}

// Function to set up event listeners
function setupEventListeners() {
  const clearButton = document.getElementById("clearHighScores"); // Assuming your clear button has this ID
  if (clearButton) {
    clearButton.addEventListener("click", clearHighScores);
  }
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
