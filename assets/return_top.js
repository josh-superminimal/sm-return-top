/**
 * Return to top function shows the return to top button after the user scrolls down the page a bit
 * taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
 * by Jack Rose
 */

var actHeight = 400; //(in px)

// When the user scrolls down <actHeight> px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > actHeight || document.documentElement.scrollTop > actHeight) {
        document.getElementById("btn-return-top").style.opacity = "1";
        document.getElementById("btn-return-top").style.right = "20px";
    } else {
        document.getElementById("btn-return-top").style.opacity = "0";
        document.getElementById("btn-return-top").style.right = "-60px";
    }
}

// jQuery("#btn-return-top").click(function() {
//     jQuery("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
// });

var scrollme;
scrollme = document.getElementById("btn-return-top");
scrollme.addEventListener("click", runScroll, false)

function runScroll() {
    scrollTo(document.documentElement, 0, 300);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}