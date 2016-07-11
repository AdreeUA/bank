

$(document).ready( function () {

    const $submenu = $('.main-nav__submenu'),
        $menu = $('.main-nav__list'),
        $menuWidth = $menu.width(),
        $menuLeftPos = $menu.offset().left,
        $menuRightPos = $menuLeftPos + $menuWidth;

    $(this).find($submenu).each(function () {
        const $submenuLeftPos = $(this).offset().left,
            $submenuWidth = $(this).width(),
            $submenuRightPos = $submenuLeftPos + $submenuWidth,
            $value = $submenuRightPos - $menuRightPos;

        if ( $value > 0 ) {
            $(this).css('left', -$value - 2);
        }

    });

});
