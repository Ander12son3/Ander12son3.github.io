<?php
// Llamando a los campos
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// Datos para el correo

$destinatario = "admaolph@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n"
$carta .= "Mensaje: $mensaje"

// Enviando mensanje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-texto.html')

?>