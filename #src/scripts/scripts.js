// Preloader
$(window).on('load', function() {
    $('.preloader-inner').fadeOut('slow');
    $('.preloader').delay(400).fadeOut('slow');
});

// Back to top button
let backtop = $('#backtop');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        backtop.addClass('backtop-active');
    } else {
        backtop.removeClass('backtop-active');
    }
    });
    backtop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Smooth scrolling to the anchor on a menu click
$('#navbarSupportedContent').on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

// Statistics animation
function countup(className) {
    let countBlockTop = $('.' + className).offset().top;
    let windowHeight = window.innerHeight;
    let show = true;
    $(window).on('scroll', function () {
        if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
            show = false;
            
            $('.' + className).spincrement({
                from: 1,
                duration: 2000
            });
        }
    })
}
$(function () {
    countup('stats__num', $('.stats__num').text());
});

// Carousel options
$('#carousel1').carousel({
    interval: 3000
});

$('#carousel2').carousel({
    interval: 3000
});

svg4everybody();
