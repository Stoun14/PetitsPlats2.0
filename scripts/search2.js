const searchInput = document.getElementById('searchBar');

searchInput.addEventListener('input', function(event) {
    const searchTerm = searchInput.value;
    while (searchTerm.length >= 3) {
        tri(searchTerm);    
    }
})

function tri(inputTerm) {
    let result = [];
    const recipesList = document.getElementById('recipesList');
    
    recipes.forEach(recipe => {
        const term = inputTerm;
        const title = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients;

        if (title.includes(term)) {
            result.push(recipe.name);
        } else if (description.includes(term)) {
            result.push(recipe.name);
        } else {
            ingredients.forEach(item => {
                const ingredient = item.ingredient.toLowerCase();
                if (ingredient.includes(term)) {
                    result.push(recipe.name);
                }
            })
        }        
    })

    recipesList.innerHTML = '';
    result.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        recipesList.appendChild(li);
    });
}

function validInput(event) {
    let keyCode = event.which ? event.which : event.keyCode;
    const char = String.fromCharCode(keyCode);
    const regex = /^[a-z ]$/;

    if (!regex.test(char)) {
        event.preventDefault();
    }
}