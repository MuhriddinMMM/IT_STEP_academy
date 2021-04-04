$(document).ready(function(){
    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    var pageUp = $('#page-up'); 
    
    /*Создаем обработчик события скрола страницы*/
    $(window).scroll(function(){
        /*Проверяем на сколько прокрутили страницу вниз*/
        if($(this).scrollTop() > top_show) pageUp.fadeIn('fast')//Показываем стрелку
        else pageUp.fadeOut('fast');//Прячем стрелку
    });
    
    /*Создаем обработчик события клик на стрелке*/
    pageUp.click(function(){
        /*Анимируем скроллинг страницы вверх*/
        $('body', 'html').animate({
            scrollTop: 0
        }, delay);
    });
});