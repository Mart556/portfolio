$(function () {
    let lastScrolledY = 0;

    $(window).on('beforeunload', function () {
        $('body').hide();
        $(window).scrollTop(0);
    });


    $(window).bind("scroll", function () {
        $('.fade-in-section').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 500).addClass('animate__fadeInUp');
            }
        })

        if (lastScrolledY > $(this).scrollTop()) {
            let $nav = $('.navbar');
            if ($nav.hasClass('animate__fadeOutUp')) {
                $nav.removeClass('animate__fadeOutUp').addClass('animate__fadeInDown')
            }
        } else {
            let $nav = $('.navbar');
            if (!$nav.hasClass('animate__fadeOutUp')) {
                $nav.addClass('animate__fadeOutUp')
            }
        }

        lastScrolledY = $(this).scrollTop();
    });
})

$('.form-button').click(function () {
    $(this).addClass('animate__animated animate__rubberBand');
    setTimeout(() => {
        $(this).removeClass('animate__rubberBand');
    }, 2000)
})

$('.side-link i').hover(function () {
    $(this).addClass('animate__animated animate__pulse');
    setTimeout(() => {
        $(this).removeClass('animate__pulse');
    }, 2000)
})