
import { DAVIDS_SPOON_KEY, CINDYS_SPPON_KEY, SHUOFEIS_SPOON_KEY } from "./secrets.js";
import { fetchJson } from "./fetchJson.js";
import { handleError } from "./error.js";


export function getRecipes(search) {

  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SHUOFEIS_SPOON_KEY}&query=${search}&number=6`;
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${DAVIDS_SPOON_KEY}&query=${search}&addRecipeInformation=true&instructionsRequired=true&number=6`;
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
                    src="${json.results[i].image}"
                    alt="picture of ${json.results[i].title}"
                    />
                <div class="card-body">
                <h5 class="card-title">${json.results[i].title}</h5>
                <p class="card-text">
                <small class="text-muted">Time to cook: ${json.results[i].readyInMinutes}</small>
                </p>
                <button class="btn btn-warning recipe" 
                onclick="gotoRecipe("https://api.spoonacular.com/recipes/${json.results[i].id}/card?apiKey=${DAVIDS_SPOON_KEY}")">
                Go to Recipe
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


//json.results[i].id.addEventListener("click", gotoRecipe)

function gotoRecipe(recipeUrl) {
    fetchJson(recipeUrl);
    card_deck.innerHTML = `<img src="json.url"></image>`;
    

}
