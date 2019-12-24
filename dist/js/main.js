$(function() {
    $(".toggle-sidebar").on("click", function() {
        $(".container-aera , .sidebar").toggleClass("no-sidebar");
    });
    // Toggle Sunmenu
    $(".toggle-sumenu").on("click", function() {
        $(this)
            .find(".fa-angle-right")
            .toggleClass("down");
        $(this)
            .next(".childe-links")
            .slideToggle();
    });
    // ToggleFullscreen
    $(".togglefullscreen").on("click", function() {
        $(this).toggleClass("fullscren");
        if ($(this).hasClass("fullscren")) {
            openScreen();
        } else {
            closeScreen();
        }
    });
    //Hide Setting
    $(".toggle-setting").on("click", function() {
        $(".setting-box").toggleClass("hide-setting");
    });
});

var elm = document.documentElement;

function openScreen() {
    if (elm.requestFullScreen) {
        elm.requestFullScreen();
    } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullscreen();
    } else if (elm.webkitRequestFullScreen) {
        elm.webkitRequestFullscreen();
    } else if (elm.msRequestFullScreen) {
        elm.msRequestFullscreen();
    }
}

function closeScreen() {
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
    }
}