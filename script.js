var pageRight = document.getElementById("pageRight");
var pageLeft = document.getElementById("pageLeft");

var path = "./assets/";

var defaultPage = 1;

window.addEventListener("load", (event) => {
    //resize(page);
});

window.addEventListener("resize", (event) => {
    resize(pageRight);
    resize(pageLeft);
});

window.addEventListener("keydown", (event) => {
    let pageRight = document.getElementById("pageRight");
    let pageLeft = document.getElementById("pageLeft");

    if (event.key == "ArrowRight") {
        defaultPage = defaultPage === 1 ? 1 : (defaultPage -= 2);
        pageRight.src = path + defaultPage + ".png";
        pageLeft.src = path + (defaultPage + 1) + ".png";
    }
    if (event.key == "ArrowLeft") {
        defaultPage = defaultPage == 75 ? 75 : (defaultPage += 2);
        pageRight.src = path + defaultPage + ".png";
        pageLeft.src = path + (defaultPage + 1) + ".png";
    }
});

function resize(page) {
    if (page && page.style) {
        //page.style.width = screen.availWidth;
        //page.style.width = screen.width;
        //page.style.height = screen.availHeight;
        page.style.height = screen.height;
    }
}

/**
 * swipe event
 */
