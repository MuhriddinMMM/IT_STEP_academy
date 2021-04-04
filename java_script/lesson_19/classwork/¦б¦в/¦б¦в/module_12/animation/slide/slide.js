$(document).ready(function(){
    /*Основные переменные*/
    var spinner = $('.spinner');
    var center = $('#slide center');
    
    /*Создаем обработчик события клик*/
    spinner.click(function(){
        /*Создаем обработчик события переключател Slide*/
        center.slideToggle('slow', function(){
            /*Проверяем состояние атрибута data-status*/
           if(spinner.attr('data-status') == 'up'){
               spinner.html('&#9660;');//Изменяем треугольник
               spinner.attr('data-status', 'down')//Изменяем статус
               /*Проверяем состояние атрибута data-status*/
           }else if(spinner.attr('data-status') == 'down'){
               spinner.html('&#9650;');//Изменяем треугольник
               spinner.attr('data-status', 'up')//Изменяем статус
           }
       }); 
    });
});