// create pager list items
var sliderImage = $(".slider__images-image");

sliderImage.each(function (index) {
  $(".js__slider__pagers").append("<li>" + (index + 1) + "</li>");
});


var sliderPagers = "ol.js__slider__pagers li",
  sliderPagersActive = ".js__slider__pagers li.active",
  sliderImages = ".js__slider__images",
  sliderImagesItem = ".slider__images-item",
  sliderControlNext = ".slider__control--next",
  sliderControlPrev = ".slider__control--prev",
  sliderSpeed = 5000,
  lastElem = $(sliderPagers).length - 1,
  sliderTarget;

function checkImageHeight() {
  var sliderHeight = $(".slider__images-image:visible").height();
  $(sliderImages).css("height", sliderHeight + "px");
}

sliderImage.on("load", function () {
  checkImageHeight();
  $(sliderImages).addClass("loaded");
});
$(window).resize(function () {
  checkImageHeight();
});


$(sliderPagers).first().addClass("active");
$(sliderImagesItem).hide().first().show();

function sliderResponse(sliderTarget) {
  $(sliderImagesItem).fadeOut(300).eq(sliderTarget).fadeIn(300);
  $(sliderPagers).removeClass("active").eq(sliderTarget).addClass("active");
}


$(sliderPagers).on("click", function () {
  if (!$(this).hasClass("active")) {
    sliderTarget = $(this).index();
    sliderResponse(sliderTarget);
    resetTiming();
  }
});


$(sliderControlNext).on("click", function () {
  sliderTarget = $(sliderPagersActive).index();
  sliderTarget === lastElem
    ? (sliderTarget = 0)
    : (sliderTarget = sliderTarget + 1);
  sliderResponse(sliderTarget);
  resetTiming();
});
$(sliderControlPrev).on("click", function () {
  sliderTarget = $(sliderPagersActive).index();
  lastElem = $(sliderPagers).length - 1;
  sliderTarget === 0
    ? (sliderTarget = lastElem)
    : (sliderTarget = sliderTarget - 1);
  sliderResponse(sliderTarget);
  resetTiming();
});


function sliderTiming() {
  sliderTarget = $(sliderPagersActive).index();
  sliderTarget === lastElem
    ? (sliderTarget = 0)
    : (sliderTarget = sliderTarget + 1);
  sliderResponse(sliderTarget);
}

var timingRun = setInterval(function () {
  sliderTiming();
}, sliderSpeed);

function resetTiming() {
  clearInterval(timingRun);
  timingRun = setInterval(function () {
    sliderTiming();
  }, sliderSpeed);
}
