let theme = document.getElementById("switch-mode");
let toggle = document.getElementById("toggle");
let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
  savedTheme = "css/light-mode.css";
}

theme.href = savedTheme;

if (savedTheme === "css/dark-mode.css") {
  toggle.checked = true;
} else {
  toggle.checked = false;
}

toggle.addEventListener("change", function() {
  if (toggle.checked) {
    theme.href = "css/dark-mode.css";
  } else {
    theme.href = "css/light-mode.css";
  }

  localStorage.setItem("theme", theme.href);

  localStorage.setItem("checkboxChecked", toggle.checked);
});

let checkboxChecked = localStorage.getItem("checkboxChecked");
if (checkboxChecked === "true") {
  toggle.checked = true;
} else {
  toggle.checked = false;
}


