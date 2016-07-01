$(document).ready(function () {

    var like = $('.share__item_like');
    var dislike = $('.share__item_dislike');
    var shareItem = $('.share__item');

    shareItem.click(function (e) {
        e.preventDefault();
        var self = $(this);

        if (self.hasClass('share__item_like')) {

            self.toggleClass('share__item_liked');
            dislike.removeClass('share__item_disliked');

        }

        if (self.hasClass('share__item_dislike')) {

            dislike.toggleClass('share__item_disliked');
            like.removeClass('share__item_liked');

        }

    });


});
