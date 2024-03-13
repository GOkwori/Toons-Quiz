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

  if (soundEnabled) {
    music.play();
  }

  if (darkThemeEnabled) {
    body.classList.add("dark-theme");
  }

  // Event listeners for the checkboxes
  soundCheckbox.addEventListener("change", () => {
    if (soundCheckbox.checked) {
      music.play();
      localStorage.setItem("soundEnabled", "true");
    } else {
      music.pause();
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
