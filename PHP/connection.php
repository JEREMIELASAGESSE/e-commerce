<?php
$serveur = 'localhost'; // Adresse du serveur MySQL
$utilisateur = 'root';  // Nom d'utilisateur MySQL
$mot_de_passe = '';     // Mot de passe MySQL
$base_de_donnees = 'chaussure'; // Nom de la base de données

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérifier la connexion
if ($connexion->connect_error) {
    die('Erreur de connexion : '. $connexion->connect_error);
}
    echo 'Connexion réussie à la base de données.';

?>;
