var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(17);
map.setCenter([2.170936, 48.711115]);

var alimentation = "alimentation";
var eau = "eau";
var toilettes = "toilettes";
var sport = "sport";
var velo = "vélo";
var espaceTravail = "espace travail";
var voiture = "voiture";
var renseignement = "renseignement";
var espaceLibre = "espace libre";

class Marker {
  constructor(nom, lat, lon, type, description) {
    this.nom = nom;
    this.lat = lat;
    this.lon = lon;
    this.type = type;
    this.description = description;
    switch (type) {
      case "alimentation":
        this.icone = "./img/restaurant-icon.png";
        break;

      case "eau":
        this.icone = "./img/eau.png";
        break;

      case "espace libre":
        this.icone = "./img/detente.png";
        break;

      case "toilettes":
        this.icone = "./img/toilettes.png";
        break;

      case "sport":
        this.icone = "./img/sport.png";
        break;

      case "vélo":
        this.icone = "./img/velo.png";
        break;

      case "espace travail":
        this.icone = "./img/travail.png";
        break;

      case "voiture":
        this.icone = "./img/voiture.png";
        break;

      case "renseignement":
        this.icone = "./img/rens.png";
        break;
    }

    /* if (this.type == alimentation)
    {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == espaceDetente)
    {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == eau)
    {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == toilettes)
    {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == sport)
    {
      this.icone = "./img/restaurant-icon.png";
    }
    if (this.type == velo)
    {
      this.icone = "./img/restaurant-icon.png";
    }*/
  }

  addMarqueur() {
    var divElement = document.createElement("div");
    divElement.innerHTML =
      '<div class="marker"><img src=" ' +
      this.icone +
      '" width="22" height="26"></div>';
    var marker = new tt.Marker({
      element: divElement,
    })
      .setLngLat([this.lat, this.lon])
      .addTo(map)
      .setPopup(new tt.Popup().setHTML("<b>" + this.description + "</b>"));
    var lat = this.lat;
    var lon = this.lon;
    divElement.addEventListener("click", markerHandler(lat, lon));
  }
}

function markerHandler(lat, lon) {
  console.log("click");
}

//--------------------------------------ajout des marqueurs personnaliés---------------------------------------//
const vello2 = new Marker(
  "parking vello",
  2.1714823681541526,
  48.70852181718405,
  velo,
  "Hello world"
);
vello2.addMarqueur();

const vello3 = new Marker(
  "parking vello",
  2.1717472239165168,
  48.708809273368814,
  velo,
  "Hello world"
);
vello3.addMarqueur();

const vello4 = new Marker(
  "parking vello",
  2.1713686608967158,
  48.71044486115616,
  velo,
  "Hello world"
);
vello4.addMarqueur();

const vello5 = new Marker(
  "parking vello",
  2.168814603149155,
  48.71016106493906,
  velo,
  "Hello world"
);
vello5.addMarqueur();

const parkingVoiture1 = new Marker(
  "parking voiture",
  2.1709441163198564,
  48.70859174551018,
  voiture,
  "Hello world"
);
parkingVoiture1.addMarqueur();

const acceuilP = new Marker(
  "Acceuil Polytech",
  2.17132188393273,
  48.708987042864635,
  renseignement,
  "Hello world"
);
acceuilP.addMarqueur();

const salleLS1 = new Marker(
  "salle libre service",
  2.1709010620321796,
  48.70895845832055,
  espaceTravail,
  "Hello world"
);
salleLS1.addMarqueur();

const terrasse = new Marker(
  "terrasse Polytech",
  2.171237255185466,
  48.709053864600776,
  espaceLibre,
  "Hello world"
);
terrasse.addMarqueur();

const toilette1 = new Marker(
  "Toilettes Polytech",
  2.170941126501224,
  48.70905846248925,
  toilettes,
  "Hello world"
);
toilette1.addMarqueur();

const CoinsManger = new Marker(
  " coins pour manger Polytech",
  2.171376609860404,
  48.70896075726918,
  espaceLibre,
  "Hello world"
);
CoinsManger.addMarqueur();

const toilette2 = new Marker(
  "Toilettes Polytech",
  2.1715763686799257,
  48.70893574291631,
  toilettes,
  "Hello world"
);
toilette2.addMarqueur();

const toilette3 = new Marker(
  "Toilettes Polytech",
  2.1714165004830206,
  48.708892001257,
  toilettes,
  "Hello world"
);
toilette3.addMarqueur();

const acceuilI = new Marker(
  "Acceuil IUT d'Orsay",
  2.170445018387394,
  48.71123038235055,
  renseignement,
  "Hello world"
);
acceuilI.addMarqueur();

const amphiCoudane = new Marker(
  "Amphi Coudane",
  2.170275999450628,
  48.71070156395251,
  espaceTravail,
  "Hello world"
);
amphiCoudane.addMarqueur();

const amphi1 = new Marker(
  "Amphi 1",
  2.1705041275775216,
  48.71071159948022,
  espaceTravail,
  "Hello world"
);
amphi1.addMarqueur();

