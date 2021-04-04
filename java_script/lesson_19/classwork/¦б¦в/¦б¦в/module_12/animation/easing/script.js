$(document).ready(function(){
    var btn = $("#btn");
    var block = $("#block");
    
    btn.click(function(){
        var currentHeight = block.css('height');
        block.animate({
            height: '10px'
        }, 1000, 'easeOutBounce').animate({
            height: currentHeight
        }); 
    });
});