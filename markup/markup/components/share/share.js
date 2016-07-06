$(document).ready(function () {

    var like = $('.share__link_like');
    var dislike = $('.share__link_dislike');
    var shareItem = $('.share__link');

    shareItem.click(function (e) {
        e.preventDefault();
        var self = $(this);

        if (self.hasClass('share__link_like')) {

            self.toggleClass('share__link_liked');

        }

        if (self.hasClass('share__link_dislike')) {

            self.toggleClass('share__link_disliked');

        }

    });


});
