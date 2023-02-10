
function gauntletRedirect() {
    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "cyrus1111") {
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

document.getElementById("gauntletCode").addEventListener("keydown", function (e) {

    if (e.code === "Enter") {
        var gauntletCode = document.getElementById('gauntletCode').value;
        if (gauntletCode == "cyrus1111") {

            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/val.html'
            location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/val.html');
        }


        else if (gauntletCode == "germaine") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/germaine.html'
            location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/germaine.html');
        }


        else if (gauntletCode == "cadenza") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/cadenza.html'
            location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/cadenza.html');
        }


        else if (gauntletCode == "shevaria") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/shevaria.html'
            location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/shevaria.html');
        }


        else if (gauntletCode == "esic") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/esic.html'
            location.replace('file:///C:/Users/Chris/Desktop/ErdinLanding/esic.html');
        }
        else {

        }
    }
});

