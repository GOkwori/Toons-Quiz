// JavaScript for the settings page
document.addEventListener("DOMContentLoaded", function () {
  // Get the sound effects and theme checkboxes
  const music = document.getElementById("background-music");
  const soundCheckbox = document.getElementById("sound-effects");
  const themeCheckbox = document.getElementById("theme");
  const body = document.body;

  // Load saved settings
  const soundEnabled = localStorage.getItem("soundEnabled") === "true";
  const darkThemeEnabled = localStorage.getItem("darkThemeEnabled") === "true";

  soundCheckbox.checked = soundEnabled;
  themeCheckbox.checked = darkThemeEnabled;

  // Automatically play music if sound is enabled, considering saved playback time
  if (soundEnabled) {
    const savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
    music.currentTime = savedTime; // Set the saved playback time
    music.play().catch((e) => console.error("Error playing music:", e));
  }

  // Apply light theme setting
  if (darkThemeEnabled) {
    body.classList.add("dark-theme");
  }

  // Event listeners for the checkboxes
  soundCheckbox.addEventListener("change", function () {
    if (soundCheckbox.checked) {
      music.currentTime = 0; // Reset time to start music from the beginning
      music.play().catch((e) => console.error("Error playing music:", e));
      localStorage.setItem("soundEnabled", "true");
    } else {
      music.pause();

      // Clear saved playback time if sound is disabled
      localStorage.removeItem("musicTime");
      localStorage.setItem("soundEnabled", "false");
    }
  });

  // Event listener for applying theme
  themeCheckbox.addEventListener("change", function () {
    if (themeCheckbox.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("darkThemeEnabled", "true");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("darkThemeEnabled", "false");
    }
  });
});

// Save the current time of the music when navigating away from the page, if sound is enabled
window.addEventListener("beforeunload", function () {
  if (localStorage.getItem("soundEnabled") === "true" && music) {
    localStorage.setItem("musicTime", music.currentTime.toString());
  }
});
