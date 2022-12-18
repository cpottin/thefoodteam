import {getRecipes} from "./recipes.js"

/*goelocation*/

/*Function to get recipes with search from landing page*/
search_bar.addEventListener("submit", (event) => {
    event.preventDefault();

    getRecipes(search_term.value);

    search_form.reset();
})
    