document.addEventListener("DOMContentLoaded", () => {
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

  // Apply dark theme setting
  if (darkThemeEnabled) {
    body.classList.add("dark-theme");
  }

  // Event listeners for the checkboxes
  soundCheckbox.addEventListener("change", () => {
    if (soundCheckbox.checked) {
      music.currentTime = 0; // Reset time to start music from the beginning
      music.play().catch((e) => console.error("Error playing music:", e));
      localStorage.setItem("soundEnabled", "true");
    } else {
      music.pause();
      localStorage.removeItem("musicTime"); // Clear saved playback time since sound is disabled
      localStorage.setItem("soundEnabled", "false");
    }
  });

  themeCheckbox.addEventListener("change", () => {
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
window.addEventListener("beforeunload", () => {
  if (localStorage.getItem("soundEnabled") === "true" && music) {
    localStorage.setItem("musicTime", music.currentTime.toString());
  }
});
