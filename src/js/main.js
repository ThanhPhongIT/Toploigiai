$(document).ready(function() {
    $(".item-q").slice(0, 2).show();
    $("#loadmore").on("click", function(e) {
        e.preventDefault();
        $(".item-q:hidden").slice(0, 2).slideDown();
        if ($(".item-q:hidden").length == 0) {
            $("#loadmore").text("No Content").addClass("noContent");
        }
    });
    //
    $(document).ready(function() {
        $(".owl-hot-news.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    $(".comment-carousel.owl-carousel").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 20,
        nav: true,
        // rewindNav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
})