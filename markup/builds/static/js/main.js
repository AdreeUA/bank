'use strict';

$(function () {
    var $basket = $('.js-basket');

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 210) {
            $basket.addClass('basket_fixed');
        } else {
            $basket.removeClass('basket_fixed');
        }
    });
});
'use strict';

$(document).ready(function () {

    $('.js-slider-birthday').slick({
        autoplay: true,
        autoplaySpeed: 3000
    });
});
'use strict';

$(document).ready(function () {

    var btnFollow = $('.btn-follow');

    btnFollow.click(function (e) {

        e.preventDefault();

        btnFollow.toggleClass('btn-follow_followed');

        if (btnFollow.hasClass('btn-follow_followed')) {

            btnFollow.html('Отписаться');
        } else {

            btnFollow.html('Подписаться');
        }
    });
});
'use strict';

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
'use strict';

$(document).ready(function () {

    $('.js-categories').select2();

    $('.js-categories-structure').select2({
        placeholder: ' Подразделение '
    });
});
'use strict';

$(document).ready(function () {

    $('.js-date-filter-slider').slick({

        infinite: false

    });

    var btn = $('.date-filter__btn');
    var calendar = $('.date-filter__inner');

    btn.click(function () {
        calendar.toggleClass('date-filter__inner_open');
    });

    $(document).mouseup(function (e) {

        if (!btn.is(e.target) && !calendar.is(e.target) && calendar.has(e.target).length === 0 && btn.has(e.target).length === 0) {
            calendar.removeClass('date-filter__inner_open');
        }
    });
});
'use strict';

// Кнопка для плавного прокручивания ВВЕРХ

$(document).ready(function () {
    $('.js-btn-up').on('click', function (event) {
        // отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        // анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
    });
});
'use strict';

$('.grid').packery({
    // options
    itemSelector: '.grid__item',
    gutter: 8
});
'use strict';

//
//
// $(document).ready( function () {
//
//     const $submenu = $('.main-nav__submenu'),
//         $menu = $('.main-nav__list'),
//         $menuWidth = $menu.width(),
//         $menuLeftPos = $menu.offset().left,
//         $menuRightPos = $menuLeftPos + $menuWidth;
//
//     $(this).find($submenu).each(function () {
//         const $submenuLeftPos = $(this).offset().left,
//             $submenuWidth = $(this).width(),
//             $submenuRightPos = $submenuLeftPos + $submenuWidth,
//             $value = $submenuRightPos - $menuRightPos;
//
//         if ( $value > 0 ) {
//             $(this).css('left', -$value - 2);
//         }
//
//     });
//
// });

$(document).ready(function () {

    var $submenu = $('.main-nav__submenu'),
        $menu = $('.main-nav__list'),
        $menuWidth = $menu.width(),
        $menuLeftPos = $menu.offset().left,
        $menuRightPos = $menuLeftPos + $menuWidth;

    $(this).find($submenu).each(function () {
        var $submenuLeftPos = $(this).offset().left,
            $submenuWidth = $(this).children().width(),
            $submenuRightPos = $submenuLeftPos + $submenuWidth,
            $value = $submenuRightPos - $menuRightPos;

        console.log($(this).children().width());

        if ($value > 0) {
            $(this).css('left', -$value - 2);
        }
    });
});
'use strict';

$(document).ready(function () {

    $('.js-news-bank').slick({
        // arrows: false
    });
});
'use strict';

$(document).ready(function () {

    var btn = $('.js-idea-btn');
    var sendIdeaWrap = $('.send-idea');

    btn.click(function () {
        sendIdeaWrap.toggleClass('send-idea_active');
    });

    $(document).mouseup(function (e) {

        if (!btn.is(e.target) && !sendIdeaWrap.is(e.target) && sendIdeaWrap.has(e.target).length === 0 && btn.has(e.target).length === 0) {
            sendIdeaWrap.removeClass('send-idea_active');
        }
    });
});
'use strict';

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
'use strict';

$(document).ready(function () {

    $('.js-slider-large').slick({
        arrows: true,
        dots: true
    });
});
'use strict';

$(document).ready(function () {

    $('.js-slider-small').slick({
        // arrows: false
    });
});
'use strict';

$(document).ready(function () {

    var $iconPlus = $('.structure-box__icon');
    var $tree = $('.structure-box');
    var $item = $('.structure-box__item');
    var $link = $('.structure-box__link_active');

    $(this).find($iconPlus).each(function () {

        if ($(this).hasClass('structure-box__icon_active')) {

            $(this).parent($tree).addClass('structure-box_active');
            // $(this).parents($item).addClass('structure-box__item_active');
        }

        $(this).click(function (e) {

            e.preventDefault();

            $(this).toggleClass('structure-box__icon_active');
            // $(this).parent($item).removeClass('structure-box__item_active');

            if ($(this).hasClass('structure-box__icon_active')) {

                $(this).siblings($tree).addClass('structure-box_active');
            } else {

                $(this).siblings($tree).removeClass('structure-box_active');
            }
        });
    });
    //
    // if ($link.length > 0) {
    //     $item.map(function (indx, element) {
    //         return $(element)
    //             .has($link)
    //             .addClass('structure-box__item_active')
    //             .parent($tree)
    //             .addClass('structure-box_active')
    //             .children($iconPlus);
    //             // .addClass('structure-box__icon_active');
    //     });
    // }

});

// var currentDepart = $(".structure-box__link[data-depart_id='" + curDepartId +"']");
//
// function temp(el) {
//     var $parent= el.parent();
//     if ($parent.has('.structure-box__icon')) {
//
//     }
// }
// currentDepart.parent();
//
// if(currentDepart.length > 0) {
//     $(currentDepart).addClass("current_depart");
//
//     var mustClick =[];
//     $(currentDepart.parents(".structure-box")).each(function(pIndex){
//         if(!$(this).hasClass("company-name"))
//         {
//             $(this).find(".structure-box__icon").trigger("click");
//         }
//
//         console.info($(this).find(".structure-box__icon"));
//         //mustClick.push( $(this).find(".structure-box__icon"));
//
//     });
//
//     if(mustClick.length > 0)
//         for(var i= mustClick.length; i >= 0; i --)
//         {
//             //$(mustClick[i]).trigger("click");
//         }
// }