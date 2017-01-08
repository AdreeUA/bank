$(document).ready( function () {

    const $iconPlus = $('.structure-box__icon');
    const $tree = $('.structure-box');
    const $item = $('.structure-box__item');
    const $link = $('.structure-box__link_active');

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
