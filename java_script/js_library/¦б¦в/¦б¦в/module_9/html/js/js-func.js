function mycarousel_initCallback(carousel) {
    $('.slider-nav a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });


};

function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
	$('.slider-nav ul li a').removeClass('active');
	$('.slider-nav ul li a').eq(idx-1).addClass('active');
	
};


$(function(){
	
	if ( $.browser.msie && $.browser.version.substr(0,1) == 6 ) {
		DD_belatedPNG.fix('#navigation a, #navigation a:hover, #navigation a.active, .dd-b, .dd');
	}
	
	$('#navigation > ul > li').hover(function(){
	$(this).find('.dd-holder').show();
	$(this).find('a:eq(0)').addClass('hover');
	},
	function(){
		$(this).find('.dd-holder').hide();
		$(this).find('a:eq(0)').removeClass('hover');
	});

	$('.slider-content ul').jcarousel({
		start: 2,
		auto: 3,
		wrap: "last",
		scroll: 1,
		visible: 1,
		initCallback: mycarousel_initCallback,
		itemFirstInCallback: mycarousel_itemFirstInCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
	});
	
	
	
});


