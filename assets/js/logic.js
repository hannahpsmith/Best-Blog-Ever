const themeSwitcher = document.getElementById('toggleButton');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {    
    body.classList.add(currentTheme);
    toggleButton.textContent = currentTheme === 'light' ? '☀️' : '🌙';
}
    
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


