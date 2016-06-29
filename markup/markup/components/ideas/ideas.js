$(document).ready(function () {

    var btnIdeas = $('.js-ideas-btn');
    var ideasWrap = $('.ideas__inner');

    btnIdeas.click(function (e) {
        e.preventDefault();

        ideasWrap.toggleClass('ideas__inner_open');
    });

    $(document).mouseup(function (e) {

        if (!btnIdeas.is(e.target) && !ideasWrap.is(e.target) && ideasWrap.has(e.target).length === 0 && btnIdeas.has(e.target).length === 0) {
            ideasWrap.removeClass('ideas__inner_open');
        }

    });

});


