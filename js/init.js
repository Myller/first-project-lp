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
});