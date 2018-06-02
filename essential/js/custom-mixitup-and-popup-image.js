//magnific up js
$(document).ready(function () {
    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    //    mix it up
    var container1 = document.querySelector('.galleryPart');
    var mixer = mixitup(container1);
});
