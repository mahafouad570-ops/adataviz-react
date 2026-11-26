# Les Doyens de Paris 

Application React qui affiche les arbres remarquables de Paris, à partir des données ouvertes de la Ville de Paris.

## Fonctionnalités

- Chargement des arbres depuis l'API Paris Data avec useEffect et fetch
- Trois messages d'état : chargement, erreur et liste vide
- Recherche d'un arbre par son nom
- Filtre par arrondissement, combinable avec la recherche
- Détails de chaque arbre (résumé et année de plantation)
- Apparition animée des cartes, l'une après l'autre

## Technologies

- React
- Vite
- JavaScript
- CSS

## Lancer le projet

bash
git clone https://github.com/mahafouad570-ops/adataviz-react.git
cd adataviz-react
npm install
npm run dev


## Source des données

Jeu de données « Arbres remarquables de Paris » sur [Paris Data](https://opendata.paris.fr).

## Ce que j'ai appris

- Découper une interface en composants et passer des props
- Gérer l'état avec useState
- Charger des données une seule fois avec useEffect et un tableau de dépendances vide
- Afficher des messages selon l'état de chargement
- Utiliser des variables CSS pour créer une animation décalée
