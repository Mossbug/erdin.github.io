
let sidebar = document.getElementById("sidebar");
let openedSidebar = document.getElementsByClassName("openedSidebar");
let popup = document.getElementById("infoPopup");
let reisfeldPopup = document.getElementById("reisfeldPopup");
let elkpethPopup = document.getElementById("elkpethPopup");
let erinsgatePopup = document.getElementById("erinsgatePopup");
let kirenPopup = document.getElementById("kirenPopup");
let wolfwaterPopup = document.getElementById("wolfwaterPopup");



popup.classList.add("gone");
kirenPopup.classList.add("gone");
erinsgatePopup.classList.add("gone");
elkpethPopup.classList.add("gone");
reisfeldPopup.classList.add("gone");
wolfwaterPopup.classList.add("gone");

// Map popup stuff ----------------------------------------------
/*adding a new popup description for a location: make sure to add it to the closeMapPopup function, and create
 it's own open function so that it doesn't mess up any other popups*/
function closeMapPopup() {
    popup.classList.add("gone");
    elkpethPopup.classList.add("gone")
    reisfeldPopup.classList.add("gone")
    erinsgatePopup.classList.add("gone")
    kirenPopup.classList.add("gone")
    wolfwaterPopup.classList.add("gone");
}

function openReisfeldPopup() {
    popup.classList.add("gone");
    elkpethPopup.classList.add("gone")
    reisfeldPopup.classList.add("gone")
    erinsgatePopup.classList.add("gone")
    kirenPopup.classList.add("gone")
    wolfwaterPopup.classList.add("gone");
    //ABOVE SECTION CLEARS ALL (should be the same as the closeMapPopup Function)

    popup.classList.remove("gone");
    reisfeldPopup.classList.remove("gone")
}

function openElkpethPopup() {
    popup.classList.add("gone");
    elkpethPopup.classList.add("gone")
    reisfeldPopup.classList.add("gone")
    erinsgatePopup.classList.add("gone")
    kirenPopup.classList.add("gone")
    wolfwaterPopup.classList.add("gone");
    //ABOVE SECTION CLEARS ALL (should be the same as the closeMapPopup Function)

    popup.classList.remove("gone");
    elkpethPopup.classList.remove("gone")
}

function openErinsgatePopup() {
    popup.classList.add("gone");
    elkpethPopup.classList.add("gone")
    reisfeldPopup.classList.add("gone")
    erinsgatePopup.classList.add("gone")
    kirenPopup.classList.add("gone")
    wolfwaterPopup.classList.add("gone");
    //ABOVE SECTION CLEARS ALL (should be the same as the closeMapPopup Function)

    popup.classList.remove("gone");
    erinsgatePopup.classList.remove("gone")
}

function openWolfwaterPopup() {
    popup.classList.add("gone");
    elkpethPopup.classList.add("gone")
    reisfeldPopup.classList.add("gone")
    erinsgatePopup.classList.add("gone")
    kirenPopup.classList.add("gone")
    wolfwaterPopup.classList.add("gone");
    //ABOVE SECTION CLEARS ALL (should be the same as the closeMapPopup Function)

    popup.classList.remove("gone");
    wolfWaterPopup.classList.remove("gone")
}


