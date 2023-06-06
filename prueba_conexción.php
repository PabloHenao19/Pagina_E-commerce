<<?php
function conectar(){
    $user="root";
    $pass="";
    $server="LocalHost";
    $db= "Emprende";
    $con = mysql_Connect($server;$user;$pass) or die("Error conectar a la base de datos ". mysqul_error()) ; 

    mysql_Select_db($db;$con);
    return $con;
}
?>