$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        var path = 'data.php';
        var data = {
            name: 'Vasiy',
            surname: 'Pupkin'
        };
        function myCallBack(data){
            result.html(data.nameServer + ' ' + data.surnameServer);
        };
        
        $.getJSON(path, data, myCallBack); 
    });
});