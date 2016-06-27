$(document).ready(function () {

    var gridBtnFull = $('.btn-grid-filter__item_grid');
    var gridBtnHalf = $('.btn-grid-filter__item_list');
    var gridItem = $('.news-item');

    gridBtnHalf.click(function (e) {
        e.preventDefault();

        gridItem.addClass('news-item_list');
        gridBtnHalf.addClass('btn-grid-filter__item_active');
        gridBtnFull.removeClass('btn-grid-filter__item_active');

    });

    gridBtnFull.click(function (e) {
        e.preventDefault();

        gridItem.removeClass('news-item_list');
        gridBtnHalf.removeClass('btn-grid-filter__item_active');
        gridBtnFull.addClass('btn-grid-filter__item_active');

    });


});

