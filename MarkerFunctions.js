var map = tt.map({
    key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
    container: "map",
  });
  map.setZoom(17);
  map.setCenter([2.170936, 48.711115]);

  const jsonFilePath = "markerData.json";

  map.on('load', function() {
    addIconsToMarkers(jsonFilePath);
    addMarkersToMap(jsonFilePath);
});

//---------------------------- Ajouter les icons au marker ---------------------//


function addIconsToMarkers(jsonFilePath) {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(markerData => {
        const iconMap = {
          velo: "img/velo.png",
          voiture: "img/voiture.png",
          alimentation : "img/restaurant-icon.png",
          eau : "img/eau.png",
          toilettes : "img/toilettes.png",
          sport : "img/sport.png",
          espaceTravail : "img/travail.png",
          renseignement : "img/rens.png",
          espaceLibre : "detente.png",
        };
  
        const markersWithIcons = markerData.markerData.map(marker => ({
          ...marker,
          icon: iconMap[marker.type] || ""
        }));
  
        fetch(jsonFilePath)
          .then(response => response.json())
          .then(data => {
            data.markerData = markersWithIcons;
            return fetch(jsonFilePath, {
              method: "GET", // Change the HTTP method to GET
              headers: {
                "Content-Type": "application/json"
              }
            })
          })
          .then(() => {
            console.log('Fichier mis à jour avec les icônes ajoutées!');
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  }
  

 // addIconsToMarkers(jsonFilePath);

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
            position: [marker.lat, marker.lon],
            icon: {
              url: marker.icon,
              size: [50, 50],
              anchor: 'bottom',
            },
          });
  
          // Ajouter un événement de clic pour afficher une info-bulle avec les détails du marqueur
          ttMarker.on('click', () => {
            const popup = new tt.Popup({ offset: 30 }).setHTML(`
              <p>${marker.nom}</p>
              <p>${marker.description}</p>
            `);
            ttMarker.setPopup(popup).togglePopup();
          });
  
          return ttMarker;
        });
  
        markers.forEach(marker => {
          marker.addTo(map);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  

 
  