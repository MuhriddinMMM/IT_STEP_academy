<?php
    if(isset($_GET['name']) && isset($_GET['surname'])){
        $mas = [
            'nameServer' => $_GET['name'],
            'surnameServer' => $_GET['surname']
        ];
        echo json_encode($mas);
    }
?>