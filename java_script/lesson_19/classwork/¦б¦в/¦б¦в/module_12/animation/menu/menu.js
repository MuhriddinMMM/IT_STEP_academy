$(document).ready(function(){
    /*Объявляем переменные, обратите внимания их достаточно много*/
    var bars = $("#bars");
    var logo = $(".logo");
    var logoTitle = logo.find('a');
    var aside = $("#aside");
    var title = $('.aside-title');
    var li = $(".aside-nav").find('li');
    var asideNav = $(".aside-nav").find('li a');
    
    /*Создаем обработчик события клик на наш статус бар*/
    bars.on('click', function(){
        /*Считываем состояние бара*/
        var status = bars.attr('data-status');
        
        /*Проверяем состояние, если меню раскрыто*/
        if(status == 'show'){
            /*Уменьшаем ширину сайд бара до 40px*/
            aside.animate({
                width: '40px'  
            });
            /*Уменьшаем ширину логотипа до 80px*/
            logo.animate({
                width: '80px' 
            });
            /*Сменим на короткий текст логотип, взятого из атрибута data-logo-swap*/
            logoTitle.html(logoTitle.data('logo-swap'));
            
            asideNav.hide();//Спрячем текст в меню
            title.hide();//Спрячем текст "Навигация"
            bars.attr('data-status', 'hide');//Изменим состояние бара на скрыто
        }
        /*Если меню скрыто*/
        else if(status == 'hide'){
            /*Увеличиваем ширину сайд бара до 200px*/
            aside.animate({
                width: '200px'  
            });
            /*Увеличиваем ширину логотипа до 240px*/
            logo.animate({
                width: '240px' 
            });
            
            /*Создаем задержку выполнения кода, для того чтобы избавиться от лагов анимации*/
            setTimeout(function(){
                /*Возвращаем текст логотипа, используя атрибут data-logo*/
                logoTitle.html(logoTitle.data('logo'));
            }, 300);
            
            
            asideNav.show();//Показываем текст меню
            title.show();//Показываем заголовок "Навигация"
            bars.attr('data-status', 'show');//Изменим состояние бара на раскрыто
        }
        
    });
    
    /*
        Далее мы хотим добиться появления текста меню при наведении мыши на иконки, когда меню скрыто
        Создаем обработчик наведения мыши
    */
    li.mouseover(function(){
        /*
            Так как состояние #aside в css = overflow: 'hidden'(47строчка в style.css)
            Все что выйдит за приделы #aside будет скрыто, поэтому мы меняем css свойтво overflow 
        */
        aside.css({
            overflow: 'visible'    
        });
        /*Показываем текст*/
        asideNav.show();
    });
    
    /*
        При потери фокуса списков меню нужно вернуть в прежнее состояние overflow
        Иначе список будет активным постоянно
    */
    li.mouseleave(function(){
        /*Возвращаем состояние overflow*/
        aside.css({
            overflow: 'hidden'    
        });
    });
});