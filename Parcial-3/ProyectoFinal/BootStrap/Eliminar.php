<?php
// $id= $_POST['idID'];
$id= $_POST['idID'];

$servidor= "localhost";
$basedatos = "catalogojuegos";
$usuario = "root";
$password ="";


$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die ("No se pudo conectar");
$consulta = "DELETE FROM juego WHERE ID LIKE $id";

$registros = mysqli_query($con, $consulta)or die ("Problemas en el select");

if($registros){
    // header("Location:Formulacio.html");
    echo "ELIMINADO CORRECTAMENTE ";
}
else{
echo "No funciona";
}

?>