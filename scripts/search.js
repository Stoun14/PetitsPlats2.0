const searchInput = document.getElementById('searchBar');
const ingredientsSelect = document.getElementById('ingredientsSelect');
const applianceSelect = document.getElementById('applianceSelect');
const utensilsSelect = document.getElementById('utensilsSelect');
// const recipesList = document.getElementById('recipesList');

searchInput.addEventListener('input', function(event) {
    const searchTerm = searchInput.value;
    const select = [ingredientsSelect, applianceSelect, utensilsSelect]

    if (searchTerm.length >= 3) {
        tri(searchTerm);
    }

    /* select.addEventListener('change', function() {

    }) */
})

function tri(inputTerm) {
    let result = [];    
    const term = inputTerm.toLowerCase();

    result = recipes
        .map((recipe, index) => indexListing(recipe, index, term))
        .filter(index => index !== -1);
    
        function indexListing(recipe, index, term) {
            const title = recipe.name.toLowerCase();
            const description = recipe.description.toLowerCase();
            const ingredients = recipe.ingredients;

            if (title.includes(term) || description.includes(term)) {
                return index;
            }
    
            if (ingredients.find(item => item.ingredient.toLowerCase().includes(term))) {
                return index;
            }
    
            return -1;
        }

    numberToRecipe(result);
}

function validInput(event) {
    let keyCode = event.which ? event.which : event.keyCode;
    const char = String.fromCharCode(keyCode);
    const regex = /^[a-z ]$/i;

    if (!regex.test(char)) {
        event.preventDefault();
    }
}

function numberToRecipe(list) {    
    let recipesList = [];
    let ingredientList = [];
    let applianceList = [];
    let ustensilsList = [];

    for (let i in list) {
        let recipeIngredients = recipes[i].ingredients;
        let recipeUstensils = recipes[i].ustensils;

        // Conversion du tableau des résultats en tableau des recettes
        recipesList.push(recipes[i]);

        // Remplissage de la liste des ingrédients
        for (let j in recipeIngredients) {
            if (!ingredientList.includes(recipeIngredients[j].ingredient.toLowerCase())) {
                ingredientList.push(recipeIngredients[j].ingredient.toLowerCase());
            }
        }

        // Remplissage de la liste des appareils
        if (!applianceList.includes(recipes[i].appliance.toLowerCase())) {
            applianceList.push(recipes[i].appliance.toLowerCase());
        }
        
        // Remplissage de la liste des ingrédients
        for (let k in recipeUstensils) {
            if (!ustensilsList.includes(recipeUstensils[k].toLowerCase())) {
                ustensilsList.push(recipeUstensils[k].toLowerCase());
            }
        }
    }
    console.log(ustensilsList);
    return (recipesList, ingredientList, applianceList, ustensilsList);
}