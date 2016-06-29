

$(document).ready( function () {

    // var $leftSubmenu = $('.menu-left__submenu-3lvl-wrap'),
    //     // $menu = $('.main-nav__list'),
    //     $windowHeight = $(document).height(),
    //     $windowTopPos = $('body').offset().top,
    //     $windowBottomPos = $windowTopPos + $windowHeight;
    //
    // // console.log($windowHeight);
    //
    // $(this).find($leftSubmenu).each(function () {
    //     var $submenuTopPos = $(this).offset().top,
    //         $submenuHeight = $(this).height(),
    //         $submenuBottomPos = $submenuTopPos + $submenuHeight,
    //         $value = $submenuBottomPos - $windowBottomPos;
    //
    //     console.log($submenuTopPos);
    //
    //     // if ( $value > 0 ) {
    //     //     $(this).css('left', -$value);
    //     // }
    //
    // });

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
