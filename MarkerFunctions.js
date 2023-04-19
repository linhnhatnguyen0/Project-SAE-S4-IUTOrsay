var map = tt.map({
    key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
    container: "map",
  });
  map.setZoom(17);
  map.setCenter([2.170936, 48.711115]);

  const jsonFilePath = "markerData.json";

//---------------------------- Ajouter les markers a la map -------------------------//


  function addMarkersToMap(jsonFilePath) {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
          data.markerData.forEach(marker => {
            var divElement = document.createElement("div");
            divElement.innerHTML =
            '<div class="marker"><img src=" ' + marker.icon + '" width="22" height="26"></div>'
            const ttMarker = new tt.Marker({ 
              element: divElement,
            })
              .setLngLat([marker.lng, marker.lat])
              .setPopup(new tt.Popup().setHTML("<b>" + marker.description + "</b>"))
              .addTo(map);
          });
      });
  }

  addMarkersToMap(jsonFilePath);
  
  

  
  