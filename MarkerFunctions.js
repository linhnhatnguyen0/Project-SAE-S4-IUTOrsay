var map = tt.map({
    key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
    container: "map",
  });
  map.setZoom(17);
  map.setCenter([2.170936, 48.711115]);

  const jsonFilePath = "markerData.json";

  map.on('load', function() {
    addMarkersToMap(jsonFilePath);
});

//---------------------------- Ajouter les markers a la map -------------------------//

  
function addMarkersToMap(jsonFilePath) {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(markerData => {
        const markers = markerData.markerData.map(marker => {
          const ttMarker = new tt.Marker({
            element: document.createElement('div'),
            anchor: 'bottom',
            draggable: false,
            icon: {
              url: marker.icon,
              size: [50, 50],
              anchor: 'bottom',
            },
          })
          .setLngLat([marker.lat, marker.lng])
          .addTo(map);
  
          // Ajouter un événement de clic pour afficher une info-bulle avec les détails du marqueur
          ttMarker.on('click', () => {
            const popup = new tt.Popup({ offset: 30 }).setHTML(`
              <p>${marker.nom}</p>
              <p>${marker.description}</p>
            `);
            ttMarker.setPopup(popup).togglePopup();
          });
        });
      })
      .catch(err => {
        console.error(err);
      });
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
  
  