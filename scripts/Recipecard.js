function getrecipeCard() {
    const recipeCard = `
    <div class="card">
    <img src="/assets/images/${image}" class="recipeImg card-img-top" alt="">
    <div class="recipeCardBody card-body">
      <h4 class="recipeTitle card-title">${name}</h4>
      <h5>recette</h5>
      <p class="recipe card-text">
        ${description}
      </p>
      <h5>ingrédients</h5>
      <ul class="ingredientsList">
        <li class="recipeIngredient">
            <h6 class="ingredient"></h6>
            <p class="quantity"></p>
        </li>
        <li class="recipeIngredient">
            <h6 class="ingredient"></h6>
            <p class="quantity"></p>
        </li>
        <li class="recipeIngredient">

        </li> 
      </ul>
    </div>                
    </div>
    `;
}