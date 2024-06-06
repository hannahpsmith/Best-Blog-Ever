const themeSwitcher = document.getElementById('toggleButton');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {    
    body.classList.add(currentTheme);
    toggleButton.textContent = currentTheme === 'light' ? '☀️' : '🌙';
}

// document.addEventListener('DOMContentLoaded', () => {
//     const themeValue = localStorage.getItem('theme');
//     if (themeValue) {
//         body.setAttribute('data-theme', themeValue)
//     } else {
//         return;
//     }
// });


let mode = 'light';

themeSwitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
    else {
        mode = 'light';
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
})


