

let bars = document.getElementById("bars");
let exit = document.getElementById("exit");
let sidebar = document.getElementById("sidebar");
let openedSidebar = document.getElementsByClassName("openedSidebar");

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