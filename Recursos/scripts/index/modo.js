document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'theme-switch') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('theme-switch');
            localStorage.setItem('theme', 'theme-switch');
        } else {
            document.body.classList.remove('theme-switch');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
