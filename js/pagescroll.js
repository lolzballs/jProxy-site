$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if ($anchor.attr('href') === '#') {
            var offset = 0;
        } else {
            offset = $($anchor.attr('href')).offset().top - 119;
        }
        $('html, body').stop().animate({
            scrollTop: offset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
