<?php
  $host = 'localhost';
  $user = 'root';
  $password = 'usbw';
  $dbname = 'crud-react-php';
  $port = '3306';

  #Conexão sem porta
  #$conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $password);

  #Conexão com porta
  $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $password);
?>
