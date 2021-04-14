;(function($){
    
    $.fn.colorRed = function(){
        //console.log(this);
        
        return this.css({color:'red'});
    }
    
    $.fn.maxHeight = function(){
        var max = 0;
        
        return this.each(function(){
             max = Math.max(max, $(this).height());
        });
    }
    
    $.fn.lockDim = function(type){
        return this.each(function(){
            var $this = $(this);
            
            if(!type || type == 'width'){
                $this.width($this.width());
            }
            if(!type || type == 'height'){
                $this.height($this.height());
            }
        });
    }
    
    $.fn.tooltip = function(params){
        
        var defaults = {color: 'red'}
        
        var settings = $.extend({}, defaults, params);
        
        return this.each(function(){
            $(this).css({color: settings.color})
        });
    }
    
    var defaults = {'color': green};
    
    var methods = {
        init:function(params){
            var options = $.extend({}, defaults, params);
        }
    }
    
    $.fn.clickChangeColor = function(method){
        
    }
    
})(jQuery);

