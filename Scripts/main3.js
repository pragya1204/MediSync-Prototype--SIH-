
function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}


function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdownContent");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


function selectHospital(hospitalName) {
    var dropdownButton = document.querySelector(".dropbtn");
    dropdownButton.textContent = hospitalName;


    document.getElementById("dropdownContent").classList.remove("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#searchInput')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const dayDropdown = document.getElementById('dayDropdown');
for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    dayDropdown.appendChild(option);
}
function populateTimeDropdown() {
    const dropdown = document.getElementById('timeDropdown');
    const startHour = 9;
    const endHour = 18;
    const interval = 30;

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += interval) {
            let time = formatTime(hour, minutes);
            let option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            dropdown.appendChild(option);
        }
    }
}


function formatTime(hour, minutes) {
    let period = hour < 12 ? 'AM' : 'PM';
    let formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHour}:${formattedMinutes} ${period}`;
}


populateTimeDropdown();
