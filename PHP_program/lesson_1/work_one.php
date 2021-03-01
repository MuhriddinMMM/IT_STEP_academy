<!DOCTYPE html>
<html>
<body>

<?php

$get=$_GET["id"];
echo "$get <br> ";
$get=$_GET["key"];
echo "$get";

?>

<?php

$lname=$_POST["lname"];
$fname=$_POST["fname"];
echo "$lname <br> $fname";

?>


<form action=""></form>
<button ty ></button>
</body>
</html>



<?php
//number biror raqam
$get=$_POST["number"];
if($get%2==0){
    echo "juft";
}
else{
    echo "toq";
}


?>
<?php

setcookie ("kepka" , "shapka" ,time()+5);
$name=$_COOKIE["kepka"];
echo "$name";

?>


<?php
<a href=""></a>
if (isset($_COOKIE["load"])){
    $razer=$_COOKIE["load"];
    $razer=$razer+1;
    setcookie("load", $razer);
    echo "$razer";
}
else{
    setcookie("load", 1);
}
?>



<!-- index -->
<?php
if(isset($_COOKIE["login"])){
    header("Location: profile.php");    
}
else{
?>

<form method="POST" action="login.php">
<input type="text" name="login">
<input type="password" name="password">
<button>
    registr
</button>

</form>

<?
}
?>


<!-- Log in -->
<?php
$login=$_POST["login"];
$parol=$_POST["password"];
setcookie("login", "$login");
setcookie("password", "$parol");
    header("Location: profile.php"); 
?>

<!-- log out -->
<?
setcookie("login","", time()-3600);
  header("Location: index.php"); 
?>

<!-- profile -->
<?
if(isset($_COOKIE["login"])){
   echo "loginiz: $_COOKIE[login]"; 
   echo "parol: $_COOKIE[password]";
   echo "logout: <a href='logout.php'>LOG_OUT</a>";
}
else{
        header("Location: index.php"); 
}
?>