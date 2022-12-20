export function getTeamInfo() {
  card_deck.innerHTML = "";
  card_deck.innerHTML += `
        <div class="card">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1582391123539-3b4fec0c2232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjaGVlc2VjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Cindy Pottin</h5>
          <p class="card-text">
            Cindy is a software engineer and a military spouse. She loves to
            bake and make desserts. One of her favorite things to bake is
            cheesecake.
          </p>
        </div>
      </div>
      <div id="cards_container_below_search" class="card">
        <img
          class="card-img-top"
          src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">David Rodrigues</h5>
          <p class="card-text"></p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://spoonacular.com/recipeImages/73420-312x231.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Shuofei Wu</h5>
          <p class="card-text"></p>
        </div>
      </div>`;
}
