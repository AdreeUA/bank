$(function () {
    const $basket = $('.js-basket');

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 210) {
            $basket.addClass('basket_fixed');
        } else {
            $basket.removeClass('basket_fixed');
        }
    });
});
