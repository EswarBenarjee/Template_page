$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $("#home").offset().top - 100) {
        $("#fix-top").addClass("fixed-top");
    }
});

$(window).bind('scroll', function() {
    if($(window).scrollTop() < $("#home").offset().top) {
        $("#fix-top").removeClass("fixed-top");
    }
});
