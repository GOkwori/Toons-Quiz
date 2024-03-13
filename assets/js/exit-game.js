// This script is used to handle the exit game page.
document.addEventListener("DOMContentLoaded", function () {
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

  // Handle "No" button action
  const noButton = document.getElementById("noBtn");
  if (noButton) {
    noButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.history.back();
    });
  } else {
    console.error("No button not found.");
  }
});
