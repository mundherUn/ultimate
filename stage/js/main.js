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
    // Switch Colors Themes
    var themsClasses = [];
    $(".color-options li").each(function() {
        themsClasses.push($(this).data("them"));
    });
    $(".color-options li").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $("body")
            .removeClass(themsClasses.join(" "))
            .addClass($(this).data("them"));
    });
    // Switch Fonts
    var fontsClasses = [];
    $(".font-option select option").each(function() {
        fontsClasses.push($(this).val());
    });
    $(".font-option select").on("change", function() {
        $("body")
            .removeClass(fontsClasses.join(" "))
            .addClass(
                $(this)
                .find("option:selected")
                .val()
            );
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