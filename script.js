   $(window).on('load', function() {
   $('.preloader').fadeOut('slow');
    })

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".MyNav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('nav-transparent').addClass("nav-colored");
        } else {
            header.removeClass("nav-colored").addClass('nav-transparent');
        }
    });
});