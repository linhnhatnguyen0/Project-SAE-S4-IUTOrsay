var map = tt.map({
    key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
    container: "map",
  });
  map.setZoom(17);
  map.setCenter([2.170936, 48.711115]);

 const markerData = [
    {
      "nom": "parking vello",
      "lat": 2.1714823681541526,
      "lng": 48.70852181718405,
      "type": "velo",
      "description": "Hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "parking vello",
      "lat": 2.1717472239165168,
      "lng": 48.708809273368814,
      "type": "velo",
      "description": "Hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "parking vello",
      "lat": 2.1713686608967158,
      "lng": 48.71044486115616,
      "type": "velo",
      "description": "Hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "parking vello",
      "lat": 2.168814603149155,
      "lng": 48.71016106493906,
      "type": "velo",
      "description": "Hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "parking voiture",
      "lat": 2.1709441163198564,
      "lng": 48.70859174551018,
      "type": "voiture",
      "description": "Hello world",
      "icon": "./img/voiture.png"
    },
    {
      "nom": "Acceuil Polytech",
      "lat": 2.17132188393273,
      "lng": 48.708987042864635,
      "type": "renseignement",
      "description": "Hello world",
      "icon": "./img/rens.png"
    },
    {
      "nom": "salle libre service",
      "lat": 2.1709010620321796,
      "lng": 48.70895845832055,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "terrasse Polytech",
      "lat": 2.171237255185466,
      "lng": 48.709053864600776,
      "type": "espaceLibre",
      "description": "Hello world",
      "icon": "./img/detente.png"
    },
    {
      "nom": "Toilettes Polytech",
      "lat": 2.170941126501224,
      "lng": 48.70905846248925,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "coins pour manger Polytech",
      "lat": 2.171376609860404,
      "lng": 48.70896075726918,
      "type": "espaceLibre",
      "description": "Hello world",
      "icon": "./img/detente.png"
    },
    {
      "nom": "Toilettes Polytech",
      "lat": 2.1715763686799257,
      "lng": 48.70893574291631,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes Polytech",
      "lat": 2.1714165004830206,
      "lng": 48.708892001257,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Acceuil IUT",
      "lat": 2.174546879630951,
      "lng": 48.70926204995699,
      "type": "renseignement",
      "description": "Hello world",
      "icon": "./img/rens.png"
    },
    {
      "nom": "Amphi Coudane",
      "lat": 2.170275999450628,
      "lng": 48.71070156395251,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Amphi 1",
      "lat": 2.1705041275775216,
      "lng": 48.71071159948022,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Amphi 2",
      "lat": 2.1707839647465104,
      "lng": 48.71070557816384,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "infermerie",
      "lat": 2.170345958742877,
      "lng": 48.711066855872076,
      "type": "renseignement",
      "description": "Hello world",
      "icon": "./img/rens.png"
    },
    {
      "nom": "salle libre service",
      "lat": 2.170856965747116,
      "lng": 48.711191295370924,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Médiathèque IUT",
      "lat": 2.1709786340814596,
      "lng": 48.71126756458912,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1707626727880007,
      "lng": 48.711285628334366,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1706866300790364,
      "lng": 48.71117323159183,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1714208363723126,
      "lng": 48.71081819195018,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "secriteriat",
      "lat": 2.1714765096606183,
      "lng": 48.71108519113125,
      "type": "renseignement",
      "description": "Hello world",
      "icon": "./img/rens.png"
    },
    {
      "nom": "salle I118",
      "lat": 2.1714994690407976,
      "lng": 48.71113190327591,
      "type": "espaceTravail",
      "description": "libre service + imprimante",
      "icon": "./img/travail.png"
    },
    {
      "nom": "salle I120",
      "lat": 2.1714975557591156,
      "lng": 48.71107509120236,
      "type": "espaceTravail",
      "description": "libre service + imprimante",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1714975557591156,
      "lng": 48.711280876853095,
      "type": "toilettes",
      "description": "en premier et deuxième étages",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1714975557591156,
      "lng": 48.711280876853095,
      "type": "toilettes",
      "description": "en premier et deuxiéme étages",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1714750657415998,
      "lng": 48.71080437470084,
      "type": "toilettes",
      "description": "en premier et deuxiéme étages",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1700640105576436,
      "lng": 48.710716923373184,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1711500603000893,
      "lng": 48.71076778178764,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "salle MP",
      "lat": 2.1711324031257377,
      "lng": 48.710577573433085,
      "type": "espaceTravail",
      "description": "libre service + imprimante",
      "icon": "./img/travail.png"
    },
    {
      "nom": "Toilettes IUT",
      "lat": 2.1702294781091482,
      "lng": 48.71021967433933,
      "type": "toilettes",
      "description": "Hello world",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "salle chimie",
      "lat": 2.1704959663952947,
      "lng": 48.71021553676266,
      "type": "espaceTravail",
      "description": "libre service + imprimante",
      "icon": "./img/travail.png"
    },
    {
      "nom": "parking voiture",
      "lat": 2.170216937483918,
      "lng": 48.70991349274732,
      "type": "voiture",
      "description": "Hello world",
      "icon": "./img/voiture.png"
    },
    {
      "nom": "parking voiture prof",
      "lat": 2.171052450997913,
      "lng": 48.711405511637196,
      "type": "voiture",
      "description": "Hello world",
      "icon": "./img/voiture.png"
    },
    {
      "nom": "Cafeteria Amphi Hubert Coudane",
      "lat": 2.169910351645844,
      "lng": 48.71072595849432,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Cafeteria Henri Moissan",
      "lat": 2.171912772260336,
      "lng": 48.71158296535447,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Cafeteria Henri Moissan",
      "lat": 2.1724334393968983,
      "lng": 48.71158521085832,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Restaurant universitaire Henri Moissan",
      "lat": 2.171912772260336,
      "lng": 48.71134269586497,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Cafetaria Polytech Paris Saclay",
      "lat": 2.171227492844988,
      "lng": 48.709005619731016,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Cafetaria et restaurant universitaire du lieu de Vie",
      "lat": 2.171465539968687,
      "lng": 48.709506800652576,
      "type": "alimentation",
      "description": "Cafetaria au rez de chaussé et cantine au deuxième étage",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Fontaine d eau",
      "lat": 2.171443,
      "lng": 48.709453,
      "type": "eau",
      "description": "se situe dans la cafetaria",
      "icon": "./img/eau.png"
    },
    {
      "nom": "espace libre du lieu de vie",
      "lat": 2.171511037882402,
      "lng": 48.709469029733384,
      "type": "espaceLibre",
      "description": "tables et babyfoot, se situe au premier étage",
      "icon": "./img/detente.png"
    },
    {
      "nom": "toilettes",
      "lat": 2.1711107506111553,
      "lng": 48.70943900667484,
      "type": "toilettes",
      "description": "se situe au premier étage",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Terrain de basket",
      "lat": 2.1714772813657746,
      "lng": 48.70938670840104,
      "type": "sport",
      "description": "se situe sur le toit ",
      "icon": "./img/sport.png"
    },
    {
      "nom": "Salle de sport SUAPS",
      "lat": 2.171015388125636,
      "lng": 48.70945117528322,
      "type": "sport",
      "description": "se situe au troisième étage",
      "icon": "./img/sport.png"
    },
    {
      "nom": "Parking vélo",
      "lat": 2.1712435199793916,
      "lng": 48.70935200657226,
      "type": "velo",
      "description": "hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "Parking vélo",
      "lat": 2.1714823681541526,
      "lng": 48.70852181718405,
      "type": "velo",
      "description": "hello world",
      "icon": "./img/velo.png"
    },
    {
      "nom": "Acceuil Centrale",
      "lat": 2.1680084206158887,
      "lng": 48.71063612033555,
      "type": "renseignement",
      "description": "acceuil de centrale supelec",
      "icon": "./img/rens.png"
    },
    {
      "nom": "toilettes",
      "lat": 2.1682088503201533,
      "lng": 48.710360586279705,
      "type": "toilettes",
      "description": "se situe au premier étage",
      "icon": "./img/toilettes.png"
    },
    {
      "nom": "Restaurant universitaire de Centrale",
      "lat": 2.1670480282829545,
      "lng": 48.71055897095198,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Cafetaria Centrale",
      "lat": 2.1667974911526238,
      "lng": 48.71033854349005,
      "type": "alimentation",
      "description": "Hello world",
      "icon": "./img/restaurant-icon.png"
    },
    {
      "nom": "Centre des langues",
      "lat": 2.166672222587459,
      "lng": 48.71002994342106,
      "type": "renseignement",
      "description": "au toixieme etage centre des langues",
      "icon": "./img/rens.png"
    },
    {
      "nom": "Médiathèque Centrale",
      "lat": 2.1670480282829545,
      "lng": 48.70987564267679,
      "type": "espaceTravail",
      "description": "Hello world",
      "icon": "./img/travail.png"
    },
    {
      "nom": "espace libre centrale",
      "lat": 2.167540751305938,
      "lng": 48.710669184320864,
      "type": "espaceLibre",
      "description": "se situe au premier étage",
      "icon": "./img/detente.png"
    },
    {
      "nom": "espace libre centrale",
      "lat": 2.1677411810102027,
      "lng": 48.71022832939698,
      "type": "espaceLibre",
      "description": "se situe au premier étage",
      "icon": "./img/detente.png"
    },
    {
      "nom": "parking voiture",
      "lat": 2.1733673290953752,
      "lng": 48.71198522897407,
      "type": "voiture",
      "description": "Hello world",
      "icon": "./img/voiture.png"
    },
    {
      "nom": "parking voiture",
      "lat": 2.1691801666756403,
      "lng": 48.70993283619873,
      "type": "voiture",
      "description": "Hello world",
      "icon": "./img/voiture.png"
    },
    {
      "nom": "scolarité",
      "lat": 2.170664236263446,
      "lng": 48.711186158396686,
      "type": "renseignement",
      "description": "scolarité de l'iut",
      "icon": "./img/rens.png"
    },
    {
      "nom": "Plaque d'information",
      "lat": 2.1673506719776725,
      "lng": 48.71034368972826,
      "type": "renseignement",
      "description": "un ecran qui permet d'avoir plus d'information sur centrale supelec",
      "icon": "./img/rens.png"
    },
    {
      "nom": "toilettes",
      "lat": 2.167073980574709,
      "lng": 48.710317546410124,
      "type": "toilettes",
      "description": "",
      "icon": "./img/toilettes.png"
    }
  ]

  
