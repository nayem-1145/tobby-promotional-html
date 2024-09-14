(function($){


    //testionial slider js
    $(".tbp_testimonial_slider").slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



})(jQuery)