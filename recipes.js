import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
} from "./secrets.js";
import { fetchJson } from "./fetchJson.js";
import { handleError } from "./error.js";
import { DEFAULT_IMAGE } from "./constants.js";

// Load search result cards
export function getRecipes(search) {
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${CINDY2_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${CINDYS_SPPON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS2_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${DAVIDS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  fetchJson(apiUrl)
    .then((json) => {
      //remove top image container
      top_img_container.innerHTML = "";
      // clear card deck
      card_deck.innerHTML = "";

      for (let i = 0; i < json.results.length; i++) {
        card_deck.innerHTML += `
                <div class="card">
                    <img
                    class="card-img-top"
                    src="${
                      json.results[i].image
                        ? json.results[i].image
                        : DEFAULT_IMAGE
                    }"
                    alt="picture of ${json.results[i].title}"
                    />
                <div class="card-body">
                <h5 class="card-title">${json.results[i].title}</h5>
                <p class="card-text">
                <small class="text-muted">Time to cook: ${
                  json.results[i].readyInMinutes
                } mins</small>
                </p>
                <button type="button" id="${
                  json.results[i].id
                }" class="btn btn-warning recipe_card_btn">
                Go to Recipe Card
                </button>
                </div>
                </div>
                `;
      }
    })
    .catch((error) => {
      if (error) {
        handleError();
      }
    });
}

// Displays full Recipe Card on button click
export function gotoRecipe(event) {
  //identified the evnet target
  const recipeBtn = event.target;
  //get ID from the button when the id is the id from the first call
  const recipeID = recipeBtn.id;
  //get button by class with classlist
  let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${CINDY2_SPOON_KEY}`;
  // let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${CINDYS_SPPON_KEY}`
  // let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${SHUOFEIS_SPOON_KEY}`
  // let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${SHUOFEIS2_SPOON_KEY}`
  // let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${DAVIDS_SPOON_KEY}`

<<<<<<< HEAD
  if (recipeBtn.classList.contains("recipe_card_btn")) {
    //need to add idValue to attributes?
    fetchJson(recipeUrl).then((json) => {
      //remove top image container
      top_img_container.innerHTML = "";
      // clear card deck
      card_deck.innerHTML = "";
      card_deck.innerHTML = `
                  <div>
                    <img
                    src="${json.url}"
                    />
=======
        //remove top image container
        top_img_container.innerHTML = "";
        // clear card deck
        card_deck.innerHTML = "";
        card_deck.innerHTML = `
                  <div class="container-fluid">
                      <div class="row justify-content-center">
                      <img src="${json.url}" width="500" height="600">
                      </div>
>>>>>>> 1a60ce9250d52e7b1113ce07f4dbf36215ed0c48
                  </div>
                  `;
    });
  }
}
