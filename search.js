import { map } from "./mapDisplay.js";

const input = document.querySelector("input");
const list = document.querySelector("#list");

input.addEventListener("input", search);
const buttonRoute = document.querySelector("button");
buttonRoute.addEventListener("click", search);
const limit1 = new tt.LngLat(2.153817345858007, 48.69316164834651);
const limit2 = new tt.LngLat(2.213126353025485, 48.7180275296061);
var boundingBox = new tt.LngLatBounds(limit1, limit2);
function search() {
  if (input.value === "") {
    list.innerHTML = "";
  }
  if (input.value.length < 3) return;
  try {
    tt.services
      .fuzzySearch({
        key: "Ue34QD5EuCWqslTHMvMzNIAhGwxEWhbj",
        query: input.value,
        language: "fr-FR",
        countrySet: "FR",
        boundingBox: boundingBox,
        limit: 5,
      })
      .then(function (response) {
        // Récupère les informations sur le lieu à partir de la réponse
        console.log(response);
        list.innerHTML = "";
        for (let index = 0; index < response.results.length; index++) {
          const element = response.results[index];
          console.log(element.address.freeformAddress);
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.innerHTML =
            "<h5>" +
            element.poi.name +
            "</h5>" +
            "<p>" +
            element.address.freeformAddress +
            "</p>";
          li.addEventListener("click", function () {
            map.flyTo({
              center: element.position,
            });
            var marker = new tt.Marker().setLngLat(element.position).addTo(map);
          });
          list.appendChild(li);
        }
      });
    // Déplace la carte à la position du lieu
    //   map.flyTo({
    //     center: place.position,
    //   });

    //   // Affiche les informations sur le lieu dans une fenêtre contextuelle
    //   var popup = new tt.Popup({ offset: 30 }).setHTML(
    //     "<h3>" +
    //       place.address.freeformAddress +
    //       "</h3><p>" +
    //       place.poi.name +
    //       "</p>"
    //   );
    //   marker.setPopup(popup).togglePopup();
    //
  } catch (error) {
    console.log(error);
  }
}
