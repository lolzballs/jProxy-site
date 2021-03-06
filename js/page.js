// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if ($anchor.attr('href') === '#') {
            var offset = 0;
        } else {
            offset = $($anchor.attr('href')).offset().top;
        }
        $('html, body').stop().animate({
            scrollTop: offset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
