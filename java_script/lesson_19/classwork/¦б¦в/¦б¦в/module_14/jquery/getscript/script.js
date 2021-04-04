$(function(){
    var btn = $('#btn');
    
    btn.click(function(){
        var path = 'server.js';
        function myCallBack(data){
            console.log('loaded script');
        };
        
        $.getScript(path, myCallBack); 
    });
});