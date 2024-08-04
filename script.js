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

// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {
   
// });



//  product sections 

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.category-item')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


