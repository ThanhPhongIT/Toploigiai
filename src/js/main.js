$(document).ready(function() {
    $(".item-q").slice(0, 2).show();
    $("#loadmore").on("click", function(e) {
        e.preventDefault();
        $(".item-q:hidden").slice(0, 2).slideDown();
        if ($(".item-q:hidden").length == 0) {
            $("#loadmore").text("No Content").addClass("noContent");
        }
    });

})