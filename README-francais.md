# Application d'exemple MongoDB et Express.js REST API

Ce dépôt contient l'application d'exemple pour le [tutoriel MongoDB et Express.js REST API](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial).

## Comment exécuter

1. Vous pouvez suivre le guide [Démarrage avec Atlas](https://docs.atlas.mongodb.com/getting-started/) pour apprendre comment créer un compte Atlas gratuit, créer votre premier cluster et obtenir votre chaîne de connexion à la base de données.
Ensuite, configurez le paramètre de connexion Atlas URI dans `server/.env` avec votre chaîne de connexion :
```
ATLAS_URI=mongodb+srv://<nom_utilisateur>:<mot_de_passe>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

2. Lancez le serveur Express :
```
cd server
npm install
npm run dev
```

3. Lancez l'application React (dans une nouvelle fenêtre de terminal) :
```
cd app
npm install
npm start
```

## Avertissement

Utilisez à vos propres risques ; ce n'est pas un produit MongoDB pris en charge.
