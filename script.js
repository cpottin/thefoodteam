import { getRecipes } from "./recipes.js";
import { getLandingPageRecipes } from "./landing_page.js";
import { getRestaurantsByLocation } from "./restaurantInfo.js";
import { getTeamInfo } from "./team.js";
import { getJoke } from "./landing_page.js";
import { gotoRecipe } from "./recipes.js"
import { handleError } from "./error.js";


/*goelocation*/
/* Get user's location if we can*/
if (navigator.geolocation) {
  //ask user permission to use their location
  navigator.geolocation.getCurrentPosition(
    getWeatherByLocation,
    handleLocationError
  );

  function handleLocationError(err) {
    handleError(err.message);
  }
}

// get and show weather details
function getWeatherByLocation({ coords: { latitude: lat, longitude: lon } }) {
  const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=56d9dbad82d913f3a47c8acc41ab00a3&units=imperial`;

  fetch(weatherAPIURL)
    .then((res) => res.json())
    .then((json) => {
      showWeather(json);
    });
}
function showWeather({ main: { temp }, weather: [weatherInfo] }) {
  const weatherInfoContainer = document.getElementById("weather_span");

  weatherInfoContainer.innerHTML = `
    <div>
    <p>Today's Weather</p>
    <p>Temp: ${temp}&#8457; </p>
    <p>${weatherInfo.description}</p>
    <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png"/>
    </div>
    `;
}

//onload dynamically create 3 cards for the landing page
window.addEventListener("load", getLandingPageRecipes);

/*Search for Recipes*/
search_bar.addEventListener("submit", (event) => {
  event.preventDefault();

  getRecipes(search_term.value);

  search_form.reset();
});

// Searches for nearby Restaurants
search_local_restaurants.addEventListener("click", (event) => {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(
    getRestaurantsByLocation,
    handleLocationError
  );

  function handleLocationError(err) {
    handleError(err.message);
  }
});




/*get team info with About the Team on landing page*/
about_the_team.addEventListener("click", (event) => {
  event.preventDefault();
  getTeamInfo();
});



/*get Random Joke and prepend it to the landing page*/
// random_joke.addEventListener("click", (event) => {
//   event.preventDefault();
//   getJoke();
// });
// random_joke2.addEventListener("click", (event) => {
//   event.preventDefault();
//   getJoke();
// });



// GoTo full Recipes  works for both landing results and search results
document.body.addEventListener("click", gotoRecipe);

