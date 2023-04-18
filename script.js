var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(17);
map.setCenter([2.170936, 48.711115]);

var alimentation = "alimentation";
var espaceDetente = "espace détente";
var eau = "eau";
var toilettes = "toilettes";
var sport = "sport";
var velo = "vélo";
var atelier = "atelier";
var numerique = "numerique";

class Marker {
  constructor(nom, lat, lon, type, description) {
    this.nom = nom;
    this.lat = lat;
    this.lon = lon;
    this.type = type;
    this.description = description;
    if (this.type == alimentation) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == espaceDetente) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == eau) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == toilettes) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == sport) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == velo) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == atelier) {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == numerique) {
      this.icone = "./img/restaurant-icon.png";
    }
  }

  addMarqueur() {
    var divElement = document.createElement("div");
    divElement.innerHTML =
      '<div class="marker"><img src=" ' +
      this.icone +
      '" width="32" height="40"><p>' +
      this.nom +
      "</p></div>";
    var marker = new tt.Marker({
      element: divElement,
    })
      .setLngLat([this.lat, this.lon])
      .addTo(map)
      .setPopup(new tt.Popup().setHTML("<b>" + this.description + "</b>"));
  }
}

//--------------------------------------ajout des marqueurs personnaliés---------------------------------------//

//--------------------------------------------------IUT--------------------------------------//
//cafet
const cafetIUT = new Marker(
  "Cafeteria Amphi Hubert Coudane",
  2.170191469892004,
  48.710711586415286,
  alimentation,
  "Hello world"
);
cafetIUT.addMarqueur();

//--------------------------------------------------Henri-Moissan-----------------------------------------------//
//com
//cafet
const cafetMoissan = new Marker(
  "Cafeteria Henri Moissan",
  2.1723943695285683,
  48.711530079110744,
  alimentation,
  "Hello world"
);
cafetMoissan.addMarqueur();

//restaurant universitaire
const cantineMoissan = new Marker(
  "Restaurant universitaire Henri Moissan",
  2.172448013711649,
  48.71101681800649,
  alimentation,
  "Hello world"
);
cantineMoissan.addMarqueur();

//------------------------------------Polytech-Paris-Saclay--------------------------------//
const cafetPolytech = new Marker(
  "Cafetaria Polytech Paris Saclay",
  2.171122,
  48.709127,
  alimentation,
  "Hello world"
);
cafetPolytech.addMarqueur();

const espaceDetentePolytech = new Marker(
  "Espace détente",
  2.17117325173756,
  48.70908355655419,
  espaceDetente,
  "tables + babyfoot + terasse"
);
espaceDetentePolytech.addMarqueur();
const tabletteEDTPolytech = new Marker(
  "Tablette avec emploi du temps",
  2.173001233646726,
  48.710171220522085,
  numerique,
  "se situe au rez de chaussé"
);
tabletteEDTPolytech.addMarqueur();
const parkingVeloPolytech = new Marker(
  "Parking vélo",
  2.1714823681541526,
  48.70852181718405,
  velo,
  "hello world"
);
parkingVeloPolytech.addMarqueur();
//-----------------------------PUIO-------------------------------------------------------//
const ateliers = new Marker(
  "Ateliers avec imprimantes 3D",
  2.1734456747269357,
  48.710884093565284,
  atelier,
  "Hello world"
);
ateliers.addMarqueur();
//--------------------------------------Lieu-de-vie-----------------------------------------//
//cafetaria et restaurant universitaire
const cafetCantineLieuDeVie = new Marker(
  "Cafetaria et restaurant universitaire du lieu de Vie",
  2.171465539968687,
  48.709506800652576,
  alimentation,
  "Cafetaria au rez de chaussé et cantine au deuxième étage"
);
cafetCantineLieuDeVie.addMarqueur();

//fontaine d'eau
const fontaineEau = new Marker(
  "Fontaine d eau",
  2.171443,
  48.709453,
  eau,
  "se situe dans la cafetaria"
);
fontaineEau.addMarqueur();

//espace libre
const espaceLibre = new Marker(
  "espace libre du lieu de vie",
  2.171511037882402,
  48.709469029733384,
  espaceDetente,
  "tables et babyfoot, se situe au premier étage"
);
espaceLibre.addMarqueur();

//toilettes
const toilettesLV = new Marker(
  "toilettes",
  2.1710927506111553,
  48.70943900667484,
  toilettes,
  "se situe au premier étage"
);
toilettesLV.addMarqueur();

//terrain de basket
const basket = new Marker(
  "Terrain de basket",
  2.1714772813657746,
  48.70938670840104,
  sport,
  "se situe sur le toit "
);
basket.addMarqueur();

//salle de sport
const salleSport = new Marker(
  "Salle de sport SUAPS",
  2.1709886295475402,
  48.70957021829742,
  sport,
  "se situe au troisième étage"
);
salleSport.addMarqueur();

const parkingVeloLV = new Marker(
  "Parking vélo",
  2.1712435199793916,
  48.70935200657226,
  velo,
  "hello world"
);
parkingVeloLV.addMarqueur();
//--------------------------------------H-Bar---------------------------------------------------//

//------------------------------------Elein-Gray---------------------------------------------//

//-------------------------------------CS-Eiffel--------------------------------------------//

// créer une instance d'autocomplétion
//var autocomplete = new H.places.Autocomplete(searchOptions);

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

map.addControl(ttSearchBox, "top-left");

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
        var marker = new tt.Marker().setLngLat(place.position).addTo(map);

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
