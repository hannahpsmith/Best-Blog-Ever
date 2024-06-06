const themeSwitcher = document.getElementById('toggleButton');
const body = document.body;

function getThemeState() {
    return body.getAttribute("data-theme");
}

function setThemeState(themeValue) {
    body.setAttribute("data-theme", themeValue);
    localStorage.setItem("theme", themeValue);
}

const userThemePreference = localStorage.getItem('theme');
    if (userThemePreference) {
        setThemeState(userThemePreference);
    }


let mode = 'light';

themeSwitcher.addEventListener('click', function() {
    const currentTheme = getThemeState();
    setThemeState(currentTheme === "light" ? "dark" : "light");
    themeSwitcher.textContent = currentTheme === "light" ?  "🌙" : "☀️" ;
})
