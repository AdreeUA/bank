

$(document).ready( function () {

    var $plus = $('.menu-left__plus');

    $(this).find($plus).each(function () {

        $(this).click(function (e) {

            e.preventDefault();

            $(this).toggleClass('menu-left__plus_active');

            if ($(this).hasClass('menu-left__plus_active')) {

                $(this).siblings('ul').attr('style', 'display:none').slideDown(300);

            } else {

                $(this).siblings('ul').attr('style', 'display:block').slideUp(300);

            }

        });

    });


});
