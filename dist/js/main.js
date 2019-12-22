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
});