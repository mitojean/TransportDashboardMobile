# Transport Dashboard

## Description
Transport Dashboard est une application web et mobile conçue pour gérer les chauffeurs et les administrateurs. Elle permet de suivre les informations des chauffeurs, de gérer les utilisateurs et d'effectuer des opérations d'importation et d'exportation de données.

## Fonctionnalités
- **Gestion des Chauffeurs** : Ajouter, modifier et supprimer des chauffeurs.
- **Gestion des Administrateurs** : Créer et gérer des comptes administrateurs.
- **Exportation et Impression** : Exporter les données en PDF et Excel.
- **Interface en Français** : L'application est entièrement traduite en français.

## Prérequis
- Node.js
- npm
- MySQL
- React Native (pour l'application mobile)

## Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/mitojean/TransportDashboardMobile.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd TransportDashboardMobile
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Configurez la base de données en exécutant le fichier `init.sql` dans MySQL.

5. Démarrez le serveur :
   ```bash
   npm start --prefix server
   ```

6. Démarrez l'application mobile :
   ```bash
   npx react-native run-android
   ```

## Utilisation
- Connectez-vous avec les identifiants administrateur :
  - **Username** : admin
  - **Password** : admin123

## Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute modification.

## License
Ce projet est sous licence MIT.
