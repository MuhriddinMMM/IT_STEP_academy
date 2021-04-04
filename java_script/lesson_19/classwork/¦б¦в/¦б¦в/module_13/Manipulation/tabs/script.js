$(function(){
    /*Основные переменные*/
    var tabs = $('.tabs').find('li a');//Переключатели
    var section = $('#tab-content').find('section');//Секции контента
    var content = $('#tab-content');//Блок контента
    
    /*Создаем обработчик события клик - наши переключатели*/
    tabs.click(function(e){
        /*Отменяем стандартное событие*/
        e.preventDefault();
        
        /*Номер кликнутого таба*/
        var tab = $(this).data('tab');
        
        /*Изменяем активный таб*/
        $('.tabs li').children('.active').removeClass('active');
        content.children('.on').removeClass('on').addClass('off');
        
        /*Активируем таб*/
        $(this).toggleClass('active');
        /*
            Метод .eq(number)
            Возвращает элемент по индексу из выборки
        */
        section.eq(tab).removeClass('off').addClass('on');
    });
});