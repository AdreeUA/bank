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
