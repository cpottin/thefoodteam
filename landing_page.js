  /*dynamically display random recipes on landing page*/
//https://api.spoonacular.com/recipes/random?apiKey=99e238076c3b4aa1a59a213bb6105964&number=3&tags=christmas
//recipes.title and recipes.image

export function getLandingPageRecipes(){
    const spoon_similar_recipes_URL = `https://api.spoonacular.com/recipes/random?apiKey=99e238076c3b4aa1a59a213bb6105964&number=1&tags=chocolate`;

    fetch(spoon_similar_recipes_URL)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json.recipes);
        });
}
function showLandingPageRecipes(title, image, summary, readyInMinutes){
    card_deck.innerHTML = `
    <div class="card">
        <img
          class="card-img-top"
          src=""
          alt="${title}"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${summary}
          </p>
          <p class="card-text">
            <small class="text-muted">Time to Prep: ${readyInMinutes}</small>
          </p>
        </div>
      </div>
    `
    }