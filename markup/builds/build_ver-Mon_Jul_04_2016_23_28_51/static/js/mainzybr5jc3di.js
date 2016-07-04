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
            // btnFollow.removeClass('btn-follow_followed')
        } else {

                btnFollow.html('Подписаться');
                // btnFollow.addClass('btn-follow_followed')
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
        // allowClear: true,
        // tags: true,
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

$('.grid').packery({
    // options
    itemSelector: '.grid__item',
    gutter: 8
});
'use strict';

console.log('q');
'use strict';

$(document).ready(function () {

    var $submenu = $('.main-nav__submenu'),
        $menu = $('.main-nav__list'),
        $menuWidth = $menu.width(),
        $menuLeftPos = $menu.offset().left,
        $menuRightPos = $menuLeftPos + $menuWidth;

    $(this).find($submenu).each(function () {
        var $submenuLeftPos = $(this).offset().left,
            $submenuWidth = $(this).width(),
            $submenuRightPos = $submenuLeftPos + $submenuWidth,
            $value = $submenuRightPos - $menuRightPos;

        if ($value > 0) {
            $(this).css('left', -$value - 2);
        }
    });
});
'use strict';

$(document).ready(function () {

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
'use strict';

$(document).ready(function () {
    console.log('q');

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