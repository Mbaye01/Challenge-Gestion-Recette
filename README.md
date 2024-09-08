# Gestion de Recettes

## Description

Cette application de gestion de recettes est développée en Vue.js 3 en utilisant la Composition API pour permettre aux utilisateurs de gérer facilement leurs recettes de cuisine.

## Fonctionnalités

- **Ajout de recettes** : Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant le titre, les ingrédients et le type de recette (entrée, plat, dessert, etc.).
- **Modification de recettes** : Les recettes existantes peuvent être modifiées.
- **Suppression de recettes** : Les utilisateurs peuvent supprimer des recettes de la liste.
- **Affichage des recettes** : Une liste de toutes les recettes disponibles est affichée, avec la possibilité de voir les détails de chaque recette.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (ou yarn)
- Docker (pour la conteneurisation)

## Installation

1. Clonez le repository GitHub :

   ```bash
   https://github.com/Mbaye01/Challenge-Gestion-Recette.git

   ```

2. Accédez au répertoire du projet :
   ```bash
   cd challenge-gestion-recettes
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

1. Pour démarrer l'application en mode développement :

   ```bash
   npm run serve
   ```

1. Pour exécuter le conteneur Docker :

   ```bash
   docker run -d -p 3000:81 recipe-app
   ```

## Auteur

[Mbaye Abdelalhi kalidou](https://github.com/Mbaye01/Challenge-Gestion-Recette.git)
