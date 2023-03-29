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
