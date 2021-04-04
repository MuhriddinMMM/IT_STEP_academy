/*Основные переменные*/
var slideWidth=600;//Ширина слайдера
var sliderTimer;//Таймер

$(function(){
    /*Создаем подложку шириной равной ширине всех изображений * на ширину слайдера*/
    $('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    
    /*Листаем слайд*/
    sliderTimer=setInterval(nextSlide,3000);
    /*Если указатель мыши находиться на изображении*/
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);//Отключаем прокрутку
    },function(){//Если указатель мыши находится вне изображения
        sliderTimer=setInterval(nextSlide,3000);//Включаем прокрутку
    });
    /*Создаем обработчик клика - стрелки вперед*/
    $('#next_slide').click(function(e){
        /*Отменяем событие по умолчанию*/
        e.preventDefault();
        /*Отчищаем интервал*/
        clearInterval(sliderTimer);
        /*Листаем дальше*/
        nextSlide();
        /*Создаем интервал*/
        sliderTimer=setInterval(nextSlide,3000);
    });
    /*Создаем обработчик клика - стрелки назад*/
    $('#prev_slide').click(function(e){
        /*Отменяем событие по умолчанию*/
        e.preventDefault();
        /*Отчищаем интервал*/
        clearInterval(sliderTimer);
        /*Листаем назад*/
        prevSlide();
        /*Создаем интервал*/
        sliderTimer=setInterval(nextSlide,3000);
    });
    console.log($('.slidewrapper').children().size());
});

/*Функция пролистывания вперед*/
function nextSlide(){
    /*Текущий слайд*/
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    
    /*Счетчик для слайдов*/
    currentSlide++;
    /*
        Проверяем на каком слайде мы сейчас находимся
        Если это последний слайд, то начитаем сначала    
    */
    if(currentSlide >= $('.slidewrapper').children().size())
    {
        currentSlide=0;//Обнуляем счетчик
    }
    /*Создаем анимацию пролистывания*/
    $('.slidewrapper').animate({
        left: -currentSlide*slideWidth
    },300).data('current',currentSlide);//Не забываем записывать изменения счетчика
}

/*Функция пролистывания назад*/
function prevSlide(){
    /*Текущий слайд*/
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    /*Счетчик для слайдов*/
    currentSlide--;
    /*
        Проверяем на каком слайде мы сейчас находимся
        Если мы находимся на первом слайде и листаем назад, скрипт должен показать последний слайд
    */
    if(currentSlide < 0)
    {
        currentSlide=$('.slidewrapper').children().size()-1;   
    }
    /*Создаем анимацию пролистывания*/
    $('.slidewrapper').animate({
        left: -currentSlide*slideWidth
    },300).data('current',currentSlide);//Не забываем записывать изменения счетчика
}