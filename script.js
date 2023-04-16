var map = tt.map({
  key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
  container: "map",
});
map.setZoom(17);
map.setCenter([2.170936, 48.711115]);

//cafet IUT
var divElement = document.createElement("div");
divElement.innerHTML =
  '<div class="marker"><img src="./img/restaurant-icon.png" width="32" height="40"><p>Cafeteria Amphi Hubert Coudane</p></div>';
var marker = new tt.Marker({
  element: divElement,
})
  .setLngLat([2.170191469892004, 48.710711586415286])
  .addTo(map)
  .setPopup(new tt.Popup().setHTML("<b>Hello world!</b>"));

//cafet moissan
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

//tt.load().then(map);
/*
tt.setToken("Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj");
tt.setProductInfo('MapsSDKExamples', '1.0');
tt.services.setToken('Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj');
var mapsService = tt.services.MapsService({ key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj' });
var options = {
  language: 'fr-FR',
  minNumberOfCharacters: 2,
  limit: 5
};

var searchBoxContainer = document.getElementById('searchBox');
var ttSearchBox = new tt.plugins.SearchBox(mapsService, options)
var searchMarkersManager = new SearchMarkersManager(map)
ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound)
ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection)
ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection)
ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultClearing)
map.addControl(ttSearchBox, "top-right")
searchBoxContainer.appendChild(ttsearchBox.getSearchBoxHTML());
*/


 var searchOptions= {
      key: 'Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj',
      limit: 5,
      idxSet: 'POI,Geo',
      language: 'fr-FR'
  };

/*
var searchBox = new tt.plugins.SearchBox(tt.services, searchOptions);
searchBox.addTo(map);*/

var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchOptions)
/*var searchMarkersManager = new SearchMarkersManager(map)
ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound)
ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection)
ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection)
ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultClearing)*/
map.addControl(ttSearchBox, "top-left")

