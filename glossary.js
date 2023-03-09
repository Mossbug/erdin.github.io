window.addEventListener("hashchange", function () {
    if (window.matchMedia("(min-width: 500px)").matches) {
        window.scrollTo(window.scrollX, window.scrollY - 200);
    }
    else {
        window.scrollTo(window.scrollX, window.scrollY - 120);
    }
});

