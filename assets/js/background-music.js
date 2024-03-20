// Script is for playing background music on the website
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("background-music");
  if (music) {
    const savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
    music.currentTime = savedTime;
    if (localStorage.getItem("soundEnabled") === "true") {
      music.play().catch((e) => console.error("Error playing music:", e));
    }
  }
});

// Save the music time when the user leaves the page
window.addEventListener("beforeunload", () => {
  const music = document.getElementById("background-music");
  if (music) {
    localStorage.setItem("musicTime", music.currentTime.toString());
  }
});
