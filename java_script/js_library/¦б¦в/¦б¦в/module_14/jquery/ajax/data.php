<?php
    if(isset($_GET['name']) && isset($_GET['surname'])){
        echo "<h1>".$_GET['name'].' '.$_GET['surname']."</h1>";
    }
?>