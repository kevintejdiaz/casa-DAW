<?php
$db = mysqli_connect(
  'mysql',      // Host (usa el network-alias del contenedor MySQL)
  'root',       // Usuario (definido en -e MYSQL_ROOT_PASSWORD)
  '1234',       // Contraseña (definida en -e MYSQL_ROOT_PASSWORD=1234)
  'crud'        // Base de datos (definida en -e MYSQL_DATABASE=crud)
) or die('Error de conexión: ' . mysqli_connect_error());
?>