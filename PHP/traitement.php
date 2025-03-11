<!-- tables et requets -->
<!-- 
Pour la création d'un site de vente de chaussures, il te faudra probablement plusieurs tables pour organiser les données. Voici un exemple de structure de base avec les tables et les requêtes SQL pour les créer :

Tables SQL
Table des Utilisateurs

sql
CREATE TABLE utilisateurs (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    mot_de_passe VARCHAR(255),
    adresse VARCHAR(255),
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Table des Produits (Chaussures)

sql
CREATE TABLE produits (
    id_produit INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    description TEXT,
    prix DECIMAL(10, 2),
    stock INT,
    categorie VARCHAR(100),
    date_ajout TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Table des Commandes

sql
CREATE TABLE commandes (
    id_commande INT PRIMARY KEY AUTO_INCREMENT,
    id_utilisateur INT,
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    statut VARCHAR(50),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
);
Table des Détails de Commandes

sql
CREATE TABLE details_commandes (
    id_detail INT PRIMARY KEY AUTO_INCREMENT,
    id_commande INT,
    id_produit INT,
    quantite INT,
    prix_unitaire DECIMAL(10, 2),
    FOREIGN KEY (id_commande) REFERENCES commandes(id_commande),
    FOREIGN KEY (id_produit) REFERENCES produits(id_produit)
);
Requêtes SQL
Pour insérer des données dans ces tables, voici quelques requêtes SQL :

Insérer un utilisateur

sql
INSERT INTO utilisateurs (nom, email, mot_de_passe, adresse) 
VALUES ('Jean Dupont', 'jean@example.com', 'mot_de_passe_hash', '123 Rue de Paris, Paris, France');
Insérer un produit (chaussure)

sql
INSERT INTO produits (nom, description, prix, stock, categorie)
VALUES ('Chaussure de Sport', 'Chaussure de sport confortable pour toutes activités', 49.99, 100, 'Sport');
Insérer une commande

sql
INSERT INTO commandes (id_utilisateur, total, statut)
VALUES (1, 99.98, 'En cours');
Insérer les détails d'une commande

sql
INSERT INTO details_commandes (id_commande, id_produit, quantite, prix_unitaire)
VALUES (1, 1, 2, 49.99); 


-->
<!-- liason à la base de donnée -->

<!-- 1. Connexion à la base de données
Crée un fichier PHP (par exemple connexion.php) pour établir la connexion à ta base de données MySQL.

php
<?php
$serveur = 'localhost'; // Adresse du serveur MySQL
$utilisateur = 'root';  // Nom d'utilisateur MySQL
$mot_de_passe = '';     // Mot de passe MySQL
$base_de_donnees = 'nom_de_la_base'; // Nom de la base de données

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérifier la connexion
if ($connexion->connect_error) {
    die('Erreur de connexion : ' . $connexion->connect_error);
}
echo 'Connexion réussie à la base de données.';
?>
2. Requête à la base de données
Tu peux maintenant exécuter des requêtes SQL à partir de ton script PHP pour interagir avec la base de données. Par exemple, pour récupérer des produits de la table produits :

php
<?php
include 'connexion.php'; // Inclure le fichier de connexion

$sql = 'SELECT * FROM produits'; // Requête SQL
$resultat = $connexion->query($sql);

if ($resultat->num_rows > 0) {
    // Afficher les données de chaque ligne
    while ($ligne = $resultat->fetch_assoc()) {
        echo 'Nom du produit : ' . $ligne['nom'] . '<br>';
        echo 'Description : ' . $ligne['description'] . '<br>';
        echo 'Prix : ' . $ligne['prix'] . '<br>';
        echo 'Stock : ' . $ligne['stock'] . '<br><br>';
    }
} else {
    echo 'Aucun produit trouvé.';
}

// Fermer la connexion
$connexion->close();
?>
3. Afficher les données dans une interface HTML
Pour afficher les données dans une interface HTML, tu peux inclure le code PHP dans un fichier HTML (par exemple index.php).

php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Produits</title>
</head>
<body>
    <h1>Liste des produits</h1>
    <?php
    include 'connexion.php'; // Inclure le fichier de connexion

    $sql = 'SELECT * FROM produits'; // Requête SQL
    $resultat = $connexion->query($sql);

    if ($resultat->num_rows > 0) {
        // Afficher les données de chaque ligne
        while ($ligne = $resultat->fetch_assoc()) {
            echo '<div>';
            echo '<h2>' . $ligne['nom'] . '</h2>';
            echo '<p>Description : ' . $ligne['description'] . '</p>';
            echo '<p>Prix : ' . $ligne['prix'] . ' €</p>';
            echo '<p>Stock : ' . $ligne['stock'] . '</p>';
            echo '</div>';
        }
    } else {
        echo 'Aucun produit trouvé.';
    }

    // Fermer la connexion
    $connexion->close();
    ?>
</body>
</html> -->