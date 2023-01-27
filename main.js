

let bars = document.getElementById("bars");
let exit = document.getElementById("exit");
let sidebar = document.getElementById("sidebar");
let openedSidebar = document.getElementsByClassName("openedSidebar");
let popup = document.getElementById("infoPopup");
let reisfeldPopup = document.getElementById("reisfeldPopup");

popup.classList.add("gone");
exit.classList.add("gone");


function openSidebar() {
    console.log("open sidebar triggered")
    sidebar.classList.add("openedSidebar");
    bars.classList.add("gone");
    exit.classList.remove("gone");
}

function closeSidebar() {
    sidebar.classList.remove("openedSidebar");
    exit.classList.add("gone");
    bars.classList.remove("gone");
}

function openReisfeldPopup() {
    popup.classList.remove("gone");
}

function closeMapPopup() {
    popup.classList.add("gone");
}