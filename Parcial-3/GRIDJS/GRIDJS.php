<?php
$servidor= "localhost";
$basedatos = "catalogojuegos";
$usuario = "root";
$password ="";
$ID=2;

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die ("No se pudo conectar");
$consulta = "select * from juego";

$registros = mysqli_query($con, $consulta)or die ("Problemas en el select");
// $registros = mysqli_query($con,$consulta) or die ("Problemas con el select");
// while($reg = mysqli_fetch_array($registros,MYSQLI_NUM)){
//     printf($reg['nombre'].' ')
// }

$result = mysqli_fetch_all($registros);

echo json_encode($result);
?>