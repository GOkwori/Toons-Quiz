// JavaScript file for the difficulty page.
document.addEventListener("DOMContentLoaded", function () {
  applySettings();
});

// Set the difficulty level
setDifficulty = (level) => {
  localStorage.setItem("difficulty", level);

  // Redirect to the game page
  window.location.href = "game-page.html";
}

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
