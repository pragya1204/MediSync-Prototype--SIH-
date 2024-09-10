function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}


function selectOption(optionText) {
    var dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.textContent = optionText;

    
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.remove("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
