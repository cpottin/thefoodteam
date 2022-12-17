
//function to get resturant by location
function getRestaurantsByLocation({coords: {latitude: lat, longitude: lon}}){

    const restaurantsURL = `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}cuisine=italian&lat=${lat}&lng=${lon}`

    fetch(restaurantsURL)
        .then((res) => res.json())
        .then((json) => {
            showRestuarants(json);
        });
}

function showRestuarants({restaurants: [restaurantsInfo], description}){
    const resturantInfoContainer = document.createElement("div")

    resturantInfoContainer.innerHTML = `
    <p>${restaurantsInfo.name}</p>
    <p>${restaurantsInfo.phone_number}</p>
    <p>${restaurantsInfo.address}</p>
    <p>${restaurants.description}</p>
    `
    document.body.prepend(top_img_container);
}

