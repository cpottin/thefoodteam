import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
} from "./secrets.js";
import { fetchJson } from "./fetchJson.js";
import { handleError } from "./error.js";

//function to get resturant by location
export function getRestaurantsByLocation({
  coords: { latitude: lat, longitude: lon },
}) {
  const restaurantsURL = `https://api.spoonacular.com/food/restaurants/search?apiKey=${SHUOFEIS2_SPOON_KEY}&lat=${lat}&lng=${lon}`;

  fetchJson(restaurantsURL)
    .then((json) => {
      card_deck.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        card_deck.innerHTML += `
        <div class="card">
             <img
               class="card-img-top"
               src="${json.restaurants[i].logo_photos}"
                   alt="${json.restaurants[i].logo_photos}"
                />
                <div class="card-body">
                  <h5 class="card-title">${json.restaurants[i].name}</h5>
                  <p class="card-text">
                    <small class="text-muted">Address:
                     ${json.restaurants[i].address.street_addr} 
                     ${json.restaurants[i].address.city}
                     ${json.restaurants[i].address.state}
                     ${json.restaurants[i].address.zipcode}
                     </small>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Telephone Number:
                     ${json.restaurants[i].phone_number} 
                     </small>
                  </p>
                </div>
        </div>`;
      }
    })
    .catch((error) => {
      if (error) {
        handleError();
      }
    });
}
