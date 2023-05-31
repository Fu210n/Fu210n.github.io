$( document ).ready(function() {
    $('.nav_toggle').on("click", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("open");
    });

});