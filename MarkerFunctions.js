import { map } from "./mapDisplay.js";
import { markerData } from "./markerData.js";

const markers = [];
let markersActuels = [];

//---------------------------- Ajouter les markers a la map -------------------------//

function showMore() {
  alert("Vous avez cliqué sur le bouton Voir plus !");
}

markerData.forEach((marker) => {
  var divElement = document.createElement("div");
  divElement.innerHTML =
    '<div class="marker"><img src=" ' +
    marker.icon +
    '" width="22" height="26"><p>' +
    marker.nom +
    "</p></div>";
  var marker = new tt.Marker({
    element: divElement,
  })
    .setLngLat([marker.lat, marker.lng])
    .addTo(map)
    .setPopup(
      new tt.Popup({ offset: 30 }).setHTML(
        "<b>" +
          marker.description +
          "</b><br><button onclick = showMore()> Voir plus</button>"
      )
    );
  markers.push(marker);
});
//--------------------------------- Filtre -----------------------------------------//

var button1 = document.getElementById("markerBtn0");
button1.addEventListener("click", function () {
  showMarkersOfType("alimentation");
});

var button2 = document.getElementById("markerBtn1");
button2.addEventListener("click", function () {
  showMarkersOfType("toilettes");
});

var button3 = document.getElementById("markerBtn2");
button3.addEventListener("click", function () {
  showMarkersOfType("espaceTravail");
});

var button4 = document.getElementById("markerBtn3");
button4.addEventListener("click", function () {
  showMarkersOfType("espaceLibre");
});

var button5 = document.getElementById("markerBtn4");
button5.addEventListener("click", function () {
  showMarkersOfType("renseignement");
});

var button6 = document.getElementById("markerBtn5");
button6.addEventListener("click", function () {
  showMarkersOfType("voiture");
});

var button7 = document.getElementById("markerBtn6");
button7.addEventListener("click", function () {
  showMarkersOfType("sport");
});

var button8 = document.getElementById("markerBtn7");
button8.addEventListener("click", function () {
  markers.forEach((marker) => {
    marker.addTo(map);
  });
});

map.on("zoom", function () {
  console.log(map.getZoom());
  if (map.getZoom() < 17.5) {
    markersActuels.forEach((marker) => {
      marker.remove();
    });
  } else {
    markersActuels.forEach((marker) => {
      marker.addTo(map);
    });
  }
});

function showMarkersOfType(typeMarker) {
  markersActuels = [];
  for (let i = 0; i < markerData.length; i++) {
    if (markerData[i].type === typeMarker) {
      markers[i].addTo(map);
      markersActuels.push(markers[i]);
    } else {
      markers[i].remove();
    }
  }
}
