"use strict";

//$(window).on("load", function () {

//    $(".loader-backdrop").fadeOut();               // Open Modal on Load or after delay
//    if ($(".modal.fade.Contact").length && ($(".modal.fade.Contact").attr("data-open-onload")) === "true") {
//        setTimeout(function () {
//            $(".modal.fade.Contact").modal();
//        }, $(".modal.fade.Contact").attr("data-open-delay"));
//    }
//});

// Global variable used to disconnect home page videos from their container to 
// prevent audio from continuing to play after they are closed
var tempVideo;

jQuery(document).ready(function () {

    // ************ Function Calls ************//

    if ($("#slider").length) {
        callSliderRevolution();                  // Call to Slider Revolution
    }

    if ($("#slider-video").length) {
        callSliderRevolutionVideo();              // Call to Slider Revolution with Video
    }

    if ($("#slider-news").length) {
        callSliderRevolutionNews();              // Call to Slider Revolution with News
    }

    if ($(".announcement").length) {
        callAnnounceToggle();                    // Call to Announcement Slide Up/Down
    }

    if ($(".announcement-text").length) {
        callAnnouncement();                      // Call to Announcement Carousels
    }

    if ($(".timer").length) {
        $(".timer").each(function () {
            callCountdown(this);                  // Call to Event Countdown Timer
        });
    }

    if ($(".testimonials").length) {
        callTestimonial();                       // Call to Testimonials Carousel
    }

    if ($(".logo-scroll").length) {
        callLogoScroll();                        // Call to Logo Scroll
    }

    if ($(".tweets").length) {
        callTweetScroll();                       // Call to Tweet Scroll
    }

    if ($(".selectpicker").length) {
        callSelectPicker();                      // Call to Select Box Styler
    }

    if ($(".fact .count").length) {
        $(".fact .count").appear(function () {    // Call function callCountTo() only when the Element is in viewport
            callCountTo();
        });
    }

    if ($(".img-rotate").length) {
        $(".img-rotate").find("img:first-child").show();
        $(".img-rotate").mouseenter(function () {
            callAlbumHover(this);                       // Call to Album Hover (Gallery Albums Page)
        });
    }

    if ($(".youtube").length) {
        $(".youtube").each(function () {
            callYoutubeVideo(this);                     // Style each video found on page
        });
    }

    if ($("#gmap").length) {

        var lat = $("#gmap").attr("data-lat");            // Latitude of the place to be marked

        var long = $("#gmap").attr("data-long");          // Longitude of the place to be marked

        var infoWin = $("#gmap").attr("data-info-win");   // Content to be shown in Info Window on Marker

        callGoogleMapStyle(lat, long, infoWin);         // Call to Google Map Styler
    }

    if ($("#back").length) {                              // Back To Top Icon
        callBackToTop();
    }

    if ($("a[data-gal^='prettyPhoto']").length) {
        callPrettyPhoto();                              // Pretty Photo
    }

    if ($("#main-contact-form").length) {
        callFormSubmit();
    }
});


// ************Definitions of Functions for all popout videos************//


// ************End Definitions of Functions************//

function callSliderRevolution() {
    jQuery("#slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        navigation: {
            arrows: { enable: true }
        },
        lazyLoad: "on",
        gridwidth: 1200,
        gridheight: 800,
        parallax: {
            type: "scroll"
        }
    });
}

function callSliderRevolutionVideo() {
    jQuery("#slider-video").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        navigation: {
            onHoverStop: "off"
        },
        lazyLoad: "on",
        gridwidth: 1200,
        gridheight: 800,
        parallax: {
            type: "scroll"
        }
    });
}

function callSliderRevolutionNews() {
    jQuery("#slider-news").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        gridwidth: 1200,
        gridheight: 800,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            arrows: {
                style: "gyges",
                enable: true,
                hide_onmobile: false,
                hide_over: 778,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 40,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 0
                }
            },
            tabs: {
                style: "erinyen",
                enable: true,
                width: 250,
                height: 100,
                min_width: 250,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                wrapper_opacity: "0",
                tmp: '<div class="tp-tab-title">{{title}}</div><div class="tp-tab-desc">{{description}}</div>',
                visibleAmount: 3,
                hide_onmobile: true,
                hide_under: 778,
                hide_onleave: false,
                hide_delay: 200,
                direction: "vertical",
                span: false,
                position: "inner",
                space: 10,
                h_align: "right",
                v_align: "center",
                h_offset: 30,
                v_offset: 0
            }
        }
    });
}

function callAnnounceToggle() {
    $(".btn-announce").click(function () {
        $(".announcement").toggleClass("open");        // Slides Open or Closes the announcement section on Home Page
    });
}

function callAnnouncement() {
    var announceCarousel = $('.announcement-text');

    $('.announcement .owl-left').click(function () {
        announceCarousel.trigger('prev.owl.carousel');
    });

    $('.announcement .owl-right').click(function () {
        announceCarousel.trigger('next.owl.carousel');
    });

    announceCarousel.owlCarousel({
        items: 1,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500                       // Announcements transition time from one to another in milliseconds
    });
}

