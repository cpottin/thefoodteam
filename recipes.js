import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
  CINDY2_SPOON_KEY
} from "./secrets.js";
import { fetchJson } from "./fetchJson.js";
import { handleError } from "./error.js";
import { DEFAULT_IMAGE } from "./constants.js";

export function getRecipes(search) {


  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS_SPOON_KEY}&query=${search}&number=6`;
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${CINDY2_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;

  //let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${CINDYS_SPPON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
  debugger;

  fetchJson(apiUrl)
    .then((json) => {
      //remove top image container
      top_img_container.innerHTML = "";
      // clear card deck
      card_deck.innerHTML = "";

      /*
            TODO: the layout for search results is not complete 
            results need to be styled such that there are 2 rows of 3 cards
            information displayed on cards need to be decided
            */

      for (let i = 0; i < json.results.length; i++) {
        card_deck.innerHTML += `
                <div class="card">
                    <img
                    class="card-img-top"
                    src="${json.results[i].image ? json.results[i].image : DEFAULT_IMAGE}"
                    alt="picture of ${json.results[i].title}"
                    />
                <div class="card-body">
                <h5 class="card-title">${json.results[i].title}</h5>
                <p class="card-text">
                <small class="text-muted">Time to cook: ${json.results[i].readyInMinutes}</small>
                </p>
                <button type="button" id="${json.results[i].id}" class="btn btn-warning recipe_card_btn">
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



document.body.addEventListener("click", gotoRecipe);

function gotoRecipe(event) {
  //identified the evnet target  
  const recipeBtn = event.target;
    //get ID from the button when the id is the id from the first call
  const recipeID = recipeBtn.id;
    //get button by class with classlist
    if(recipeBtn.classList.contains("recipe_card_btn")){
    //need to add idValue to attributes?  
     fetch(`https://api.spoonacular.com/recipes/${recipeID}/card?apiKey=${CINDY2_SPOON_KEY}`)
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
