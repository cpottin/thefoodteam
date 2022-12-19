import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
} from "./secrets.js";

//function to get resturant by location
export function getRestaurantsByLocation({
  coords: { latitude: lat, longitude: lon },
}) {
  const restaurantsURL = `https://api.spoonacular.com/food/restaurants/search?apiKey=${SHUOFEIS2_SPOON_KEY}&cuisine=italian&lat=${lat}&lng=${lon}`;

  fetch(restaurantsURL)
    .then((res) => res.json())
    .then((json) => {
      showRestaurants(json);
    });
}

function showRestaurants({ restaurants: [restaurantsInfo] }) {
  card_deck.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    debugger;
    card_deck.innerHTML += `
        <div class="card">
             <img
               class="card-img-top"
               src="${restaurantsInfo.food_photos}"
                   alt="${restaurantsInfo.food_photos}"
                />
                <div class="card-body">
                  <h5 class="card-title">${restaurantsInfo.name}</h5>
                  <p class="card-text">
                    <small class="text-muted">Address:
                     ${restaurantsInfo.address.street_addr} 
                     ${restaurantsInfo.address.city}
                     ${restaurantsInfo.address.state}
                     ${restaurantsInfo.address.zipcode}
                     </small>
                  </p>
                </div>
        </div>`;
  }

  // const resturantInfoContainer = document.createElement("div");

  // resturantInfoContainer.innerHTML = `
  //   <p>Restaurant Name: ${restaurantsInfo.name}</p>
  //   <p>Restaurant Phone Number: ${restaurantsInfo.phone_number}</p>
  //   <p>${restaurantsInfo.address}</p>
  //   <p>${restaurantsInfo.description.value}</p>
  //   `;
  // document.body.prepend(resturantInfoContainer);
}
