<?php
$id= $_POST['Ano_Lanzamiento'];
$servidor= "localhost";
$basedatos = "catalogojuegos";
$usuario = "root";
$password ="19100229Jo-0";
$ID=2;

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die ("No se pudo conectar");
$consulta = "select * from juego where ID=$ID";

$registros = mysqli_query($con, $consulta)or die ("Problemas en el select");
// $registros = mysqli_query($con,$consulta) or die ("Problemas con el select");
// while($reg = mysqli_fetch_array($registros,MYSQLI_NUM)){
//     printf($reg['nombre'].' ')
// }

$result = mysqli_fetch_all($registros);

mysqli_close($con);
echo json_encode($result);
?>