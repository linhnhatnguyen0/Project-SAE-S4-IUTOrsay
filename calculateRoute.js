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

const buttonRoute = document.querySelector("#buttonRoute");
buttonRoute.addEventListener("click", clickHandler);

function clickHandler() {
  try {
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
