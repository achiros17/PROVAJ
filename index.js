




function toggleDarkMode() {
    let body = document.getElementById("body") || document.body;
    body.classList.toggle("dark");

    let btn = document.querySelector(".darkMode");
    if (btn) {
        if (body.classList.contains("dark")) {
            btn.innerHTML = "☀"; // Sole
        } else {
            btn.innerHTML = "☾"; // Luna
        }
    }
}