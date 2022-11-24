<?php
$servidor = "localhost";
$basedatos = "catalogojuegos";
$usuario = "root";
$password = "";

$con  = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("no se pudo conectar a localhost");
$consulta = "select * from juego";
$registros = mysqli_query($con, $consulta) or die ("problemas con el select");
// while ($reg = mysqli_fetch_array($registros, MYSQLI_ASSOC)) {
//     # code...
//     printf($reg['nombre'].' '.$reg['apPaterno'].'<br>');
// }
// while ($reg = mysqli_fetch_array($registros, MYSQLI_NUM)) {
//     # code...
//     printf($reg[1].' '.$reg[2].'<br>');
// }
$result = mysqli_fetch_all($registros);
mysqli_close($con);
echo json_encode($result);
?>