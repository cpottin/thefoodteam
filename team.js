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
          <p class="card-text">
          David is a software engineer and former Navy Electrician's Mate. 
          Time he doesn't spend engrossed in Javascript documentation is usually spent in the Kitchen. 
          Where he uses For The Love of food as his main reference.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ibb.co/D1YvfGw/20221113-223759681-i-OS.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Shuofei Wu</h5>
          <p class="card-text">
          Shuofei is a software engineer and a national guard member. He loves to
          try different cuisines but is not good at cooking. He is going to get recipes on this website
          to get more practice, just like his coding skills - more practice is needed.
          </p>
        </div>
      </div>`;
}
