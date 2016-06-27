$(document).ready(function () {

    var btnFollow = $('.btn-follow');


    btnFollow.click(function (e) {

        e.preventDefault();

        btnFollow.toggleClass('btn-follow_followed');

        if ( btnFollow.hasClass('btn-follow_followed')) {

            btnFollow.html('Отписаться');
            // btnFollow.removeClass('btn-follow_followed')


        } else {

            btnFollow.html('Подписаться');
            // btnFollow.addClass('btn-follow_followed')
        }

    });

});
