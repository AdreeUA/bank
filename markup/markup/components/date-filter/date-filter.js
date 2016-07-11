$(document).ready(function () {

    $('.js-date-filter-slider').slick({

        infinite: false

    });

    const btn = $('.date-filter__btn');
    const calendar = $('.date-filter__inner');

    btn.click(function () {
        calendar.toggleClass('date-filter__inner_open');
    });

    $(document).mouseup(function (e) {

        if (!btn.is(e.target) && !calendar.is(e.target) && calendar.has(e.target).length === 0 && btn.has(e.target).length === 0) {
            calendar.removeClass('date-filter__inner_open');
        }

    });

});
