// Importuj wymagane klasy z API Obsidiana
const { Plugin } = require('obsidian');

module.exports = class ThemeSwitcher extends Plugin {
    async onload() {
        // Dodaj komendę do przełączania trybu
        this.addCommand({
            id: 'toggle-theme',
            name: 'Toggle Theme',
            callback: () => this.toggleTheme()
        });
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('class');
        const isDarkMode = currentTheme.includes('theme-dark');

        if (isDarkMode) {
            // Przełącz na tryb jasny
            document.body.removeClass('theme-dark');
            document.body.addClass('theme-light');
        } else {
            // Przełącz na tryb ciemny
            document.body.removeClass('theme-light');
            document.body.addClass('theme-dark');
        }
    }

    onunload() {
        console.log('Theme Switcher plugin unloaded');
    }
};
