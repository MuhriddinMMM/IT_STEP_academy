// Array

// List 

// Stack

// Queue

// Tree

// Set

// Map


let setStr = new Set();


setStr.add(1);
setStr.add(5);
setStr.add(3);
setStr.add(4);
setStr.add(5);
setStr.add(3);







//Задание

//Есть произвольный текст, посчитайте сколько раз встречается каждое слово в данном тексте

let str = `Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений и учебных текстов. Для этого созданы другие замечательные учебники.

У этой книги совсем иная задача. Она поможет вам научиться не только разговаривать, но и размышлять по-русски. Книга, которую вы держите в руках, составлена из афоризмов и размышлений великих мыслителей, писателей, поэтов, философов и общественных деятелей различных эпох. Их мысли - о тех вопросах, которые не перестают волновать человечество.

Вы можете соглашаться или не соглашаться с тем, что прочитаете в этой книге. Возможно, вам покажется, что какие-то мысли уже устарели. Но вы должны обязательно подумать и обосновать, почему вы так считаете.

А еще вы узнаете и почувствуете, как прекрасно звучат слова любви, сострадания, мудрости и доброты на русском языке.`

// let mapStr = new Map();

// let array = str.split(/[ ,\.\n]/).filter(el => el.length != 0);


// for (let i = 0; i < array.length; i++) {

//     if (mapStr.get(array[i]))
//         mapStr.set(array[i], mapStr.get(array[i]) + 1)
//     else
//         mapStr.set(array[i], 1)

// }



let array = [10, 2, 3, 4, 5, 6, 7, 8];


//map

// function pow(element, num) {
//     return element ** num;
// }

// console.log(array);

// // array = array.map(function (element) {
// //     return pow(element, 3);
// // })

// console.log(array);

//filter


// console.log(array);

// array = array.filter(el => {

//     return el % 2 !== 0;
// })

// console.log(array);

//reduce

// console.log(array);

// let num = array.reduce((accumulate, elem) => {
//     console.log(accumulate);
//     return accumulate + elem;
// })

// console.log(num)

// let place = document.querySelector(".slider__images")

fetch("https://api.sampleapis.com/wines/reds")
    .then(data => data.json())
    .then(data => {
        data.forEach(element => {

            let li = document.createElement("li");

            li.className = "slider__images-item";
            let img = document.createElement("img");

            img.className = "slider__images-image";
            img.src = element.image


            li.append(img);
            console.log(li);
            place.append(li)
        });


        // create pager list items
        var sliderImage = $('.slider__images-image');

        sliderImage.each(function (index) {
            $('.js__slider__pagers').append('<li>' + (index + 1) + '</li>');
        });

        // set up vars
        var sliderPagers = 'ol.js__slider__pagers li',
            sliderPagersActive = '.js__slider__pagers li.active',
            sliderImages = '.js__slider__images',
            sliderImagesItem = '.slider__images-item',
            sliderControlNext = '.slider__control--next',
            sliderControlPrev = '.slider__control--prev',
            sliderSpeed = 5000,
            lastElem = $(sliderPagers).length - 1,
            sliderTarget;

        // add css heigt to slider images list
        function checkImageHeight() {
            var sliderHeight = $('.slider__images-image:visible').height();
            $(sliderImages).css('height', sliderHeight + 'px');
        };

        sliderImage.on('load', function () {
            checkImageHeight();
            $(sliderImages).addClass('loaded')
        });
        $(window).resize(function () {
            checkImageHeight();
        });

        // set up first slide
        $(sliderPagers).first().addClass('active');
        $(sliderImagesItem).hide().first().show();

        // transition function
        function sliderResponse(sliderTarget) {
            $(sliderImagesItem).fadeOut(300).eq(sliderTarget).fadeIn(300);
            $(sliderPagers).removeClass('active').eq(sliderTarget).addClass('active');
        }

        // pager controls
        $(sliderPagers).on('click', function () {
            if (!$(this).hasClass('active')) {
                sliderTarget = $(this).index();
                sliderResponse(sliderTarget);
                resetTiming();
            }
        });

        // next/prev controls
        $(sliderControlNext).on('click', function () {
            sliderTarget = $(sliderPagersActive).index();
            sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
            sliderResponse(sliderTarget);
            resetTiming();
        });
        $(sliderControlPrev).on('click', function () {
            sliderTarget = $(sliderPagersActive).index();
            lastElem = $(sliderPagers).length - 1;
            sliderTarget === 0 ? sliderTarget = lastElem : sliderTarget = sliderTarget - 1;
            sliderResponse(sliderTarget);
            resetTiming();
        });

        // slider timing
        function sliderTiming() {
            sliderTarget = $(sliderPagersActive).index();
            sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
            sliderResponse(sliderTarget);
        }

        // slider autoplay
        var timingRun = setInterval(function () {
            sliderTiming();
        }, sliderSpeed);

        function resetTiming() {
            clearInterval(timingRun);
            timingRun = setInterval(function () {
                sliderTiming();
            }, sliderSpeed);
        }
    })




let li = document.createElement("li");

li.className = "slider__images-item";
let img = document.createElement("img");

img.className = "slider__images-image";
img.src = "https://unsplash.it/800/450?image=830"


li.append(img);
console.log(li);
place.append(li)

