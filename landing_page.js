import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
  CINDY2_SPOON_KEY
} from "./secrets.js";
import { DEFAULT_IMAGE } from "./constants.js";

// Loads random recipes on home page
export async function getLandingPageRecipes() {
  const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${DAVIDS_SPOON_KEY}&number=3&tags=chocolate`;
  //const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${CINDYS_SPPON_KEY}&number=3&tags=chocolate`;
  //const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${CINDY2_SPOON_KEY}&number=3&tags=chocolate`;
  //const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${SHUOFEIS_SPOON_KEY}&number=3&tags=chocolate`;
  //const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${SHUOFEIS2_SPOON_KEY}&number=3&tags=chocolate`;

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
                  <small class="text-muted">Time to cook: ${
                    json.recipes[i].readyInMinutes
                    } mins
                  </small>
                </p>
                  <button type="button" id="${
                      json.recipes[i].id
                    }" class="btn btn-info recipe_card_btn">Go to Recipe Card
                  </button>
            </div>
          </div>`;
      }
    });
}

// Display random Joke
export function getJoke(){
  const jokeURL = `https://api.spoonacular.com/food/trivia/random?apiKey=${DAVIDS_SPOON_KEY}`;
  fetch(jokeURL)
  .then((res) => res.json())
  .then((json) => {
    top_img_container.innerHTML = "";
    top_img_container.innerHTML = `<div>
    <p>FOOD TRIVIA: ${json.text}</p>
    </div>`;
});
}

/* const triviaModal = document.createElement('div');
    triviaModal.classList.add("modal-dialog modal-dialog-centered modal-dialog-scrollable");
    triviaModal.id("trivia_modal");
    triviaModal.innerHTML =`
    <div class ="modalContent"
    <span class="close">&times;</span>
    <p>FOOD TRIVIA: ${json.text}</p>
    </div>`;*/