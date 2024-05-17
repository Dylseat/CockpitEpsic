# CockpitEpsic

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Installation de node.js

Vous trouverez le téléchargement de node.js sur ce lien : https://nodejs.org/en/#home-downloadhead.

Après avoir téléchargé, installez node.js en ouvrant le téléchargement (.msi) et suivez les étape demandé : 
- Acceptez les termes de confidentialité
- Séléctionnez l'emplacement de l'installation
- Cliquez sur le bouton "next" jusqu'au bout "install"

Vous pouvez vérifer que node et npm ont bien été installé dans le terminal en utilisant les commandes :
```
node -v
```

```
npm -v
```

## Installation d'angular

Pour installer angular, il faut utiliser le package npm en utilisant la commande suivante dans un terminal : 

```
npm install -g @angular/cli
```

## Mise en route du projet

Récupérez le projet dans le dossier .zip et ouvrez le dans un IDE.

### Installation des dépendances

Dans le terminal de votre IDE, réalisé la commande suivante pour installer toutes les dépendances liées au projet :

```
 npm install
``` 


### Démarrer le serveur json

Pour démarrer le serveur json, il faut effectuer cette commande dans le terminal de votre IDE :

```
npx json-server db.json
```

### Démarer l'application web

Pour démarrer l'application web, il faut effectuer cette commande dans le terminal de votre IDE :

```
ng serve
```

Pour finir cliquez sur le lien du terminal (ctrl + click) ou connectez-vous a votre localhost avec le port 4200.

Vous pouvez maintenant utiliser l'application.
