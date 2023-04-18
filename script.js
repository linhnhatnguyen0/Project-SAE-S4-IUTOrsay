var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(17);
map.setCenter([2.170936, 48.711115]);

var divElement = document.createElement("div");
divElement.innerHTML =
  '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Cafeteria Amphi Hubert Coudane</p></div>';
var marker = new tt.Marker({
  element: divElement,
})
  .setLngLat([2.170191469892004, 48.710711586415286])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));

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
routeoptions.travelMode = "pedestrian";
const button = document.querySelector("#buttonRoute");
button.addEventListener("click", clickHandler);

function clickHandler() {
  try {
    tt.services.calculateRoute(routeoptions).then(function (response) {
      var geojson = response.toGeoJson();
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
// var source = [2.1688376763699813, 48.7118157869293];
// var destination = [2.169020066581464, 48.709663607193576];

// map.addControl(new tt.FullscreenControl());
// map.addControl(new tt.NavigationControl());

// var markerSource = new tt.Marker().setLngLat(source).addTo(map);
// var markerDestination = new tt.Marker().setLngLat(destination).addTo(map);

// Replace 'your-api-key' with your actual TomTom API key
