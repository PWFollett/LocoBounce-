// Store Tab Into DOM Element.
tabcontent = document.getElementsByClassName("tabcontent");

// Make Sure Only One Widget Shows Up On Page Load.
// Loop through and Display Only the First Index
// Value in the Array.
for (let i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// Widget Tabs Functionality.
function tabs(e, tabName) {
    // Loop Through all Elements and Hide All Widgets But the One Clicked.
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the Widget Clicked.
    document.getElementById(tabName).style.display = "block";
}

// For MVP Reasons, this should be changed in the future.
// This just refreshes the page on new routes to avoid
// any duplicate widgets populating on the main view.
function updateWidget() {
    window.location.reload();
}