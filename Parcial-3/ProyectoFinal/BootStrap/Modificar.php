<?php
 $id= $_POST['idID'];
$Lanzamiento= $_POST['idAño'];
$Nombre= $_POST['idNom'];
$Consola= $_POST['idConsola'];
$Precio= $_POST['idPrecio'];
$Estado= $_POST['idEstado'];
$Crossplay= $_POST['idMulti'];
$Premios= $_POST['idGoty'];
$Soporte= $_POST['idSoporte'];


$servidor= "localhost";
$basedatos = "catalogojuegos";
$usuario = "root";
$password ="";

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die ("No se pudo conectar");
$consulta = "UPDATE juego SET Lanzamiento = '$Lanzamiento', Nombre = '$Nombre', Consola = '$Consola', 
Precio = '$Precio', Estado = '$Estado', Crossplay = '$Crossplay', Premios = '$Premios', Soporte='$Soporte' WHERE ID='$id'";
$registros = mysqli_query($con,$consulta) or die("problemas en el select");

if($registros){
    header("Location:Formulacio.html");
}
else{
    echo "arregla tu mamada";
}
?>