const amphi2 = new Marker(
  "Amphi 2",
  2.1707839647465104,
  48.71070557816384,
  espaceTravail,
  "Hello world"
);
amphi2.addMarqueur();

//--------------------------------------------------IUT--------------------------------------//
//cafet
const cafetIUT = new Marker(
  "Cafeteria Amphi Hubert Coudane",
  2.169910351645844,
  48.71072595849432,
  alimentation,
  "Hello world"
);
cafetIUT.addMarqueur();

//--------------------------------------------------Henri-Moissan-----------------------------------------------//
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
  2.171227492844988,
  48.709005619731016,
  alimentation,
  "Hello world"
);
cafetPolytech.addMarqueur();

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
const espaceLibre1 = new Marker(
  "espace libre du lieu de vie",
  2.171511037882402,
  48.709469029733384,
  espaceLibre,
  "tables et babyfoot, se situe au premier étage"
);
espaceLibre1.addMarqueur();

//toilettes
const toilettesLV = new Marker(
  "toilettes",
  2.1711107506111553,
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
  2.171015388125636,
  48.70945117528322,
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
const parkingVeloHBar = new Marker(
  "Parking vélo",
  2.1714823681541526,
  48.70852181718405,
  velo,
  "hello world"
);
parkingVeloHBar.addMarqueur();

//------------------------------------Elein-Gray---------------------------------------------//

//-------------------------------------CS-Eiffel--------------------------------------------//

/*map.on("zoomend", function () {
  if (map.getZoom() < 17.5) {
    marker.remove();
    console.log("remove");
    console.log(map.getZoom());
  } else {
    marker.addTo(map);
    console.log(map.getZoom());
    console.log("add");
  }
});*/

// créer une instance d'autocomplétion
//var autocomplete = new H.places.Autocomplete(searchOptions);

// //création de la searchBox
// var searchOptions = {
//   key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
//   limit: 5,
//   idxSet: "POI,Geo",
//   language: "fr-FR",

//   autocomplete: {
//     enabled: true, // active l'autocomplétion
//     minLength: 2, // nombre minimum de caractères avant de lancer l'autocomplétion
//     debounceTime: 100, // délai avant d'envoyer une requête au serveur après la saisie de l'utilisateur
//     categories: [
//       {
//         filter: "categorySet=POI",
//         searchIn: "name",
//         label: "Points d'intérêt",
//       },
//       {
//         filter: "categorySet=Address",
//         searchIn: "address",
//         label: "Adresses",
//       },
//     ],
//   },
// };

// var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchOptions);

// map.addControl(ttSearchBox, "top-left");

// window.addEventListener("load", function () {
//   // Lorsqu'un utilisateur soumet une recherche
//   ttSearchBox.on("submit", function (event) {
//     // Empêche le formulaire de se recharger la page
//     event.preventDefault();
//     // Récupère la requête de recherche
//     var query = event.data;

//     // Effectue une recherche géocodée pour récupérer les informations sur le lieu
//     tt.services
//       .fuzzySearch({
//         key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
//         query: query,
//         language: "fr-FR",
//       })
//       .then(function (response) {
//         // Récupère les informations sur le lieu à partir de la réponse
//         var place = response.results[0];

//         // Déplace la carte à la position du lieu
//         map.flyTo({
//           center: place.position,
//         });

//         // Ajoute un marqueur à la position du lieu
//         var marker = new tt.Marker().setLngLat(place.position).addTo(map);

//         // Affiche les informations sur le lieu dans une fenêtre contextuelle
//         var popup = new tt.Popup({ offset: 30 }).setHTML(
//           "<h3>" +
//             place.address.freeformAddress +
//             "</h3><p>" +
//             place.poi.name +
//             "</p>"
//         );
//         marker.setPopup(popup).togglePopup();
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   });
// });

var source = new tt.LngLat(2.1688376763699813, 48.7118157869293);
var destination = new tt.LngLat(2.169020066581464, 48.709663607193576);

var routeoptions = {
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  locations: [],
  trafic: false,
};

routeoptions.locations.push(source);
routeoptions.locations.push(destination);

routeoptions.traffic = false;
// routeoptions.travelMode = "pedestrian";

const buttonRoute = document.querySelector("#buttonRoute");
buttonRoute.addEventListener("click", clickHandler);

function clickHandler() {
  try {
    search();
    tt.services.calculateRoute(routeoptions).then(function (response) {
      var geojson = response.toGeoJson();
      console.log(geojson);
      displayRoute(geojson);
    });
  } catch (error) {
    console.log(error);
  }
}

function displayRoute(geojson) {
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: geojson,
    },
    paint: {
      "line-color": "#ff0000",
      "line-width": 5,
    },
  });
}

const input = document.querySelector("input");

function search() {
  tt.services
    .fuzzySearch({
      key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
      query: input.value,
      language: "fr-FR",
    })
    .then(function (response) {
      // Récupère les informations sur le lieu à partir de la réponse
      var place = response.results[0];
      for (let index = 0; index < response.results.length; index++) {
        const element = response.results[index];
        console.log(element.address.freeformAddress);
      }

      console.log(place.address.freeformAddress);
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
    });
}
