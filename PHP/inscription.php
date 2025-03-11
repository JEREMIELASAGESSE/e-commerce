<?php
mysqli_connect("localhost","root","","chaussure");
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$tel=$_POST['tel'];
$email =$_POST['email'];
$password=$_POST['password'];

mysqli_query("insert into clients values('$nom','$prenom','$tel','$email','$password')")

?>
<!-- 
 
mettre mon php a jour 
connection de bd avec php
insertion de données dans la bd
recuperation de données dans la bd pour l'afficher dans l'interface 
-->

