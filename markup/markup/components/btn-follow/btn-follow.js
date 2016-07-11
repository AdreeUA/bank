$(document).ready(function () {

    const btnFollow = $('.btn-follow');

    btnFollow.click(function (e) {

        e.preventDefault();

        btnFollow.toggleClass('btn-follow_followed');

        if ( btnFollow.hasClass('btn-follow_followed')) {

            btnFollow.html('Отписаться');

        } else {

            btnFollow.html('Подписаться');
        }

    });

});
