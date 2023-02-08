

let bars = document.getElementById("bars");
let exit = document.getElementById("exit");
let characterCLick = document.getElementById("characterBase");

exit.classList.add("gone");




//mobile nav sidebar stuff -------------------------------------
function openSidebar() {
    sidebar.classList.add("openedSidebar");
    bars.classList.add("gone");
    exit.classList.remove("gone");
}

function closeSidebar() {
    sidebar.classList.remove("openedSidebar");
    exit.classList.add("gone");
    bars.classList.remove("gone");
}

function gauntletRedirect() {
    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "val") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/val.html'
        location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/val.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "germaine") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/germaine.html'
        location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/germaine.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "cadenza") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/cadenza.html'
        location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/cadenza.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "shevaria") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/shevaria.html'
        location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/shevaria.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "esic") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/esic.html'
        location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/esic.html')
    }
}

