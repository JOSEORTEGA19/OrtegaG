<?php

  $FechaHoy = date('y/m/d H:i:s');
  echo '<b> Fecha de creacion de cookie: </b>'.$FechaHoy.'<br>';
  setcookie("Ultima_visita",$FechaHoy,time()+(7*24*60*60));

  ?>