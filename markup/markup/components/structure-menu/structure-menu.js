$(document).ready( function () {

    var $iconPlus = $('.structure-box__icon');
    var $tree = $('.structure-box');

    $(this).find($iconPlus).each(function () {

        $(this).click(function (e) {

            e.preventDefault();

            $(this).toggleClass('structure-box__icon_active');

            if ($(this).hasClass('structure-box__icon_active')) {

                $(this).siblings($tree).toggleClass('structure-box_active');

            } else {

                $(this).siblings($tree).toggleClass('structure-box_active');

            }

        });

    });


});
