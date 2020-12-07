$(document).ready(function() {
    $(".item-q").slice(0, 2).show();
    $("#loadmore").on("click", function(e) {
        e.preventDefault();
        $(".item-q:hidden").slice(0, 2).slideDown();
        if ($(".item-q:hidden").length == 0) {
            $("#loadmore").text("No Content").addClass("noContent");
        }
    });
    //toggle tab
    var tabItem = $(".tab-item");
    tabItem.click(function() {
            tabItem.removeClass("active")
        })
        //active tab
    var titleCategory = $(".dropdown-title >a");
    var titleParent = $(".title-parent");
    var titleSubmenu = $(".title-submenu");
    var titleSubmeu2 = $(".title-submenu2")

    titleCategory.click(function() {
            if ($(this).parent().hasClass("active-title")) {
                console.log('aaaaaa');
                titleCategory.removeClass("active");
                tabItem.removeClass("active");
                titleSubmenu.removeClass("active-title")
                titleParent.removeClass("active-title")
                titleSubmeu2.removeClass("active-title")
                    // $(this).parent().toggleClass("active-title")
                $(this).parents(".title-parent").addClass("active-title")
                $(this).parents(".title-submenu").addClass("active-title")
                $(this).parents(".title-submenu2").addClass("active-title")
                $(this).parent().removeClass("active-title")
            } else {
                titleCategory.removeClass("active");
                tabItem.removeClass("active");
                titleSubmenu.removeClass("active-title")
                titleParent.removeClass("active-title")
                titleSubmeu2.removeClass("active-title")
                    // $(this).parent().toggleClass("active-title")
                $(this).parents(".title-parent").addClass("active-title")
                $(this).parents(".title-submenu").addClass("active-title")
                $(this).parents(".title-submenu2").addClass("active-title")
                $(this).parent().addClass("active-title")
            }





            console.log($(this).parent())
        })
        //carousel banner
    $('.owl-carousel.owl-banner').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        //carousel home hot news
    $(".owl-carousel.owl-hot-news").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
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
    //carousel home commnet
    $(".owl-carousel.comment-carousel").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        stagePadding: 10,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
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

function hide() {
    var x = document.getElementById("passdn");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function hidedk() {
    var x = document.getElementById("passdk");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function hidedkag() {
    var x = document.getElementById("passdkag");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}