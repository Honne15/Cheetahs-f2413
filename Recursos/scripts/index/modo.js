document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById('theme-switch');
    
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
