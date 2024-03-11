// Purpose: End game functionality
const username = document.getElementById("username");
const saveHighScore = document.getElementById("saveHighScore");
const finalScore = document.getElementById("finalScore");

// Get the most recent score from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

// Disable the save high score button if the username is empty
username.addEventListener("keyup", () => {
  saveHighScore.disabled = !username.value;
});

// Get the high score form
saveHighScore = (e) => {
  e.preventDefault();
};
