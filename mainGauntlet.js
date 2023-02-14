
function gauntletRedirect() {
    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "cyrus1111") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/val.html'
        location.replace('https://mossbug.github.io/erdin.github.io/val.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "germaine") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/germaine.html'
        location.replace('https://mossbug.github.io/erdin.github.io/germaine.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "cadenza") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/cadenza.html'
        location.replace('https://mossbug.github.io/erdin.github.io/cadenza.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "shevaria") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/shevaria.html'
        location.replace('https://mossbug.github.io/erdin.github.io/shevaria.html')
    }

    var gauntletCode = document.getElementById('gauntletCode').value;
    if (gauntletCode == "kore") {
        //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/esic.html'
        location.replace('https://mossbug.github.io/erdin.github.io/esic.html')
    }
}

document.getElementById("gauntletCode").addEventListener("keydown", function (e) {

    if (e.code === "Enter") {
        var gauntletCode = document.getElementById('gauntletCode').value;
        if (gauntletCode == "cyrus1111") {

            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/val.html'
            location.replace('https://mossbug.github.io/erdin.github.io/val.html');
        }


        else if (gauntletCode == "germaine") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/germaine.html'
            location.replace('https://mossbug.github.io/erdin.github.io/germaine.html');
        }


        else if (gauntletCode == "cadenza") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/cadenza.html'
            location.replace('https://mossbug.github.io/erdin.github.io/cadenza.html');
        }


        else if (gauntletCode == "shevaria") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/shevaria.html'
            location.replace('https://mossbug.github.io/erdin.github.io/shevaria.html');
        }


        else if (gauntletCode == "kore") {
            var gauntletCode = document.getElementById('gauntletCode').value;
            //When launching on github, replace with this line: 'https://mossbug.github.io/erdin.github.io/esic.html'
            location.replace('https://mossbug.github.io/erdin.github.io/esic.html');
        }
        else {

        }
    }
});

