$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        var path = 'data.php';
        var data = {
            name: 'Vasiy',
            surname: 'Pupkin'
        };
        var dataType = 'html'
        function myCallBack(data){
            result.html(data);
        };
        
        $.get(path, data, myCallBack, dataType); 
    });
});