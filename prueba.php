<?php

$conexion = mysqli_connect("localhost", "root", "", "tienda" ); or die (mysql_error($mysqli));

Insertar($conexion)

function Insertar($conexion){
    $Nombre=$_POST ['Nombre'];
    $Apellido=$_POST['Apellido'];
    $Fecha_Nacimiento=$_POST['Fecha_Nacimiento'];
    $Dirección=$_POST['Dirección'];
    $Correo=$_POST['Correo'];
    $Teléfono=$_POST['Teléfono'];
    $Contraseña=$_POST['Contraseña'];
    
    
    $Consulta = "INSERT INTO clientes (Nombre, Apellido, Fecha_Nacimiento,  Dirección, Correo, Teléfono, Contraseña, )
    VALUES ('$Nombre', '$Apellido', '$Fecha_Nacimiento', '$Dirección', '$Correo','$Teléfono','$Contraseña' );
    mysqli_query($conexion, $Consulta)";
    echo "Registro Exitoso";
    mysqli_close($conexion);
    


}


?>