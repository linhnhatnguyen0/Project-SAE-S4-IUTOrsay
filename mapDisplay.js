import { map } from "./script.js";
const input = document.querySelector("input");

function search() {
  tt.services
    .fuzzySearch({
      key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
      query: input.value,
      language: "fr-FR",
    })
    .then(function (response) {
      // Récupère les informations sur le lieu à partir de la réponse
      var place = response.results[0];
      for (let index = 0; index < response.results.length; index++) {
        const element = response.results[index];
        console.log(element.address.freeformAddress);
      }

      console.log(place.address.freeformAddress);
      // Déplace la carte à la position du lieu
      map.flyTo({
        center: place.position,
      });

      // Ajoute un marqueur à la position du lieu
      var marker = new tt.Marker().setLngLat(place.position).addTo(map);

      // Affiche les informations sur le lieu dans une fenêtre contextuelle
      var popup = new tt.Popup({ offset: 30 }).setHTML(
        "<h3>" +
          place.address.freeformAddress +
          "</h3><p>" +
          place.poi.name +
          "</p>"
      );
      marker.setPopup(popup).togglePopup();
    });
}
