$(function(){

    $.ajax({
        url: 'data.json',
        success: function(data){
            console.log(data);
        },
        error: function(data){

        },
        complete: function(){

        }
    });
    
});