<?php
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    //$obj = json_decode(implode("", file('php://input')));
    //$name = $obj->name;    
    //$name = $_POST['name'];
    //$surname = $_POST['surname'];
    // Если к нам идёт Ajax запрос, то ловим его
       // echo 'Это ajax запрос!'.$param;
        echo $name;
        exit;
    }
    //Если это не ajax запрос
    header('Location: http://localhost/ajax', true, 404);
    echo 'Это не ajax запрос!';
?>