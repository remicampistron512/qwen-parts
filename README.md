# Qwen-Parts — SPA Vanilla JS (Vite + Bootstrap)

Application web **Single Page Application (SPA)** réalisée en **JavaScript Vanilla** (sans framework), avec **Vite** pour le bundling, **Bootstrap** pour l’UI, et un système de routing basé sur l’API History.

Le projet simule une boutique de composants PC :
- Navigation sans rechargement (SPA)
- Pages catégories dynamiques (`/category/:name`)
- Page produit (`/product/:id`)
- Panier persistant via **LocalStorage**
- Recherche (`/search?q=...`)
- Breadcrumbs (fil d’Ariane)
- Transitions visuelles lors du changement de page (fade)

---

## Technologies utilisées

- **Vite** (dev server + build)
- **JavaScript ES Modules**
- **Bootstrap 5**
- **Bootstrap Icons**
- **SCSS** (styles personnalisés + thème sombre)

---

## Installation (avec Vite)

### 1) Prérequis
- Node.js (version recommandée : 18+)
- npm (fourni avec Node)

### 2) Installer les dépendances
Cloner le dépôt puis dans le dossier du projet :

```bash
npm install
````

### 3) Lancer le serveur

```bash
npm start
```

Vite va afficher une URL du type :

```
http://localhost:5173
```

Ouvrir cette URL dans le  navigateur.



## Fonctionnalités principales

### ✅ Router SPA

* Navigation avec `<a data-link>` (pas de rechargement de page)
* Support des routes dynamiques :

    * `/category/:name`
    * `/product/:id`
* Gestion du bouton retour/avance navigateur (`popstate`)

### ✅ Catalogue dynamique

Les produits sont stockés dans un tableau `PRODUCTS`.
Les pages catégories filtrent automatiquement en fonction de `category`.

### ✅ Page produit

Affiche :

* image
* prix
* description longue
* tableau de spécifications (`details`)
* bouton “Add to cart”

### ✅ Panier (LocalStorage)

* Ajout produit
* Incrément / décrément
* Suppression d’un item
* Vidage du panier
* Badge compteur panier mis à jour automatiquement

### ✅ Recherche

* Route : `/search?q=mot-cle`
* Filtre sur `title`, `category`, `shortDescription`, `longDescription`

### ✅ UI

* Breadcrumbs (fil d’Ariane)
* Thème sombre via SCSS
* Transition fade lors du changement de page

---

## Structure du projet

Voici une structure typique :

```
src/
│
├─ main.js
│
├─ data/
│  └─ products.js
│
├─ router/
│  ├─ router.js
│  └─ routes.js
│
├─ views/
│  ├─ homeView.js
│  ├─ categoryView.js
│  ├─ productView.js
│  ├─ cartView.js
│  ├─ searchView.js
│  └─ notFoundView.js
│
├─ services/
│  └─ cartService.js
│
├─ ui/
│  ├─ breadcrumbs.js
│  ├─ cartBadge.js
│  ├─ navigationHandler.js
│  ├─ cartHandler.js
│  └─ renderProductsGrid.js
│
└─ scss/
   └─ styles.scss
```

---

## Détails des dossiers

### `src/main.js`

Point d’entrée de l’application :

* importe les styles SCSS
* initialise le router
* installe les handlers globaux (navigation + panier + search)
* lance le premier `router.render()`

---

### `src/router/`

Contient le cœur du routing SPA :

* `routes.js`
  Liste des routes :

  ```js
  { path: "/", view: HomeView }
  { path: "/category/:name", view: CategoryView }
  { path: "/product/:id", view: ProductView }
  { path: "/cart", view: CartView }
  { path: "/search", view: SearchView }
  ```

* `router.js`

    * `matchRoute(pathname)` : trouve la route correspondante + params
    * `render()` : affiche la vue dans `#main-content`
    * `navigate(path)` : `pushState` + `render()`
    * `handlePopState()` : support du back/forward navigateur
    * transition fade (`is-transitioning`) pour un effet fluide

---

### `src/views/`

Une vue = une fonction qui retourne une string HTML :

* `HomeView()` : page d’accueil
* `CategoryView({name})` : filtre les produits par catégorie
* `ProductView({id})` : affiche un produit + specs table
* `CartView()` : panier + actions + total
* `SearchView()` : résultats de recherche via query string
* `NotFoundView()` : page 404

---

### `src/services/`

Logique métier (data + persistance) :

* `cartService.js`

    * `loadCart()` / `saveCart()`
    * `addToCart(id)`
    * `decreaseFromCart(id)`
    * `removeFromCart(id)`
    * `clearCart()`
    * `getCartCount()`

---

### `src/ui/`

Composants et helpers UI :

* `breadcrumbs.js` : fil d’Ariane Bootstrap
* `cartBadge.js` : mise à jour du compteur panier
* `navigationHandler.js` : intercepte `<a data-link>` (SPA)
* `cartHandler.js` : event delegation pour boutons panier
* `renderProductsGrid.js` : génère une grille Bootstrap de cartes produits

---

### `src/data/`

* `products.js` : catalogue produits (`PRODUCTS`)

    * `shortDescription`
    * `longDescription`
    * `details` (table des specs)

---

### `src/scss/styles.scss`

* Bootstrap SCSS import
* Variables / thème sombre
* Styles UI (cards, navbar, search, breadcrumbs, list-group…)
* Transition de page (`#main-content.is-transitioning`)

---




