<?php
// $id= $_POST['idID'];
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
$consulta = "INSERT INTO juego (Lanzamiento, Nombre, Consola, Precio, Estado, Crossplay, Premios, Soporte ) VALUES ('$Lanzamiento',
 '$Nombre', '$Consola', '$Precio', '$Estado', '$Crossplay', '$Premios', '$Soporte')";

$registros = mysqli_query($con, $consulta)or die ("Problemas en el select");

if($registros){
    header("Location:Formulacio.html");
}
else{
echo "No funciona";
}

?>