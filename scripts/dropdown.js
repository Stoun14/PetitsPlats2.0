function dropdown() {
    console.log("test");
    
    document.getElementById('searchInput').addEventListener('keyup', function() {
        let input = this.value.toLowerCase();
        let items = document.querySelectorAll('.dropdown-item');

        items.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            item.style.display = text.includes(input) ? '' : 'none';
        });
    });

    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.style.display = 'block';
        item.addEventListener('click', function() {
            document.getElementById('dropdownMenuButton').textContent = this.textContent;
        });
    });    
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

        tagList.innerHTML = '';
        list.forEach(item => {
            if (item.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = item;
                recipeList.appendChild(li);
            }
        });
    }
}