
//recuperation des marqueurs
/*
// Faire une requête HTTP pour récupérer le contenu du fichier JSON
const url = 'chemin/vers/fichier.json';
const response = await fetch(url);
const data = await response.json();

// Accéder à l'objet de marqueurs en utilisant le nom de la propriété approprié
const markers = data.markers;

// Faire quelque chose avec les marqueurs récupérés
console.log(markers);*/

//recuperation des marqueurs v2
/*
// Déclaration d'un tableau de marqueurs vide
const markers = [];

// Récupération des marqueurs depuis le fichier JSON
const url = 'chemin/vers/fichier.json';
const response = await fetch(url);
const data = await response.json();
const markersFromJSON = data.markers;

// Ajout des marqueurs du fichier JSON dans le tableau de marqueurs
markersFromJSON.forEach(marker => {
  markers.push(marker);
});
*/

//markers 
// Déclaration d'un tableau de marqueurs vide
const markers = [];

// Ajout de chaque marqueur dans le tableau avec la méthode push()
const marker1 = { nom : "Cafeteria Amphi Hubert Coudane", lat : 2.170191469892004, long : 48.710711586415286 };
markers.push(marker1);

const marker2 = {  nom : "Cafeteria Henri Moissan", lat : 2.1723943695285683, long : 48.711530079110744 };
markers.push(marker2);

//création de la searchBox

/*var searchOptions = {
    key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
    language: 'fr-FR',
    limit: 5
  };
  
  // Options for the autocomplete service
  var autocompleteOptions = {
    key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
    language: 'fr-FR'
  };
   var searchOptions= {

        limit: 5,
        idxSet: 'POI,Geo',
        language: 'fr-FR',
        searchOptions: searchOptions,
        autocompleteOptions: autocompleteOptions
  
        
          
    };*/
/*
    var searchOptions = {
      key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
      language: 'fr-FR',
      limit: 5,
      autocomplete: {
        enabled: true,
        type: ['POI', 'Street', 'Geography'],
        categories: { 
          poi: ['100-1000-0000'], // codes de catégorie pour les POI
          street: [], // catégories de rue vides pour désactiver la recherche de rues
          geography: [] // catégories géographiques vides pour désactiver la recherche géographique
        }
      }
    };
  
  var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchOptions)*/
  

  //création de la searchBox
var searchOptions = {
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  limit: 5,
  idxSet: "POI,Geo",
  language: "fr-FR",

  autocomplete: {
    enabled: true, // active l'autocomplétion
    minLength: 2, // nombre minimum de caractères avant de lancer l'autocomplétion
    debounceTime: 100, // délai avant d'envoyer une requête au serveur après la saisie de l'utilisateur
    categories: [
      {
        filter: "categorySet=POI",
        searchIn: "name",
        label: "Points d'intérêt",
      },
      {
        filter: "categorySet=Address",
        searchIn: "address",
        label: "Adresses",
      },
    ],
  },
};

var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchOptions);
// Ajout de la SearchBox à l'élément HTML contenant la carte
var mapElement = document.getElementById('map');
mapElement.appendChild(ttSearchBox.getSearchBoxHTML());

window.addEventListener("load", function () {
  // Lorsqu'un utilisateur soumet une recherche
  ttSearchBox.on("submit", function (event) {
    // Empêche le formulaire de se recharger la page
    event.preventDefault();
    // Récupère la requête de recherche
    var query = event.data;

    // Effectue une recherche géocodée pour récupérer les informations sur le lieu
    tt.services
      .fuzzySearch({
        key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
        query: query,
        language: "fr-FR",
      })
      .then(function (response) {
        // Récupère les informations sur le lieu à partir de la réponse
        var place = response.results[0];

        // Déplace la carte à la position du lieu
        map.flyTo({
          center: place.position,
        });

        // Ajoute un marqueur à la position du lieu
        var marker = new tt.Marker().setLngLat(place.position).addTo(mapElement);

        // Affiche les informations sur le lieu dans une fenêtre contextuelle
        var popup = new tt.Popup({ offset: 30 }).setHTML(
          "<h3>" +
            place.address.freeformAddress +
            "</h3><p>" +
            place.poi.name +
            "</p>"
        );
        marker.setPopup(popup).togglePopup();
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});


