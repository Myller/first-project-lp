$(function () {
    // Init tabs
    $("#tabs" ).tabs();
    $("#portfolio").tabs();

    // init slick carousel
    $('.reviews-carousel').slick({
        dots: true,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div></div>',
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div></div>',
    });

    // Slick nav
    $('.header-nav').slicknav({
        appendTo: '.header .container-fluid',
        label: ''
    });

    // LightBox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
    //Paralax
    $('.parallax-window').parallax({imageSrc: 'img/inner-bg.jpg'});
});