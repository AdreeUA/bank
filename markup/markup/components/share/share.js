$(document).ready(function () {

    var like = $('.share__item_like');

    like.click(function (e) {
        e.preventDefault();

        like.toggleClass('share__item_liked');

    });

});
