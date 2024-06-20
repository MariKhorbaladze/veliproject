document.getElementById('languageToggle').addEventListener('change', function() {
    let isChecked = this.checked;
    let languageLabel = document.getElementById('languageLabel');
    let switcherText = document.getElementById('switcher-text');

    if (isChecked) {
        languageLabel.textContent = 'GEO';
        switcherText.textContent = 'გამარჯობა';
    } else {
        languageLabel.textContent = 'ENG';
        switcherText.textContent = 'Hello';
    }
});
