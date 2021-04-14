$(function(){
    /*Основные переменные*/
    var myForm = $('#myForm');
    var firstName = myForm.find('input[name=first-name]');
    var lastName = myForm.find('input[name=last-name]');
    var gender = myForm.find('select[name=gender]');
    var btnSend = myForm.find('button[name=submit]');
    var loader = $('<p>').addClass('loader').html('Идет загрузка...');
    
    /*Создаем событие выбор из списка*/
    gender.change(function(){
        var value = $(this).val();
        
        if(value == 0){
            gender.nextAll('select').remove();
            return false; 
        }
        
        $.ajax({
            type: 'POST',
            url: 'data.php',
            dataType: 'json',
            data: {id: value},
            beforeSend: function(){
                gender.nextAll('select').remove();
                gender.after(loader);    
            },
            success: function(data){
                gender.parent().after(createSelect(data, 'national', 'Выберите национальность'));
            },
            error: function(e){
                console.error(e);
            },
            complete: function(){
                loader.remove();  
            }
        });
    });
    
    $(document).on('change', 'select[name=national]', function(){
        var nat = myForm.find('select[name=national]');
        var value = $(this).val();
        
        if(value == 0){
            nat.nextAll('select').remove();
            return false;
        }
        
        $.ajax({
            type: 'POST',
            url: 'json/side.json',
            //dataType: 'json',
            beforeSend: function(){
                nat.nextAll('select').remove();
                nat.after(loader);
            },
            success: function(data){
                nat.after(createSelect(data, 'side', 'Выберите сторону'));
            },
            error: function(e){
                console.error(e.error());
            },
            complete: function(){
                loader.remove(); 
            }
        });
        
    });
    
    function createSelect(data, name, title){
        data = data || {};
        name = name || 'select';
        title = title || 'Title';
        
        var select = $('<select>')
            .attr('name', name)
            .addClass('form-control');
        
        var option = $('<option>').val(0).html(title);
        select.append(option);
        
        var i = 1;
        
        for(key in data){
            var option = $('<option>')
                .val(i++)
                .html(data[key]); 
            
            select.append(option);
        }
        return select;
    }
    
    $(document).on('click', 'button[name=submit]', function(e){
        e.preventDefault();
        
        var test = myForm.find('.form-group').children();
        console.log(test);
        
        test.each(function(index, value){
            if(!$(this).is('button')){
                if($(this).is('input')){
                    if($(this).val() == ''){
                        $(this).parent().addClass('has-error');
                    }
                }
            }
        });
    });  
    
});