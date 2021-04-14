$(function(){
    var btn = $('#btn');
    var result = $('#result');
    
    btn.click(function(){
        result.load('data.php', {id:18}, function(){
            console.log('success');
        });  
    });
})