function callCountdown(thisTimer) {
    var date = $(thisTimer).attr("data-date");
    $(thisTimer).countdown(date, function (event) {
        $(this).find(".days").html(event.strftime("%D"));              // Days Left
        $(this).find(".hours").html(event.strftime("%H"));             // Hours Left
        $(this).find(".minutes").html(event.strftime("%M"));           // Minutes Left
        $(this).find(".seconds").html(event.strftime("%S"));           // Seconds Left
    });
}

function callTestimonial() {
    var testiCarousel = $('.testimonials');

    $('.owl-left').click(function () {
        testiCarousel.trigger('prev.owl.carousel');
    })

    $('.owl-right').click(function () {
        testiCarousel.trigger('next.owl.carousel');
    })

    testiCarousel.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,                       // Testimonials Carousel transition time from one to another in milliseconds
        autoplayHoverPause: true
    });
}

function callSelectPicker() {
    $('.selectpicker').selectpicker();
}

function callCountTo() {
    $(".fact .count").countTo();
}

function callLogoScroll() {
    $(".logo-scroll").owlCarousel({
        items: 5,
        loop: true,
        margin: 70,
        center: true,
        autoplay: true,
        autoplayTimeout: 2500,                       // Logo Carousel transition time from one to another in milliseconds
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
}

function callTweetScroll() {
    $(".tweets").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6500                      // Tweets transition time from one to another in milliseconds
    });
}

function callAlbumHover(hoverElement) {
    var imgInterval = 750;                          // Change interval between items (in milliseconds)  

    var imgSelect = $(hoverElement).find("img");

    var imgCount = $(imgSelect).length;

    var imgCurrent = 0;

    var infiniteLoop = setInterval(function () {
        $(imgSelect).eq(imgCurrent).hide();

        if (imgCurrent === imgCount - 1) {
            imgCurrent = 0;
        } else {
            imgCurrent++;
        }
        $(imgSelect).eq(imgCurrent).show();
    }, imgInterval);

    $(hoverElement).mouseleave(function () {         // On Mouse Leave, the first Image again shows up
        clearTimeout(infiniteLoop);
        $(this).find("img").hide();
        $(this).find("img").eq(0).show();
    });
}

function callYoutubeVideo(currentVideo) {
    var videoId = $(currentVideo).attr("data-video-id");                                    // Get Video ID from data attributes

    var thumbnail = 'url(https://img.youtube.com/vi/' + videoId + '/sddefault.jpg)';         // Get Thumbail image of the video

    $(currentVideo).css("background-image", thumbnail);                                     // Set thmbnail image as the background

    var videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";    // Framing Video URL from video ID

    $(currentVideo).find(".btn-play").click(function () {                                     // If play button is clicked, load Video within IFrame
        var videoFrame = $('<iframe/>', {
            'frameborder': '0',
            'src': videoUrl,
            'width': $(currentVideo).width(),
            'height': $(currentVideo).height()
        });
        $(currentVideo).replaceWith(videoFrame);                                            // Finally replace the div with IFrame
    });
}
// ************** Smooth Scroll and GO up **************** //

$('.no-line').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,
    });
    $('.header-mobile-wrap').slideUp(500);
    $('.hamburger').removeClass('is-active');
    return false;
});

$('.smooth').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,
    });
    $('.header-mobile-wrap').slideUp(500);
    $('.hamburger').removeClass('is-active');
    return false;
});

$('.scroll-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, {
        duration: 700,
    });
    return false;
});
// ************** End Smooth Scroll and GO up **************** //

// ************NAVBAR SEARCH************//
(function (window, document, $, undefined) {

    $(function () {

        var navSearch = new navbarSearchInput();

        // Open search input
        var $searchOpen = $('[data-search-open]');

        $searchOpen
            .on('click', function (e) { e.stopPropagation(); })
            .on('click', navSearch.toggle);

        // Close search input
        var $searchDismiss = $('[data-search-dismiss]');
        var inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', function (e) { e.stopPropagation(); })
            .on('keyup', function (e) {
                if (e.keyCode == 27) // ESC
                    navSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', navSearch.dismiss);
        // dismissable options
        $searchDismiss
            .on('click', function (e) { e.stopPropagation(); })
            .on('click', navSearch.dismiss);

    });

    var navbarSearchInput = function () {
        var navbarFormSelector = 'form.navbar-form';
        return {
            toggle: function () {

                var navbarForm = $(navbarFormSelector);

                navbarForm.toggleClass('open');

                var isOpen = navbarForm.hasClass('open');

                navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

            },

            dismiss: function () {
                $(navbarFormSelector)
                    .removeClass('open')      // Close control
                    .find('input[type="text"]').blur() // remove focus
                    // .val('')                    // Empty input
                    ;
            }
        };

    }

})(window, document, window.jQuery);

//*****Mobile tooltip script*****//
var elements = document.querySelectorAll('[title]');

if (window.innerWidth < 768) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (e) {
            //Toggle the title message on and off when the element is clicked
            if (this.title != "") {
                //Toggle the data-toggle attribute
                $(this).tooltip('toggle');
            }
        });
    }
}