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
