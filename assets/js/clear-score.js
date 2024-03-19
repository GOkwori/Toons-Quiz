document.addEventListener("DOMContentLoaded", () => {
  applySettings();
  setupEventListeners();
});

// Function to clear high scores from local storage
function clearHighScores() {
  // User confirmed, clear high scores from local storage
  localStorage.removeItem("highScores");

  // Redirect back to the high scores page to see the updated (now empty) list
  window.location.href = "high-score.html";
}

// Function to set up event listeners
function setupEventListeners() {
  const clearButton = document.querySelector(".yes-button");
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
