$(document).ready(function () {

    //    slick slider
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        preview: true,
        //vertical: true,
        nextArrow: ".slidNext",
        prevArrow: '.slidPrv',
        swipe: true,
        //cssEase: 'ease',
        easing: 'linear',

    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });

    $('.center2').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });

    //    our client part 
    $('.center3').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });

});
