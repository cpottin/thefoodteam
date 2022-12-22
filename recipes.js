import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
  CINDY2_SPOON_KEY,
} from "./secrets.js";

import { fetchJson } from "./fetchJson.js";

import { handleError } from "./error.js";

import { DEFAULT_IMAGE } from "./constants.js";

// Load search result cards

export function getRecipes(search) {
  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${CINDYS_SPPON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS2_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${DAVIDS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  fetchJson(apiUrl)
    .then((json) => {
      //remove top image container

      top_img_container.innerHTML = "";

      // clear card deck

      card_deck.innerHTML = "";

      for (let i = 0; i < json.results.length; i++) {
        card_deck.innerHTML += `

                <div class="card result">

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
                }" class="btn btn-info recipe_card_btn">

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

  let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${SHUOFEIS_SPOON_KEY}`;


  //let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${CINDYS_SPPON_KEY}`

  // let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${SHUOFEIS_SPOON_KEY}`

  //let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${SHUOFEIS2_SPOON_KEY}`

  let recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${CINDY2_SPOON_KEY}`

  //get button by class with classlist
  if (recipeBtn.classList.contains("recipe_card_btn")) {

    fetchJson(recipeUrl).then((json) => {
      //remove top image container

      if (!json.url) {
        top_img_container.innerHTML = "";

        // clear card deck

        card_deck.innerHTML = "";

        card_deck.innerHTML = `

            <h2>This recipe card cannot be generated. Please try another recipe.</h2>
  
                    <div class="container-fluid">
  
                        <div class="row justify-content-center">
  
                        <img src="${DEFAULT_IMAGE}" >
  
                        </div>
  
                    </div>
  
                    `;
      } else {
        top_img_container.innerHTML = "";

        // clear card deck

        card_deck.innerHTML = "";

        card_deck.innerHTML = `

                  <div class="container-fluid">

                      <div class="row justify-content-center">


                      <img src="${json.url}" width="700" height="900">

                      </div>

                  </div>

                  `;
      }
    });
  }
}
