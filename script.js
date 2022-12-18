
import {getRecipes} from "./recipes.js"

const DEFAULT_ERROR_MESSAGE = "API call error: Please double check your url and make sure the server is up and running."
/*dynamically display random recipes on landing page*/
//https://api.spoonacular.com/recipes/random?apiKey=99e238076c3b4aa1a59a213bb6105964&number=3&tags=christmas
//recipes.title and recipes.image


/*goelocation*/
/* Get user's location if we can*/

if (navigator.geolocation){
    //ask user permission to use their location
    navigator.geolocation.getCurrentPosition(getWeatherByLocation, handleLocationError);

    function handleLocationError(err){
        handleError(err.message);
    }
}

function getWeatherByLocation({coords: {latitude: lat, longitude: lon}}){

    const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=56d9dbad82d913f3a47c8acc41ab00a3&units=imperial`

    fetch(weatherAPIURL)
        .then((res) => res.json())
        .then((json) => {
            showWeather(json);
        });
}

function showWeather({main: {temp}, weather: [weatherInfo]}){
    const weatherInfoContainer = document.createElement("div")

    weatherInfoContainer.innerHTML = `
    <div align="right">
    <p>${temp}&#8457; ${weatherInfo.description}</p>
    <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png"/>
    </div>
    `
    document.getElementById("title_bar").append(weatherInfoContainer);
}

/*Function to get recipes with search from landing page*/
search_bar.addEventListener("submit", (event) => {
    event.preventDefault();

    getRecipes(search_term.value);

    search_form.reset();
})
    
function handleError(msg = DEFAULT_ERROR_MESSAGE) {
    const alert_container = document.createElement("div")
    alert_container.className = "alert alert-warning alert-dismissible fade show";
    alert_container.setAttribute("role", "alert");

    alert_container.innerHTML = `
        <strong>${msg}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        </button>
        `;
        document.body.prepend(alert_container);
}
