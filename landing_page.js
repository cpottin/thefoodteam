/*dynamically display random recipes on landing page*/
//https://api.spoonacular.com/recipes/random?apiKey=99e238076c3b4aa1a59a213bb6105964&number=3&tags=christmas
//recipes.title and recipes.image

import { DEFAULT_ERROR_MESSAGE } from "./constants.js";
import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
} from "./secrets.js";

import { DEFAULT_IMAGE } from "./constants.js";

export async function getLandingPageRecipes() {
  const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${CINDYS_SPPON_KEY}&number=3&tags=chocolate`;

  fetch(spoon_similar_recipes_URL)
    .then((res) => res.json())
    .then((json) => {
      card_deck.innerHTML = "";

      for (let i = 0; i < json.recipes.length; i++) {
        card_deck.innerHTML += `
            <div class="card">
                 <img
                   class="card-img-top rounded-top"
                   src="${
                     json.recipes[i].image
                       ? json.recipes[i].image
                       : DEFAULT_IMAGE
                   }"
                       alt="${json.recipes[i].title}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${json.recipes[i].title}</h5>
                      <p class="card-text">
                        <small class="text-muted">Time to Prep: ${
                          json.recipes[i].readyInMinutes
                        }</small>
                      </p>

                      <button type="button" id="${json.recipes[i].id}" class="btn btn-info recipe_card_btn">Go to Recipe Card</button>

                      
        
                 </div>

                   </div>`;
      }
    });
}

document.body.addEventListener("click", displayRecipeCard);

function displayRecipeCard(event) {
  //identified the evnet target
  const recipeBtn = event.target;
  //get ID from the button when the id is the id from the first call
  const recipeID = recipeBtn.id;
  //get button by class with classlist
  if (recipeBtn.classList.contains("recipe_card_btn")) {
    //need to add idValue to attributes?
    fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=99e238076c3b4aa1a59a213bb6105964`
    )
      .then((res) => res.json())
      .then((json) => {
        //remove top image container
        top_img_container.innerHTML = "";
        // clear card deck
        card_deck.innerHTML = "";
        card_deck.innerHTML = `
        <div>
                    <img
                    src="${json.url}"
                    />
        </div>
                `;
      });
  }
}
