// JavaScript file for the difficulty page.
function setDifficulty(level) {
  localStorage.setItem("difficulty", level);

  // Redirect to the game page
  window.location.href = "game-page.html";
}
