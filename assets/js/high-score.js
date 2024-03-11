//Display the high scores of the user
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Display the high scores in the list
highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

// Clear the high scores from local storage
function clearHighScores() {
  // Confirmation prompt
  const confirmClear = confirm(
    "Are you sure you want to clear all high scores? This action cannot be undone."
  );

  if (confirmClear) {
    // User confirmed, clear high scores from local storage
    localStorage.removeItem("highScores");

    // Clear the display
    highScoresList.innerHTML = "";

    // Refresh page
    alert("High scores cleared!");
  } else {
    
    // User canceled, return to the home page
    window.location.href = "index.html";
    alert("Action canceled. Returning to the home page.");
  }
}

// Event listeners
document.querySelector("clear").addEventListener("click", clearHighScores);
