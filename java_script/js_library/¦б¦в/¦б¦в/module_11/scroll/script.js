$(function(){
    /*Основные переменные*/
    var range = $('.range');
    var block = $('.block');
    
    /*Создаем событие*/
    range.mousemove(function(){
        /*Изменяем прозрачность блока по движению мыши на ползунке*/
        block.css({
            opacity: $(this).val()/100
        });
    });
});