import { DAVIDS_SPOON_KEY } from "./secrets.js";
import { fetchJson } from "./fetchJson.js";
import { handleError } from "./error.js";

export function getRecipes(search) {
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${DAVIDS_SPOON_KEY}&query=${search}&number=6`;

  fetchJson(apiUrl)
    .then((json) => {
      //remove top image container
      top_img_container.remove();
      // clear card deck
      card_deck.innerHTML = "";
      debugger;

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
                <small class="text-muted">${json.results[i].id}</small>
                </p>
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
