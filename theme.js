// Gestion du thème
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const darkThemeLink = document.querySelector('link[href="styles/dark.css"]');
    const lightThemeLink = document.createElement('link');
    lightThemeLink.rel = 'stylesheet';
    lightThemeLink.href = 'styles/light.css';

    // Vérifier le thème enregistré
    const currentTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = darkThemeLink.disabled ? 'dark' : 'light';
        updateTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function updateTheme(theme) {
        if (theme === 'light') {
            darkThemeLink.disabled = true;
            if (!document.head.contains(lightThemeLink)) {
                document.head.appendChild(lightThemeLink);
            }
            themeIcon.className = 'fas fa-moon';
        } else {
            darkThemeLink.disabled = false;
            if (document.head.contains(lightThemeLink)) {
                document.head.removeChild(lightThemeLink);
            }
            themeIcon.className = 'fas fa-sun';
        }
    }
}); 