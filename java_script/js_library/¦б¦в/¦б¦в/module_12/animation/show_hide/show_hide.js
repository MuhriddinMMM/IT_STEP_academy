$(document).ready(function(){
    /*Основные переменные*/
    var blockShow = $("#show");
    var btn = $("#btn");
    
    /*Обработчик нажатия на кнопку*/
    btn.click(function(){
        /*Блокируем кнопку*/
        btn.attr('disabled', true);
        /*Создаем обработчик переключатель показа и скрытия блока*/
        blockShow.toggle(3000, function(){
            /*Провереям статус состояния кнопки*/
            if(btn.attr('data-status') == 'show'){
                btn.html('Show');//Изменяем текст кнопки
                btn.attr('data-status', 'hide');//Изменяем статус кнопки
                btn.attr('disabled', false);//Разблокируем кнопку для нажатия
                /*Провереям статус состояния кнопки*/
            }else if(btn.attr('data-status') == 'hide'){
                btn.html('Hide');//Изменяем текст кнопки
                btn.attr('data-status', 'show');//Изменяем статус кнопки
                btn.attr('disabled', false);//Разблокируем кнопку для нажатия
            }
        }); 
    });
})