//---------------------------- Ajouter les markers a la map -------------------------//

function showMore() {
  alert("Vous avez cliqué sur le bouton Voir plus !");
}

  markerData.forEach(marker => {
    var divElement = document.createElement("div");
    divElement.innerHTML =
      '<div class="marker"><img src=" ' +marker.icon +'" width="22" height="26"></div>';
    var marker = new tt.Marker({
      element: divElement,
    })
    
      .setLngLat([marker.lat, marker.lng])
      .addTo(map)
      .setPopup(new tt.Popup({ offset: 30}).setHTML("<b>" + marker.description + "</b><br><button onclick = showMore()> Itinéraire </button>"));   
  });

 //--------------------------------- Filtre -----------------------------------------//

var button1 = document.getElementById('markerBtn0');
button1.addEventListener('click', function() {
  showMarkersOfType('alimentation');
});

var button2 = document.getElementById('markerBtn1');
button2.addEventListener('click', function() {
  showMarkersOfType('toilettes');
});

var button3 = document.getElementById('markerBtn2');
button3.addEventListener('click', function() {
  showMarkersOfType('espaceTravail');
});

var button1 = document.getElementById('markerBtn3');
button1.addEventListener('click', function() {
  showMarkersOfType('espaceLibre');
});

var button2 = document.getElementById('markerBtn4');
button2.addEventListener('click', function() {
  showMarkersOfType('renseignement');
});

var button3 = document.getElementById('markerBtn5');
button3.addEventListener('click', function() {
  showMarkersOfType('voiture');
});
  
var button3 = document.getElementById('markerBtn6');
button3.addEventListener('click', function() {
  showMarkersOfType('sport');
});


function showMarkersOfType(type) {
  var markers = markerData;
  if (type === "voiture"){
    for (var i = 0; i < markerData.length; i++) {
      if ((markerData[i].type === "voiture") || ((markerData[i].type === "velo")) ){
        markerData[i].setVisible(true);
      } else {
        markerData[i].setVisible(false);
      }
    }
  } else {
    for (var i = 0; i < markerData.length; i++) {
      if ((markerData[i].type === type) ){
        markerData[i].setVisible(true);
      } else {
        markerData[i].setVisible(false);
      }
    }
  }
}
  