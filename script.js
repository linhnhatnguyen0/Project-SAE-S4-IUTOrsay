var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(17);
map.setCenter([2.170936, 48.711115]);

class Marker {
  constructor (nom, lat, lon, type, description, icone)
  {
    this.nom = nom;
    this.lat = lat;
    this.lon = lon;
    this.type = type;
    this.description = description;
    this.icone = icone;
  }

  addMarqueur ()
  {
    var name = this.nom;
    var divElement = document.createElement("div");
    divElement.innerHTML =
    '<div class="marker"><img src=" '+this.icone +'" width="32" height="40"><p>'+this.nom+'</p></div>';
    var marker = new tt.Marker({
         element: divElement,
        })
  .setLngLat([this.lat,this.lon])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>" +this.description+ "</b>"));
  }
}



//--------------------------------------ajout des marqueurs personnaliés---------------------------------------//

//--------------------------------------------------IUT--------------------------------------//
//cafet IUT

 const cafetIUT = new Marker("Cafeteria Amphi Hubert Coudane", 2.170191469892004, 48.710711586415286, "alimentation", "Hello world", "./img/restaurant-icon.png"  );
 cafetIUT.addMarqueur() 
//--------------------------------------------------Henri-Moissan-----------------------------------------------//
//cafet moissan
const CafetMoissan = new Marker("Cafeteria Henri Moissan", 2.1723943695285683,48.711530079110744, "alimentation", "Hello world", "./img/restaurant-icon.png" )
var divElement2 = document.createElement("div");
divElement2.innerHTML =
  '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Cafeteria Henri Moissan</p></div>';
var marker2 = new tt.Marker({
  element: divElement2,
})
  .setLngLat([2.1723943695285683,48.711530079110744])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));


//restaurant universitaire moissan
var divElement2 = document.createElement("div");
divElement2.innerHTML =
  '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Restaurant universitaire Henri Moissan</p></div>';
var marker2 = new tt.Marker({
  element: divElement2,
})
  .setLngLat([2.172448013711649, 48.71101681800649])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));


//------------------------------------Polytech-Paris-Saclay--------------------------------//


//--------------------------------------Lieu-de-vie-----------------------------------------//
var divElement = document.createElement("div");
divElement.innerHTML =
  '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Cafetaria et restaurant universitaire du lieu de Vie</p></div>';
var marker = new tt.Marker({
  element: divElement,
})
  .setLngLat([2.171465539968687,48.709506800652576])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));

  var divElement = document.createElement("div");
  divElement.innerHTML =
    '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Fontaine d eau</p></div>';
  var marker = new tt.Marker({
    element: divElement,
  })
    .setLngLat([2.171443, 48.709453])
    .addTo(map)
    .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));

//--------------------------------------H-Bar---------------------------------------------------//

//------------------------------------Elein-Gray---------------------------------------------//

//-------------------------------------CS-Eiffel--------------------------------------------//


map.on("zoomend", function () {
  if (map.getZoom() < 17.5) {
    marker.remove();
    console.log("remove");
    console.log(map.getZoom());
  } else {
    marker.addTo(map);
    console.log(map.getZoom());
    console.log("add");
  }
});



// créer une instance d'autocomplétion
//var autocomplete = new H.places.Autocomplete(searchOptions);

//création de la searchBox
 var searchOptions= {
      key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
      limit: 5,
      idxSet: 'POI,Geo',
      language: 'fr-FR',

      autocomplete: {
        enabled: true, // active l'autocomplétion
        minLength: 2, // nombre minimum de caractères avant de lancer l'autocomplétion
        debounceTime: 100, // délai avant d'envoyer une requête au serveur après la saisie de l'utilisateur
        categories: [
          {
            filter: 'categorySet=POI',
            searchIn: 'name',
            label: 'Points d\'intérêt',
          },
          {
            filter: 'categorySet=Address',
            searchIn: 'address',
            label: 'Adresses',
          },
        ],
      },
        
        
  };

var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchOptions)

map.addControl(ttSearchBox, "top-left")

window.addEventListener('load', function() {
  // Lorsqu'un utilisateur soumet une recherche
  ttSearchBox.on('submit', function(event) {
  // Empêche le formulaire de se recharger la page
  event.preventDefault();
  // Récupère la requête de recherche
  var query = event.data;
  
  // Effectue une recherche géocodée pour récupérer les informations sur le lieu
  tt.services.fuzzySearch({
    key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
    query: query,
    language: 'fr-FR',
    
  })
  .then(function(response) {
    // Récupère les informations sur le lieu à partir de la réponse
    var place = response.results[0];
    
    // Déplace la carte à la position du lieu
    map.flyTo({
      center: place.position
    });
    
    // Ajoute un marqueur à la position du lieu
    var marker = new tt.Marker().setLngLat(place.position).addTo(map);
    
    // Affiche les informations sur le lieu dans une fenêtre contextuelle
    var popup = new tt.Popup({offset: 30}).setHTML('<h3>' + place.address.freeformAddress + '</h3><p>' + place.poi.name + '</p>');
    marker.setPopup(popup).togglePopup();
  })
  .catch(function(error) {
    console.error(error);
  });
});
  });

