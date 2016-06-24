$(document).ready(function () {

    var gridFull = $('#gridFull');
    var gridHalf = $('#gridHalf');
    var gridItem = $('.news-item');

    gridFull.click(function (e) {
        e.preventDefault();

        gridItem.toggleClass('news-item_full');
    });

    gridHalf.click(function (e) {
        e.preventDefault();

        gridItem.removeClass('news-item_full');
    });


});

