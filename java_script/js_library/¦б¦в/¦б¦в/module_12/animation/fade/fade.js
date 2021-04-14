$(document).ready(function(){
    /*Основные переменные*/
    var fadeImg = $('#fade img');
    var btnLeft = $('#left');
    var btnRight = $('#right');
    
    /*Создаем обработчик события клик для уменьшение прозрачности*/
    btnLeft.click(function(){
        /*Считываем состояние прозрачности*/
        var i = Number(fadeImg.css('opacity'));
        /*Проверяем изображение на прозрачность*/
        if(i > 0.0){
            /*Изменяем прозрачность*/
            fadeImg.fadeTo(0, i-0.1, function(){
                console.log(i.toFixed(1));
            }); 
        }
        return false;
    });
    /*Создаем обработчик события клик для увеличения прозрачности*/
    btnRight.click(function(){
        /*Считываем состояние прозрачности*/
        var i = Number(fadeImg.css('opacity'));
        /*Проверяем изображение на прозрачность*/
        if(i != 1.0){
            /*Изменяем прозрачность*/
            fadeImg.fadeTo(0, i+0.1, function(){
                console.log(i.toFixed(1));
            }); 
        }
        return false;
    });
});