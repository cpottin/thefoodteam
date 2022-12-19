/*dynamically display random recipes on landing page*/
//https://api.spoonacular.com/recipes/random?apiKey=99e238076c3b4aa1a59a213bb6105964&number=3&tags=christmas
//recipes.title and recipes.image

import {
  DAVIDS_SPOON_KEY,
  CINDYS_SPPON_KEY,
  SHUOFEIS_SPOON_KEY,
  SHUOFEIS2_SPOON_KEY,
} from "./secrets.js";

export async function getLandingPageRecipes() {
  const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=${SHUOFEIS2_SPOON_KEY}&number=3&tags=chocolate`;

  fetch(spoon_similar_recipes_URL)
    .then((res) => res.json())
    .then((json) => {
      card_deck.innerHTML = "";

      for (let i = 0; i < json.recipes.length; i++) {
        card_deck.innerHTML += `
            <div class="card">
                 <img
                   class="card-img-top"
                   src="${json.recipes[i].image}"
                       alt="${json.recipes[i].title}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${json.recipes[i].title}</h5>
                      <p class="card-text">
                        <small class="text-muted">Time to Prep: ${json.recipes[i].readyInMinutes}</small>
                      </p>
                 </div>
            </div>`;
      }
    });
}

// export function quickQestion(){

// }
// function showLandingPageRecipes({title: title, image: image, readyInMinutes: readyInMinutes}){
//     card_deck.innerHTML = `
//     <div class="card">
//         <img
//           class="card-img-top"
//           src="${image}"
//           alt="${title}"
//         />
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class="card-text">
//             <small class="text-muted">Time to Prep: ${readyInMinutes}</small>
//           </p>
//         </div>
//       </div>
//     `
//     }
