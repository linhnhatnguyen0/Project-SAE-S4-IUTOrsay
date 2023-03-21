var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(16);
map.setCenter([2.1687733041872796, 48.71115032809517]);

var divElement = document.createElement("div");
divElement.innerHTML =
  '<img src="https://cdn-icons-png.flaticon.com/512/685/685352.png" width="32" height="32">';

var marker = new tt.Marker({
  element: divElement,
})
  .setLngLat([2.1687733041872796, 48.71115032809517])
  .addTo(map);
