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
  
    // Apply light theme setting
    if (darkThemeEnabled) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }

  });
  