const searchInput = document.getElementById('searchBar');
const recipesList = document.getElementById('recipesList');

searchInput.addEventListener('input', function(event) {
    const searchTerm = searchInput.value;

    if (searchTerm.length >= 3) {
        tri(searchTerm);
    }

})

function tri(inputTerm) {
    let result = new Set();
    let index = 0;    
    const term = inputTerm.toLowerCase();    
    
    while (index < recipes.length) {
        const title = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients;

        console.log(title[index]);

        if (recipes[index].title.includes(term) || recipes[index].description.includes(term)) {
            const ingredient = item.ingredient.toLowerCase();
            if (ingredient.includes(term)) {
                result.add(recipe.name);
            }
        }
        index++;
    }

    recipesList.innerHTML = '';
    while (index < recipes.length) {
        const li = document.createElement('li');
        li.textContent = recipesList[index];
        recipesList.appendChild(li);
        index++;
    }

    searchTag(Array.from(result));
}

function validInput(event) {
    let keyCode = event.which ? event.which : event.keyCode;
    const char = String.fromCharCode(keyCode);
    const regex = /^[a-z ]$/i;

    if (!regex.test(char)) {
        event.preventDefault();
    }
}

function searchTag(list) {
    const searchIngredients = document.getElementById('searchIngredients');
    const ingredientsList = document.getElementById('ingredientsList');
    const searchAppliance = document.getElementById('searchAppliance');
    const appliancesList = document.getElementById('appliancesList');
    const searchUtensils = document.getElementById('searchUtensils');
    const utensilsList = document.getElementById('utensilsList');
    
    searchIngredients.addEventListener('input', function() {
        update(ingredientsList);
    })

    searchAppliance.addEventListener('input', function() {
        update(appliancesList);
    })

    searchUtensils.addEventListener('input', function() {
        update(utensilsList);
    })
    
    function update(tagList) {
        const query = this.value.toLowerCase();

        recipesList.innerHTML = '';
        while (index < recipes.length) {
            if (list[index].toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = item;
                recipesList.appendChild(li);
                index++;
            }
        };
    }
}