/*Защита от преждевременной загрузки*/
$(function(){
    /*Находим поле с паролем*/
    var password = $('#reg-form').find('input[name=password]');
    
    /*Создаем обработчик события ввода данных в поле*/
    password.on('input', function(){
        /*Запишем текстовое поле в переменную*/
        var value = $(this).val();
        
        /*Проверки состояния ввода*/
        if(value.length <= 5){
            easyPass();
        }
        else if(value.length <= 8){
            mediumPass();
        }
        else if(/[0-9]/.test(value)){
            hardPass();
        }
    });
    
    /*
        каждая из функций создает пять блоков
        в зависимости от сложности пароля, блоки имеют разную фоновую заливку
    */
    
    /*Слабый пароль*/
    function easyPass(){
        /*Удаляем блок, иначе мы получим их очень много, а нам этого не надо*/
        $('.block').remove();
        var passStatus = $('.pass-status');
        
        for(var i = 0; i < 5; i++){
            var block = $('<div>').addClass('block');
            if(i == 4){
                block.css('background-color','red');
            }
            passStatus.append(block);
        }
    }
    
    /*Средний пароль*/
    function mediumPass(){
        $('.block').remove();
        var passStatus = $('.pass-status');
        
        for(var i = 0; i < 5; i++){
            var block = $('<div>').addClass('block');
            if(i >= 2){
                block.css('background-color','yellow');
            }
            passStatus.append(block);
        }
    }
    
    /*Тяжелый пароль*/
    function hardPass(){
        $('.block').remove();
        var passStatus = $('.pass-status');
        
        for(var i = 0; i < 5; i++){
            var block = $('<div>').addClass('block');
            block.css('background-color','green');
            
            passStatus.append(block);
        }
    }
});