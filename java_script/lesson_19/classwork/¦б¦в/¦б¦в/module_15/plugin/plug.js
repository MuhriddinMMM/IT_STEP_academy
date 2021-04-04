;(function($){
    var defaults = {color:'green'};
    
    var methods = {
        init:function(params){
            var options = $.extend({}, defaults, params);
            
            return this.click(function(){
                $(this).css('color', options.color); 
            });
        },
        color:function(color){
            $(this).css('color',color);
        },
        reset:function(){
            $(this).css('color', 'black');
        }
    };
    
    $.fn.myPlugin = function(method){
        
        if(methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }else if(typeof method === 'object' || !method){
            console.log(this);
            return methods.init.apply(this, arguments);
        }else{
            $.error('Method - ' + method + "not found!");
        }
    }
    
})(jQuery);

