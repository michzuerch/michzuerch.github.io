$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /* mouse wheel navigation */
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    /*keyboard navigation*/
    $(document.documentElement).keyup(function (event) {
        if (event.keyCode == 37) {
            /*left key*/
            owl.trigger('prev.owl.carousel', [700]);
        } else if (event.keyCode == 39) {
            /*right key*/
            owl.trigger('next.owl.carousel', [700]);
        }
    });
});